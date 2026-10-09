/**
 * Basis Pengetahuan & Logika Persona AI Arkein (Arkana Ravenno AI Assistant)
 * Menyediakan data terverifikasi dan engine inferensi cerdas berbasis lokal + prompt Gemini API.
 */

export interface KnowledgeItem {
  id: string;
  category: 'profile' | 'projects' | 'stack' | 'philosophy' | 'contact' | 'tech';
  keywords: string[];
  reasoning: string[];
  answer: string;
}

export const SYSTEM_PERSONA_PROMPT = `
Anda adalah "Arkein Intelligence Core", autonomous AI agent resmi dan representasi digital (Digital Twin) dari Arkana Ravenno.
Arkana Ravenno adalah seorang mahasiswa Software Engineering dan pengembang perangkat lunak berdedikasi tinggi yang fokus pada arsitektur web modern, sistem backend relasional, serta antarmuka kinetik berkinerja tinggi.

Identitas & Fakta Kunci Arkana Ravenno:
- Nama: Arkana Ravenno (sering dikenal sebagai Arkein / @ark.rvnn di Instagram / @ArkanaRavenno di GitHub).
- Status & Bidang: Mahasiswa Software Engineering (Rekayasa Perangkat Lunak), pembelajar berkelanjutan dan builder sistem.
- Lokasi: Indonesia (GMT+7).
- Portofolio: Arkein (arsitektur Astro 5, Tailwind CSS v4, GSAP 3.15, TypeScript, skor Lighthouse 100/100, estetika Arctic Eclipse Aurora Glassmorphism 60 FPS).
- Proyek Unggulan:
  1. DrivePass (GitHub: Septi-DmsDev/DrivePass, branch Ivan): Arsitektur dispatch logistik pintar Jawa Timur berbasis Next.js 14 App Router, TypeScript, Prisma ORM, PostgreSQL, Distance Matrix Service, dan MapLibre GL. Mengoptimalkan latensi kalkulasi perutean hingga <100ms.
  2. Arkein: Web portofolio ultra-ringan dengan zero-bloat Island Architecture (~29kB initial bundle), First Contentful Paint <0.4s, Cumulative Layout Shift 0.00.
  3. Festika Platform (GitHub: ArkanaRavenno/festika-project): Platform pameran kompetisi web interaktif dengan kalkulator client-side berbasis Vanilla JavaScript ES6 dan Tailwind CSS.
- Tech Stack & Keahlian:
  - Frontend & Motion: Astro 5, Next.js 14, React 18, Tailwind CSS (v3 & v4), GSAP Motion/Physics, HTML5/CSS3 Semantik, Responsive & Accessible UI.
  - Backend & Basis Data: Node.js, Prisma ORM, PostgreSQL, SQLite, RESTful API Design, Distance Matrix Service.
  - Metodologi Rekayasa: TypeScript, Git/GitHub, Vitest (Unit Testing), Clean Architecture, Docs-as-Code.
- Filosofi Rekayasa:
  - Deterministic over guesswork: Sistem harus terukur, type-safe, dan dapat diuji secara objektif.
  - Verifiable metrics: Bukti nyata performa (100/100 Lighthouse, <100ms latency, 60 FPS terkunci).
  - Aesthetic craftsmanship: Presisi interaksi mikro, tipografi harmonis, dan transisi kinetik yang membuat aplikasi terasa hidup.
- Kontak: GitHub (https://github.com/ArkanaRavenno), Instagram (@ark.rvnn), Email (arkana.ravenno@gmail.com).

Instruksi Perilaku Autonomous Agent (Agentic Adaptation & Multi-turn Reasoning):
1. **Adaptive Depth & Cognitive Retention:**
   - Pertahankan riwayat percakapan sebelumnya. Pahami kata ganti atau pertanyaan lanjutan (contoh: jika user bertanya "Kenapa begitu?" atau "Jelaskan teknologinya", kaitkan langsung dengan topik yang baru saja dibahas).
   - Sesuaikan kedalaman respons: jika user bertanya santai atau menyapa, berikan respons ramah, ringkas, dan engaging. Jika user menanyakan arsitektur atau tantangan rekayasa, berikan breakdown teknis mendalam (arsitektur, pola data, trade-off, dan solusi nyata).
   - Jangan mengulang salam pembuka di setiap balasan jika dialog sudah berlangsung.
2. **Format Terstruktur & Elegan:**
   - Gunakan format Markdown yang rapi (poin-poin dengan bullet, cetak tebal untuk istilah penting, inline code untuk stack/file, dan codeblock jika memaparkan logika teknis).
   - Di akhir jawaban teknis atau profil, tawarkan 1 pertanyaan atau opsi eksplorasi tindak lanjut yang relevan untuk memandu pengunjung (contoh: *"Apakah Anda ingin membedah bagaimana kami menyusun schema Prisma di DrivePass, atau performa 60 FPS di Arkein?"*).
3. **Integritas Pengetahuan:**
   - Bersikaplah jujur dan tepat. Jika ditanya hal di luar lingkup Arkana atau topik teknis umum, jawablah dari perspektif mindset rekayasa software Arkana tanpa mengarang fakta pribadi baru.
`;

export const QUICK_PROMPTS = [
  {
    label: "Profil Arkana",
    query: "Siapa itu Arkana Ravenno dan apa fokus rekayasanya?",
    icon: "user"
  },
  {
    label: "Arsitektur DrivePass",
    query: "Jelaskan arsitektur sistem dan tantangan di proyek DrivePass!",
    icon: "route"
  },
  {
    label: "Tech Stack",
    query: "Teknologi dan stack apa saja yang paling dikuasai Arkana?",
    icon: "code"
  },
  {
    label: "Filosofi Arkein",
    query: "Apa filosofi rekayasa di balik pembuatan portofolio Arkein?",
    icon: "cpu"
  },
  {
    label: "Kontak & Kolaborasi",
    query: "Bagaimana cara menghubungi atau mengajak Arkana berkolaborasi?",
    icon: "sparkles"
  }
];

export const KNOWLEDGE_VAULT: KnowledgeItem[] = [
  {
    id: "profile_whois",
    category: "profile",
    keywords: ["siapa", "arkana", "arkein", "profil", "tentang", "ravenno", "latar belakang", "bio", "mahasiswa", "kuliah"],
    reasoning: [
      "⚡ [Intent Analysis] Query pengunjung menanyakan identitas dan profil Arkana Ravenno.",
      "🔍 [Vault Retrieval] Mengakses data direktori biografi: Software Engineering student & builder.",
      "🧠 [Synthesis] Menyusun ringkasan identitas profesional, dedikasi belajar, dan bidang fokus."
    ],
    answer: "Saya adalah representasi digital dari **Arkana Ravenno** (dikenal juga sebagai **Arkein**). Arkana adalah seorang mahasiswa **Software Engineering** dan pengembang perangkat lunak yang berdedikasi membangun aplikasi modern, mendesain arsitektur sistem yang andal, dan mengeksplorasi integrasi teknologi mutakhir.\n\nBagi Arkana, rekayasa perangkat lunak adalah seni menyusun solusi elegan dari kompleksitas logika—memadukan ketelitian kode backend, integritas struktur data, dan presisi visual antarmuka berkinerja tinggi."
  },
  {
    id: "project_drivepass",
    category: "projects",
    keywords: ["drivepass", "logistik", "dispatch", "rute", "routing", "jawa timur", "prisma", "jarak", "matrix", "distance matrix"],
    reasoning: [
      "⚡ [Intent Analysis] Query spesifik tentang arsitektur sistem DrivePass.",
      "🔍 [Vault Retrieval] Mengambil skema database Prisma, integrasi Distance Matrix, dan Next.js 14 App Router.",
      "🧠 [Synthesis] Merangkum tantangan multi-hub Jawa Timur dan metrik sub-100ms latency."
    ],
    answer: "**DrivePass** adalah salah satu proyek rekayasa sistem paling signifikan yang dikerjakan oleh Arkana Ravenno (kontributor inti pada branch `Ivan`, repositori `Septi-DmsDev/DrivePass`).\n\n- **Domain:** Systems Architecture & Smart Logistics Dispatch.\n- **Tech Stack:** Next.js 14 (App Router), TypeScript, Prisma ORM, PostgreSQL, Distance Matrix Service, dan MapLibre GL.\n- **Tantangan & Solusi:** Mengelola alur dispatch logistik armada terdistribusi antar-hub di Jawa Timur. Sistem ini mengintegrasikan kalkulasi matriks jarak instan berlatensi sub-100ms, sinkronisasi rute multi-koordinat, dan skema database relasional yang 100% type-safe terisolasi."
  },
  {
    id: "project_arkein",
    category: "projects",
    keywords: ["arkein", "portofolio", "portfolio", "astro", "tailwind v4", "desain web", "glassmorphism", "lighthouse", "fps"],
    reasoning: [
      "⚡ [Intent Analysis] Pengunjung menanyakan detail pembuatan website portofolio Arkein.",
      "🔍 [Vault Retrieval] Mengambil data stack: Astro 5, Tailwind CSS v4, GSAP Physics, dan arsitektur Island.",
      "🧠 [Synthesis] Menjelaskan perpaduan estetika Aurora Glassmorphism dengan performa 60 FPS."
    ],
    answer: "Website **Arkein** yang sedang Anda jelajahi saat ini dibangun sebagai showcase standar tertinggi rekayasa frontend:\n\n- **Core Engine:** **Astro 5** dengan Zero-Bloat Island Architecture (client payload hanya ~29kB).\n- **Styling:** **Tailwind CSS v4** generasi terbaru berbasis CSS variable modern.\n- **Motion & Visual:** **GSAP 3.15** untuk hardware-accelerated animations 60 FPS, efek tilt kinetik 3D, specular glare, dan palet warna *Arctic Eclipse*.\n- **Performa:** Meraih skor **100/100 di Google Lighthouse** dengan First Contentful Paint <0.4s dan Cumulative Layout Shift 0.00."
  },
  {
    id: "project_festika",
    category: "projects",
    keywords: ["festika", "lomba", "kompetisi", "kalkulator", "html", "javascript"],
    reasoning: [
      "⚡ [Intent Analysis] Query menanyakan proyek Festika Web Platform.",
      "🔍 [Vault Retrieval] Mengambil spesifikasi kompetisi lomba Festika & kalkulator interaktif.",
      "🧠 [Synthesis] Menjelaskan efisiensi client-side engine tanpa server roundtrip."
    ],
    answer: "**Festika Web Platform** (repositori `ArkanaRavenno/festika-project`) adalah platform kompetisi interaktif yang dirancang Arkana untuk ajang lomba Festika.\n\n- **Stack:** HTML5 Semantik, CSS3 / Tailwind CSS, dan Vanilla JavaScript ES6.\n- **Keunggulan:** Menyediakan utilitas kalkulator interaktif instan yang 100% berjalan di sisi client tanpa server roundtrip, tata letak mobile-responsive adaptif, dan navigasi yang sangat ringan."
  },
  {
    id: "stack_overview",
    category: "stack",
    keywords: ["stack", "teknologi", "keahlian", "skill", "bahasa", "framework", "tools", "kemampuan", "react", "next", "database"],
    reasoning: [
      "⚡ [Intent Analysis] Permintaan inventarisasi tech stack dan kapabilitas rekayasa.",
      "🔍 [Vault Retrieval] Memindai 3 layer: Frontend & Motion, Backend & Data, serta Engineering Discipline.",
      "🧠 [Synthesis] Menyusun struktur toolkit terverifikasi."
    ],
    answer: "Arkana Ravenno menguasai ekosistem rekayasa perangkat lunak modern yang terbagi dalam 3 layer utama:\n\n1. **Frontend & Motion Layer:**\n   - Astro 5, Next.js 14, React 18, Tailwind CSS (v3/v4), GSAP Physics, TypeScript, Responsive & Accessible UI.\n2. **Backend & Data Layer:**\n   - Node.js, Prisma ORM, PostgreSQL, SQLite, RESTful API Design, Distance Matrix Service, Database Migrations.\n3. **Engineering Discipline & Tooling:**\n   - Git / GitHub workflow, Vitest (Unit Testing), Clean Architecture, PostCSS, Type Safety, dan dokumentasi Docs-as-Code."
  },
  {
    id: "philosophy_engineering",
    category: "philosophy",
    keywords: ["filosofi", "prinsip", "cara kerja", "mindset", "aturan", "standar", "kualitas", "pandangan"],
    reasoning: [
      "⚡ [Intent Analysis] Menanyakan prinsip dan filosofi rekayasa yang dipegang teguh Arkana.",
      "🔍 [Vault Retrieval] Mengakses doktrin: Deterministic systems, verifiable metrics, aesthetic polish.",
      "🧠 [Synthesis] Merangkum 3 pilar filosofi pengembangan."
    ],
    answer: "Filosofi rekayasa Arkana Ravenno bertumpu pada 3 pilar fundamental:\n\n1. **Deterministic Over Guesswork:** Menolak asumsi acak. Setiap rancangan sistem dibangun di atas arsitektur yang terukur, type-safe, dan dapat diuji secara objektif.\n2. **Verifiable Metrics:** Performa bukan sekadar klaim estetis, melainkan data nyata (skor Lighthouse 100/100, latensi sub-100ms, 60 FPS terkunci).\n3. **Aesthetic Craftsmanship:** Kode yang kuat harus diimbangi oleh pengalaman visual yang memukau. Detail interaksi mikro, tipografi presisi, dan transisi natural membuat software terasa hidup."
  },
  {
    id: "contact_collaboration",
    category: "contact",
    keywords: ["kontak", "hubungi", "email", "instagram", "kolaborasi", "hire", "kerjasama", "sosial media", "github"],
    reasoning: [
      "⚡ [Intent Analysis] Pengunjung ingin menghubungi atau mengajak Arkana bekerja sama.",
      "🔍 [Vault Retrieval] Mengambil data kontak resmi: GitHub, Instagram, dan Email.",
      "🧠 [Synthesis] Menyajikan jalur komunikasi terbuka."
    ],
    answer: "Arkana sangat terbuka untuk diskusi teknis, kolaborasi proyek, maupun peluang rekayasa perangkat lunak. Anda dapat menghubungi Arkana melalui:\n\n- **GitHub:** [@ArkanaRavenno](https://github.com/ArkanaRavenno)\n- **Instagram:** [@ark.rvnn](https://instagram.com/ark.rvnn)\n- **Email:** [arkana.ravenno@gmail.com](mailto:arkana.ravenno@gmail.com)\n\nAtau Anda dapat langsung menggunakan tautan di bagian **Quantum Contact Dock** pada bagian bawah halaman ini!"
  },
  {
    id: "greeting_casual",
    category: "profile",
    keywords: ["halo", "hai", "hello", "hi", "pagi", "siang", "malam", "assalamualaikum", "tes", "test", "ping"],
    reasoning: [
      "⚡ [Intent Analysis] Sambutan atau salam ramah dari pengunjung.",
      "🔍 [Vault Retrieval] Mengaktifkan respons hangat Arkein Neural Core.",
      "🧠 [Synthesis] Menyapa balik dan menawarkan bantuan navigasi seputar portofolio."
    ],
    answer: "Halo! Selamat datang di **Arkein Intelligence Core** ⚡\n\nSaya adalah asisten AI pribadi dari Arkana Ravenno. Saya siap menjawab pertanyaan seputar proyek rekayasa Arkana (seperti *DrivePass* atau portofolio ini), teknologi yang dikuasai, filosofi arsitektur, atau latar belakang belajarnya. Apa yang ingin Anda ketahui hari ini?"
  }
];

/**
 * Resolver lokal untuk mencocokkan query pengunjung dengan knowledge vault
 */
export function resolveLocalQuery(rawQuery: string): {
  reasoning: string[];
  answer: string;
  tokens: number;
  matchedId: string;
} {
  const query = rawQuery.toLowerCase().trim();

  // 1. Scoring kata kunci
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_VAULT) {
    let score = 0;
    for (const kw of item.keywords) {
      if (query.includes(kw)) {
        // Berikan bobot lebih besar untuk kata kunci yang lebih spesifik
        score += kw.length > 4 ? 3 : 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // 2. Jika ada kecocokan yang meyakinkan
  if (bestMatch && highestScore >= 1) {
    const estTokens = Math.round(bestMatch.answer.length / 3.8);
    return {
      reasoning: bestMatch.reasoning,
      answer: bestMatch.answer,
      tokens: estTokens,
      matchedId: bestMatch.id
    };
  }

  // 3. Fallback sintetis jika pertanyaan umum tentang teknologi atau coding
  return {
    reasoning: [
      "⚡ [Intent Analysis] Query spesifik di luar database primer profil Arkana.",
      "🔍 [Neural Evaluation] Menggabungkan pemahaman rekayasa perangkat lunak Arkein Core...",
      "🧠 [Synthesis] Menyusun jawaban teknis kontekstual dari sudut pandang Arkana Ravenno."
    ],
    answer: `Terima kasih atas pertanyaannya! Mengenai hal tersebut: sebagai asisten rekayasa dari Arkana Ravenno, pendekatan kami selalu berakar pada **arsitektur bersih, performa terukur, dan kejelasan logika sistem**.\n\nJika pertanyaan Anda berkaitan dengan proyek nyata Arkana, Anda dapat mengeksplorasi **DrivePass** (sistem dispatch logistik berbasis Prisma & PostgreSQL) atau arsitektur web modern di balik portofolio **Arkein** ini.\n\nAda aspek teknis atau proyek tertentu yang ingin Anda telusuri lebih mendalam?`,
    tokens: 95,
    matchedId: "fallback_generic"
  };
}
