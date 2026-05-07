---
title: "What is Cassandra?"
description: "Interview notes on Cassandra's wide-column model, partitioning, consistency levels, write path, and schema design."
pubDate: 2026-05-07
tags: ["system-design", "cassandra", "nosql"]
draft: false
---

## The Model

Cassandra is a distributed wide-column database built for high write throughput and high availability.

## Primary Key

The primary key is split into a partition key and a clustering key. The partition key decides where the data lives; the clustering key decides the order inside that partition.

## Consistency

Cassandra lets you choose consistency per query. `ONE`, `QUORUM`, and `ALL` are the standard levels to know.

## Write Path

Writes go through the commit log and memtable, then flush into SSTables. That is why Cassandra is fast for write-heavy workloads.

## Modeling

Model around queries, not normalized entity design. Cassandra is most useful when you know your access patterns up front.

## Final Shape

The clean interview answer is: Cassandra is a leaderless, AP-biased, wide-column store optimized for write-heavy workloads with clear query patterns.
