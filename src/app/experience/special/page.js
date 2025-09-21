'use client';
import React, { useState, useEffect } from 'react';
import { Star, Heart, Play, Camera, MessageCircle, Gift, Crown, Sparkles, Lock, Unlock, Download, Share2, Eye, Clock, Filter, Search } from 'lucide-react';

export default function H5RevolutionSpecial() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [userCredits, setUserCredits] = useState(25);
  const [ownedContent, setOwnedContent] = useState(new Set());
  const [showPreview, setShowPreview] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const categories = [
    { name: 'Semua', icon: Star },
    { name: 'Foto Eksklusif', icon: Camera },
    { name: 'Video Behind', icon: Play },
    { name: 'Pesan Personal', icon: MessageCircle },
    { name: 'Live Session', icon: Crown },
    { name: 'Merchandise', icon: Gift }
  ];

  const specialContent = [
    {
      id: 1,
      title: 'Foto Eksklusif Studio Session',
      description: 'Koleksi foto behind the scene dari studio recording terbaru H5-Revolution',
      price: 8,
      category: 'Foto Eksklusif',
      type: 'photo',
      rating: 4.9,
      downloads: 1234,
      duration: null,
      preview: '/api/placeholder/300/400',
      member: 'Mina',
      rarity: 'rare',
      tags: ['behind-the-scenes', 'studio', 'eksklusif']
    },
    {
      id: 2,
      title: 'Video Pesan Penyemangat Personal',
      description: 'Video pesan khusus untuk membermu dengan menyebut namamu langsung!',
      price: 15,
      category: 'Pesan Personal',
      type: 'video',
      rating: 5.0,
      downloads: 892,
      duration: '2:30',
      preview: '/api/placeholder/300/400',
      member: 'Sana',
      rarity: 'legendary',
      tags: ['personal', 'motivasi', 'video']
    },
    {
      id: 3,
      title: 'Live Chat Session - Q&A Eksklusif',
      description: 'Sesi tanya jawab live selama 30 menit bersama member H5-Revolution',
      price: 25,
      category: 'Live Session',
      type: 'live',
      rating: 4.8,
      downloads: 456,
      duration: '30:00',
      preview: '/api/placeholder/300/400',
      member: 'Nayeon',
      rarity: 'legendary',
      tags: ['live', 'qa', 'interaktif']
    },
    {
      id: 4,
      title: 'Behind The Scene Dance Practice',
      description: 'Video eksklusif latihan dance untuk lagu terbaru dengan bloopers lucu',
      price: 12,
      category: 'Video Behind',
      type: 'video',
      rating: 4.7,
      downloads: 2156,
      duration: '15:45',
      preview: '/api/placeholder/300/400',
      member: 'All Members',
      rarity: 'epic',
      tags: ['dance', 'practice', 'funny']
    },
    {
      id: 5,
      title: 'Merchandise Signed Photocard',
      description: 'Photocard eksklusif bertanda tangan digital dengan sertifikat keaslian',
      price: 20,
      category: 'Merchandise',
      type: 'digital',
      rating: 4.9,
      downloads: 678,
      duration: null,
      preview: '/api/placeholder/300/400',
      member: 'Dahyun',
      rarity: 'legendary',
      tags: ['signed', 'collectible', 'limited']
    },
    {
      id: 6,
      title: 'Foto Liburan Private Collection',
      description: 'Koleksi foto pribadi saat liburan bersama member H5-Revolution',
      price: 10,
      category: 'Foto Eksklusif',
      type: 'photo',
      rating: 4.6,
      downloads: 1867,
      duration: null,
      preview: '/api/placeholder/300/400',
      member: 'Tzuyu',
      rarity: 'rare',
      tags: ['vacation', 'casual', 'friendship']
    }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-400';
      case 'epic': return 'from-yellow-300 to-yellow-400';
      case 'rare': return 'from-yellow-200 to-yellow-300';
      default: return 'from-gray-200 to-gray-300';
    }
  };

  const getRarityBorder = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-400 shadow-yellow-200';
      case 'epic': return 'border-yellow-300 shadow-yellow-100';
      case 'rare': return 'border-yellow-200';
      default: return 'border-gray-200';
    }
  };

  const filteredContent = specialContent.filter(item => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.member.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const purchaseContent = (item) => {
    if (userCredits >= item.price) {
      setUserCredits(prev => prev - item.price);
      setOwnedContent(prev => new Set([...prev, item.id]));
      setNotifications(prev => [...prev, {
        id: Date.now(),
        message: `Berhasil membeli "${item.title}"!`,
        type: 'success'
      }]);
      setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 3000);
    } else {
      setNotifications(prev => [...prev, {
        id: Date.now(),
        message: 'Credits tidak mencukupi!',
        type: 'error'
      }]);
      setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`px-4 py-2 rounded-lg shadow-lg ${
              notification.type === 'success' 
                ? 'bg-yellow-400 text-black border border-yellow-500' 
                : 'bg-red-100 text-red-800 border border-red-300'
            } animate-pulse`}
          >
            {notification.message}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-2xl overflow-hidden mb-8">
          <div className="relative p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-600 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white rounded-full">
                    <Crown className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-black">H5-Revolution Special</h1>
                    <p className="text-black/80">Konten eksklusif untuk member setia</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-5 w-5 text-yellow-500" />
                      <span className="font-bold text-black">{userCredits} Credits</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Cari konten atau member..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-white/30 bg-white/90 text-black placeholder-black/60 focus:outline-none focus:border-white focus:bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-100 transition-colors flex items-center space-x-2 shadow-lg">
                  <Filter className="h-5 w-5" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl whitespace-nowrap font-semibold transition-all ${
                    selectedCategory === category.name
                      ? 'bg-yellow-400 text-black shadow-lg scale-105'
                      : 'bg-white text-black hover:bg-yellow-100 border border-yellow-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredContent.map((item) => {
            const isOwned = ownedContent.has(item.id);
            const isFavorited = favorites.has(item.id);
            
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${getRarityBorder(item.rarity)}`}
              >
                {/* Image/Preview */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${getRarityColor(item.rarity)} opacity-20`}></div>
                  <img
                    src={item.preview}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div className="flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-black bg-gradient-to-r ${getRarityColor(item.rarity)}`}>
                        {item.rarity.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-bold">
                        {item.price} Credits
                      </span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className={`p-2 rounded-full transition-all ${
                        isFavorited 
                          ? 'bg-yellow-400 text-black' 
                          : 'bg-black/70 text-white hover:bg-yellow-400 hover:text-black'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Type Icon */}
                  <div className="absolute bottom-3 left-3">
                    {item.type === 'video' && <Play className="h-6 w-6 text-white" />}
                    {item.type === 'photo' && <Camera className="h-6 w-6 text-white" />}
                    {item.type === 'live' && <Crown className="h-6 w-6 text-yellow-400" />}
                    {item.type === 'digital' && <Gift className="h-6 w-6 text-yellow-400" />}
                  </div>

                  {/* Duration */}
                  {item.duration && (
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {item.duration}
                    </div>
                  )}

                  {isOwned && (
                    <div className="absolute inset-0 bg-yellow-400/20 flex items-center justify-center">
                      <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                        <Unlock className="h-5 w-5" />
                        <span>DIMILIKI</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-600 font-semibold text-sm">{item.member}</span>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-semibold text-black">{item.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 text-black line-clamp-2">{item.title}</h3>
                  <p className="text-black/70 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-yellow-100 text-black px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-black/60">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>Preview</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {isOwned ? (
                      <>
                        <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-bold transition-colors flex items-center justify-center space-x-2">
                          <Download className="h-5 w-5" />
                          <span>Download</span>
                        </button>
                        <button className="bg-yellow-100 hover:bg-yellow-200 text-black p-3 rounded-xl transition-colors">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => purchaseContent(item)}
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Crown className="h-5 w-5" />
                        <span>Beli Sekarang</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Owned Content Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6">
            <div className="flex items-center space-x-3">
              <Unlock className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Koleksi Saya</h2>
            </div>
          </div>

          <div className="p-6">
            {ownedContent.size > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {specialContent
                  .filter(item => ownedContent.has(item.id))
                  .map(item => (
                    <div key={item.id} className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <img
                        src={item.preview}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-black text-sm mb-1">{item.title}</h4>
                      <p className="text-black/60 text-xs mb-3">{item.member}</p>
                      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg text-sm font-semibold transition-colors">
                        Akses Sekarang
                      </button>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-12 w-12 text-yellow-400" />
                </div>
                <p className="text-black/60 text-lg">Belum ada konten yang dimiliki</p>
                <p className="text-black/40 text-sm">Mulai koleksi konten eksklusif H5-Revolution!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}