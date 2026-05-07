# DESIGN.md

This document defines the new design direction for the full app. The goal is to move the site toward a Kami-style editorial identity: warm, restrained, high-contrast, and document-like, while still feeling like a modern personal portfolio.

## 1. Design Goal

- Make the site feel like a crafted paper object, not a generic startup landing page.
- Treat the app as a portfolio document with sections, hierarchy, rhythm, and margin discipline.
- Keep the content highly scannable for recruiters, collaborators, and technical visitors.
- Preserve the single-page structure, but elevate the presentation across every section.

## 2. Kami Direction

Kami’s visual language should guide the redesign:

- Warm parchment base instead of pure dark UI black
- Ink-blue as the primary accent
- Serif-led hierarchy for titles and section labels
- Calm, editorial spacing with strong baseline rhythm
- Minimal chrome and fewer decorative UI tricks

The aim is not to copy a PDF template directly. The site should borrow Kami’s tone and page discipline, then adapt it to an interactive web experience.

## 3. Design Principles

### Editorial first

- The page should read like a well-designed profile sheet.
- Headings, metadata, and content blocks must feel deliberately composed.
- Every section should have a clear visual job.

### Quiet confidence

- Avoid loud gradients, neon glow, or “tech showcase” styling.
- Let typography, spacing, and contrast do most of the work.
- One accent color is enough.

### High trust

- The content must feel credible and easy to verify.
- Quantified claims should be visible and not buried.
- Visual polish should never hide the actual information.

### Lightweight motion

- Motion should support reading, not compete with it.
- Use subtle transitions, not animated spectacle.
- If a motion does not improve clarity, remove it.

## 4. Overall Tone

The app should feel:

- calm, not flashy
- deliberate, not busy
- personal, not generic
- technical, not cold
- polished, not overdesigned

The design should suggest a person who cares about craft, systems, and written clarity.

## 5. Page Structure

Keep the current single-page flow, but redesign it as a sequence of editorial panels:

1. Hero introduction
2. Experience narrative
3. Selected projects
4. Skills matrix
5. Interests / research themes
6. Education and awards
7. Contact / footer

Each section should feel like a page in a dossier, with enough whitespace to breathe and enough density to stay informative.

## 6. Visual System

### Canvas

- Use a warm parchment or paper-like background.
- Avoid flat white-only or pure black-only surfaces.
- Build subtle depth with layered surfaces and soft borders.

### Accent

- Ink-blue is the primary accent.
- Use it for links, active states, section markers, and small emphasis points.
- Keep accent usage disciplined.

### Surfaces

- Cards should feel like paper slips or editorial panels.
- Borders should be light and intentional.
- Shadows should be soft, not material-design heavy.

### Contrast

- Text contrast must remain high enough for long-form reading.
- Metadata can be muted, but never illegible.
- The design should work in both light and dark variants if both are supported.

## 7. Typography

The type system should be a core part of the redesign.

### Primary text

- Use a serif-forward choice for headings and section titles.
- Use a clean, readable body face for long-form content.

### Hierarchy

- Name and section titles should carry the strongest typographic weight.
- Job titles and project names should stand out above metadata.
- Supporting labels should be smaller, quieter, and more compact.

### Rhythm

- Use tighter heading tracking.
- Use generous line height for paragraphs and summaries.
- Keep list items compact and readable.

### Rules

- Avoid geometric display fonts.
- Avoid all-caps as a default style.
- Avoid switching fonts too often.
- If one font can do the job cleanly, use one font family consistently.

## 8. Color Rules

The palette should be narrow and disciplined:

- `paper` for the base canvas
- `ink` for body text
- `muted ink` for secondary copy
- `blue` for links and emphasis
- `soft border` for separation

Rules:

- No rainbow accent system.
- No purple bias.
- No harsh neon gradients.
- No random color coding unless it communicates meaning.

If a section needs distinction, use spacing, border treatment, or typographic weight before adding color.

## 9. Layout Rules by Section

### Hero

- The hero should introduce identity, role, location, and links quickly.
- Give the name typographic priority.
- Include one strong visual motif only, such as a terminal, a document card, or a manuscript panel.
- The hero should feel like the cover page of a professional dossier.

### Experience

- Treat work history as the primary narrative.
- Use a vertical timeline or stacked article layout.
- Each job block should include role, company, date range, location, and 3-6 concise outcome bullets.
- Bullets must read like proof, not marketing copy.

### Projects

- Projects should be arranged as editorial cards or compact feature blocks.
- Each project needs a name, short summary, and stack.
- External links should be visible but not dominate the card.
- Prefer a clean grid that collapses naturally on mobile.

### Skills

- Skills should be grouped into categories.
- Present keywords as chips, tags, or compact list items.
- Do not turn the section into a wall of badges.

### Interests

- This section should reflect research themes and technical taste.
- Keep it quieter than experience and projects.
- The point is to show focus, not breadth for its own sake.

### Education and Awards

- Use these as supporting credibility sections.
- Keep them readable, but lighter than the main career story.
- Avoid over-emphasizing them visually.

### Footer / Contact

- Keep contact simple and easy to find.
- The footer should close the page cleanly without adding visual noise.

## 10. Component Rules

### Header

- Keep navigation simple and compact.
- Use the header as a guide, not a billboard.
- If a sticky header exists, it should feel like a reading aid.

### Cards

- Cards should have one clear purpose each.
- Use consistent radius, border, and padding.
- Hover states should be subtle and informative.

### Chips and tags

- Use for skills, tools, or themes only.
- Keep them compact and readable.
- Do not let chips become the primary visual language.

### Buttons and links

- Links should look intentional, not browser-default.
- Buttons should be secondary to content.
- Avoid oversized CTA styling unless it is truly needed.

## 11. Motion Rules

Motion should be restrained and useful:

- fade in sections on scroll is acceptable
- gentle hover lift is acceptable
- smooth anchor scrolling is acceptable
- typewriter effects should be used sparingly

Avoid:

- looping decorative motion
- large parallax systems
- flashy entrance animations
- effects that make the page feel like a demo

## 12. Responsive Rules

The redesign must stay strong on smaller screens.

- The hero must collapse cleanly into a vertical stack.
- Grids should become one-column layouts where needed.
- Timeline items should remain readable without dense side-by-side compression.
- Typography should scale without forcing awkward line breaks.
- Touch targets must remain comfortable.

Mobile should feel like a thoughtfully condensed reading experience, not a compromised version of desktop.

## 13. Content Rules

The design depends on strong content discipline:

- Keep resume entries specific and quantified.
- Preserve real employer names, project names, and result metrics.
- Do not add decorative filler text.
- Do not exaggerate claims just to make layouts look balanced.
- If content is sparse, use whitespace and hierarchy rather than inventing more material.

## 14. Implementation Constraints

- Preserve the Astro single-page structure.
- Keep the app static-first and lightweight.
- Favor token-based styling over hardcoded one-off values.
- Reuse section patterns where possible.
- Avoid introducing a full design system unless the site actually needs it.

## 15. Success Criteria

The redesign is successful when:

- the site feels like a crafted portfolio document
- the name and role are immediately clear
- experience and projects are easy to scan in seconds
- the palette and type system feel intentional and memorable
- the app still loads fast and remains simple to maintain

## 16. Non-Goals

- No flashy SaaS landing page treatment
- No cyberpunk or neon-heavy palette
- No cluttered multi-font experiment
- No heavy animation system
- No content inflation to fill space

This design should feel like Kami translated into a personal web presence: composed, readable, and quietly confident.

