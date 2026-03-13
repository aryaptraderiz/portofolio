# 🚀 Portfolio — Arya Putra Deriz

Portfolio website built with React + Vite + TailwindCSS.

---

## 📁 Struktur File yang Perlu Diubah

### 1. `src/data.js` — **DATA UTAMA**
Edit file ini untuk mengubah:
- **listTools** → tools/skills yang kamu kuasai
- **listProyek** → project-project kamu (judul, deskripsi, gambar, URL)

### 2. `src/App.jsx` — **KONTEN HALAMAN**
Cari komentar `// ⬇️` untuk tahu bagian mana yang perlu diganti:
- Nama kamu
- Bio/deskripsi
- Stats (jumlah project, tahun pengalaman, GPA)
- Email untuk form contact (formsubmit.co)

### 3. `public/assets/` — **FOTO & FILE**
| File | Kegunaan |
|------|----------|
| `arya-card.png` | Foto di Profile Card (hero) |
| `arya-lanyard.png` | Foto di ID Card / Lanyard (About) |
| `CV.pdf` | File CV untuk tombol Download CV |
| `proyek/proyek1-6.jpg` | Foto project (ganti dengan screenshot project kamu) |

---

## 🛠️ Cara Jalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## 🌐 Deploy ke GitHub Pages

1. Ganti `homepage` di `package.json` jadi:
   ```
   "https://USERNAME_GITHUB_KAMU.github.io/portofolio"
   ```
2. Jalankan:
   ```bash
   npm run build
   npm run deploy
   ```

---

## ✏️ Quick Edit Checklist

- [ ] Ganti nama di `App.jsx`
- [ ] Ganti bio di `App.jsx`  
- [ ] Ganti stats (project, experience, GPA) di `App.jsx`
- [ ] Ganti email form contact di `App.jsx`
- [ ] Update project di `data.js`
- [ ] Tambah/hapus tools di `data.js`
- [ ] Upload foto project ke `public/assets/proyek/`
- [ ] Upload CV ke `public/assets/CV.pdf`
- [ ] Update `homepage` di `package.json`
