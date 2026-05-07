---
title: "Design WhatsApp"
description: "Interview notes for a real-time messaging system with persistent connections, guaranteed delivery, inbox tracking, and media uploads."
pubDate: 2026-05-07
tags: ["system-design", "messaging", "realtime"]
draft: false
---

## Why It Is Hard

WhatsApp combines persistent bidirectional connections, offline delivery, and very low latency at huge scale. Each part is hard on its own.

## Requirements

- Real-time messages
- Group chats
- Offline message delivery
- Media messages

## Core Entities

- User
- Chat
- Chat participant
- Message
- Inbox
- Client

The key idea is to separate permanent message storage from temporary delivery tracking.

## API Shape

WebSockets fit best because the system needs bidirectional push and pull behavior.

## Message Flow

1. Store the message durably
2. Create inbox entries for each recipient
3. Push online recipients immediately
4. Delete inbox entries after ACK

That gives you both speed and eventual delivery.

## Cross-Server Delivery

A centralized connection registry can work, but Redis Pub/Sub is a better real-time fit here. Each chat server subscribes only to the users it currently hosts, and publishes messages to the relevant user channel.

## Media

Media should go to object storage first. The message should carry a reference, not the binary payload.

## Final Shape

The clean interview answer is: WebSockets for live delivery, a durable message store plus inbox for reliability, Redis Pub/Sub for routing, and object storage for media.
