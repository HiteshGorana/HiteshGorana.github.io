---
title: "Design Facebook's News Feed"
description: "Interview notes for a chronological feed built around fan-out on write, fan-out on read, and a hybrid celebrity strategy."
pubDate: 2026-05-07
tags: ["system-design", "feed", "fanout"]
draft: false
---

## The Problem

News Feed sits between two scaling forces: users follow many people, and some users have huge follower counts. That makes both feed reading and post creation hard.

## Requirements

- Create posts
- Follow and unfollow users
- View a chronological feed
- Paginate the feed

## Core Tables

- Users
- Posts
- Follows
- Feed entries

The feed table should store post IDs, not full post bodies.

## Naive Design

The simple join-based feed works early on, but it collapses when a user follows thousands of accounts.

## Hybrid Fan-Out

The real answer is hybrid:

- Fan-out on write for normal accounts
- Fan-out on read for celebrity accounts

That keeps normal feed reads fast without exploding write cost for huge accounts.

## Cursor Pagination

Use a cursor, usually based on timestamp, instead of offset pagination. It is more stable and avoids scan overhead.

## Final Shape

The clean interview answer is: precompute feed entries for normal users, pull celebrity content at read time, and keep pagination cursor-based.
