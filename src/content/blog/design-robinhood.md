---
title: "Design Robinhood"
description: "Interview notes for live stock pricing, order lifecycle management, exchange connectivity, and low-latency fan-out."
pubDate: 2026-05-07
tags: ["system-design", "trading", "realtime"]
draft: false
---

## The Problem

This is really two systems: a live market-data fan-out system and a high-consistency order management system.

## Requirements

- See live prices
- Create and cancel orders

## Core Entities

- User
- Symbol
- Order

## Live Prices

One exchange feed should be multiplexed to many users through a streaming layer and a pub/sub fan-out path.

SSE is a strong fit for one-way price updates.

## Orders

Order placement should be stored durably before it is sent outward. That avoids losing the intent if a downstream call fails.

## Exchange Connectivity

Keep exchange connections centralized and fixed. The service should not open a separate long-lived connection from every instance.

## Final Shape

The clean interview answer is: stream market data through a shared fan-out layer, keep order state strongly consistent, and separate internal order records from exchange identifiers.
