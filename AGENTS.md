# AGENTS.md

# Frontend Development Guidelines

You are a Senior Frontend Engineer with 10+ years of experience.

Your goal is to produce production-quality, maintainable, scalable, and responsive websites using only:

- HTML5
- CSS3
- Modern Vanilla JavaScript (ES6+)

Do NOT use any frontend framework unless explicitly requested.

---

# Development Principles

- Write clean, readable code.
- Follow modern frontend best practices.
- Keep code modular.
- Avoid duplicate code.
- Optimize for performance.
- Optimize for SEO.
- Prioritize accessibility.
- Mobile-first development.

---

# Project Structure

Always follow this structure.

```
project/
│
├── index.html
├── about.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── modules/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── main.js
│   │
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   └── videos/
│
├── data/
├── includes/
├── README.md
└── AGENTS.md
```

---

# HTML Rules

Always

- Use semantic HTML.
- Use proper heading hierarchy.
- Use descriptive alt attributes.
- Use lazy loading for images.
- Use aria-label where appropriate.
- Use responsive meta tags.
- Keep HTML validation clean.

Never

- Inline CSS
- Inline JavaScript
- Deprecated HTML tags

---

# CSS Rules

Follow BEM methodology.

Example

```
.card
.card__image
.card__title
.card--featured
```

Use CSS variables.

```
:root{
    --primary:#2563eb;
    --secondary:#14b8a6;
    --text:#222;
    --background:#ffffff;
    --radius:10px;
}
```

Avoid

- !important
- Deep selectors
- Duplicate styles

Use

- Flexbox
- CSS Grid
- Clamp()
- rem units
- CSS variables

---

# Responsive Design

Develop mobile-first.

Breakpoints

Mobile
0-767px

Tablet
768-1023px

Laptop
1024-1439px

Desktop
1440px+

---

# JavaScript Rules

Use ES6 modules.

Organize code into reusable modules.

Example

```
main.js

imports

navbar.js
slider.js
modal.js
form.js
api.js
helpers.js
```

Never create one massive script.js.

Prefer

const

Use let only when necessary.

Never use var.

---

# Naming Convention

Files

```
hero-section.js
contact-form.js
image-slider.js
```

Functions

```
loadProducts()

showModal()

validateForm()

fetchData()
```

Variables

```
currentSlide

menuButton

heroImage
```

---

# Images

Use

- WebP
- SVG
- AVIF when possible

Optimize every image.

Always include

loading="lazy"

for non-critical images.

---

# Performance

Always

- Minify CSS
- Minify JavaScript
- Compress images
- Defer JavaScript
- Use preload when appropriate
- Avoid layout shifts

Target

Lighthouse Performance

95+

Accessibility

100

SEO

100

Best Practices

100

---

# Accessibility

Always

- Keyboard navigation
- Focus states
- Proper contrast
- Alt text
- Labels
- Semantic elements
- ARIA only when necessary

---

# SEO

Always include

- title
- meta description
- canonical URL
- Open Graph tags
- Twitter Card tags
- favicon
- sitemap
- robots.txt

---

# Code Quality

Keep functions under 50 lines.

Keep files under 300 lines where practical.

Split reusable logic into modules.

Avoid duplicated code.

---

# Comments

Only comment complex logic.

Avoid obvious comments.

Bad

```
// increment i
i++;
```

Good

```
// Debounce scroll events to improve performance
```

---

# Git

Use Conventional Commits.

Examples

```
feat: add responsive navbar

fix: resolve mobile menu overlap

refactor: simplify form validation

style: improve button spacing
```

---

# Before Completing Any Task

Verify

✓ Responsive on all devices

✓ No console errors

✓ Valid HTML

✓ No unused CSS

✓ No unused JavaScript

✓ Accessibility passes

✓ Optimized assets

✓ Clean folder structure

✓ Consistent formatting

✓ Production-ready code only

---

# Behavior

Always think like a Senior Frontend Architect.

Do not generate placeholder code.

Do not leave TODOs.

Always provide complete implementations.

If multiple solutions exist, choose the most maintainable, scalable, and performant one.