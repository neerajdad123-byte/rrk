# RRK Chicken 🍗🔥

> Red-hot chicken plates, biryani boxes, party buckets — served fresh daily.

A premium, animation-rich restaurant landing page built with vanilla HTML, CSS, GSAP, and bold typography. Three distinct design directions — pick your heat.

---

## Pages

| File | Style | Vibe |
|------|-------|------|
| `rrk_index.html` | **Red + White Classic** | Clean, bold, approachable — floating food photos, custom cursor, dashboard stats, tooltips, hamster loader |
| `rrk_premium.html` | **Cinematic Dark** | Moody full-bleed hero, film-frame borders, glassmorphism, GPS coordinates, horizontal film strip |
| `rrk_final.html` | **Gold + Red Premium** | Complete luxury build — loader animation, pin-scroll plates, gallery rail, grain texture, glass visit panel, 12 animated sections |
| `index.html` | Original reference | Earlier iteration kept for history |

---

## Tech Stack

- **HTML5 / CSS3** — Custom properties, grid, flexbox, clamp() fluid typography
- **GSAP 3.12** + **ScrollTrigger** — Scroll-driven animations, parallax, pinning
- **Lenis** — Smooth scrolling with custom easing
- **Lucide** — Icon library (flame, map-pin, phone, star, etc.)
- **Google Fonts** — Bebas Neue, Cormorant Garamond, Inter, Space Mono, Playfair Display, Manrope

No frameworks, no build tools — just open the `.html` file in a browser.

---

## Features

### All pages
- Custom cursor (dot + expanding ring)
- Scroll progress bar
- `prefers-reduced-motion` respect
- Mobile-responsive breakpoints
- Touch-device detection (cursor hidden)

### rrk_index.html
- Hamster wheel CSS loader (Uiverse: wet-mayfly-23)
- Tooltip chips with shake animation (Uiverse: spotty-zebra-83)
- Floating photo cards with rotation drift
- Hero parallax (`data-speed`)
- Dashboard stats section (orders, customers, rating, wait time)
- Gallery hover zoom + lift
- Button glow + press micro-interactions
- Full-page grain texture

### rrk_premium.html
- Full-bleed hero with `mix-blend-mode: difference` nav
- Film-frame border effect
- Glassmorphism CTA card (`backdrop-filter: blur`)
- GPS coordinate decoration (12°58'N 77°35'E)
- Horizontal film strip with GSAP scrub
- Stats grid with seamless dividers
- Dark/cream/deep-red section rhythm

### rrk_final.html
- Gold-accented color system (#c9a84c)
- 4-font stack: Bebas Neue, Cormorant Garamond, Inter, Space Mono
- Loader with animated progress bar
- Pin-scroll kitchen showcase (3 overlapping plates)
- Horizontal gallery rail (pinned + scrubbed)
- Glassmorphism visit panel
- 12 distinct animated sections
- Ticker tape animation

---

## Images

All photos are local, real food photography in `images/`:

```
images/
├── hero.jpg      — Kitchen / hero background
├── dish1.jpg     — Biryani / rice box
├── dish2.jpg     — Red curry plate
├── dish3.jpg     — Grilled chicken
├── dish4.jpg     — Family bucket
├── thali.jpg     — Thali spread
├── spices.jpg    — Red spices
├── interior.jpg  — Restaurant interior
├── table.jpg     — Table setup
└── chef.jpg      — Chef at work
```

---

## Quick Start

```bash
# Clone
git clone https://github.com/neerajdad123-byte/rrk.git

# Open any page directly — no build step
open rrk_final.html     # macOS
start rrk_final.html    # Windows
xdg-open rrk_final.html # Linux
```

Or drag any `.html` file into your browser.

---

## License

MIT — see individual file headers for Uiverse component attributions.
