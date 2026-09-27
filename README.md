# Felipe Miranda // Developer Blog

> State-of-the-art developer blog built with **Astro 5+**, **Tailwind CSS**, **personalized SEO**, and a zero-FOUC runtime theming engine featuring **22 Omarchy system themes** with Dark and Light mode support.

---

## ⚡ Highlights & Architecture

- **Zero-JS by Default**: Powered by Astro's Islands Architecture. Articles and documentation ship as 100% static semantic HTML with zero hydration overhead.
- **22 Omarchy System Themes**: Exact palettes extracted from the Omarchy desktop ecosystem (Catppuccin, Tokyo Night, Gruvbox, Nord, Everforest, Rose Pine, Flexoki, Kanagawa, and more).
- **Runtime Theme & Mode Switching**: Instant, client-side theme switching without page reload, persisted in `localStorage`.
- **Zero Flash of Unstyled Content (FOUC)**: Synchronous `<head>` theme restoration prevents any jarring flash on first paint.
- **Personalized SEO**:
  - OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`, `og:site_name`, `og:locale`).
  - Twitter Cards (`summary_large_image`, `twitter:creator`, `twitter:site`).
  - Schema.org JSON-LD Structured Data (`BlogPosting`, `WebSite`, `BreadcrumbList`, `Person`, `Organization`).
  - Automated XML sitemap (`@astrojs/sitemap`) and dynamic `robots.txt`.
  - Dynamic RSS 2.0 Feed (`/rss.xml`).
  - Strict canonical URL generation.
- **Developer Ergonomics**:
  - Interactive Command Palette / Search (`Cmd+K` / `Ctrl+K`).
  - Theme picker keyboard shortcut (`T`).
  - Interactive Table of Contents with scroll-spy IntersectionObserver.
  - Floating Code Copy button on all `<pre>` blocks.
  - Viewport reading progress indicator.
  - Responsive, accessible, mobile-first design.
- **AWT Native Layout**: Managed within an isolated `.bare` Git worktree container layout (`awt`).

---

## 🎨 Omarchy Theme Ecosystem

The blog supports 22 themes across dark and light modes, switchable at runtime via the navbar palette button or by pressing <kbd>T</kbd>:

### Dark Themes (17)
- **Catppuccin** (Mocha default)
- **Tokyo Night**
- **Gruvbox** (Dark)
- **Nord**
- **Everforest**
- **Kanagawa**
- **Rose Pine** (Moon/Main)
- **Ethereal**
- **Hackerman** (Neon / Cyberpunk)
- **Last Horizon**
- **Lumon**
- **Matte Black**
- **Miasma**
- **Osaka Jade**
- **Retro 82** (Synthwave)
- **Ristretto** (Monokai)
- **Solitude**
- **Vantablack** (OLED Pure Black)

### Light Themes (5)
- **Catppuccin Latte** (Light default)
- **Flexoki Light**
- **Rose Pine Dawn**
- **Lupine**
- **White** (Minimalist Pure White)

---

## 🚀 Quick Start

### Installation

```bash
cd ~/dev/github/felipecm/blog/main
npm install
```

### Development Server

```bash
npm run dev
# Server running at http://localhost:4321
```

### Production Build

```bash
npm run build
# Compiles static site to dist/
```

### Preview Static Build

```bash
npm run preview
# Serves dist/ locally
```

---

## 📝 Writing Blog Posts

New articles are placed in `src/content/blog/<slug>.md`. Each post uses frontmatter type-checked against `src/content.config.ts`:

```markdown
---
title: "Your Post Title"
description: "A compelling summary of the article for SEO and cards."
pubDate: 2026-09-27
updatedDate: 2026-09-28 # Optional
heroImage: "/images/hero.png" # Optional
tags: ["frontend", "astro", "architecture"]
featured: true # Set to true to highlight on the homepage
draft: false
canonicalURL: "https://yourdomain.com/original-article" # Optional
---

Your markdown or code snippets here...
```

---

## 🛠️ Worktree & AWT Management

This repository uses the `.bare` sibling worktree layout:

```text
~/dev/github/felipecm/blog/
├── .bare/            # Shared bare Git repository
├── .git              # Pointer: gitdir: ./.bare
└── main/             # Primary branch worktree
```

To create a new feature worktree:

```bash
cd ~/dev/github/felipecm/blog/main
awt -c feat/new-article
```

To ship or merge back into `main`:

```bash
awt merge main
# Or ship to remote:
awt ship main
```

---

## 📄 License

MIT © Felipe Miranda
