"use client";
import { useState, useEffect } from 'react';

export default function TheaterPage() {
  const [selectedDate, setSelectedDate] = useState('15 Okt');
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [favoriteMembers, setFavoriteMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Data member H5-Revolution
  const members = [
    { id: 1, name: "Yuki Tanaka", position: "Center", color: "#FFD700", image: "/images/yuki.jpg", bio: "Leader dan center H5-Revolution" },
    { id: 2, name: "Sakura Kimura", position: "Main Vocal", color: "#FFA500", image: "/images/sakura.jpg", bio: "Main vocal dengan suara yang memukau" },
    { id: 3, name: "Hana Watanabe", position: "Lead Dancer", color: "#FFB347", image: "/images/hana.jpg", bio: "Lead dancer dengan gerakan yang energik" },
    { id: 4, name: "Mei Suzuki", position: "Rapper", color: "#FFFF99", image: "/images/mei.jpg", bio: "Rapper dengan flow yang unik" },
    { id: 5, name: "Rina Sato", position: "Visual", color: "#F0E68C", image: "/images/rina.jpg", bio: "Visual member yang memesona" }
  ];

  // Data pertunjukan yang diperluas
  const shows = [
    {
      id: 1,
      title: "H5 Golden Hour",
      date: "15 Oktober 2023",
      time: "19:00",
      duration: "2 jam",
      cast: ["Yuki Tanaka", "Sakura Kimura", "Hana Watanabe"],
      description: "Pertunjukan spesial dengan tema golden hour yang menampilkan lagu-lagu hits H5-Revolution dalam nuansa romantis.",
      price: 150000,
      availableSeats: 45,
      category: "reguler",
      setlist: ["Golden Dreams", "Shining Star", "Revolution Heart", "Dancing Light"],
      specialEvents: ["Meet & Greet", "Photo Session", "Handshake Event"]
    },
    {
      id: 2,
      title: "Revolution Weekend Special",
      date: "16 Oktober 2023",
      time: "14:00",
      duration: "3 jam",
      cast: ["All Members"],
      description: "Pertunjukan spesial weekend dengan semua member H5-Revolution. Termasuk unit song dan solo performance.",
      price: 250000,
      availableSeats: 30,
      category: "spesial",
      setlist: ["Revolution Anthem", "Unity", "Dreams Come True", "Five Hearts", "Encore Medley"],
      specialEvents: ["Individual Talk", "Group Photo", "Exclusive Merchandise", "Signed Poster"]
    },
    {
      id: 3,
      title: "Acoustic Session",
      date: "17 Oktober 2023",
      time: "19:00",
      duration: "1.5 jam",
      cast: ["Sakura Kimura", "Yuki Tanaka"],
      description: "Sesi akustik intim dengan Sakura dan Yuki. Pengalaman mendengar suara asli mereka tanpa musik latar yang berat.",
      price: 120000,
      availableSeats: 50,
      category: "akustik",
      setlist: ["Whisper", "Gentle Breeze", "Memories", "Promise"],
      specialEvents: ["Q&A Session", "Request Corner", "Mini Talk Show"]
    },
    {
      id: 4,
      title: "Dance Performance Night",
      date: "18 Oktober 2023",
      time: "20:00",
      duration: "2 jam",
      cast: ["Hana Watanabe", "Mei Suzuki", "Rina Sato"],
      description: "Malam performance dance dengan koreografi terbaru dan dance battle antar member.",
      price: 180000,
      availableSeats: 40,
      category: "dance",
      setlist: ["Move Your Body", "Dance Revolution", "Rhythm Master", "Final Battle"],
      specialEvents: ["Dance Workshop", "Photo Time", "Choreography Tutorial"]
    }
  ];

  // Filter pertunjukan berdasarkan tanggal dan kategori
  const filteredShows = shows.filter(show => {
    const dateMatch = selectedDate === 'semua' || show.date.includes(selectedDate.replace(' ', ' '));
    const categoryMatch = selectedCategory === 'semua' || show.category === selectedCategory;
    return dateMatch && categoryMatch;
  });

  // Format harga
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Toggle favorite member
  const toggleFavoriteMember = (memberName) => {
    setFavoriteMembers(prev => 
      prev.includes(memberName) 
        ? prev.filter(name => name !== memberName)
        : [...prev, memberName]
    );
  };

  // Handle booking
  const handleBooking = (show) => {
    setSelectedShow(show);
    setShowModal(true);
  };

  // Handle member info
  const handleMemberInfo = (member) => {
    setSelectedMember(member);
    setShowMemberModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 text-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold tracking-wider">OFFICIAL THEATER</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
            H5-Revolution Theater
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Rasakan pengalaman tak terlupakan bersama lima bintang H5-Revolution dalam pertunjukan eksklusif 
            yang penuh dengan energi, emosi, dan interaksi spesial hanya untuk Anda.
          </p>
          
          {/* Live Status */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white bg-opacity-90 rounded-full px-6 py-3 flex items-center space-x-2 shadow-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-800">LIVE NOW: Rehearsal Session</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Member Showcase */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-yellow-400">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meet H5-Revolution</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {members.map((member) => (
              <div 
                key={member.id} 
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => handleMemberInfo(member)}
              >
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: member.color }}
                >
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base">{member.name}</h3>
                <p className="text-xs text-gray-600">{member.position}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavoriteMember(member.name);
                  }}
                  className={`mt-2 text-xs px-3 py-1 rounded-full transition-colors ${
                    favoriteMembers.includes(member.name)
                      ? 'bg-yellow-400 text-gray-800'
                      : 'bg-gray-200 text-gray-600 hover:bg-yellow-200'
                  }`}
                >
                  {favoriteMembers.includes(member.name) ? '★ Favorit' : '☆ Favoritkan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Date Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Pilih Tanggal</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {["15 Okt", "16 Okt", "17 Okt", "18 Okt", "19 Okt", "20 Okt", "21 Okt"].map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedDate === date
                        ? 'bg-yellow-400 text-gray-800 shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-yellow-100 hover:text-gray-800'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Kategori</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 border-2 border-transparent rounded-lg focus:border-yellow-400 focus:bg-white transition-all"
              >
                <option value="semua">Semua Kategori</option>
                <option value="reguler">Reguler</option>
                <option value="spesial">Spesial</option>
                <option value="akustik">Akustik</option>
                <option value="dance">Dance</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {filteredShows.map((show) => (
            <div key={show.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-l-4 border-yellow-400">
              <div className="h-48 bg-gradient-to-r from-yellow-200 to-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Theater Image</span>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {show.availableSeats} Kursi
                </div>
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {show.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3">{show.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{show.date}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{show.time} • {show.duration}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{show.description}</p>

                {/* Cast */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Performing Cast:</h4>
                  <div className="flex flex-wrap gap-1">
                    {show.cast.map((member, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          favoriteMembers.includes(member)
                            ? 'bg-yellow-400 text-gray-800'
                            : 'bg-yellow-100 text-gray-700'
                        }`}
                      >
                        {member === "All Members" ? "All Members" : member.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Events */}
                {show.specialEvents && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Special Events:</h4>
                    <div className="flex flex-wrap gap-1">
                      {show.specialEvents.slice(0, 2).map((event, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                          {event}
                        </span>
                      ))}
                      {show.specialEvents.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          +{show.specialEvents.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-yellow-600">{formatPrice(show.price)}</span>
                    <div className="text-xs text-gray-500">per tiket</div>
                  </div>
                  <button
                    onClick={() => handleBooking(show)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Pesan Tiket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Theater Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Theater</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Lokasi</h3>
                <p className="text-gray-700 mb-4">H5-Revolution Theater<br/>Jalan Idol Revolution No. 55, Jakarta Selatan</p>
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📍</div>
                      <div className="font-semibold">Interactive Map</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Fasilitas Theater</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["AC Premium", "Sound System", "LED Screen", "Photo Booth", "Merchandise Corner", "Café Area"].map((facility, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      {facility}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Aturan & Kontak</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tata Tertib Theater</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "Tiket tidak dapat dikembalikan atau ditukar",
                  "Dilarang membawa makanan dan minuman dari luar",
                  "Tidak boleh merekam atau mengambil foto selama pertunjukan",
                  "Harap hadir 30 menit sebelum pertunjukan dimulai",
                  "Anak dibawah 12 tahun harus didampingi orang tua",
                  "Pakaian sopan dan rapi diwajibkan",
                  "Handphone dalam mode senyap selama pertunjukan"
                ].map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Hubungi Kami</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600">📧</span>
                  </div>
                  <span>theater@h5revolution.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600">📞</span>
                  </div>
                  <span>(021) 555-H5RV (4578)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600">💬</span>
                  </div>
                  <span>@H5RevolutionTheater</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && selectedShow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 transform transition-all">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Konfirmasi Booking</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">{selectedShow.title}</h4>
              <p className="text-sm text-gray-600">{selectedShow.date} • {selectedShow.time}</p>
              <p className="text-lg font-bold text-yellow-600 mt-2">{formatPrice(selectedShow.price)}</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Tiket</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-400">
                <option>1 Tiket</option>
                <option>2 Tiket</option>
                <option>3 Tiket</option>
                <option>4 Tiket</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Batal
              </button>
              <button className="flex-1 px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 font-semibold">
                Lanjut Bayar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Member Info Modal */}
      {showMemberModal && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 transform transition-all">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Member Profile</h3>
              <button
                onClick={() => setShowMemberModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="text-center mb-4">
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-3 shadow-lg"
                style={{ backgroundColor: selectedMember.color }}
              >
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-lg">
                  {selectedMember.name.split(' ')[0][0]}{selectedMember.name.split(' ')[1][0]}
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-800">{selectedMember.name}</h4>
              <p className="text-yellow-600 font-semibold">{selectedMember.position}</p>
              <p className="text-sm text-gray-600 mt-2">{selectedMember.bio}</p>
            </div>

            <button
              onClick={() => {
                toggleFavoriteMember(selectedMember.name);
                setShowMemberModal(false);
              }}
              className={`w-full px-4 py-2 rounded-lg font-semibold transition-colors ${
                favoriteMembers.includes(selectedMember.name)
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-gray-200 text-gray-700 hover:bg-yellow-200'
              }`}
            >
              {favoriteMembers.includes(selectedMember.name) ? '★ Hapus dari Favorit' : '☆ Tambah ke Favorit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}