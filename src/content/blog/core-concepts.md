---
title: "System Design Core Concepts"
description: "A compact interview guide to scaling, CAP, locking, indexing, communication, security, and monitoring."
pubDate: 2026-05-07
tags: ["system-design", "interview-notes", "distributed-systems"]
draft: false
---

## 1. Scaling

The first question in most system design interviews is not how to add more machines. It is whether the current design is even worth scaling horizontally.

Two scaling models matter:

| | Vertical | Horizontal |
|---|---|---|
| Approach | Bigger machine | More machines |
| Complexity | Low | High |
| When to use | Simplicity still matters | The single node has hit its limit |

For synchronous work, use a load balancer. For asynchronous work, use a queue like Kafka or SQS. For distributed placement, consistent hashing reduces reshuffling when nodes change.

Avoid the scatter-gather pattern unless you really need it. Fanning out to many nodes and merging the result later increases tail latency and makes failures harder to contain.

## 2. CAP Theorem

In practice, partitions are unavoidable. That means the useful choice is usually consistency vs. availability.

- Availability: every request gets a response, even if the data may be briefly stale
- Consistency: every node sees the same value, even if some requests fail during a partition

Use strong consistency for inventory, bookings, and banking. Use eventual consistency when stale reads are acceptable for product catalogs, feeds, and descriptions.

## 3. Locking

Locks are useful, but only if you keep them narrow and short-lived.

Three questions matter:

1. What is the right granularity?
2. How long is the lock held?
3. Can optimistic concurrency avoid the lock entirely?

Pessimistic locking is safer under high contention. Optimistic concurrency is usually better when conflicts are rare and retries are cheap.

## 4. Indexing

Standard B-tree indexes support equality, range, and sorting, but they slow down writes. Do not over-index.

Useful specialized indexes include:

- Full-text indexes for search
- Geospatial indexes for nearby queries
- Composite indexes for multi-column filters

For search synchronization, a common pattern is DB writes -> binlog polling -> Kafka -> search writer. That is usually safer than dual-writing from the application.

## 5. Communication Protocols

Pick the protocol based on direction and connection shape:

- HTTP/REST for stateless request/response APIs
- Long polling for simple near-real-time updates
- WebSockets for bidirectional interactive systems
- SSE for one-way live feeds and dashboards
- gRPC for internal service-to-service calls

If you choose WebSockets, address connection state explicitly. A broker between the gateway and backend services keeps the backend stateless.

## 6. Security

Security should be part of the first answer, not an afterthought.

- Authentication with JWT or OAuth
- Authorization with RBAC or ACLs
- TLS everywhere in transit
- Encryption at rest for sensitive data
- Secrets in a manager, not in code
- Password hashing with bcrypt

## 7. Monitoring

A design feels incomplete without observability.

- Infrastructure metrics: CPU, memory, disk, network
- Service metrics: request rate, error rate, p95/p99 latency
- Business metrics: orders per minute, messages per second

Set SLOs and alert on them. Average latency is not enough.

## Senior Signal

The senior answer is not "use more servers." It is explaining the tradeoffs between scaling, distribution, consistency, and operability in the right order.
