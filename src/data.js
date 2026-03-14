// ─────────────────────────────────────────
// DATA.JS — Edit semua konten di sini!
// ─────────────────────────────────────────

// ── TOOLS / SKILLS ──
// Gambar tools ada di /public/assets/tools/
import Tools1  from "/assets/tools/antigravity.png";
import Tools2  from "/assets/tools/reactjs.png";
import Tools3  from "/assets/tools/nextjs.png";
import Tools4  from "/assets/tools/tailwind.png";
import Tools5  from "/assets/tools/bootstrap.png";
import Tools6  from "/assets/tools/js.png";
import Tools7  from "/assets/tools/nodejs.png";
import Tools8  from "/assets/tools/github.png";
import Tools9  from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools20 from "/assets/tools/dart.svg";
import Tools21 from "/assets/tools/flutter.png";
import Tools22 from "/assets/tools/office365.png";
import Tools23 from "/assets/tools/mongodb.png";
import Tools24 from "/assets/tools/neo4j.png";


export const listTools = [
  { id: 1,  gambar: Tools1,  nama: "Antigravity",        ket: "Code Editor",        dad: "100"  },
  { id: 2,  gambar: Tools2,  nama: "React JS",           ket: "Framework",          dad: "200"  },
  { id: 3,  gambar: Tools3,  nama: "Next JS",            ket: "Framework",          dad: "300"  },
  { id: 4,  gambar: Tools4,  nama: "Tailwind CSS",       ket: "Framework",          dad: "400"  },
  { id: 5,  gambar: Tools5,  nama: "Bootstrap",          ket: "Framework",          dad: "500"  },
  { id: 6,  gambar: Tools6,  nama: "Javascript",         ket: "Language",           dad: "600"  },
  { id: 7,  gambar: Tools7,  nama: "Node JS",            ket: "Javascript Runtime", dad: "700"  },
  { id: 8,  gambar: Tools8,  nama: "Github",             ket: "Repository",         dad: "800"  },
  { id: 9,  gambar: Tools9,  nama: "Adobe Illustrator",  ket: "Design App",         dad: "900"  },
  { id: 10, gambar: Tools10, nama: "Canva",              ket: "Design App",         dad: "1000" },
  { id: 11, gambar: Tools11, nama: "Figma",              ket: "Design App",         dad: "1100" },
  { id: 12, gambar: Tools12, nama: "Kotlin",             ket: "Language",           dad: "1200" },
  { id: 13, gambar: Tools13, nama: "Firebase",           ket: "Database",           dad: "1300" },
  { id: 14, gambar: Tools14, nama: "HTML",               ket: "Language",           dad: "1400" },
  { id: 15, gambar: Tools15, nama: "CSS",                ket: "Language",           dad: "1500" },
  { id: 16, gambar: Tools16, nama: "TypeScript",         ket: "Language",           dad: "1600" },
  { id: 17, gambar: Tools17, nama: "PHP",                ket: "Language",           dad: "1700" },
  { id: 18, gambar: Tools18, nama: "Vite",               ket: "Framework",          dad: "1800" },
  { id: 19, gambar: Tools19, nama: "MySql",              ket: "Framework",          dad: "1900" },
  { id: 20, gambar: Tools20, nama: "Dart",               ket: "Language",           dad: "1900" },
  { id: 21, gambar: Tools21, nama: "Flutter",            ket: "Framework",          dad: "1900" },
  { id: 22, gambar: Tools22, nama: "Office 365",         ket: "Office Tools",       dad: "1900" },
  { id: 23, gambar: Tools23, nama: "MongoDB",            ket: "Database",           dad: "1900" },
  { id: 24, gambar: Tools24, nama: "Neo4j",              ket: "Database",           dad: "1900" },
];


// ── PROJECTS ──
// Gambar project ada di /public/assets/proyek/
// Ganti gambar, judul, deskripsi, dan URL sesuai project kamu
import Proyek1 from "/assets/proyek/brewy.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Brewy",                          // ← Ganti judul
    subtitle: "",  // ← Ganti subtitle
    fullDescription: "Brewy POS is a personal project — a Point of Sale mobile application built for coffee shops and restaurants. It features a product catalog with category filters, cart management, QRIS digital payment integration, automatic receipt generation, and a transaction report dashboard with daily, weekly, and monthly filters. Built with Flutter, Firebase, and Dart.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/aryaptraderiz/Brewy",      // ← Ganti URL GitHub/Live
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Project 2",
    subtitle: "Deskripsi singkat project 2...",
    fullDescription: "Deskripsi lengkap project 2.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/aryaptraderiz",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Project 3",
    subtitle: "Deskripsi singkat project 3...",
    fullDescription: "Deskripsi lengkap project 3.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/aryaptraderiz",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Project 4",
    subtitle: "Deskripsi singkat project 4...",
    fullDescription: "Deskripsi lengkap project 4.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/aryaptraderiz",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Project 5",
    subtitle: "Deskripsi singkat project 5...",
    fullDescription: "Deskripsi lengkap project 5.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/aryaptraderiz",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Project 6",
    subtitle: "Deskripsi singkat project 6...",
    fullDescription: "Deskripsi lengkap project 6.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/aryaptraderiz",
    dad: "600",
  },
];
