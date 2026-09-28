export type ProjectKey = "logo" | "ad" | "carousel" | "linkedin" | "print" | "brand";

export interface GalleryItem {
  img: string;
  label: string;
  title?: string;
  desc?: string;
  tags?: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Project {
  cat: string;
  cardName: string;
  count: string;
  colSpan: number;
  line1: string;
  line2Prefix: string;
  line2Em: string;
  line2Suffix: string;
  desc: string;
  tags: string[];
  deliverables: string;
  tools: string;
  clients: string;
  turnaround: string;
  image: string;
  gallery: GalleryItem[];
  process: ProcessStep[];
  next: ProjectKey;
}

export const PROJECTS: Record<ProjectKey, Project> = {
  logo: {
    cat: "Logo Design",
    cardName: "Brand Marks & Wordmarks",
    count: "6 Projects",
    colSpan: 4, // Equal width for 3-column layout
    line1: "Brand Marks &",
    line2Prefix: "",
    line2Em: "Wordmarks",
    line2Suffix: "",
    desc: "Distinctive logos built to last — from minimal wordmarks to complex icon marks. Each design is delivered in all formats for print and digital use.",
    tags: ["Logo", "Wordmark", "Icon", "Branding", "Identity"],
    deliverables: "Full logo package (AI, PNG, SVG)",
    tools: "Illustrator, Figma",
    clients: "Startups, SMEs, Coaches",
    turnaround: "3–5 Days",
    image: "/images/logo-design-cover.png",
    gallery: [
      { img: "https://picsum.photos/seed/logo-1/1200/800", label: "Concept Sketch" },
      { img: "https://picsum.photos/seed/logo-2/1000/750", label: "Icon Mark" },
      { img: "https://picsum.photos/seed/logo-3/1000/750", label: "Wordmark" },
      { img: "https://picsum.photos/seed/logo-4/1000/750", label: "Color Variations" },
      { img: "https://picsum.photos/seed/logo-5/1000/750", label: "Application Mockup" },
    ],
    process: [
      { num: "01", title: "Discovery", desc: "Deep dive into your brand personality, values, competitors and target audience." },
      { num: "02", title: "Concept", desc: "Sketching 3–5 initial directions, then refining the strongest concept digitally." },
      { num: "03", title: "Final Delivery", desc: "Full logo package in all sizes, formats and color variations for every use case." },
    ],
    next: "carousel",
  },
  ad: {
    cat: "Ad Creatives",
    cardName: "Social & Digital Ads",
    count: "8 Projects",
    colSpan: 4,
    line1: "Social &",
    line2Prefix: "",
    line2Em: "Digital Ads",
    line2Suffix: "",
    desc: "High-converting ad creatives for Facebook, Instagram and Google. Each ad is designed to stop the scroll, communicate the offer and drive clicks.",
    tags: ["Facebook Ads", "Instagram", "Google Display", "Conversion"],
    deliverables: "Ad sets in all sizes",
    tools: "Photoshop, Figma, Canva",
    clients: "E-commerce, Agencies",
    turnaround: "1–2 Days",
    image: "/images/ad-creative.png",
    gallery: [
      { img: "https://picsum.photos/seed/ad-1/1200/800", label: "Square Ad" },
      { img: "https://picsum.photos/seed/ad-2/1000/750", label: "Story Ad" },
      { img: "https://picsum.photos/seed/ad-3/1000/750", label: "Landscape Ad" },
      { img: "https://picsum.photos/seed/ad-4/1000/750", label: "Carousel Ad" },
      { img: "https://picsum.photos/seed/ad-5/1000/750", label: "Retargeting Ad" },
    ],
    process: [
      { num: "01", title: "Offer Analysis", desc: "Understanding the product, audience and desired action before designing the first pixel." },
      { num: "02", title: "Visual Hierarchy", desc: "Structuring headline, visual, and CTA for maximum impact in under 3 seconds." },
      { num: "03", title: "Size Variations", desc: "Delivering all required ad sizes — square, story, landscape — ready to upload." },
    ],
    next: "print",
  },
  carousel: {
    cat: "Carousel Design",
    cardName: "Instagram & LinkedIn Carousels",
    count: "12 Carousels",
    colSpan: 4,
    line1: "Instagram &",
    line2Prefix: "",
    line2Em: "LinkedIn",
    line2Suffix: " Carousels",
    desc: "Scroll-stopping multi-slide content designed for coaches, founders and personal brands. Each carousel tells a story — from hook slide to CTA — with consistent typography, color and layout.",
    tags: ["Instagram", "LinkedIn", "Typography", "Layout", "Brand Voice"],
    deliverables: "10-slide carousel sets",
    tools: "Figma, Canva, Adobe",
    clients: "Coaches, Founders",
    turnaround: "2–3 Days",
    image: "/images/carousel.png",
    gallery: [
      { img: "https://picsum.photos/seed/carousel-1/1200/800", label: "Slide 01 — Hook" },
      { img: "https://picsum.photos/seed/carousel-2/1000/750", label: "Slide 02 — Problem" },
      { img: "https://picsum.photos/seed/carousel-3/1000/750", label: "Slide 03 — Solution" },
      { img: "https://picsum.photos/seed/carousel-4/1000/750", label: "Slide 04 — Value" },
      { img: "https://picsum.photos/seed/carousel-5/1000/750", label: "Slide 05 — CTA" },
    ],
    process: [
      { num: "01", title: "Brief & Research", desc: "Understanding your brand voice, audience and goal for each carousel before touching any design tool." },
      { num: "02", title: "Layout & Copy Structure", desc: "Structuring slides for maximum scroll-through — hook, body, value, and a strong CTA on the final slide." },
      { num: "03", title: "Design & Deliver", desc: "Applying typography, color, and visuals to create a cohesive set that feels on-brand across every slide." },
    ],
    next: "linkedin",
  },
  linkedin: {
    cat: "Personal Branding",
    cardName: "Banners, Covers & Profile Design",
    count: "5 Projects",
    colSpan: 4,
    line1: "Banners, Covers",
    line2Prefix: "& ",
    line2Em: "Profile Design",
    line2Suffix: "",
    desc: "Complete LinkedIn visual presence for coaches, founders and executives. From profile banners to featured section graphics — everything designed to build authority.",
    tags: ["LinkedIn", "Personal Brand", "Banner", "Profile", "Executive"],
    deliverables: "Banner + profile kit",
    tools: "Figma, Photoshop, Canva",
    clients: "Coaches, CEOs, Executives",
    turnaround: "1–2 Days",
    image: "/images/brand-identity.png",
    gallery: [
      { img: "https://picsum.photos/seed/linkedin-1/1200/800", label: "Profile Banner" },
      { img: "https://picsum.photos/seed/linkedin-2/1000/750", label: "Featured Graphic" },
      { img: "https://picsum.photos/seed/linkedin-3/1000/750", label: "Post Template" },
      { img: "https://picsum.photos/seed/linkedin-4/1000/750", label: "Cover Frame" },
      { img: "https://picsum.photos/seed/linkedin-5/1000/750", label: "Highlight Card" },
    ],
    process: [
      { num: "01", title: "Brand Audit", desc: "Reviewing your current LinkedIn presence and identifying gaps in your visual identity." },
      { num: "02", title: "Design Direction", desc: "Choosing typography, color and layout that communicates authority and professionalism." },
      { num: "03", title: "Full Kit Delivery", desc: "Banner, profile frame, featured graphics and post templates — all in one package." },
    ],
    next: "brand",
  },
  print: {
    cat: "Print Media",
    cardName: "Flyers, Brochures & Banners",
    count: "10 Projects",
    colSpan: 4,
    line1: "Flyers, Brochures",
    line2Prefix: "& ",
    line2Em: "Banners",
    line2Suffix: "",
    desc: "Print-ready designs for events, businesses and marketing campaigns. Every file is delivered at full resolution, properly set up for professional printing.",
    tags: ["Flyer", "Brochure", "Banner", "Print-Ready", "CMYK"],
    deliverables: "Print-ready PDF + source files",
    tools: "InDesign, Illustrator, Photoshop",
    clients: "Events, SMEs, Retail",
    turnaround: "2–4 Days",
    image: "/images/print-media.png",
    gallery: [
      { img: "https://picsum.photos/seed/print-1/1200/800", label: "Event Flyer" },
      { img: "https://picsum.photos/seed/print-2/1000/750", label: "Tri-fold Brochure" },
      { img: "https://picsum.photos/seed/print-3/1000/750", label: "Roll-up Banner" },
      { img: "https://picsum.photos/seed/print-4/1000/750", label: "Business Card" },
      { img: "https://picsum.photos/seed/print-5/1000/750", label: "Poster" },
    ],
    process: [
      { num: "01", title: "Brief & Format", desc: "Confirming print size, bleed, color mode and any printing requirements upfront." },
      { num: "02", title: "Layout Design", desc: "Creating an eye-catching layout that works both at full scale and as a thumbnail." },
      { num: "03", title: "Print-Ready Export", desc: "Exporting CMYK PDFs with bleed and crop marks, ready to send to any printer." },
    ],
    next: "logo",
  },
  brand: {
    cat: "Brand Identity",
    cardName: "Full Visual Systems",
    count: "4 Projects",
    colSpan: 4,
    line1: "Full Visual",
    line2Prefix: "",
    line2Em: "Brand Systems",
    line2Suffix: "",
    desc: "Complete brand identity packages that go beyond the logo — covering typography, color palette, iconography, brand guidelines and application mockups.",
    tags: ["Brand System", "Guidelines", "Typography", "Color", "Mockups"],
    deliverables: "Full brand guideline PDF",
    tools: "Figma, Illustrator, InDesign",
    clients: "Startups, Scale-ups",
    turnaround: "7–14 Days",
    image: "/images/linkedin-branding.png",
    gallery: [
      { img: "https://picsum.photos/seed/brand-1/1200/800", label: "Brand Guidelines" },
      { img: "https://picsum.photos/seed/brand-2/1000/750", label: "Color Palette" },
      { img: "https://picsum.photos/seed/brand-3/1000/750", label: "Typography System" },
      { img: "https://picsum.photos/seed/brand-4/1000/750", label: "Iconography" },
      { img: "https://picsum.photos/seed/brand-5/1000/750", label: "Application Mockup" },
    ],
    process: [
      { num: "01", title: "Brand Strategy", desc: "Defining positioning, personality, values and target audience before any design begins." },
      { num: "02", title: "Visual Identity", desc: "Logo, typography, color palette, icons and all visual assets created as a unified system." },
      { num: "03", title: "Brand Guidelines", desc: "A complete PDF guide showing correct and incorrect usage across all touchpoints." },
    ],
    next: "ad",
  },
};

export const GRID_ORDER: ProjectKey[] = ["logo", "ad", "carousel", "linkedin", "print", "brand"];