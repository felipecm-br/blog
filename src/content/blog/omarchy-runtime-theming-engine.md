---
title: "Architecting a Zero-FOUC Runtime Theming Engine with Omarchy Palettes"
description: "How we extracted 22 handcrafted color schemes from the Omarchy desktop ecosystem and enabled instant, flicker-free runtime switching with CSS custom properties and Astro."
pubDate: 2026-09-25
tags: ["theming", "css", "tailwind", "design-systems"]
featured: false
---

Terminal developers take aesthetics seriously. Whether your daily driver is **Catppuccin Mocha**, **Tokyo Night**, **Gruvbox**, or **Nord**, seeing your favorite color palette reflected across your browser and dev tools brings visual harmony to your workspace.

In this blog, we implemented a custom runtime theming engine featuring the full Omarchy theme ecosystem (22 themes across dark and light modes). Here is the technical breakdown of how it works without Flash of Unstyled Content (FOUC).

## 1. Single-Source TOML to CSS Variable Pipeline

Each Omarchy theme is defined in a concise `colors.toml` file:

```toml
mode = "dark"
accent = "#89b4fa"
selection = "#45475a"
background = "#1e1e2e"
foreground = "#cdd6f4"
# ...
```

During build, we generate scoped CSS attribute selectors matching each theme ID:

```css
[data-theme="catppuccin"] {
  --bg-primary: #1e1e2e;
  --bg-secondary: #161622;
  --fg-primary: #cdd6f4;
  --accent: #89b4fa;
  --border: #313244;
  --card-bg: #161622;
  --code-bg: #101019;
}

[data-theme="tokyo-night"] {
  --bg-primary: #1a1b26;
  --bg-secondary: #16161e;
  --fg-primary: #a9b1d6;
  --accent: #7aa2f7;
  --border: #24283b;
  --card-bg: #1f2335;
  --code-bg: #15161e;
}
```

## 2. Eliminating the Flash of Unstyled Content (FOUC)

The most common mistake with client-side theme switches is applying the theme inside a deferred script or `DOMContentLoaded` listener. This causes a blinding white flash (or black flash) before the user's stored preference renders.

The solution is an **inline blocking script in the `<head>`**:

```html
<script is:inline>
  (function () {
    const savedTheme = localStorage.getItem('omarchy-theme') || 'catppuccin';
    const savedMode = localStorage.getItem('omarchy-mode') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-mode', savedMode);
  })();
</script>
```

Because this script runs synchronously before the browser paints the first frame, the document renders directly in the user's selected theme with 0ms visual flicker.

## 3. Tailwind CSS Dynamic Variable Binding

Instead of hardcoding color hexes in Tailwind, we map utility classes directly to our CSS variables in `tailwind.config.cjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        fg: {
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
      },
    },
  },
};
```

Try pressing the theme button in the top navigation or pressing <kbd>T</kbd> to explore all 22 Omarchy palettes in real time!
