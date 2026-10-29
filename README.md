# LUMEN Optical — Luxury Sustainable Eyewear

A refined, high-contrast carbon & developer-platform minimalist e-commerce website for **LUMEN Optical**, a sustainable luxury eyewear atelier crafting frames from 100% recycled Japanese aerospace titanium and zero-waste Italian bio-acetate with Carl Zeiss mineral glass optics.

Inspired by modern precision developer platforms like **Google Antigravity**, the aesthetic features crisp typography, high-contrast dark carbon surfaces, and subtle ambient violet halo illumination with zero yellow or amber tones.

---

## 1. Structure & Pages (5 Pages Required)

| Page | File | Description & Highlights |
| :--- | :--- | :--- |
| **Homepage** | [`index.html`](file:///d:/uiux%20glasses/index.html) | Editorial hero with floating signature frame preview, brand manifesto, brand stats strip, featured collections, Sabae & Cadore craftsmanship split, press quotes, and private journal newsletter. |
| **Shop Catalog** | [`products.html`](file:///d:/uiux%20glasses/products.html) | Categorized catalog grid (Optical Frames, Sunglasses, Bio-Acetate Editions) capped at 3 per row with generous 2.5rem gaps, active JavaScript filtering, price & rating sorting, and INR prices. |
| **Product Showcase** | [`product-detail.html`](file:///d:/uiux%20glasses/product-detail.html) | Dedicated signature view for "The Aethelgard Aviator" with interactive 4-angle image gallery switcher, colorway picker, lens technology selector with live price calculation in INR, quantity adjuster, Add to Bag drawer preview, and technical specs accordion. |
| **Our Craft / Heritage** | [`story.html`](file:///d:/uiux%20glasses/story.html) | Deep dive into closed-loop aerospace titanium sourcing, zero-waste bio-acetate philosophy, master artisans in Sabae & Cadore, 4-step production timeline, and ISO certifications. |
| **Support & Flagship Store** | [`contact.html`](file:///d:/uiux%20glasses/contact.html) | VIP customer care, interactive multi-field concierge inquiry form with live toast feedback, global flagship store showcase (Mumbai, Tokyo, Milan), and lifetime warranty FAQ accordions. |

---

## 2. Typography & Modern Developer-Platform Aesthetic

- **Google Antigravity Font Stack**:
  ```css
  font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  ```
- **Crisp Technical Secondary Text & Captions**:
  ```css
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  color: #8E8E93;
  ```
- **High-Contrast Carbon Color Hierarchy**:
  - **Base Background**: Deep Carbon `#0A0A0C`
  - **Card & Component Surfaces**: Dark Matte `#121216` (Hover: `#1A1A22`)
  - **Headings & Primary Accents**: Pure Crisp White `#FFFFFF`
  - **Body Copy**: Muted Soft Gray `#A1A1AA`
  - **Borders**: Clean hairline borders `1px solid rgba(255, 255, 255, 0.08)`
- **Sleek Ambient Glow (Zero Yellow Accents)**:
  - Replaced all yellow/amber accents with soft, ambient radial halos behind active buttons and cards:
  ```css
  box-shadow: 0 0 25px rgba(120, 119, 198, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);
  ```
- **Spacious Editorial Whitespace**:
  - Section padding doubled to `padding: 90px 0;` to expand negative space.
  - Product grids limited to 3 per row with generous `2.5rem` (`40px`) gaps.
  - Body text kept concise to 1–2 crisp, human-crafted sentences.

---

## 3. Preserved Essential Code (8 Advanced SEO Techniques)

1. **Meta Title & Description Optimization**: Every page contains unique, keyword-targeted `<title>` and `<meta name="description">` tags.
2. **Semantic HTML5 Structuring**: Built strictly with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<address>`, and `<footer>` elements without generic `<div>` soup.
3. **Strict Heading Hierarchy ($H1 \rightarrow H2 \rightarrow H3$)**: Exactly **one** unique `<h1>` per page with target e-commerce keywords, strictly followed by nested `<h2>` and `<h3>` tags with zero skipped levels.
4. **Image Accessibility & Alt Attributes**: Every product and craft photograph has detailed, descriptive `alt` attributes explaining frame shape, material, finish, angle, and setting.
5. **Internal Linking Strategy**: Descriptive anchor text cross-linking pages across top navigation, product cards, breadcrumbs, body copy, and 4-column footer.
6. **Mobile Viewport Optimization**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` included in every HTML `<head>` with fully responsive CSS media queries.
7. **Open Graph (OG) Social Meta Tags & Twitter Cards**: Comprehensive `og:title`, `og:description`, `og:type`, `og:image`, `og:url`, `og:site_name`, `twitter:card`, `twitter:title`, and `twitter:image` tags.
8. **Product & E-Commerce Schema Markup (JSON-LD)**: Rich `<script type="application/ld+json">` schemas embedded across pages (`Organization`, `WebSite`, `ItemList`, `Product` with INR pricing, `InStock` availability, aggregate rating, `ContactPage`, and `Store`).
