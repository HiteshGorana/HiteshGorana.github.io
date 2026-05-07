---
title: "Design a Distributed Rate Limiter"
description: "Interview notes on rate limiting algorithms, storage choices, consistency tradeoffs, and API placement."
pubDate: 2026-05-07
tags: ["system-design", "rate-limiting", "redis"]
draft: false
---

## Why This Problem Matters

A rate limiter is one of the first protection layers in a large system. It prevents abuse, protects backend services, and enforces fair usage.

The hard parts are the algorithm, atomicity, and availability.

## Clarify the Problem

Before designing anything, ask:

1. Is the limiter global or service-specific?
2. Is it per user, per IP, or per API key?
3. Do we need strong consistency or is slight over-counting acceptable?
4. What is the traffic scale?

## Requirements

Functional requirements:

- Identify a client
- Apply per-client or per-endpoint limits
- Return HTTP 429 when the limit is exceeded

Non-functional requirements:

- Very low latency overhead
- High availability
- High request throughput

## Where to Place It

The usual placement options are:

- API gateway
- Middleware in each service
- Dedicated rate limiter service

The practical answer is often gateway for global limits plus a dedicated limiter for finer-grained rules.

## Client Identification

Common identifiers:

- User ID from JWT
- IP address from `X-Forwarded-For`
- API key from `X-API-Key`

You can combine these for user-level, IP-level, endpoint-level, and global limits.

## Algorithms

### Fixed Window Counter

Simple and efficient, but it has the boundary burst problem.

### Sliding Window Log

Accurate, but memory-expensive because every request timestamp is stored.

### Sliding Window Counter

Good balance of accuracy, memory, and speed.

### Token Bucket

Usually the best interview answer. It allows bursts while preserving a sustained rate.

## Atomicity

If multiple nodes update the same bucket, the read-modify-write cycle must be atomic. Redis Lua scripts are a common solution because the entire script executes as one atomic operation.

## Final Answer

The best answer is usually: make the policy explicit, choose a low-latency algorithm, store counters in Redis or a similar fast store, and keep the limiter highly available even if some limits are slightly approximate.
