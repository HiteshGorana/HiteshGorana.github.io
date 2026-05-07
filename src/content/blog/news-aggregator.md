---
title: "Design a News Aggregator"
description: "Interview notes for a Google News style feed with publisher polling, cursor pagination, regional caches, and article metadata."
pubDate: 2026-05-07
tags: ["system-design", "news", "feeds"]
draft: false
---

## The Problem

A news aggregator is a feed delivery system. The product is about collecting article metadata from many publishers and serving it quickly by region.

## Requirements

- Aggregate articles from many publishers
- Paginate the feed
- Redirect users to the publisher site on click

## Core Entities

- Article
- Publisher
- User region

Only metadata and redirect URLs belong in the system. The full article stays on the publisher's site.

## Ingestion and Read Paths

The architecture has two flows:

- Ingestion: poll publisher feeds, extract metadata, and store article records
- Read: serve the feed by region with a sorted query or cache hit

## Pagination

Cursor pagination is better than offset pagination because it avoids duplicates and skipped rows when new articles arrive between requests.

## Caching and Regional Delivery

Regional Redis caches make the feed fast enough for large traffic spikes. A short TTL is fine because slight staleness is acceptable for news.

## Final Shape

The clean interview answer is: poll publishers, store article metadata, serve a regional feed with cursor pagination, and use cache layers to keep latency low.
