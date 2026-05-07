---
title: "How to Scale Writes"
description: "A practical write-scaling playbook: vertical scaling, sharding, queues, batching, and hot-key handling."
pubDate: 2026-05-07
tags: ["system-design", "scaling", "databases"]
draft: false
---

## The Core Mental Model

Write scaling means reducing throughput per component. You do that by spreading writes across shards, smoothing bursts through queues, or batching events into fewer operations.

The order matters:

1. Vertical scaling and database choice
2. Sharding and partitioning
3. Queues and load shedding
4. Batching and hierarchical aggregation

## Step 1: Vertical Scaling and DB Choice

Always exhaust the simple answer first. Writes are often limited by disk IO, CPU, or network bandwidth, and modern hardware goes further than most interview answers assume.

Choose the database for the write pattern:

| Database Type | Write Mechanism | Write Strength |
|---|---|---|
| PostgreSQL / MySQL | In-place B-tree updates | Good general-purpose writes |
| Cassandra | Append-only commit log | High write throughput |
| InfluxDB / TimescaleDB | Sequential time-series writes | Strong for time-based data |
| LevelDB | Log-structured storage | Fast append-heavy workloads |
| ClickHouse | Batched columnar writes | Good for analytics |

Fewer indexes mean faster writes. Foreign keys, triggers, and overly strict transactions also add cost.

## Step 2: Sharding and Partitioning

When one server cannot keep up, spread the writes.

Sharding key choice matters more than people expect. A bad key creates hot shards and wastes the rest of the cluster.

Good examples:

- Social posts by `user_id`
- Orders by `customer_id`
- IoT data by `device_id`

Bad examples:

- Posts by `timestamp`
- Orders by `product_id`
- Metrics by `metric_type`

If you need to re-shard, a gradual dual-write migration is the safest path:

1. Write to both old and new shards
2. Read from the new shard first
3. Backfill in the background
4. Stop writing to the old shard

## Step 3: Queues and Load Shedding

Queues absorb bursts. They trade immediate consistency for throughput and smoother load.

When the queue is full, shed load deliberately:

- Rate limit clients
- Prioritize critical writes
- Drop low-value work
- Push backpressure upstream

This is not acceptable for workflows that must be immediately readable, such as payments or inventory updates.

## Step 4: Batching and Aggregation

Batching is often the biggest gain for event-heavy systems.

Instead of writing 100,000 individual likes, accumulate them and write one aggregate update. That reduces write amplification dramatically.

Hot keys are the next problem. A viral post can overwhelm a single shard even when the rest of the system is healthy. Splitting keys into sub-keys is the simplest fix; dynamic splitting is more efficient but more complex.

For extreme fan-out, hierarchical aggregation reduces database pressure by letting leaf nodes batch locally before sending summaries upward.

## Final Shape

The best write-scaling answer is not one trick. It is a progression: make the current write path cheaper, distribute it carefully, absorb bursts, and batch repeated work whenever possible.
