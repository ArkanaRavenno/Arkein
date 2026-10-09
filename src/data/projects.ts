export interface CaseStudy {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  stack: string[];
  challenge: string;
  architecture: string;
  impactBadge: string;
  impactDesc: string;
  repoUrl: string;
  branch?: string;
  role?: string;
}

export const projects: CaseStudy[] = [
  {
    id: "drivepass",
    tag: "SYSTEMS ARCHITECTURE / LOGISTICS",
    tagColor: "text-sky-frost",
    title: "DrivePass: Smart Logistics Dispatch & Routing Architecture",
    stack: ["Next.js 14", "TypeScript", "Prisma ORM", "PostgreSQL", "Distance Matrix", "MapLibre GL"],
    challenge: "Pengelolaan alur dispatch logistik armada terdistribusi di Jawa Timur dengan kalkulasi matriks jarak akurat, sinkronisasi rute multi-hub, dan skema database relasional yang handal.",
    architecture: "Dibangun dengan arsitektur Next.js 14 App Router terpadu dengan Prisma ORM & PostgreSQL. Mengintegrasikan Distance Matrix Service untuk optimasi rute hub logistik dan automated data seeding.",
    impactBadge: "Sub-100ms Routing Latency & 100% Type-Safe",
    impactDesc: "Automasi rute pengiriman multi-titik Jawa Timur dengan perhitungan jarak instan dan integritas data skema relasional yang teruji.",
    repoUrl: "https://github.com/Septi-DmsDev/DrivePass",
    branch: "Ivan",
    role: "Core Engineer & Dispatch Architect"
  },
  {
    id: "arkein",
    tag: "MODERN WEB / INTERACTION DESIGN",
    tagColor: "text-arctic-cobalt",
    title: "Arkein: High-Performance Portfolio & Kinetic Interface",
    stack: ["Astro", "Tailwind CSS v4", "GSAP Physics", "TypeScript", "Zero-Bloat UI"],
    challenge: "Mewujudkan antarmuka futuristik dengan efek glassmorphism dinamis, mikro-haptik, dan simulasi fisika tanpa mengorbankan performa Core Web Vitals atau beban payload JavaScript.",
    architecture: "Island Architecture berbasis Astro dikombinasikan dengan GSAP hardware-accelerated animations, modular canvas shaders, dan arsitektur DOM adaptif dengan ukuran bundle minimal.",
    impactBadge: "60 FPS Motion & 100/100 Lighthouse",
    impactDesc: "Rendering instan tanpa frame drop, latensi respon sub-10ms, dan 100% skor performa pada audit Core Web Vitals.",
    repoUrl: "https://github.com/ArkanaRavenno/Arkein",
    branch: "main",
    role: "Creator & Full-Stack Architect"
  },
  {
    id: "festika",
    tag: "FRONTEND CRAFTSMANSHIP / COMPETITION",
    tagColor: "text-pure-platinum",
    title: "Festika Platform: Interactive Showcase & Utility Engine",
    stack: ["HTML5", "CSS3 / Tailwind", "JavaScript ES6", "Semantic Web", "Tooling"],
    challenge: "Menyediakan platform kompetisi dan kalkulator interaktif yang cepat, intuitif, dan responsif sempurna di segala perangkat tanpa dependensi library eksternal berlebih.",
    architecture: "Frontend semantik terstruktur rapi dengan kalkulator interaktif berbasis Vanilla JavaScript ES6, optimasi pipeline Tailwind CSS, dan asset compression untuk loading instan.",
    impactBadge: "100% Client-Side Interactive Engine",
    impactDesc: "Kalkulator interaktif responsif instan tanpa server roundtrip, user navigation mulus, dan kesiapan operasional lomba.",
    repoUrl: "https://github.com/ArkanaRavenno/festika-project",
    branch: "main",
    role: "Frontend Developer"
  }
];

