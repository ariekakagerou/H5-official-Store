'use client';
import React from 'react';
import { Heart, MessageCircle, Image, Star, Download, Smartphone, Lock, Gift } from 'lucide-react';

export default function H5MessageLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">H5-Revolution</h1>
                <p className="text-sm text-gray-600">Connect with Your Idols</p>
              </div>
            </div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Terhubung Langsung dengan
            <span className="text-yellow-500 block">Member H5-Revolution</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Dapatkan pengalaman eksklusif berinteraksi dengan member favoritmu melalui 
            pesan pribadi, foto-foto eksklusif, dan balasan langsung dari mereka!
          </p>
          
          <div className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Smartphone className="w-6 h-6 mr-3" />
            Segera Hadir di Mobile!
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Private Messaging */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Pesan Pribadi</h3>
            <p className="text-gray-700 leading-relaxed">
              Kirim pesan personal langsung ke member H5-Revolution favoritmu. 
              Rasakan kedekatan yang tak terbatas dengan idolamu!
            </p>
          </div>

          {/* Exclusive Photos */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <Image className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Foto Eksklusif</h3>
            <p className="text-gray-700 leading-relaxed">
              Dapatkan akses ke koleksi foto-foto eksklusif yang tidak akan kamu 
              temukan di tempat lain. Hanya untuk fans sejati!
            </p>
          </div>

          {/* Real Replies */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Balasan Asli</h3>
            <p className="text-gray-700 leading-relaxed">
              Member dapat membalas pesanmu secara langsung! Nikmati percakapan 
              dua arah yang autentik dengan idolamu.
            </p>
          </div>
        </div>

        {/* App Preview Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-8">
            <h2 className="text-3xl font-bold mb-4">Sneak Peek Aplikasi Mobile</h2>
            <p className="text-lg opacity-90">
              Lihat sekilas tampilan aplikasi yang sedang kami kembangkan khusus untukmu
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* App Features */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Sistem Credit</h4>
                    <p className="text-gray-700">Setiap pesan menggunakan 1 credit. Dapatkan credit melalui berbagai cara menarik!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Gift className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Reward System</h4>
                    <p className="text-gray-700">Dapatkan bonus credit dan konten eksklusif melalui aktivitas harian dan event khusus!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Personalisasi</h4>
                    <p className="text-gray-700">Atur preferensi untuk mendapatkan notifikasi dari member favoritmu!</p>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative">
                <div className="bg-black rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <span>••••</span>
                      <span>100%</span>
                    </div>
                    
                    {/* App Header */}
                    <div className="bg-yellow-400 p-4">
                      <h3 className="font-bold text-black">Private Message</h3>
                      <p className="text-sm text-black opacity-80">Terhubung dengan idolmu</p>
                    </div>
                    
                    {/* Content Preview */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-lg p-2">
                            <p className="text-xs text-gray-600">Member Name</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center py-8 text-gray-400 text-xs">
                        Coming Soon...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-6">Tahap Pengembangan</h2>
          <p className="text-xl text-black mb-8 max-w-4xl mx-auto">
            Tim developer kami sedang bekerja keras menghadirkan pengalaman terbaik untukmu. 
            Aplikasi mobile H5-Revolution akan segera hadir dengan fitur-fitur revolusioner 
            yang akan mengubah cara kamu berinteraksi dengan idolmu!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-black mb-2">95%</div>
              <div className="text-black font-semibold">UI/UX Design</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-black mb-2">80%</div>
              <div className="text-black font-semibold">Backend Development</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-black mb-2">60%</div>
              <div className="text-black font-semibold">Testing & Optimization</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Jangan Sampai Ketinggalan!
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Daftar sekarang untuk mendapatkan notifikasi pertama saat aplikasi sudah tersedia 
            dan dapatkan bonus credit gratis untuk pesan pertamamu!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Pre-Register Now
            </button>
            <div className="text-gray-600">
              atau ikuti update di social media kami
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}