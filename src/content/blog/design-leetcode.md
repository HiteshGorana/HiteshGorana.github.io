---
title: "Design LeetCode"
description: "Interview notes for executing untrusted code safely with isolated workers, queues, and cached leaderboards."
pubDate: 2026-05-07
tags: ["system-design", "sandboxing", "queues"]
draft: false
---

## The Problem

This looks like CRUD until you notice the real challenge: the platform must run arbitrary user-submitted code safely and return results quickly.

## Requirements

- Browse problems
- Submit solutions
- Execute code securely
- Show a leaderboard

## Core Entities

- Problem
- Submission
- Leaderboard

## Submission Flow

Submissions should be queued and executed asynchronously by worker processes. The API should return a submission ID immediately.

## Security

Containers are the practical execution boundary here. The container must be locked down with filesystem, CPU, memory, timeout, network, and syscall restrictions.

## Leaderboard

Leaderboards can tolerate slight staleness, so caching them is fine.

## Final Shape

The clean interview answer is: store problems and submissions, queue code execution, run workers in hardened containers, and cache leaderboard reads.
