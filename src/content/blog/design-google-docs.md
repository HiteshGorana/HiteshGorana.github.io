---
title: "Design Google Docs"
description: "Interview notes for a real-time collaborative editor using WebSockets, operational transformation, and durable operation logs."
pubDate: 2026-05-07
tags: ["system-design", "realtime", "collaboration"]
draft: false
---

## The Problem

This is not a storage problem first. It is a concurrency problem: multiple users editing the same document at the same time and expecting their changes to converge.

## Requirements

- Create, view, and edit documents
- Real-time collaboration
- Durable edits
- Small collaborator counts per document

## Core Entities

- User
- Document metadata
- Operation log

Document metadata fits well in PostgreSQL. The document body can be stored as a blob snapshot. The append-only operation log works well in a write-heavy store such as Cassandra.

## API Shape

- `POST /docs`
- `GET /docs/:id`
- `PATCH /docs/:id/operations` via WebSocket
- `DELETE /docs/:id`

WebSocket is the correct transport because the server must both receive edits and push transformed operations to other collaborators.

## Why Full-Document Writes Fail

Sending the entire document on every keystroke is wasteful and unsafe. If two users write full snapshots at the same time, one edit can simply overwrite the other.

## Operational Transformation

Operational transformation is the chosen approach here. The server receives operations in order, transforms later operations against earlier ones, and then broadcasts the transformed operations.

That gives you a central ordering authority and a clean convergence model for a small group of collaborators.

## CRDTs

CRDTs are worth knowing as the alternative. They remove the need for a central ordering server and work better for offline-first or peer-to-peer systems, but they usually carry more memory overhead and implementation complexity.

## WebSocket Scaling

Because WebSockets are stateful, the system needs a way to route messages across servers. A pub/sub layer between the WebSocket servers is the usual answer.

## Final Shape

The clean interview answer is: use WebSockets for live editing, store durable operations in an append-only log, use OT for convergence, and keep document metadata separate from the document body.
