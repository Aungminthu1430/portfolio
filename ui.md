# UI Specification — Portfolio Website

User interface and feature spec for the portfolio app in `Frontend/`. A
single-page application built with **React + Vite (JavaScript)** using
**react-router-dom** for routing and **plain CSS**. The visual language follows
the **Midnight Syntax** design system (from `ui/midnight_syntax/DESIGN.md`) and
the Home/About/Projects mockups in the `ui/` folder.

The site belongs to **Aung Min Thu** — a **MERN Stack Developer** and
**fourth-year Computer Science student** at the **University of Computer
Studies, Mandalay** — and highlights a **12-hour hackathon** build.

## Tech Stack

| Concern    | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | React 19                                          |
| Build tool | Vite                                              |
| Routing    | react-router-dom (BrowserRouter)                 |
| Language   | JavaScript (`.jsx`)                              |
| Styling    | Plain CSS (`index.css` tokens, `App.css` layout) |
| Fonts      | Inter (sans) + JetBrains Mono (mono)             |
| Icons      | Material Symbols Outlined (Google Fonts)         |
| Linting    | oxlint                                            |

## Design System — "Midnight Syntax"

- **Aesthetic**: architectural dark mode evoking an IDE / terminal environment,
  with atmospheric glassmorphism and controlled electric accents.
- **Canvas**: `#051424` with layered radial glows and a faint SVG-style
  coordinate grid (`body::before`).
- **Surface tiers**: `#0d1c2d` → `#122131` → `#1c2b3c` → `#273647`.
- **Accents**: primary `#b7c4ff` / container `#6d8bff` / hover `#859eff`;
  tertiary cyan `#7bd0ff`; success `#34d399`.
- **Text**: headings `#d4e4fa`, body `#c4c5d6`, muted `#8e909f`.
- **Borders**: default `rgba(255,255,255,0.08)`, glowing focus
  `rgba(109,139,255,0.35)`.
- **Shape**: cards `12px`, controls `8px`, pills/tags fully rounded.
- **Motion**: 180–300ms transitions, hover lift + glow on interactive cards.
- All tokens are CSS variables in `src/index.css`.

Custom CSS classes: `.gradient-text`, `.terminal`, `.code-snippet`, `.tag`,
`.pill`, `.status-dot`, `.dot-pulse`, accent helper classes `.accent-primary`,
`.accent-secondary`, `.accent-tertiary`, `.accent-muted`, `.accent-success`.

## Routes

| Path        | Page     | Purpose                                             |
| ----------- | -------- | --------------------------------------------------- |
| `/`         | Home     | Hero, metrics, featured hackathon build, process    |
| `/about`    | About    | Bio, terminal card, skills tiers, timeline, contact |
| `/projects` | Projects | Showcase header, project grid, collaboration CTA    |
| `*`         | NotFound | Themed 404 with back-home CTA                       |

All routes render inside a shared `Layout` (`Navbar` + `Footer`).

## Navigation & Shell

- **Navbar** — glassmorphic sticky header (blur 16px, 64px tall), brand
  `Aung Min Thu`, active-aware links (Home / About / Projects), and a mono
  **"Open to internships"** status pill with a pulsing green dot.
- **Footer** — brand, dynamic copyright year, and social links (GitHub,
  LinkedIn, Email `aungtzy1430@gmail.com`) with Material Symbols icons.

## Pages

### Home (`/`)
1. **Hero** — two-column grid: left holds the pill eyebrow (pinging dot +
   "MERN Stack Developer"), gradient name in the display title, tagline, dual
   CTAs (View Projects / About Me), and a "Core Stack" badge cluster (MongoDB,
   Express.js, React, Node.js, JavaScript, Tailwind CSS); right shows the framed
   portrait (`/me.jpg`, 4:5 card with gradient border + glow) with an
   "Open to Internships" floating badge. Stacks to a single centered column on
   small screens.
2. **Metrics** — 3-up bento strip: Core Stack `MERN`, Hackathon `12 Hours`,
   Projects `2+ Built`, each with icon badge.
3. **Featured Preview** — section header ("Hackathon Build") + sprint status.
   Two-column showcase: terminal window with a MERN (`express`/`mongoose`) code
   snippet and a mesh visual with a "Shipped in 12 hours" overlay (left); the
   12-Hour Hackathon project category/date, description, highlights checklist,
   tech tags, and case-study/source actions (right).
4. **Engineering Process** — philosophy strip with lead copy and two cards
   (Learning by Building, MERN End-to-End).

### About (`/`)
1. **Editorial hero** — `SYS:PROFILE // ABOUT ME` eyebrow + `LOC: MANDALAY,
   MYANMAR`, gradient two-line headline ("MERN Stack Developer / Learning &
   Building."), bio lead, 3 quick metrics (MERN / 12h / 4th), and Download
   Resume / Let's Talk actions.
2. **Terminal avatar** — `aungminthu-dev :: zsh` window with a mesh visual,
   "CURRENTLY CRAFTING" caption (`MERN Stack & Full-Stack Projects`), and a
   `const engineer = { ... }` MERN code block, plus a floating "Production
   Ready" badge.
3. **Skills** — three tiered bento cards: Frontend, Backend (Node/Express/
   MongoDB), Tools & Practices, each with icon, description, and tag cloud.
4. **Education & Experience** — vertical timeline with glowing nodes:
   - University of Computer Studies, Mandalay (Fourth-Year CS Student)
   - 12-Hour Hackathon (participant)
   - Self-Directed MERN Projects (Sar Oak Sin, Green and Smart City)
   Each with role/company/team, period, summary, and impact micro-badges.
5. **Methodology** — "Learn by building." banner with UCS Mandalay and 12-Hour
   Hackathon badges.
6. **Contact** — centered CTA with resume/email buttons and a terminal status
   row (location, timezone, response latency).

### Projects (`/`)
- **Header** — "PORTFOLIO SHOWCASE" badge, title, lead, `FILTER: ALL (4)`
  control, and `v2.4-stable` pill.
- **Grid** — responsive 3-column grid of `ProjectCard`s:
  1. **Sar Oak Sin — Online Library System** (MERN • Education)
  2. **Green and Smart City** (MERN • Sustainability) — auto-cycling
     screenshot gallery (3 images, cycles on hover with dot indicators)
  3. **12-Hour Hackathon Project** (Hackathon)
  4. **Portfolio Website** (Frontend)
  Each card has a gradient/SVG placeholder visual with status badge + metric
  chip, `NN / CATEGORY` index, title, description, tech tags, and Live Demo +
  Source buttons.
- **Collaboration CTA** — "Want to build something together?" with mail action.

### NotFound (`*`)
- `ERROR // 404` kicker, gradient `404`, message, and Back Home button.

## Components (`src/components/`)

| Component          | Responsibility                                        |
| ------------------ | ----------------------------------------------------- |
| `Layout.jsx`       | Shell: Navbar + `main` outlet + Footer                |
| `Navbar.jsx`       | Brand, nav links, availability pill                    |
| `Footer.jsx`       | Copyright + social links                               |
| `Icon.jsx`         | Material Symbols wrapper (sized)                       |
| `TerminalWindow.jsx` | Traffic-light chrome + title + optional status       |
| `CodeSnippet.jsx`  | Tokenized, syntax-colored code block                   |
| `Tag.jsx`          | Pill / solid tech tag (accent variants)                |
| `MetricCard.jsx`   | Big value + label + icon bento card                    |
| `SkillTierCard.jsx`| Skill tier with icon, description, tag cloud           |
| `TimelineItem.jsx` | Timeline node + role card + impact badges              |
| `Placeholder.jsx`  | Gradient + inline SVG visual (grid/sparkline/radar/…)  |
| `ProjectCard.jsx`  | Project card with visual, meta, tags, actions          |

## Data (`src/data/content.js`)

Static, frontend-only content (no server) exporting:
- `profile` — name, role, MERN/student identity, Mandalay location, email,
  availability, current focus.
- `stack` — core tech badges (MongoDB, Express.js, React, Node.js, JavaScript,
  Tailwind CSS).
- `metrics` / `aboutMetrics` — MERN / 12h Hackathon / Projects and quick stats.
- `featuredProject` — the 12-Hour Hackathon build incl. tokenized MERN code.
- `process` — learning/building philosophy cards.
- `skillTiers` — Frontend, Backend, Tools categories.
- `experience` — Education & Experience timeline (UCS Mandalay, 12-Hour
  Hackathon, self-directed MERN projects).
- `projects` — Sar Oak Sin, Green and Smart City, Hackathon build, Portfolio.
- `contact`, `methodology` — internship/collaboration CTA and banner copy.

Placeholder values to update later: university period (`2023 — Present`),
hackathon year (`2025`), and project `link`/`repo` URLs (`#`).

The **Download Resume** buttons (About hero + contact CTA) link to
`/resume/myCV.pdf`, served from `Frontend/public/resume/myCV.pdf`.

## Visual Assets

No remote images. Visuals are CSS gradients plus inline SVG patterns
(`Placeholder.jsx`) so the app is fully self-contained and offline-safe.
Project screenshots live in `public/projects/` and are served from
`/projects/<file>`; the Green and Smart City card crossfades through three
`green-smart-city-*.png` captures on hover (`ProjectCard.jsx`).
The Home hero portrait is served from `/me.jpg` (`public/me.jpg`).

## Accessibility

- Semantic `header`, `nav`, `main`, `section`, `article`, `footer`.
- Icon-only actions carry `aria-label`s; decorative icons/SVGs are
  `aria-hidden`.
- Active nav state conveyed via `NavLink`.
- AA-target contrast on the dark palette; focus styles preserved on controls.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # start dev server
npm run build   # production build
npm run preview # preview the build
npm run lint    # run oxlint
```
