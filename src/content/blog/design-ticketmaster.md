---
title: "Design a Ticket Booking Site"
description: "Interview notes for event browsing, seat reservation, booking consistency, caching, and virtual queues."
pubDate: 2026-05-07
tags: ["system-design", "booking", "consistency"]
draft: false
---

## The Problem

This is a booking system with a hard consistency requirement. The main risk is selling the same seat twice.

## Requirements

- View events and seat maps
- Search upcoming events
- Book tickets

## Core Entities

- Event
- Venue
- Performer
- Ticket
- Booking

## Booking Flow

The booking flow should be split into reserve and confirm. That gives the user a chance to hold the seat before paying.

## Reservation Strategy

The cleanest answer is a short-lived lock or reservation record with expiration. That avoids long-running database locks during checkout.

## Scaling Reads

Event pages should be cached aggressively because they are read heavily and change infrequently.

## Virtual Queue

For high-demand sales, a virtual queue protects the booking backend from a thundering herd.

## Final Shape

The clean interview answer is: cache the read path, reserve seats with expiration, confirm with payment, and use a queue for demand spikes.
