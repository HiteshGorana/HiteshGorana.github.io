---
title: "API Design for System Design Interviews"
description: "Interview notes on REST, GraphQL, gRPC, pagination, versioning, and auth basics."
pubDate: 2026-05-07
tags: ["system-design", "api", "rest"]
draft: false
---

## The Default

Use REST for public-facing APIs unless the problem clearly calls for something else.

## REST Basics

- Model resources as nouns
- Use plural paths
- Choose the HTTP method that matches the action

Idempotency matters, especially for retries on create operations.

## GraphQL

GraphQL is useful when different clients need different shapes of data. The main pitfall is the N+1 query problem, so batching is important.

## gRPC

Use gRPC for internal service-to-service communication when performance and type safety matter more than browser accessibility.

## Pagination

Always paginate large responses. Cursor-based pagination is usually the safest choice for real-time or high-write datasets.

## Versioning and Security

Version URLs when needed, and distinguish authentication from authorization clearly in the API design.

## Final Shape

The clean interview answer is: REST by default, GraphQL only for flexible clients, gRPC for internal calls, and always include pagination and versioning where the API needs it.
