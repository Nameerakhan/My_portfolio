# Nameera Khan — Portfolio Build Plan
**AI/ML Systems Engineer · MS CS @ Texas Tech · Available May 2026 · OPT eligible**

---

## 00 — Visual Identity & Color System

### The Direction: Ice Blue
Minimal, precise, engineered. Distinct from warm/earthy portfolios. Ice blue maps directly onto the brand: fast systems, clean architecture, measurable accuracy.

### Color Palette (CSS Variables)
```css
:root {
  --bg:           #F0F4F8;  /* page background — barely-blue white */
  --bg-card:      #E8EEF4;  /* project cards, stat tiles, skill groups */
  --accent:       #2B6CB0;  /* numbers, CTAs, availability dot, active nav */
  --accent-soft:  #BFD7ED;  /* tag pill backgrounds, borders, dividers */
  --accent-hover: #DEEAF5;  /* hover fills, alt card backgrounds */
  --ink:          #1A2332;  /* all headings and primary text */
  --ink-2:        #4A5568;  /* body copy, descriptions */
  --ink-3:        #8FA3B8;  /* labels, captions, mono tags */
  --border:       #C9D8E8;  /* all borders and card outlines */
}
```

### Typography
| Role | Font | Notes |
|------|------|-------|
| Display headline | `Syne Bold` or `DM Serif Display italic` | The big hero line — used once |
| Body copy | `DM Sans weight 300` | Lightweight, airy |
| Labels & tags | `DM Mono` or `JetBrains Mono` | Tech stack tags, section numbers |
| Stat numbers | `Syne Bold` | The `<100ms`, `85–95%`, `30%+` numbers |

Google Fonts import:
```
Syne:wght@400;700
DM+Sans:wght@300;400;500
DM+Mono:wght@300;400
```

### Design Rules (Non-negotiable)
- **Background:** #F0F4F8 — whisper of ice, never pure white
- **Accent:** #2B6CB0 — touches only numbers, CTAs, nav hover, availability dot. Never used as area fill
- **No decorative gradients, blobs, or abstract shapes** — color is carried by numbers only
- **Card borders:** 1px solid #C9D8E8 on all cards — defines sections without shadows
- **White space:** generous — more padding than you think you need
- **Motion:** subtle only — border-color transitions on hover, accent underline on nav. No bounce animations
- **Mobile:** single column at 768px, stat tiles wrap 2×2, nav collapses to hamburger

---

## 01 — Positioning

### Hero Tagline
> "I engineer AI systems that are fast, measurable, and production-ready."

### Title Line
```
AI/ML Systems Engineer · MS CS @ Texas Tech · OPT · May 2026
```

### Availability Badge
```
🔵 Available · Full-time roles · May 2026 · OPT eligible
```
Style: accent blue dot (#2B6CB0) + soft blue background (#DEEAF5). Visible on page load, never buried.

---

## 02 — Page Structure

Build sections in this exact order:

| # | Section | Key content |
|---|---------|-------------|
| 1 | Hero | Availability badge · positioning line · 4-stat tile grid · two CTAs |
| 2 | Projects | 4 cards — NetSec (featured full-width dark) + 3 standard · status badges · metrics |
| 3 | Experience | Left: period + company / Right: role title + 1–2 impact bullets |
| 4 | Skills | 6-category tag grid — no prose, tags only |
| 5 | Contact | Email · LinkedIn · GitHub · CTA line for recruiters |

---

## 03 — Project Cards

**Rule:** Every card = status badge → title → subtitle → description → metrics → tech tags

### Project Priority & Status

| # | Project | Status | Why this slot |
|---|---------|--------|---------------|
| 01 | NetSec Arcade | `Live` · FEATURED (full-width dark card) | Strongest technical showcase. Hard latency/accuracy/concurrency numbers. Built under 3-day deadline. |
| 02 | AI vs Human Text Detection | `Applied ML` | ML eval depth — 6+ models, systematic comparison, real-time inference. Senior thinking signal. |
| 03 | FLOW | `In Development` | Solo SaaS from scratch — proves full-stack capability. Show it like Salish shows RankPilot. |
| 04 | Modular Visual Localization | `Research` | CV + optimization depth. Shows ML breadth beyond LLMs. |

### Featured Card (NetSec Arcade) — Dark Background
- Background: `var(--ink)` (#1A2332)
- Text: white / rgba(white, 0.65) for secondary
- Stat numbers: #BFD7ED (soft blue on dark)
- Layout: two-column on desktop, single on mobile

### Standard Card
- Background: `var(--bg-card)` (#E8EEF4)
- Border: 1px solid `var(--border)`
- Hover: `translateY(-3px)` + subtle box-shadow

---

## 04 — Copy Bank (Use word-for-word)

### Hero Subtext
```
Fast pipelines. Rigorous evals. Backends that hold under load.
MS Computer Science at Texas Tech (GPA 3.8), building at the intersection 
of applied AI and production systems — from sub-100ms RAG to concurrent 
async inference at scale.
```

### 01 — NetSec Arcade
```
End-to-end RAG system for a cybersecurity learning platform, built under a 
3-day deadline. Optimized retrieval from scratch — took latency from ~400ms 
to under 100ms over 1,000+ indexed chunks. Designed an AI grading pipeline 
using embedding-based semantic comparison, achieving 85–95% agreement with 
human graders without fine-tuning. Async FastAPI inference with Redis caching 
and SSE streaming handles 30+ concurrent tasks with zero blocking.
```
**Metrics to show:** `<100ms` · `85–95%` · `1,000+ chunks` · `30+ concurrent tasks`
**Tags:** RAG · FastAPI · Redis · SSE Streaming · Embeddings · OpenAI API · Python

### 02 — AI vs Human Text Detection
```
Systematic evaluation of 6+ ML/DL models — fine-tuned classifiers, 
embedding-based approaches, and ensemble methods — for detecting AI-generated 
text. Deployed a real-time inference service with embedding-based feature 
extraction and per-prediction confidence scoring. High-80% validation accuracy 
on an adversarial classification problem.
```
**Metrics to show:** `6+ models` · `High-80% val accuracy`
**Tags:** PyTorch · Hugging Face · Embeddings · Model Eval · Python

### 03 — FLOW
```
Solo-built AI life optimizer targeting professionals aged 20–40. 60-second 
morning check-in → AI-generated 4-block day plan → evening feedback loop, 
tracking Energy & Body, Mental Space, and Meaningful Connections. 
Full-stack: Next.js 14, Supabase, gpt-4o, Tailwind. Building in public.
```
**Tags:** Next.js 14 · Supabase · OpenAI API · TypeScript · Tailwind

### 04 — Modular Visual Localization
```
Modular visual odometry pipeline over KITTI sequences. 99% convergence 
stability in sparse Jacobian optimization. Reduced trajectory drift through 
pose-graph optimization and smoothing. Demonstrates CV and numerical 
optimization depth beyond LLM work.
```
**Metrics to show:** `99% convergence` · `KITTI dataset`
**Tags:** Python · OpenCV · NumPy · Pose-Graph Optimization

---

## 05 — Experience Section

Layout: two-column — left (period + company, mono font) / right (role + impact bullets)

| Company | Period | Role | Lead with |
|---------|--------|------|-----------|
| Rakuten Symphony | Jul 2023 – Jul 2024 | Software Engineer | 30% faster incident detection · 20% MTTR reduction |
| Texas Tech — WCOE | Aug 2024 – Jun 2025 | Graduate Research Assistant | 30%+ iteration speed improvement · async backend teams |
| Cylsys Software | Feb 2022 – Apr 2022 | Software Engineering Intern | 25%+ reduction in repeated operations |

---

## 06 — Skills Grid

6 categories, tag format only — no prose, no bullet points.

| Category | Tags |
|----------|------|
| Applied AI & ML | LLMs · RAG Systems · Agentic AI · NLP · Model Evaluation · Semantic Search · Anomaly Detection |
| ML Frameworks | PyTorch · LangChain · OpenAI API · Hugging Face · Vector Databases |
| Backend & Systems | FastAPI · REST APIs · Async/Concurrent Systems · Redis · Kubernetes · Microservices |
| Languages | Python · C++ · SQL · TypeScript |
| Infrastructure | Docker · Git/GitHub · Linux · Vercel · Supabase |
| Frontend | Next.js 14 · React · Tailwind CSS · TypeScript |

---

## 07 — Contact Section

```
Email:    nameerakhan1105@gmail.com
LinkedIn: linkedin.com/in/khan-nameera
GitHub:   [your github URL]
```

CTA line:
```
"Building something with AI? Let's talk. Open to ML/AI engineering roles — May 2026."
```

---

## 08 — Tech Stack (Building With)

| Decision | Choice |
|----------|--------|
| Framework | Next.js 14 App Router + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Hosting | Vercel (free tier) |
| Domain | nameerakhan.dev or nameera.dev |
| Contact form | Resend or Formspree — no backend needed |
| Analytics | Vercel Analytics (free) |

---

## 09 — Build Checklist

Work through these one at a time. Verify each before moving on.

- [ ] **Step 1** — Init Next.js 14 project → deployed to Vercel at .vercel.app URL
- [ ] **Step 2** — Tailwind config + CSS variables + Google Fonts loaded
- [ ] **Step 3** — Nav + layout shell (sticky, name left, links center, CTA right)
- [ ] **Step 4** — Hero section (tagline, availability badge, subtext, stat grid, 2 CTAs)
- [ ] **Step 5** — Projects section (4 cards, NetSec featured full-width, all metrics + tags)
- [ ] **Step 6** — Experience section (3 roles, impact numbers leading each)
- [ ] **Step 7** — Skills grid (6 categories, all tags)
- [ ] **Step 8** — Contact footer (email, LinkedIn, GitHub, CTA line)
- [ ] **Step 9** — Responsive pass (mobile single column, stat tiles 2×2, nav collapses)
- [ ] **Step 10** — Polish (hover states, border transitions, smooth scrolling)
- [ ] **Step 11** — Custom domain (optional for v1)
- [ ] **Step 12** — LinkedIn Featured section updated with portfolio URL

---

## 10 — Claude Code Session Template

Paste this at the start of every Claude Code session:

```
Project: Nameera Khan Portfolio
Stack: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui
Reference: PORTFOLIO_PLAN.md (in project root) — read this first
Design tokens: defined in globals.css under :root
Current step: [STEP NUMBER AND NAME]
Rule: one step at a time, verify before proceeding

Task: [describe exactly what to build]
```