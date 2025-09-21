# H5 Official Store - E-Commerce Platform

## Deskripsi Proyek

**H5 Official Store** adalah platform e-commerce yang dibangun menggunakan Next.js untuk menjual merchandise dan tiket event dari grup idola H5. Proyek ini dikembangkan sebagai tugas kuliah untuk mata kuliah **Web Software Tools** dengan fokus pada implementasi modern web development menggunakan React, Next.js, dan Tailwind CSS.

## Tujuan Pembelajaran

Proyek ini dirancang untuk mempelajari:
- **Frontend Development** dengan React dan Next.js
- **Responsive Design** menggunakan Tailwind CSS
- **Component-Based Architecture** untuk maintainability
- **Modern JavaScript** (ES6+) dan React Hooks
- **E-commerce UI/UX** patterns dan best practices

## Struktur Proyek

```
h5-official-store2/
├── src/
│   └── app/
│       ├── components/          # Komponen yang dapat digunakan kembali
│       │   ├── Header.js       # Header dengan navigasi dan dropdown
│       │   ├── Footer.js       # Footer dengan informasi kontak
│       │   ├── ProductCard.js  # Card untuk menampilkan produk
│       │   ├── TicketCard.js   # Card untuk tiket event
│       │   └── ExperienceCard.js # Card untuk experience packages
│       ├── account/            # Halaman akun pengguna
│       ├── checkout/           # Halaman checkout dan pembayaran
│       ├── experience/         # Halaman experience packages
│       │   ├── message/        # Personal message experience
│       │   ├── special/        # Special event experience
│       │   ├── theater/        # Theater experience
│       │   └── vc/            # Video call experience
│       ├── merch/             # Halaman merchandise
│       ├── ticket/            # Halaman pembelian tiket
│       ├── layout.js          # Layout utama aplikasi
│       ├── page.js            # Halaman utama (homepage)
│       └── globals.css        # Global styles
├── public/                    # Static assets
├── package.json              # Dependencies dan scripts
└── README.md                 # Dokumentasi proyek
```

## Teknologi yang Digunakan

### Frontend Framework
- **Next.js 15.5.3** - React framework dengan App Router
- **React 19.1.0** - Library untuk membangun user interface
- **Turbopack** - Build tool yang cepat untuk development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library yang modern dan konsisten
- **Responsive Design** - Mobile-first approach

### Development Tools
- **ESLint** - Code linting untuk kualitas kode
- **PostCSS** - CSS processing
- **Hot Reload** - Development server dengan auto-reload

## Fitur Utama

### 🏠 Homepage
- **Auto-sliding Carousel** dengan 3 slide promosi
- **Kategori Produk** dengan filter horizontal
- **Produk Unggulan** dengan rating dan review
- **Event Terdekat** dengan countdown timer
- **Testimonial** dari customer
- **Newsletter Subscription** dengan benefit list

### 🛍️ E-commerce Features
- **Product Catalog** dengan kategori (Album, Lightstick, Pakaian, Aksesoris, Photocard)
- **Shopping Cart** dengan badge counter
- **User Points System** untuk loyalty program
- **Responsive Product Cards** dengan hover effects

### 🎫 Experience Packages
- **VC Experience** - Video call dengan member
- **Message Experience** - Pesan personal dari member
- **Special Event** - Acara eksklusif terbatas
- **Theater Experience** - Pengalaman teater khusus

### 🎨 UI/UX Features
- **Responsive Navigation** dengan dropdown menu
- **Mobile-First Design** yang optimal di semua device
- **Smooth Animations** dan transitions
- **Modern Color Scheme** (hitam, kuning, putih)
- **Interactive Elements** dengan hover states

## Cara Menjalankan Proyek

### Prerequisites
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Installation & Setup
```bash
# Clone atau download proyek
cd h5-official-store2

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser dan akses
# http://localhost:3000
```

### Build untuk Production
```bash
# Build aplikasi untuk production
npm run build

# Jalankan production server
npm start
```

## Struktur Komponen

### Header Component
- **Responsive Navigation** dengan hamburger menu untuk mobile
- **Dropdown Menu** untuk kategori ticket
- **User Points Display** dengan format angka Indonesia
- **Shopping Cart** dengan badge counter
- **Account Access** dengan icon user

### Homepage Features
- **Hero Section** dengan auto-sliding carousel
- **Product Categories** dengan horizontal scroll
- **Featured Products** dengan rating system
- **Event Countdown** dengan timer display
- **Customer Testimonials** dengan star rating
- **Newsletter Signup** dengan benefit highlights

## Konsep Pembelajaran

### 1. Modern React Patterns
- **Functional Components** dengan React Hooks
- **useState** untuk state management
- **useEffect** untuk side effects
- **Custom Hooks** untuk logic reuse

### 2. Next.js App Router
- **File-based Routing** dengan App Router
- **Layout Components** untuk shared UI
- **Metadata API** untuk SEO
- **Client Components** dengan 'use client' directive

### 3. Responsive Design
- **Mobile-First Approach** dengan Tailwind CSS
- **Breakpoint System** (sm, md, lg, xl)
- **Flexbox & Grid** untuk layout
- **Responsive Images** dan media queries

### 4. E-commerce UI Patterns
- **Product Cards** dengan hover effects
- **Shopping Cart** dengan state management
- **User Authentication** UI patterns
- **Checkout Flow** design

## Target Pembelajaran

Setelah menyelesaikan proyek ini, mahasiswa diharapkan dapat:

1. **Memahami** konsep modern web development dengan React dan Next.js
2. **Mengimplementasikan** responsive design menggunakan Tailwind CSS
3. **Membangun** component-based architecture yang maintainable
4. **Menggunakan** React Hooks untuk state management
5. **Mendesain** UI/UX yang user-friendly untuk e-commerce
6. **Mengoptimalkan** performa dan accessibility

## Catatan Pengembangan

- Proyek ini menggunakan **simulasi data** untuk demo purposes
- **Backend integration** dapat ditambahkan untuk fitur yang lebih lengkap
- **Payment gateway** dapat diintegrasikan untuk transaksi real
- **User authentication** dapat diimplementasikan dengan NextAuth.js
- **Database** dapat ditambahkan untuk data persistence

## Kontribusi

Proyek ini dikembangkan sebagai tugas kuliah. Untuk pengembangan lebih lanjut:
1. Fork repository
2. Buat feature branch
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

---

**Dibuat untuk:** Mata Kuliah Web Software Tools  
**Framework:** Next.js 15.5.3 + React 19.1.0  
**Styling:** Tailwind CSS 4  
**Icons:** Lucide React
