---
title: "Design Facebook Post Search"
description: "Interview notes for a custom inverted-index search system with hot/cold storage, ranking, and query-time intersection."
pubDate: 2026-05-07
tags: ["system-design", "search", "indexing"]
draft: false
---

## The Constraint

This problem is about building search infrastructure, not just using a search product. The key requirement is to build the inverted index yourself.

## Requirements

- Create and like posts
- Search by keyword
- Sort by recency or likes

## Core Idea

The inverted index maps each token to the list of posts that contain it. Searching is then a matter of looking up the relevant posting lists and intersecting them.

## Two Pipelines

The system needs both a write path and a read path.

- Write path: ingest posts, tokenize content, update the index
- Read path: search the hot index, fall back to cold storage, merge results, and fetch full posts

## Storage Strategy

Hot keywords should live in Redis sorted sets. Rare or historical keywords can be pushed to colder storage such as object storage.

That gives you fast reads for active terms without keeping everything in memory forever.

## Sorting

Recency and like-count sorting are separate concerns. Maintaining separate sorted sets per keyword avoids expensive query-time sorting.

## Final Shape

The clean interview answer is: build an inverted index, split ingestion from query serving, cache hot terms in Redis, tier cold terms out to cheaper storage, and keep ranking precomputed.
