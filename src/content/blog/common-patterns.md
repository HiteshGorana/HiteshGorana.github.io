---
title: "System Design Interview Patterns"
description: "A practical pattern catalog for realtime updates, long-running tasks, contention, reads, writes, blobs, multi-step flows, and proximity search."
pubDate: 2026-05-07
tags: ["system-design", "patterns", "interview"]
draft: false
---

## Realtime Updates

Start with polling, move to long polling or SSE, and use WebSockets only when you need bidirectional persistent connections.

## Long-Running Tasks

Do not block the request path. Queue the job, return a job ID, and let a worker pool process it in the background.

## Contention

Use optimistic locking when contention is low, pessimistic locking when correctness under heavy contention matters more.

## Scaling Reads and Writes

Use layered caches, read replicas, CQRS, sharding, WAL, and batching as the problem demands.

## Large Blobs and Multi-Step Flows

Use presigned uploads for large files and sagas or workflow engines for multi-step processes that need retries and compensation.

## Final Shape

The clean interview answer is: recognize the pattern first, then choose the smallest mechanism that solves the specific bottleneck.
