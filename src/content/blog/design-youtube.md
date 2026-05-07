---
title: "Design YouTube"
description: "Interview notes for a global video platform built around direct uploads, transcoding pipelines, manifests, and CDN delivery."
pubDate: 2026-05-07
tags: ["system-design", "video", "cdn"]
draft: false
---

## The Problem

YouTube is a video transport problem disguised as a product problem. The hard part is not storing metadata. It is moving huge video files efficiently, processing them into playable formats, and serving them globally with low latency.

## Requirements

- Upload videos
- Stream videos

## Core Entities

- User
- Video metadata
- Video segments
- Manifest files

Video metadata belongs in a horizontally scalable database. The actual video bytes belong in object storage.

## Upload Flow

The right pattern is direct upload to object storage through a presigned URL. That keeps large video files off the application servers.

## Streaming Flow

Streaming should use adaptive bitrate delivery. The client fetches a manifest, chooses a quality tier, and requests video segments from a CDN.

That is why HLS and DASH are the standard answers here.

## Transcoding Pipeline

Once a raw video lands in storage, it is split into segments and processed in parallel.

The important design point is segment-level fan-out. That makes the job parallelizable and shortens the wall-clock processing time a lot.

## CDN

The CDN is not optional. Without it, the origin becomes the bottleneck and the cost profile gets ugly very quickly.

## Final Shape

The clean interview answer is: direct upload to object storage, async transcoding into multiple formats, manifests for playback, and CDN delivery for every video segment.
