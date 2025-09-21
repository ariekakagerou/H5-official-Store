'use client'
import { useState, useEffect } from 'react'
import { ChevronDown, Heart, Share2, ShoppingCart, Search, Filter, Star, Clock, Users, Gift } from 'lucide-react'

export default function MerchPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [notification, setNotification] = useState('')

  // Data produk yang diperluas
  const products = [
    {
      id: 1,
      image: "/images/tshirt.png",
      name: "T-Shirt Official 'Dream Concert'",
      price: 150000,
      originalPrice: 200000,
      category: "clothing",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Hitam", "Putih", "Merah", "Navy"],
      description: "T-shirt resmi H5 dengan bahan cotton combed 30s yang nyaman dipakai. Design eksklusif dari Dream Concert Tour.",
      stock: 50,
      rating: 4.8,
      reviews: 124,
      isLimited: false,
      isNew: true,
      memberPhoto: true,
      tags: ["concert", "official", "comfortable"]
    },
    {
      id: 2,
      image: "/images/photo.png",
      name: "Photo Pack Season 1",
      price: 50000,
      category: "photos",
      description: "Pack foto member H5 dengan 5 lembar foto random + 1 foto polaroid signed.",
      stock: 100,
      rating: 4.9,
      reviews: 89,
      isLimited: true,
      isNew: false,
      memberPhoto: true,
      tags: ["collectible", "signed", "limited"]
    },
    {
      id: 3,
      image: "/images/hoodie.png",
      name: "Hoodie Exclusive 'Winter Edition'",
      price: 300000,
      originalPrice: 350000,
      category: "clothing",
      sizes: ["M", "L", "XL"],
      colors: ["Hitam", "Abu-abu", "Navy", "Cream"],
      description: "Hoodie exclusive dengan bordir logo H5 dan member signature print.",
      stock: 30,
      rating: 4.7,
      reviews: 67,
      isLimited: true,
      isNew: false,
      memberPhoto: false,
      tags: ["exclusive", "winter", "embroidered"]
    },
    {
      id: 4,
      image: "/images/lightstick.png",
      name: "Lightstick Official Ver.2",
      price: 450000,
      category: "others",
      description: "Lightstick resmi H5 dengan fitur Bluetooth, LED warna-warni, dan sinkronisasi konser.",
      stock: 20,
      rating: 4.9,
      reviews: 156,
      isLimited: false,
      isNew: true,
      memberPhoto: false,
      tags: ["bluetooth", "concert", "technology"]
    },
    {
      id: 5,
      image: "/images/keychain.png",
      name: "Keychain Member Set",
      price: 75000,
      category: "accessories",
      description: "Set keychain dengan foto member H5 (5 pcs) dengan material acrylic premium.",
      stock: 80,
      rating: 4.6,
      reviews: 234,
      isLimited: false,
      isNew: false,
      memberPhoto: true,
      tags: ["set", "acrylic", "portable"]
    },
    {
      id: 6,
      image: "/images/album.png",
      name: "Album 'Dreams Come True' Limited Edition",
      price: 250000,
      category: "music",
      description: "Album fisik dengan photobook 64 halaman, sticker set, dan foto cards eksklusif.",
      stock: 45,
      rating: 5.0,
      reviews: 89,
      isLimited: true,
      isNew: true,
      memberPhoto: true,
      tags: ["album", "photobook", "limited", "cards"]
    }
  ]

  // Kategori produk yang diperluas
  const categories = [
    { id: "all", name: "Semua Produk", icon: "🛍️" },
    { id: "clothing", name: "Pakaian", icon: "👕" },
    { id: "photos", name: "Photo & Cards", icon: "📸" },
    { id: "music", name: "Album & Music", icon: "💿" },
    { id: "accessories", name: "Aksesoris", icon: "✨" },
    { id: "others", name: "Lainnya", icon: "🎪" },
  ]

  // Filter dan sort produk
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'rating': return b.rating - a.rating
        case 'newest': return b.isNew - a.isNew
        default: return a.name.localeCompare(b.name)
      }
    })

  // Format harga
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  // Tambah ke keranjang
  const addToCart = (productId, quantity = 1, selectedSize = null, selectedColor = null) => {
    const product = products.find(p => p.id === productId)
    if (!product) return

    const cartItem = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
      cartId: `${productId}-${selectedSize}-${selectedColor}-${Date.now()}`
    }

    setCartItems(prev => [...prev, cartItem])
    showNotification(`${product.name} ditambahkan ke keranjang!`)
  }

  // Toggle favorit
  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  // Show notification
  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(''), 3000)
  }

  // Komponen ProductCard
  const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null)
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null)
    const [quantity, setQuantity] = useState(1)

    const isFavorited = favorites.includes(product.id)

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        {/* Product Image */}
        <div className="relative h-64 bg-gradient-to-br from-yellow-50 to-yellow-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                NEW
              </span>
            )}
            {product.isLimited && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                LIMITED
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                SALE
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              onClick={() => toggleFavorite(product.id)}
              className={`p-2.5 rounded-full transition-colors shadow-md ${
                isFavorited ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50'
              }`}
            >
              <Heart size={18} fill={isFavorited ? 'white' : 'none'} />
            </button>
            <button className="p-2.5 bg-white text-gray-600 rounded-full hover:bg-yellow-50 shadow-md">
              <Share2 size={18} />
            </button>
          </div>

          {/* Member Photo Indicator */}
          {product.memberPhoto && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <Users size={12} />
                Member Photo
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-lg text-gray-900 line-clamp-2 leading-tight">{product.name}</h3>
            {product.stock < 10 && (
              <span className="text-red-500 text-xs font-bold ml-2 bg-red-50 px-2 py-1 rounded-full">
                Sisa {product.stock}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-600 font-bold text-xl">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Ukuran:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 text-sm rounded-lg border-2 transition-all duration-200 font-medium ${
                      selectedSize === size
                        ? 'bg-yellow-500 text-white border-yellow-500 shadow-md'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Warna:</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-2 text-sm rounded-lg border-2 transition-all duration-200 font-medium ${
                      selectedColor === color
                        ? 'bg-yellow-600 text-white border-yellow-600 shadow-md'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center border-2 border-gray-200 rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg font-medium"
              >
                -
              </button>
              <span className="px-4 py-2 border-x-2 border-gray-200 font-medium min-w-[3rem] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg font-medium"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(product.id, quantity, selectedSize, selectedColor)}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2.5 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 flex items-center gap-2 font-semibold shadow-md"
            >
              <ShoppingCart size={18} />
              Tambah
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          {notification}
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-2">
              H5 Official Store
            </h1>
            <p className="text-gray-600">Koleksi merchandise resmi idol group H5</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto mt-4 lg:mt-0">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari merchandise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent w-full md:w-64 bg-white shadow-sm"
              />
            </div>

            {/* Cart Button */}
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg font-medium">
              <ShoppingCart size={20} />
              Keranjang ({cartItems.length})
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-80 mb-6 lg:mb-0">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-4">
              {/* Categories */}
              <h2 className="text-xl font-bold mb-4 text-gray-800">Kategori</h2>
              <div className="space-y-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md'
                        : 'hover:bg-yellow-50 text-gray-700 hover:text-gray-800'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Sort */}
              <h2 className="text-xl font-bold mb-4 text-gray-800">Urutkan</h2>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white shadow-sm"
              >
                <option value="name">Nama A-Z</option>
                <option value="price-low">Harga Terendah</option>
                <option value="price-high">Harga Tertinggi</option>
                <option value="rating">Rating Tertinggi</option>
                <option value="newest">Terbaru</option>
              </select>

              {/* Quick Filters */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Cepat</h2>
                <div className="space-y-3">
                  <button className="flex items-center gap-3 text-sm text-yellow-600 hover:text-yellow-700 font-medium">
                    <Gift size={16} />
                    Produk Terbaru
                  </button>
                  <button className="flex items-center gap-3 text-sm text-orange-600 hover:text-orange-700 font-medium">
                    <Clock size={16} />
                    Limited Edition
                  </button>
                  <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-700 font-medium">
                    <Users size={16} />
                    Dengan Foto Member
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-600 font-medium">
                  Menampilkan {filteredProducts.length} produk
                </p>
                <p className="text-sm text-gray-500">
                  {selectedCategory !== 'all' && `Kategori: ${categories.find(c => c.id === selectedCategory)?.name}`}
                </p>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-200"
              >
                <Filter size={18} />
                Filter
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Tidak ada produk ditemukan
                </h3>
                <p className="text-gray-500">
                  Coba ubah filter atau kata kunci pencarian
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}