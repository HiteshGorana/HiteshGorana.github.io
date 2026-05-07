---
title: "Design Facebook Live Comments"
description: "Interview notes for high-fanout live commenting with aggregation, async delivery, and low-latency state updates."
pubDate: 2026-05-07
tags: ["system-design", "realtime", "aggregation"]
draft: false
---

## The Problem

Live comments are a fan-out and aggregation problem. Many viewers want to post and see updates at nearly the same time.

## Requirements

- Send comments in real time
- See comment counts and live updates
- Handle a large concurrent audience

## Core Idea

The system needs a path for low-latency comment ingestion and a separate path for aggregating and broadcasting state changes.

## Architecture

The practical shape is:

- Client sends a comment
- Backend writes it durably
- Fan-out workers distribute updates
- Aggregation workers combine counts or other shared state

## Why This Matters

If every viewer forces a write to the same destination, the system falls over. Hierarchical aggregation or staged fan-out reduces the write pressure a lot.

## Final Shape

The clean interview answer is: accept comments quickly, batch or aggregate shared counters, and push updates through a fan-out layer instead of writing everything directly to the database.
