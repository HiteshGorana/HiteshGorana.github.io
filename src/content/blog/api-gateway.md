---
title: "What is an API Gateway?"
description: "Interview notes on gateway routing, middleware, caching, scaling, and when to use a gateway at all."
pubDate: 2026-05-07
tags: ["system-design", "gateway", "microservices"]
draft: false
---

## The Role

An API gateway is the entry point for client traffic in a microservices architecture.

## What It Usually Handles

- Routing
- Authentication
- Rate limiting
- Response transformation

It should stay thin. Overloading the gateway with business logic makes it harder to reason about.

## Caching

Only cache stable, non-user-specific responses. The gateway is a good place for that when it can reduce backend pressure.

## Scaling

Gateways are stateless, so horizontal scaling is straightforward.

## When to Use It

Use it when a system has multiple backend services and needs a single front door. Skip it for simple monoliths.

## Final Shape

The clean interview answer is: use the gateway for routing and lightweight cross-cutting concerns, not as a place for core application logic.
