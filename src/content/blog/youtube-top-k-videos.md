---
title: "Design YouTube's Top-K Videos Feature"
description: "Interview notes for exact top-K ranking over huge view streams using sharded counters, heaps, snapshots, and time windows."
pubDate: 2026-05-07
tags: ["system-design", "ranking", "streaming"]
draft: false
---

## The Problem

This feature looks simple until you add the real constraints: exact counts, very high write throughput, and multiple fixed time windows.

## Requirements

- Top K videos by views
- Fixed windows: 1 hour, 1 day, 1 month, all-time
- Exact results
- Fresh within about a minute

## Core Idea

The base model is an in-memory counter plus a min-heap for each window. That gives fast top-K queries once the counts are updated.

## Scaling Writes

The view rate is high enough that one host is not enough. Sharding the counter service by video ID spreads the work across many nodes.

## Fault Tolerance

Instead of writing every view to a database, snapshot the in-memory state periodically and replay the log from Kafka after restart.

## Time Windows

Fixed time windows can be implemented by keeping rising and falling edges of the stream. The falling edge decrements old views as they expire from the window.

## Final Shape

The clean interview answer is: shard the counter state, keep top-K heaps per shard, snapshot for recovery, and use a stream-based expiration strategy for fixed windows.
