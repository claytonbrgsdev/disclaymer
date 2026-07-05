---
goal: Portfolio website for Disclaymer (two full-stack devs) showcasing shipped side projects and providing a contact channel.
owner: operator
lead: disclaymer-lead
status: draft
next: Decide whether GitHub Pages (custom domain www.disclaymer.com) or the VPS Dokploy nginx deploy (disclaymer-test.grooveops.dev) is canonical, then retire the other path
decisions_needed:
  - question: Two live deploy paths exist (GH Pages via Actions, custom domain www.disclaymer.com + VPS Dokploy nginx at disclaymer-test.grooveops.dev) — which is canonical?
    context: RUNTIME.md documents the VPS path as authoritative and the "-test" subdomain suggests it's a staging mirror, but README/DEPLOYMENT.md still describe GH Pages as the production deploy target with the real custom domain attached.
  - question: Is the project list (ASA Player, 3D Product Showcase, Medication Cycles Tracker, Music Organizer, etc.) still current, or are there newer shipped projects to add / stale ones to retire?
    context: All listed projects are tagged "2025"; no commits touching app/page.tsx's project list appear in recent history — content freshness is an operator call, not something to infer from code.
blocked_by: []
---

## Open tasks

- [ ] Confirm canonical deploy path (GH Pages custom domain vs VPS Dokploy) and remove/disable the other [T-001]
- [ ] Audit `projects` array in `app/page.tsx` for stale entries or missing recent work #autonomous-safe [T-002]
- [ ] Remove or gitignore `dev.log` (currently tracked, looks like a leftover local dev artifact) #autonomous-safe [T-003]
- [ ] Verify contact section (per commit 2221a04 "Replace personal emails with professional contact") points to a monitored address [T-004]

## Path forward

The site is a stable, low-churn portfolio page — most recent commits are deploy plumbing (Dockerfile/nginx for VPS) rather than content changes.
It shares the same dual-deploy pattern (legacy GH Pages + newer VPS Dokploy) seen in the ddd repo, suggesting a portfolio-wide cleanup once the operator picks one deploy standard for these static/export sites.
No security or correctness issues surfaced.
The main value-add going forward is content freshness (project list) and collapsing deploy redundancy, both of which are operator calls rather than autonomous work.
