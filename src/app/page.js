'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "H5 Official Store",
      subtitle: "Temukan merchandise eksklusif, tiket event, dan pengalaman spesial bersama idol favoritmu!",
      bgColor: "from-yellow-300 via-yellow-400 to-yellow-500",
      textColor: "text-gray-900",
      buttons: [
        { text: "Belanja Merch", href: "/merch", bgColor: "bg-black", textColor: "text-yellow-300", hoverColor: "hover:bg-gray-800" },
        { text: "Beli Tiket", href: "/ticket", bgColor: "bg-white", textColor: "text-black", hoverColor: "hover:bg-gray-200" }
      ]
    },
    {
      id: 2,
      title: "Konser Spesial",
      subtitle: "Dapatkan pengalaman tak terlupakan dengan merch limited edition dan meet & greet!",
      bgColor: "from-pink-400 via-purple-400 to-blue-400",
      textColor: "text-white",
      buttons: [
        { text: "Lihat Detail Event", href: "/event", bgColor: "bg-black", textColor: "text-white", hoverColor: "hover:bg-gray-800" }
      ]
    },
    {
      id: 3,
      title: "Limited Edition Drop",
      subtitle: "Koleksi terbatas hanya untuk true fans! Jangan sampai terlewat, stock sangat terbatas.",
      bgColor: "from-red-400 via-orange-400 to-yellow-400",
      textColor: "text-white",
      buttons: [
        { text: "Shop Now", href: "/limited", bgColor: "bg-white", textColor: "text-black", hoverColor: "hover:bg-gray-200" },
        { text: "Lihat Koleksi", href: "/collection", bgColor: "bg-black", textColor: "text-white", hoverColor: "hover:bg-gray-800" }
      ]
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="w-full">
      {/* Hero Section dengan Auto-Sliding Carousel */}
      <section className="relative w-full h-96 text-black py-16 text-center overflow-hidden">
        <div 
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`min-w-full flex flex-col items-center justify-center p-4 bg-gradient-to-r ${slide.bgColor}`}
            >
              <h1 className={`text-5xl font-extrabold mb-4 ${slide.textColor}`}>
                {slide.title}
              </h1>
              <p className={`text-lg mb-6 max-w-2xl mx-auto ${slide.textColor}`}>
                {slide.subtitle}
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                {slide.buttons.map((button, btnIndex) => (
                  <a
                    key={btnIndex}
                    href={button.href}
                    className={`px-6 py-3 ${button.bgColor} ${button.textColor} font-semibold rounded-lg ${button.hoverColor} transition`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Kategori Produk */}
      <section className="w-full py-8 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Kategori Produk</h2>
        <div className="flex overflow-x-auto pb-4 space-x-4 justify-center">
          {['Semua', 'Album', 'Lightstick', 'Pakaian', 'Aksesoris', 'Photocard'].map((category, idx) => (
            <button
              key={idx}
              className="px-6 py-2 bg-gray-100 text-black rounded-full whitespace-nowrap hover:bg-yellow-400 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Produk Unggulan dengan Rating */}
      <section className="w-full py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Produk Unggulan</h2>
            <a href="/merch" className="text-yellow-600 hover:underline font-semibold">Lihat Semua</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { name: 'Lightstick', price: 350000, rating: 4.8, reviews: 42 },
              { name: 'Album Spesial', price: 250000, rating: 4.9, reviews: 57 },
              { name: 'T-Shirt Official', price: 199000, rating: 4.7, reviews: 38 },
              { name: 'Photocard Set', price: 120000, rating: 4.6, reviews: 29 }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl shadow-md p-4 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-4 overflow-hidden">
                  <span className="text-gray-500">Gambar {item.name}</span>
                  <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">{item.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({item.reviews})</span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-3">Rp {item.price.toLocaleString('id-ID')}</p>
                <button className="w-full bg-yellow-500 text-gray-900 py-2 rounded-lg hover:bg-yellow-600 transition font-semibold">
                  Tambah ke Keranjang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Promosi */}
      <section className="w-full py-12 px-6 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Diskon Spesial 20% untuk Member Baru!</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Daftar sekarang dan dapatkan promo spesial untuk pembelian pertama Anda.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>

      {/* Event Highlight dengan Countdown */}
      <section className="w-full bg-gray-100 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Event Terdekat</h2>
            <a href="/events" className="text-yellow-600 hover:underline font-semibold">Lihat Semua</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              { 
                name: 'Fan Meeting', 
                date: '15 Desember 2023', 
                location: 'Jakarta Convention Center',
                countdown: '12:18:35:22'
              },
              { 
                name: 'Konser Spesial', 
                date: '20 Januari 2024', 
                location: 'ICE BSD City',
                countdown: '48:12:45:18'
              }
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-4 relative">
                  <span className="text-gray-500">Poster {event.name}</span>
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    TERBATAS
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">{event.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Countdown:</p>
                  <div className="flex space-x-2">
                    {event.countdown.split(':').map((unit, i) => (
                      <div key={i} className="bg-gray-800 text-white text-center py-1 px-2 rounded">
                        <span className="text-sm font-bold">{unit}</span>
                        <span className="text-xs block">{['Hari', 'Jam', 'Menit', 'Detik'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="/ticket"
                  className="block text-center bg-black text-yellow-300 py-2 rounded-lg hover:bg-gray-800 transition font-semibold"
                >
                  Beli Tiket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-12 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Apa Kata Fans?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Rina S.', comment: 'Merchandisenya kualitas bagus banget! Pengiriman juga cepat.', rating: 5 },
              { name: 'Dian P.', comment: 'Pengalaman beli tiket eventnya mudah banget. Next event pasti beli lagi di sini!', rating: 5 },
              { name: 'Ahmad L.', comment: 'Pelayanan customernya ramah dan helpful. Merch limited editionnya worth to collect!', rating: 4.5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partner/Logo */}
      <section className="w-full py-12 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Partner Kami</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map((partner, idx) => (
              <div key={idx} className="h-16 w-40 bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter dengan Benefit List */}
      <section className="w-full py-12 px-6 text-center bg-black text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Jangan Ketinggalan Info Terbaru!</h2>
          <p className="mb-6">
            Daftar newsletter untuk dapatkan update merchandise dan event eksklusif.
          </p>
          <ul className="flex flex-wrap justify-center gap-6 mb-8">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Akses pre-sale tiket
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Diskon khusus member
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Info merch limited edition
            </li>
          </ul>
          <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Masukkan email kamu"
              className="flex-1 px-4 py-3 text-gray-900 rounded-lg sm:rounded-r-none focus:outline-none mb-2 sm:mb-0"
            />
            <button
              onClick={() => alert('Newsletter subscription coming soon!')}
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg sm:rounded-l-none hover:bg-yellow-600 transition"
            >
              Daftar
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}