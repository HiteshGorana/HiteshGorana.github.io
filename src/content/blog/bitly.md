---
title: "Design a URL Shortener"
description: "Interview notes on short-code generation, redirects, caching, uniqueness, and scaling a Bitly-like service."
pubDate: 2026-05-07
tags: ["system-design", "shortener", "cache"]
draft: false
---

## The Problem

A URL shortener is mostly a read-scaling problem with a very small write path.

## Requirements

- Create a short URL from a long URL
- Redirect from short URL to original URL
- Optional custom aliases and expiration

## Core Idea

The short code must be globally unique. A global counter plus Base62 encoding is a simple and reliable way to generate it.

## Reads

Redirects should be fast. Cache the `shortCode -> originalUrl` mapping in Redis and fall back to the database on a miss.

## Writes

Writes are cheap, so a standard relational database is enough for persistence and metadata.

## Extra Features

Custom aliases and expiration can fit into the same table with conflict checks and TTL handling.

## Final Shape

The clean interview answer is: generate unique short codes with an atomic counter, store mappings in a database, cache redirects aggressively, and return `302` for redirects.
