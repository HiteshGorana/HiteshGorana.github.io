---
title: "System Design Core Concepts"
description: "A compact reference on scaling, CAP, locking, indexing, protocols, security, and monitoring."
pubDate: 2026-05-07
tags: ["system-design", "foundations", "distributed-systems"]
draft: false
---

## Scaling

Know when to stop scaling vertically and when horizontal distribution is justified.

## CAP

Use consistency for operations that cannot tolerate stale data, and availability where a stale response is still acceptable.

## Locking

Be explicit about granularity, duration, and whether optimistic concurrency is enough.

## Indexing and Protocols

Index around query patterns and choose the protocol that matches the communication shape.

## Security and Monitoring

Say auth, authz, encryption, secrets, and observability without being prompted.

## Final Shape

The clean interview answer is: explain the system in terms of tradeoffs, not technologies first.
