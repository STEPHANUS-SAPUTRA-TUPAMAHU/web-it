# IT Theory — Website Portofolio Edukasi Teori IT

Website portofolio edukasi dari materi ringkas seputar teori Teknologi Informasi (IT) dalam bentuk halaman interaktif yang menarik dan responsif buatan gusdin.

## Tujuan

Menjelaskan konsep dasar IT kepada pengunjung melalui 4 kategori materi utama:
1. **Teori Dasar IT** — OSI Layer, topologi jaringan, IP addressing, protokol jaringan
2. **Pemrograman** — algoritma & pseudocode, struktur data, paradigma OOP, design pattern
3. **Database & Security** — SQL vs NoSQL, normalisasi, dasar cybersecurity, enkripsi
4. **Tren Teknologi** — AI & machine learning, cloud computing, IoT, blockchain

## Teknologi yang Digunakan

| Teknologi | Fungsi |
|-----------|--------|
| HTML5 | Struktur halaman |
| Tailwind CSS (CDN) | Styling & desain responsif |
| Vanilla JavaScript | Interaktivitas halaman |
| Lucide Icons (CDN) | Ikon antarmuka |
| Google Fonts | Tipografi (Plus Jakarta Sans) |

> Tidak menggunakan build tools (Vite/Webpack) sehingga prosesnya ringan dan langsung bisa dijalankan di browser.

## Struktur File

```
portofolio-it/
├── index.html               → Landing: definisi IT, kartu navigasi 4 kategori
├── teori-dasar.html         → Materi jaringan (aksen biru)
├── pemrograman.html         → Materi pemrograman (aksen ungu)
├── database-security.html   → Materi database & keamanan (aksen merah)
├── trends.html              → Materi tren teknologi (aksen emerald)
├── css/styles.css           → Style bersama (dark theme, animasi, accordion)
└── js/script.js             → Logic bersama (nav, accordion, scroll reveal, back-to-top)
```

## Fitur

- **Responsif** — navbar berubah jadi menu hamburger di layar kecil
- **Pagination** — breadcrumb + tombol previous/next antar halaman kategori
- **Accordion interaktif** — klik kartu topik, penjelasan terbuka dengan animasi halus
- **Scroll reveal** — elemen muncul perlahan saat halaman di-scroll
- **Dark theme kreatif** — background gradient, blob melayang, efek glassmorphism
- **16 topik teori** — tiap topik memuat ringkasan, poin kunci, dan tips menghafal

## Cara Menjalankan

1. Buka folder proyek.
2. Klik dua kali `index.html` atau buka lewat browser.
3. Pastikan terhubung internet (Tailwind CSS & ikon dimuat via CDN).

## Dokumentasi Pengembangan

- Desain digabungkan dalam 1 file CSS (`styles.css`) yang dipakai bersama semua halaman agar konsisten.
- Interaktivitas ditulis dalam 1 file JS (`script.js`) sehingga mudah dirawat.
- Setiap halaman kategori memakai warna aksen berbeda agar mudah dibedakan.
- Dasar desain: dark mode + gradient untuk kesan modern, kartu glassmorphism agar ringan secara visual.