# Akhil Baiju — Premium Personal Portfolio

A world-class luxury digital portfolio website crafted for **Akhil Baiju**, a hospitality and culinary arts professional pursuing an executive trajectory in **Sales & Marketing**.

Inspired by luxury editorial art direction, Michelin-starred culinary websites, and global five-star hospitality brands (such as *Aman Resorts*, *Rosewood*, *Four Seasons*, and *Grand Hyatt*).

---

## ✦ Luxury Brand Architecture & Visual Identity

- **Primary Palette**:
  - `Midnight Charcoal`: `#171715`
  - `Deep Black`: `#10100F`
  - `Warm Ivory`: `#E9E2D5`
  - `Champagne Gold`: `#C8AD7C`
  - `Muted Bronze`: `#9B8059`
- **Secondary Palette**:
  - `Warm Beige`: `#D7CCBA`
  - `Stone Grey`: `#88847B`
  - `Pure White`: `#FFFFFF`
- **Typography**:
  - Headings: *Cormorant Garamond* (Editorial Display Serif)
  - Body: *Manrope* (Clean, high-legibility Sans-Serif)
  - Labels & Monograms: Uppercase tracked letter-spaced luxury metadata

---

## ✦ Architectural Sections

1. **Preloader & Custom Cursor**: Animated `AKHIL BAIJU` gold-line reveal sequence and non-intrusive desktop pointer glow.
2. **Cinematic Hero**: Full-viewport ambient hospitality photography with warm lighting, vertical metadata labels, and primary calls to action.
3. **About Me**: Editorial two-column profile, portrait frame, personal hospitality philosophy, and verified statistics strip.
4. **Professional Journey**: Grand Hyatt Bolgatty timeline feature with 3 interactive pillars (*Guest Relations & Sales*, *Operations & Coordination*, *Brand Presentation & Service Excellence*).
5. **Core Expertise**: 10 skill cards with custom minimalist icons and gold interaction states (no fake percentage ratings).
6. **Culinary & Gastronomic Arts**: Image-led fine dining editorial showcase exploring the strategic link between culinary insight and hospitality sales.
7. **Education**: Refined academic credentials for IHM Goa (*B.Sc. Hospitality & Hotel Administration*, 2026 pursuing) and CMS Higher Secondary School (*2023, 77%*).
8. **Leadership & Personality**: 4-card editorial grid covering Cricket captaincy, Football goalkeeping, Drama/Stage, and Dance ensembles.
9. **Languages**: Horizontal multilingual presentation (*English*, *Hindi*, *Malayalam*).
10. **Personal Interests**: Interactive gallery (*Cricket*, *Football*, *Kabaddi*, *Sketching*, *Drama*, *Travelling*, *Music*).
11. **Contact & Collaboration**: Direct channels (`akhilbaiju14@gmail.com`, `+91 94009 46850`), validated inquiry transmission with mailto fallback, and CV actions.
12. **Curriculum Vitae Modal**: Integrated document preview with print-ready stylesheet (`window.print()`) and downloadable formatted plaintext version.

---

## ✦ Technical Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation System**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## ✦ Content Management

All portfolio information is decoupled from UI presentation and resides in:
```
src/data/portfolioData.ts
```
To update personal details, experience bullet points, academic scores, social profiles, or images, modify the exported data structures in `portfolioData.ts`.

---

## ✦ Local Development & Deployment

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
