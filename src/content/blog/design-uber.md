---
title: "Design Uber"
description: "Interview notes for geospatial driver matching, location updates, locking, and low-latency ride dispatch."
pubDate: 2026-05-07
tags: ["system-design", "geo", "matching"]
draft: false
---

## The Problem

Uber is a matching and geospatial query system. The hardest part is tracking driver locations at high write volume and assigning a single driver to only one ride request at a time.

## Requirements

- Fare estimate
- Request a ride
- Match a nearby driver
- Accept or decline the request

## Core Entities

- Rider
- Driver
- Fare
- Ride
- Location

## Location Storage

Driver location updates belong in Redis with geospatial commands. That keeps writes fast and proximity queries practical.

## Matching

The ride matching service queries nearby available drivers, ranks them, and notifies the best candidate first.

## Locking

A distributed lock with TTL is the right way to prevent double assignment of the same driver.

## Final Shape

The clean interview answer is: store locations in Redis geospatial structures, match by proximity, lock drivers with TTL, and keep the ride state machine explicit.
