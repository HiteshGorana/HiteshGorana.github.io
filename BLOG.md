# BLOG.md

This repo treats blog posts as Astro content collection entries in `src/content/blog/`.
Write posts so they teach one thing clearly, not as a dump of notes.

## Post Shape

- Start with frontmatter: `title`, `description`, `pubDate`, `tags`, and optional `draft`
- Use a single clear topic per post
- Prefer one concrete example over many disconnected examples
- End with a short takeaway or interview-ready summary

## Writing Style

- Lead with the problem and the mental model
- Explain the order of decisions before the implementation details
- Keep sections short and in a flow that builds understanding
- Use plain language for transitions, then add technical depth
- Avoid repeating the title in the body

## Code and Diagrams

- Use fenced code blocks for SQL, Python, and text flowcharts
- Keep code examples small and tied to the current step
- Use Mermaid for decision flows, process flows, and system diagrams
- Do not overload one post with too many diagrams

## Visual Rules

- The blog uses the same editorial paper style as the rest of the site
- Code blocks should be readable and integrated into the page, not dark terminal slabs
- Mermaid diagrams should support the explanation, not replace it

## Good Post Pattern

1. State the problem
2. Explain the mental model
3. Show one concrete example
4. Walk through the steps in order
5. Summarize the decision rule

## Good Defaults

- One post should usually answer one interview question or one practical engineering problem
- If the draft feels scattered, add a flow section before adding more content
- If the draft is short but clear, keep it short
- If the draft needs a diagram, add it only when it makes the idea easier to follow

