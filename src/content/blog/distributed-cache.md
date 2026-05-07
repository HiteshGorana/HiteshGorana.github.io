---
title: "Design a Distributed Cache"
description: "Interview notes for a Redis-like distributed cache with LRU eviction, consistent hashing, replication, and hot-key handling."
pubDate: 2026-05-07
tags: ["system-design", "cache", "redis"]
draft: false
---

## The Problem

A distributed cache is where a data structure question becomes a distributed systems question. You need fast reads, predictable eviction, and sharding that does not collapse when the cluster changes.

## Requirements

- `GET`, `SET`, and `DELETE`
- TTL per key
- LRU eviction

## Single-Node Core

The base data structure is a hash map plus a doubly linked list. That gives O(1) lookup and O(1) eviction order updates.

## Sharding

Naive modulo hashing breaks badly when nodes are added or removed. Consistent hashing is the standard answer because it remaps only a small fraction of keys when the cluster changes.

Virtual nodes help balance the ring more evenly across physical machines.

## Replication

Asynchronous replication is usually the right tradeoff for cache data. The cache is not the source of truth, so a small failure window is acceptable if it keeps latency low.

## Hot Keys

Hot keys are the real operational problem. A single key can dominate traffic and overwhelm one node even when the rest of the cluster is fine.

The answer is usually a mix of replication, key splitting, and careful read distribution.

## Final Shape

The clean interview answer is: build the single-node LRU first, shard with consistent hashing, replicate asynchronously, and plan for hot keys explicitly.
