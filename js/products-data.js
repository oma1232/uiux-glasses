/**
 * LUMEN Optical - Master Product Catalog Dataset
 * Luxury Sustainable Eyewear
 * Currency: INR (₹)
 */

const LUMEN_PRODUCTS = [
  {
    id: "aethelgard-titanium",
    name: "The Aethelgard Aviator",
    tagline: "Aerospace Titanium Signature Silhouette",
    category: "sunglasses",
    categoryLabel: "Sunglasses",
    material: "titanium",
    materialLabel: "Japanese Recycled Titanium (Grade 5)",
    price: 28500,
    originalPrice: 32000,
    rating: 4.97,
    reviewsCount: 142,
    badge: "Aerospace Titanium",
    weight: "18.4g",
    dimensions: {
      lensWidth: "52 mm",
      bridgeWidth: "19 mm",
      templeLength: "145 mm"
    },
    colors: [
      { name: "Matte Onyx Black", code: "#111111", imageIdx: 0 },
      { name: "Brushed Slate", code: "#3A3D40", imageIdx: 1 },
      { name: "Raw Titanium Silver", code: "#8A8D8F", imageIdx: 2 }
    ],
    lensOptions: [
      { id: "zeiss-polarized", name: "Zeiss Polarized Mineral Lens (Cat. 3)", priceOffset: 0 },
      { id: "photochromic", name: "Transitions Gen 8 Adaptive Tint", priceOffset: 4500 },
      { id: "prescription-polarized", name: "Bespoke Prescription Polarized (Zeiss)", priceOffset: 7500 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Aethelgard matte black polarized titanium sunglasses front view on neutral stone background"
      },
      {
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Aethelgard muted imperial gold sunglasses side angle showing precision titanium hinges"
      },
      {
        url: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80",
        alt: "Close up detail of LUMEN recycled titanium temple engraving and micro-screws"
      },
      {
        url: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1000&q=80",
        alt: "Editorial lifestyle model wearing LUMEN Aethelgard titanium aviator sunglasses in natural sunlight"
      }
    ],
    shortDescription: "Masterfully sculpted from aerospace-grade reclaimed Japanese titanium. Weighing a mere 18.4 grams, this signature frame marries architectural rigor with Zeiss optical-grade mineral lenses.",
    fullDescription: "The Aethelgard Aviator represents the apex of circular luxury. Harvested from certified Japanese aerospace production remnants, each titanium billet undergoes 180 distinct cold-milling and hand-finishing processes in Sabae, Fukui Prefecture. Integrated screwless micro-barrel hinges offer friction-free articulation for a lifetime of effortless wear.",
    highlights: [
      "100% Upcycled Aerospace Grade 5 Titanium",
      "Zeiss 7-Layer Anti-Reflective Polarized Mineral Glass",
      "Ultralight 18.4g Weight for Zero-Pressure All-Day Wear",
      "Hypoallergenic Medical-Grade Silicone Nose Pads",
      "Zero Toxic Effluents in Anodized Black Finish"
    ],
    specs: {
      "Frame Material": "100% Recycled Aerospace Titanium (Grade 5)",
      "Hinge Mechanism": "Patented Screwless Dual-Pivot Flex Hinge",
      "Lens Technology": "Carl Zeiss Vision Polarized Mineral Glass (Category 3)",
      "Coating": "Hydrophobic, Oleophobic, & 7-Layer Anti-Reflective",
      "Country of Origin": "Handcrafted in Sabae, Japan",
      "Sustainability Certificate": "Certified Circular Metallurgy ISO 14021"
    }
  },
  {
    id: "komorebi-square",
    name: "The Komorebi Square",
    tagline: "Plant-Based Italian Bio-Acetate Architecture",
    category: "bio-acetate",
    categoryLabel: "Bio-Acetate Editions",
    material: "bio-acetate",
    materialLabel: "Mazzucchelli 100% Organic Bio-Acetate",
    price: 22900,
    originalPrice: 25500,
    rating: 4.92,
    reviewsCount: 96,
    badge: "Bio-Acetate Edition",
    weight: "22.1g",
    dimensions: {
      lensWidth: "50 mm",
      bridgeWidth: "21 mm",
      templeLength: "142 mm"
    },
    colors: [
      { name: "Amber Tortoise", code: "#96592B", imageIdx: 0 },
      { name: "Smoked Olive", code: "#3D4436", imageIdx: 1 },
      { name: "Obsidian Black", code: "#141414", imageIdx: 2 }
    ],
    lensOptions: [
      { id: "blue-light", name: "LUMEN Blue-Light Shield (420nm Filter)", priceOffset: 0 },
      { id: "prescription-single", name: "Single Vision High-Index 1.67", priceOffset: 3500 },
      { id: "progressive-blue", name: "Progressive Varilux Blue-Violet Guard", priceOffset: 8900 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Komorebi square bio-acetate optical glasses in warm amber tortoise on minimalist stone pedestal"
      },
      {
        url: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Komorebi bio-acetate frames side profile showing faceted temple bevels"
      },
      {
        url: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Italian bio-acetate material texture and plant-based cellulose luster"
      },
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
        alt: "Editorial portrait of model wearing LUMEN Komorebi bio-acetate square frames"
      }
    ],
    shortDescription: "Zero-petroleum organic bio-acetate derived from certified European cotton seeds and FSC wood pulp. Bold architectural silhouette with beveled temple edges.",
    fullDescription: "The Komorebi Square is born from an uncompromising commitment to circular ecology. Traditional acetate relies on toxic diethyl phthalate plasticizers; LUMEN bio-acetate utilizes pure vegetable-origin plasticizers that biodegrade cleanly in industrial compost within 115 days without chemical residues.",
    highlights: [
      "100% Biodegradable & Phthalate-Free Mazzucchelli Bio-Acetate",
      "Tumbled for 72 Hours in Organic Birch & Walnut Granules",
      "Integrated Wire Core in Recycled Stainless Steel",
      "Includes Precision Blue-Light Filtration Lenses",
      "Hand-Polished by 3rd-Generation Italian Craftsmen in Cadore"
    ],
    specs: {
      "Frame Material": "Mazzucchelli M49 Bio-Based Cellulose Acetate",
      "Hinge Mechanism": "5-Barrel Riveted German Stainless Steel Hinge",
      "Lens Technology": "LUMEN PureClear Blue-Light 420nm Multi-Coat",
      "Coating": "Anti-Smudge, Anti-Scratch Diamond Hard-Coat",
      "Country of Origin": "Handcrafted in Cadore, Italy",
      "Sustainability Certificate": "OK biobased ISO 14855 & FSC Certified"
    }
  },
  {
    id: "vesper-round",
    name: "The Vesper Minimalist",
    tagline: "Ultralight 14g Featherweight Circular Wireframe",
    category: "optical",
    categoryLabel: "Optical Frames",
    material: "titanium",
    materialLabel: "Ultralight Recycled Titanium & Beta-Titanium",
    price: 25000,
    originalPrice: 27500,
    rating: 4.89,
    reviewsCount: 78,
    badge: "Ultra-Light (14g)",
    weight: "14.2g",
    dimensions: {
      lensWidth: "48 mm",
      bridgeWidth: "20 mm",
      templeLength: "145 mm"
    },
    colors: [
      { name: "Raw Titanium Silver", code: "#8A8D8F", imageIdx: 0 },
      { name: "Brushed Graphite", code: "#424242", imageIdx: 1 },
      { name: "Rose Bronze", code: "#9C6B5E", imageIdx: 2 }
    ],
    lensOptions: [
      { id: "anti-reflective-clear", name: "High-Index 1.67 Anti-Reflective Clear", priceOffset: 0 },
      { id: "blue-protect", name: "Blue-Light Protective Digital Filter", priceOffset: 2500 },
      { id: "prescription-high-index", name: "Ultra-Thin 1.74 Prescription Optics", priceOffset: 6500 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Vesper ultralight round titanium optical frame in satin gold finish"
      },
      {
        url: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Vesper round frame bridge and nose pad micro-mechanics"
      },
      {
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Vesper temple flexibility and beta-titanium spring curve"
      },
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
        alt: "Portrait of professional wearing LUMEN Vesper titanium round glasses in modern office"
      }
    ],
    shortDescription: "Pure circular geometry distilled into a featherweight 14-gram profile. Flexible beta-titanium temples ensure unyielding all-day ergonomics without temple pressure.",
    fullDescription: "Inspired by intellectual Bauhaus proportions, the Vesper stripped away every extraneous gram. Cold-drawn beta-titanium wire retains its resilient memory shape, flexing gently over the cranium for a glove-like, barely-there tactile feel.",
    highlights: [
      "Under 15g Total Weight - Supreme Featherweight Comfort",
      "Flexible Beta-Titanium Memory Wire Temples",
      "Titanium Saddle Bridge with Renewable Silicone Cushioning",
      "Zero-Corrosion, Sweat-Proof Ion Vapor Deposition Coating",
      "Lifetime Structural Guarantee on Frame Chassis"
    ],
    specs: {
      "Frame Material": "Japanese Beta-Titanium & Pure Grade 4 Titanium",
      "Hinge Mechanism": "Friction-Damped Screwless Lug System",
      "Lens Technology": "1.67 High-Index Diamond Clear",
      "Coating": "Electrostatically Bonded Super-Hydrophobic Layer",
      "Country of Origin": "Sabae, Fukui Prefecture, Japan",
      "Sustainability Certificate": "Responsible Jewellery & Metals Council (RJC)"
    }
  },
  {
    id: "solstice-geometric",
    name: "The Solstice Hexagonal",
    tagline: "Geometric Faceted Architectural Sunglasses",
    category: "sunglasses",
    categoryLabel: "Sunglasses",
    material: "hybrid",
    materialLabel: "Hybrid Recycled Titanium & Bio-Acetate",
    price: 31500,
    originalPrice: 35000,
    rating: 4.95,
    reviewsCount: 114,
    badge: "Artisan Limited Edition",
    weight: "20.8g",
    dimensions: {
      lensWidth: "51 mm",
      bridgeWidth: "20 mm",
      templeLength: "145 mm"
    },
    colors: [
      { name: "Brushed Carbon & Onyx", code: "#28292D", imageIdx: 0 },
      { name: "Dark Tortoise & Silver", code: "#5A4032", imageIdx: 1 },
      { name: "Matte Slate & Rose", code: "#2B2B2C", imageIdx: 2 }
    ],
    lensOptions: [
      { id: "emerald-polarized", name: "Zeiss Emerald Gradient Polarized (Cat. 3)", priceOffset: 0 },
      { id: "amber-contrast", name: "High-Contrast Solar Bronze Lens", priceOffset: 3000 },
      { id: "bespoke-prescription", name: "Bespoke Prescription Polarized Mirror", priceOffset: 8500 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Solstice hexagonal titanium sunglasses with emerald gradient polarized lenses"
      },
      {
        url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Solstice geometric sunglasses showing beveled titanium rims and filigree engraving"
      },
      {
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
        alt: "Top view of LUMEN Solstice sunglasses showing bio-acetate inner rim contour"
      },
      {
        url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
        alt: "Editorial lifestyle photograph of model wearing LUMEN Solstice hexagonal sunglasses"
      }
    ],
    shortDescription: "Geometric faceted silhouette featuring a hand-milled bio-acetate inner rim cocooned inside laser-soldered titanium chassis with custom engraved filigree.",
    fullDescription: "A triumph of complex hybrid fabrication. The Solstice binds Italian bio-acetate rim inserts into Japanese recycled titanium bezels with sub-millimeter tolerances. The result is a sculptural hexagonal form that catches golden-hour light with majestic restraint.",
    highlights: [
      "Precision Hybrid Titanium & Bio-Acetate Architecture",
      "Hand-Engraved Guilloché Rim Detailing",
      "Zeiss Emerald Gradient Polarized Mineral Lenses",
      "Limited Run of 500 Serialized Pieces Globally",
      "Includes Hand-Stitched Vegetable-Tanned Italian Leather Case"
    ],
    specs: {
      "Frame Material": "Japanese Recycled Titanium with M49 Bio-Acetate Inlays",
      "Hinge Mechanism": "Custom 3-Tier Barrel with Vibration Dampening",
      "Lens Technology": "Zeiss Mineral Glass Gradient Polarized (UV400 Cat. 3)",
      "Coating": "Anti-Fog, Oleophobic, & 8-Layer Multicoating",
      "Country of Origin": "Kyoto & Cadore Cross-Artisan Project",
      "Sustainability Certificate": "Ethical Sourcing Verified ISO 9001/14001"
    }
  },
  {
    id: "sabae-panto",
    name: "The Sabae Panto",
    tagline: "Timeless Mid-Century Intellectual Silhouette",
    category: "optical",
    categoryLabel: "Optical Frames",
    material: "titanium",
    materialLabel: "Japanese Recycled Titanium",
    price: 26800,
    originalPrice: 29500,
    rating: 4.91,
    reviewsCount: 83,
    badge: "Handcrafted in Sabae",
    weight: "16.5g",
    dimensions: {
      lensWidth: "49 mm",
      bridgeWidth: "21 mm",
      templeLength: "145 mm"
    },
    colors: [
      { name: "Raw Titanium", code: "#7B7E80", imageIdx: 0 },
      { name: "Midnight Slate", code: "#1C2024", imageIdx: 1 },
      { name: "Polished Pewter", code: "#9E9E9E", imageIdx: 2 }
    ],
    lensOptions: [
      { id: "anti-fatigue-clear", name: "LUMEN Anti-Fatigue Clear (0.4D Boost)", priceOffset: 0 },
      { id: "blue-violet", name: "Premium Blue-Violet Digital Defense", priceOffset: 2800 },
      { id: "prescription-bifocal", name: "Custom Digital Free-Form Progressive", priceOffset: 7200 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Sabae Panto round titanium optical frame in raw titanium finish"
      },
      {
        url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Sabae Panto frame side profile highlighting classic keyhole bridge"
      },
      {
        url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80",
        alt: "Macro photograph of the titanium hinge screws and serial number stamping"
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
        alt: "Editorial lifestyle portrait of gentleman wearing LUMEN Sabae Panto spectacles"
      }
    ],
    shortDescription: "A nod to 1930s intellectual silhouettes, modernized with precision screwless flex hinges and organic silicone nose pads molded from renewable plant oils.",
    fullDescription: "Named after the global capital of eyewear craftsmanship in Fukui, Japan. The Sabae Panto features a subtly raised keyhole bridge that naturally balances varied facial profiles. Produced in limited batches of 150 frames per month to safeguard artisan standards.",
    highlights: [
      "Curved Keyhole Bridge Engineered for Universal Fit",
      "Japanese Aerospace Grade Recycled Titanium Wire",
      "Diamond DLC (Diamond-Like Carbon) Scratch Protection",
      "Organic Plant-Derived Silicone Nose Pads",
      "Individually Laser Serialized on Left Temple"
    ],
    specs: {
      "Frame Material": "Sabae Recycled Titanium Alloy Ti-6Al-4V",
      "Hinge Mechanism": "Tension-Calibrated Micro-Hinge",
      "Lens Technology": "1.60 Ultra-Clear Polycarbonate Anti-Glare",
      "Coating": "Dust-Repellent, Oleophobic, UV400 Protection",
      "Country of Origin": "Sabae, Fukui Prefecture, Japan",
      "Sustainability Certificate": "Circular Manufacturing Verification Japan"
    }
  },
  {
    id: "aurora-cat-eye",
    name: "The Aurora Sculpted Cat-Eye",
    tagline: "Dramatic High-Fashion Organic Bio-Acetate",
    category: "bio-acetate",
    categoryLabel: "Bio-Acetate Editions",
    material: "bio-acetate",
    materialLabel: "Italian 100% Bio-Acetate",
    price: 24500,
    originalPrice: 28000,
    rating: 4.94,
    reviewsCount: 89,
    badge: "Bio-Acetate Edition",
    weight: "23.4g",
    dimensions: {
      lensWidth: "53 mm",
      bridgeWidth: "18 mm",
      templeLength: "140 mm"
    },
    colors: [
      { name: "Smoked Quartz", code: "#4A4642", imageIdx: 0 },
      { name: "Eclipse Onyx", code: "#151515", imageIdx: 1 },
      { name: "Frosted Glace", code: "#B0B3B8", imageIdx: 2 }
    ],
    lensOptions: [
      { id: "mocha-polarized", name: "Gradient Mocha Polarized UV400 (Cat. 3)", priceOffset: 0 },
      { id: "solid-slate", name: "Solid Slate Dark Polarized 85% Absorption", priceOffset: 2500 },
      { id: "prescription-sun", name: "Prescription Gradient Polarized", priceOffset: 7500 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Aurora sculpted honey amber cat-eye bio-acetate sunglasses front view"
      },
      {
        url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Aurora cat-eye sunglasses beveled side profile showing 8mm bio-acetate thickness"
      },
      {
        url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
        alt: "Close up of walnut-shell tumbled satin finish on bio-acetate brow"
      },
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
        alt: "Editorial fashion photograph of model wearing LUMEN Aurora sculpted cat-eye sunglasses"
      }
    ],
    shortDescription: "A bold, feminine high-fashion contour carved with dramatic 8mm bio-acetate step-downs and walnut-shell tumbled satin bevels.",
    fullDescription: "The Aurora commands attention through sheer geometric confidence. Hand-sculpted from 8mm thick Italian Mazzucchelli bio-acetate, the frame features stepped facets along the brow that catch ambient light like cut obsidian. Completely free of petroleum-based plasticizers.",
    highlights: [
      "8mm Substantial Bio-Acetate Profile with Dramatic Bevels",
      "Gradient Mocha Category 3 Polarized Lenses",
      "Biodegradable Plant Cellulose Formulation",
      "Custom Wire-Core with Heritage Florentine Engravings",
      "Comes with Biodegradable Cork Protective Case"
    ],
    specs: {
      "Frame Material": "100% Eco-Friendly Mazzucchelli Bio-Acetate",
      "Hinge Mechanism": "7-Barrel Heavy-Duty Riveted Italian Hinge",
      "Lens Technology": "Carl Zeiss CR-39 Polarized Gradient",
      "Coating": "Hydrophobic & Scratch-Resistant Hard Coat",
      "Country of Origin": "Handcrafted in Cadore, Italy",
      "Sustainability Certificate": "OK biobased ISO 14855 & DIN EN 13432"
    }
  },
  {
    id: "kyoto-monolith",
    name: "The Kyoto Monolith",
    tagline: "Single-Billet Reclaimed Titanium Collector's Edition",
    category: "optical",
    categoryLabel: "Optical Frames",
    material: "titanium",
    materialLabel: "Grade 5 Recycled Titanium Bar",
    price: 34000,
    originalPrice: 38000,
    rating: 4.98,
    reviewsCount: 52,
    badge: "Collector's Piece",
    weight: "17.9g",
    dimensions: {
      lensWidth: "50 mm",
      bridgeWidth: "20 mm",
      templeLength: "148 mm"
    },
    colors: [
      { name: "Black DLC (Diamond-Like Carbon)", code: "#0B0C0E", imageIdx: 0 },
      { name: "Brushed Titanium", code: "#9E9E9E", imageIdx: 1 }
    ],
    lensOptions: [
      { id: "zeiss-bluprotect", name: "Zeiss DuraVision BlueProtect 1.67", priceOffset: 0 },
      { id: "transitions-amber", name: "Transitions Signature Gen 8 Amber", priceOffset: 5000 },
      { id: "bespoke-freeform", name: "Zeiss SmartLife Individual Progressive", priceOffset: 9500 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Kyoto Monolith single-billet black DLC titanium optical frame"
      },
      {
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Kyoto Monolith seamless zero-solder hinge detail"
      },
      {
        url: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80",
        alt: "Close up of laser-serialized temple stems on Kyoto Monolith"
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
        alt: "Portrait of architect wearing LUMEN Kyoto Monolith titanium glasses"
      }
    ],
    shortDescription: "Milled from a single monolithic billet of reclaimed Japanese aerospace titanium. Zero solder seams, integrated spring pivots, and laser-serialized temple stems.",
    fullDescription: "The absolute summit of metallurgical precision. Rather than assembling disparate wires and plates, the Kyoto Monolith is carved directly from a solid block of reclaimed Grade 5 titanium via high-precision 5-axis CNC diamond tooling. There are zero soldered points, ensuring everlasting structural integrity.",
    highlights: [
      "Zero Solder Seams - Monolithic Billet Construction",
      "Diamond-Like Carbon (DLC) Scratchproof Molecular Coating",
      "Integrated Spring Lug Dampers",
      "Limited Edition of 300 Serialized Pieces Worldwide",
      "Includes Solid Aluminum Travel Vault with Serial Stamping"
    ],
    specs: {
      "Frame Material": "Monolithic Aerospace Titanium Billet (Grade 5)",
      "Hinge Mechanism": "Solid-State Integrated Spring Billet Pivot",
      "Lens Technology": "Zeiss DuraVision BlueProtect Multi-Layer",
      "Coating": "DLC (Diamond-Like Carbon) Plasma Deposition",
      "Country of Origin": "Kyoto & Sabae Precision Labs, Japan",
      "Sustainability Certificate": "Zero-Waste CNC Closed Loop Certification"
    }
  },
  {
    id: "orion-shield",
    name: "The Orion Solstice Wrap",
    tagline: "Panoramic Shield with High-Altitude Mineral Lenses",
    category: "sunglasses",
    categoryLabel: "Sunglasses",
    material: "hybrid",
    materialLabel: "Bio-Circular Polymer & Titanium Wireframe",
    price: 29900,
    originalPrice: 33000,
    rating: 4.88,
    reviewsCount: 64,
    badge: "Zero-Waste Formula",
    weight: "21.5g",
    dimensions: {
      lensWidth: "56 mm",
      bridgeWidth: "17 mm",
      templeLength: "140 mm"
    },
    colors: [
      { name: "Deep Matte Black", code: "#0E0E10", imageIdx: 0 },
      { name: "Amber Flame", code: "#A05822", imageIdx: 1 },
      { name: "Polar Frost", code: "#D8DFE5", imageIdx: 2 }
    ],
    lensOptions: [
      { id: "infrared-polar", name: "Full-Spectrum Infrared & Polarized Bronze", priceOffset: 0 },
      { id: "mirror-silver", name: "High-Altitude Silver Glacier Mirror", priceOffset: 3200 },
      { id: "prescription-wrap", name: "Digital Free-Form Polarized Prescription", priceOffset: 8900 }
    ],
    primaryImage: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
    detailImages: [
      {
        url: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Orion Solstice wrap sunglasses with deep bronze polarized mineral lenses"
      },
      {
        url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
        alt: "LUMEN Orion wrap sunglasses aerodynamic top curve and titanium brow"
      },
      {
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
        alt: "Detail of vented temple arms and titanium tension screws"
      },
      {
        url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
        alt: "Editorial lifestyle portrait of adventurer wearing LUMEN Orion wrap sunglasses outdoors"
      }
    ],
    shortDescription: "Sculptural wind-sculpted brow with continuous panoramic Zeiss lenses engineered for high-altitude clarity and coastal luminescence.",
    fullDescription: "Engineered for harsh reflections without sacrificing luxury poise. The Orion Solstice fuses bio-circular polymer extracted from castor beans with structural recycled titanium wire. The wrap geometry shields peripheral light rays while maintaining an ultra-lightweight poise.",
    highlights: [
      "Bio-Circular Castor-Bean Polymer Rim Structure",
      "Full Peripheral Glare Elimination with Base-6 Curvature",
      "Zeiss Infrared Deflection & Polarized Mineral Optics",
      "Micro-Perforated Anti-Fog Ventilation Channels",
      "Saltwater-Proof & Sweat-Resistant Finish"
    ],
    specs: {
      "Frame Material": "Bio-Based Polyamide & Grade 5 Recycled Titanium",
      "Hinge Mechanism": "Inverted Tension Cam Hinge",
      "Lens Technology": "Zeiss High-Altitude Polarized (Category 3-4 Protection)",
      "Coating": "Hydro-Oleophobic Mirror Multicoat",
      "Country of Origin": "Cadore & Sabae Collaborative Workshop",
      "Sustainability Certificate": "ISCC PLUS Certified Bio-Circular Feedstock"
    }
  }
];

// Helper to format prices in INR (Indian Rupee) format e.g. ₹28,500
function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

// Export for module or browser window
if (typeof window !== "undefined") {
  window.LUMEN_PRODUCTS = LUMEN_PRODUCTS;
  window.formatINR = formatINR;
}

