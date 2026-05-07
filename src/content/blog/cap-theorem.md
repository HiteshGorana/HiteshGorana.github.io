---
title: "CAP Theorem for System Design Interviews"
description: "Interview notes on consistency, availability, partition tolerance, and how to choose per operation."
pubDate: 2026-05-07
tags: ["system-design", "consistency", "distributed-systems"]
draft: false
---

## The Core Tradeoff

In distributed systems, partitions are unavoidable. That means the real choice is usually consistency versus availability.

## The Three Properties

- Consistency: reads return the latest write
- Availability: requests keep getting responses
- Partition tolerance: the system keeps working through network failure

## Operation-Level Thinking

A single product can use different consistency models for different operations.

- Booking a seat needs strong consistency
- Showing an event page can tolerate staleness

## Common Models

Know the basic spectrum:

- Strong consistency
- Causal consistency
- Read-your-own-writes
- Eventual consistency

## PACELC

CAP only covers partitions. PACELC adds the everyday tradeoff between latency and consistency even when the network is healthy.

## Final Shape

The clean interview answer is: explain the C vs A tradeoff per operation, not per system, and choose the weakest model that still protects the product rule.
