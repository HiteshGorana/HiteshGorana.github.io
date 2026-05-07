---
title: "Consistent Hashing for System Design Interviews"
description: "Interview notes on hash rings, vnode balancing, minimal remapping, and where consistent hashing fits in real systems."
pubDate: 2026-05-07
tags: ["system-design", "hashing", "sharding"]
draft: false
---

## The Problem

Simple modulo hashing breaks whenever the node count changes. Nearly every key moves, which is disastrous for caches and sharded stores.

## The Ring

Consistent hashing places both keys and nodes on a circular ring. A key belongs to the first node clockwise from its hash position.

## Why It Helps

When you add or remove a node, only the keys in that node's segment move. That is a much smaller blast radius than modulo hashing.

## Virtual Nodes

Virtual nodes improve balance and reduce hot spots by giving each physical machine multiple positions on the ring.

## Where It Appears

You see consistent hashing in caches, distributed databases, message brokers, and CDNs.

## Final Shape

The clean interview answer is: use a ring, walk clockwise for ownership, and add vnodes so load spreads more evenly across the cluster.
