## 🧠 PROJECT CONTEXT — "Babu Family Saloon"

This is an existing static website built using **Next.js (App Router)** with **Tailwind CSS v3** and **GSAP (GreenSock Animation Platform)**.
It is a modern, elegant, responsive site for a luxury hair saloon — **Babu Family Saloon**.

The site focuses on:
- ⚡ Fast performance
- 📱 Mobile-first responsiveness
- 💅 Aesthetic black & gold design
- 🎬 Smooth and minimal animations (using GSAP)

---

## 🧾 STACK + DESIGN SYSTEM

- **Framework:** Next.js (App Router, no server components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** GSAP (Framer Motion is partially used but should be replaced)
- **Component Libraries:** Can use `shadcn/ui` for responsive & accessible components
- **Assets:** assets are present in the `/public/` directory
- **Other:** Modular folder structure for scalable development

---

## 🎨 COLOR PALETTE

| Purpose       | Hex        | Tailwind Custom Name |
|---------------|------------|-----------------------|
| Primary       | `#000000`  | `primary`             |
| Secondary     | `#FFD700`  | `secondary`           |
| Background    | `#2E2E2E`  | `dark`                |

Tailwind config (in `tailwind.config.ts`) should define these colors:

```ts
// tailwind.config.ts
extend: {
  colors: {
    primary: '#000000',
    secondary: '#FFD700',
    dark: '#2E2E2E',
  }
}
````

---

## 🗂️ CURRENT FOLDER STRUCTURE

```bash
.
├── app/
│   ├── blog/page.tsx
│   ├── gallery/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── services/page.tsx
├── components/            # Modular UI components
├── config/                # Centralized config (colors, constants, etc.)
├── Fonts/                 # Font imports (currently unused) ← [TODO]
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets (logo, gallery images, etc.)
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
├── README.md
└── GEMINI.md
```

---

## ⚙️ GEMINI INSTRUCTIONS

Gemini (or any AI assistant) should follow these **strict rules** when generating or modifying code:

### ✅ 1. Always Add `id` to New Elements

Every major element (`div`, `section`, `button`, `article`, `header`, etc.) **must include a unique `id`** using kebab-case. Example:

```tsx
<section id="services-section">
  <h2 id="services-heading">Our Services</h2>
</section>
```

If modifying existing code, check if the `id` is missing — and add one following naming patterns like:

* `section-<name>`
* `hero-title`
* `gallery-grid`
* `footer-cta-button`

### ✅ 2. Make All Code Responsive

* Use Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`, `xl:`)
* Layouts should adapt across mobile, tablet, and desktop views
* Prefer mobile-first breakpoints

### ✅ 3. Use Reusable Components

All new sections or UI elements should be placed in `components/` as atomic or composable components. Example:

```bash
components/
├── Header.tsx
├── ServiceCard.tsx
├── GalleryGrid.tsx
└── ContactForm.tsx
```

The layout file (`app/layout.tsx`) should import and compose these as needed.

### ✅ 4. Use GSAP for Animations

* Use `gsap.fromTo`, `gsap.timeline`, or `ScrollTrigger`
* Components requiring animation should be marked with `"use client"`
* If replacing Framer Motion, remove unused code

### ✅ 5. Can Use `shadcn/ui` Where Helpful

For responsive layouts or UI elements like buttons, accordions, tabs, modals — it’s acceptable to use `shadcn` components if it improves accessibility or responsiveness.

Install shadcn components only as needed to avoid bloat.

---

## 📋 ROUTES

| Route       | File                    | Description                  |
| ----------- | ----------------------- | ---------------------------- |
| `/`         | `app/page.tsx`          | Homepage (hero, intro, CTA)  |
| `/services` | `app/services/page.tsx` | List of offered services     |
| `/gallery`  | `app/gallery/page.tsx`  | Gallery of styles / ambiance |
| `/blog`     | `app/blog/page.tsx`     | Articles, tips, news         |

Each page should follow a **sectioned layout**, and each `<section>` must have an `id`.

---

## 🧪 TESTING CHECKLIST

| Feature / Page        | Status        | Notes                            |
| --------------------- | ------------- | -------------------------------- |
| Responsive layout     | ✅ In progress | Test mobile / tablet / desktop   |
| Animations (GSAP)     | ✅ Mixed       | Some animations exist            |
| Framer Motion Cleanup | ❌ Pending     | Replace with GSAP                |
| Component Structure   | ✅ Good        | Continue modularizing components |
| SEO Tags              | ❌ Missing     | Add meta & OpenGraph later       |

---

## 🔮 FUTURE PLANS

* [ ] Replace all Framer Motion animations with GSAP
* [ ] Use dynamic imports if needed for animation-heavy components
* [ ] Add `aria` labels and accessibility best practices
* [ ] Create unified `<Container>` and `<Section>` layout components
* [ ] Optimize all assets (WebP images, minified SVGs, etc.)

---

## 👨‍💻 DEV INSTRUCTIONS

```bash
# Build the static site
npm run build

```

Avoid using server-side rendering or server components — this is a static site only.

---

## 🧠 GEMINI GOALS

Gemini can now:

* Modify existing layouts or sections
* Add animations using GSAP
* Create responsive, reusable components
* Replace Framer Motion with GSAP
* Suggest optimizations (but not introduce dynamic server logic)

Every output should:

* Be modular (`components/`)
* Be responsive
* Use proper `id`s
* Keep code clean, minimal, and accessible

---

> 🧪 Gemini: Whenever you create or modify a component, **add a comment with the ID** and describe the purpose of the element for future reference. Keep this file updated if new rules are introduced.


---
