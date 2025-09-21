"use client";
import { useState } from 'react';
import { Heart, Star, Gift, CreditCard, Truck, Shield, Users, Music, Calendar, MapPin, Plus, Minus, X, Camera, Award } from 'lucide-react';

export default function CheckoutPage() {
  const [selectedItems, setSelectedItems] = useState([
    {
      id: 1,
      name: "H5-Revolution Official Light Stick Ver.2",
      price: 450000,
      quantity: 1,
      image: "/api/placeholder/80/80",
      category: "Official Merch",
      limited: true,
      stock: 5
    },
    {
      id: 2,
      name: "Member Photo Card Set - Yuki Limited Edition",
      price: 150000,
      quantity: 2,
      image: "/api/placeholder/80/80",
      category: "Collectibles",
      bias: "Yuki",
      rarity: "SSR"
    },
    {
      id: 3,
      name: "H5-Revolution World Tour Concert T-Shirt",
      price: 280000,
      quantity: 1,
      image: "/api/placeholder/80/80",
      category: "Apparel",
      size: "M",
      variant: "Black"
    },
    {
      id: 4,
      name: "Autographed Mini Album - Revolution",
      price: 350000,
      quantity: 1,
      image: "/api/placeholder/80/80",
      category: "Music",
      signed: true,
      member: "All Members"
    }
  ]);

  const [fanInfo, setFanInfo] = useState({
    fanName: '',
    bias: '',
    fanSince: '2020',
    wishMessage: '',
    fanClubMember: false
  });

  const [shippingInfo, setShippingInfo] = useState({
    name: 'Sari Wulandari',
    email: 'sari.wulandari@email.com',
    phone: '+62 812-3456-7890',
    address: 'Jl. Sudirman No. 123, Apartemen Galaxy Tower Unit 15A',
    city: 'Jakarta Selatan',
    postalCode: '12190'
  });

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [giftWrap, setGiftWrap] = useState(true);
  const [expressShipping, setExpressShipping] = useState(false);
  const [preOrder, setPreOrder] = useState(false);
  const [notifications, setNotifications] = useState({
    concert: true,
    comeback: true,
    merch: true,
    birthday: true
  });

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setSelectedItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: Math.min(newQuantity, item.stock || 99) } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setSelectedItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const fanClubDiscount = fanInfo.fanClubMember ? Math.floor(subtotal * 0.1) : 0; // 10% discount
  const shippingCost = expressShipping ? 50000 : 25000;
  const giftWrapCost = giftWrap ? 15000 : 0;
  const preOrderFee = preOrder ? 25000 : 0;
  const total = subtotal - fanClubDiscount + shippingCost + giftWrapCost + preOrderFee;

  const members = ["Yuki", "Hana", "Rei", "Mika", "Saki"];
  const paymentMethods = [
    { id: "credit-card", name: "Kartu Kredit", icon: CreditCard },
    { id: "bank-transfer", name: "Transfer Bank", icon: CreditCard },
    { id: "gopay", name: "GoPay", icon: CreditCard },
    { id: "ovo", name: "OVO", icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Music className="w-8 h-8" />
                H5-Revolution Store
              </h1>
              <p className="text-yellow-200 mt-1">Official Merchandise Checkout</p>
            </div>
            <div className="text-right">
              <p className="text-yellow-200 text-sm">Welcome back, Revolution!</p>
              <div className="flex items-center gap-2 mt-1">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="text-sm">VIP Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Fan Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-yellow-500" />
                Fan Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fan Name
                  </label>
                  <input
                    type="text"
                    value={fanInfo.fanName}
                    onChange={(e) => setFanInfo({...fanInfo, fanName: e.target.value})}
                    placeholder="Your fan name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Bias
                  </label>
                  <select
                    value={fanInfo.bias}
                    onChange={(e) => setFanInfo({...fanInfo, bias: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select your bias</option>
                    {members.map(member => (
                      <option key={member} value={member}>{member}</option>
                    ))}
                    <option value="OT5">OT5 (All Members)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fan Since
                  </label>
                  <select
                    value={fanInfo.fanSince}
                    onChange={(e) => setFanInfo({...fanInfo, fanSince: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="2024">2024 (New Revolution!)</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020 (Original Revolution!)</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="fanClub"
                    checked={fanInfo.fanClubMember}
                    onChange={(e) => setFanInfo({...fanInfo, fanClubMember: e.target.checked})}
                    className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <label htmlFor="fanClub" className="ml-2 text-sm font-medium text-gray-700">
                    Official Fan Club Member (10% Discount!)
                  </label>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wish Message for H5-Revolution
                </label>
                <textarea
                  value={fanInfo.wishMessage}
                  onChange={(e) => setFanInfo({...fanInfo, wishMessage: e.target.value})}
                  placeholder="Send your love and support message to H5-Revolution!"
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-yellow-500" />
                Your Merchandise ({selectedItems.length} items)
              </h2>
              
              <div className="space-y-4">
                {selectedItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                          <Camera className="w-8 h-8 text-yellow-600" />
                        </div>
                        {item.limited && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            LIMITED
                          </div>
                        )}
                        {item.signed && (
                          <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded">
                            ✍️
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                            {item.category}
                          </span>
                          {item.bias && (
                            <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                              💛 {item.bias}
                            </span>
                          )}
                          {item.rarity && (
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                              {item.rarity}
                            </span>
                          )}
                          {item.size && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              Size: {item.size}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            {item.stock && (
                              <span className="text-xs text-gray-500 ml-2">
                                ({item.stock} left)
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-yellow-600">
                              Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-500" />
                Alamat Pengiriman
              </h2>

              <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{shippingInfo.name}</h3>
                    <p className="text-gray-600 mt-1">{shippingInfo.address}</p>
                    <p className="text-gray-600">{shippingInfo.city}, {shippingInfo.postalCode}</p>
                    <p className="text-gray-600">{shippingInfo.phone}</p>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-900 font-medium">
                    Ubah
                  </button>
                </div>
              </div>
            </div>

            {/* Shipping Options */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-yellow-500" />
                Opsi Pengiriman & Tambahan
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      !expressShipping ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setExpressShipping(false)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Regular Shipping</h3>
                        <p className="text-sm text-gray-600">3-5 hari kerja</p>
                      </div>
                      <span className="font-semibold">Rp 25.000</span>
                    </div>
                  </div>

                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      expressShipping ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setExpressShipping(true)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Express Shipping ⚡</h3>
                        <p className="text-sm text-gray-600">1-2 hari kerja</p>
                      </div>
                      <span className="font-semibold">Rp 50.000</span>
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="giftWrap"
                        checked={giftWrap}
                        onChange={(e) => setGiftWrap(e.target.checked)}
                        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <label htmlFor="giftWrap" className="font-medium">
                        🎁 H5-Revolution Special Gift Wrapping
                      </label>
                    </div>
                    <span className="font-semibold">+ Rp 15.000</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="preOrder"
                        checked={preOrder}
                        onChange={(e) => setPreOrder(e.target.checked)}
                        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <label htmlFor="preOrder" className="font-medium">
                        ⏰ Pre-order Priority (Early Access)
                      </label>
                    </div>
                    <span className="font-semibold">+ Rp 25.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-yellow-500" />
                Metode Pembayaran
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all text-center ${
                      paymentMethod === method.id ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    <method.icon className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
                    <span className="text-sm font-medium">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-500" />
                Update Notifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={key}
                      checked={value}
                      onChange={(e) => setNotifications({...notifications, [key]: e.target.checked})}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor={key} className="text-sm font-medium text-gray-700">
                      {key === 'concert' && '🎤 Concert & Events'}
                      {key === 'comeback' && '🎵 New Releases & Comebacks'}
                      {key === 'merch' && '🛍️ New Merchandise'}
                      {key === 'birthday' && '🎂 Member Birthdays'}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Order Summary
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({selectedItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                
                {fanInfo.fanClubMember && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>💜 Fan Club Discount (10%)</span>
                    <span>-Rp {fanClubDiscount.toLocaleString('id-ID')}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span>Shipping ({expressShipping ? 'Express' : 'Regular'})</span>
                  <span>Rp {shippingCost.toLocaleString('id-ID')}</span>
                </div>
                
                {giftWrap && (
                  <div className="flex justify-between text-sm">
                    <span>🎁 Gift Wrapping</span>
                    <span>Rp {giftWrapCost.toLocaleString('id-ID')}</span>
                  </div>
                )}
                
                {preOrder && (
                  <div className="flex justify-between text-sm">
                    <span>⏰ Pre-order Fee</span>
                    <span>Rp {preOrderFee.toLocaleString('id-ID')}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg text-yellow-600">
                  <span>Total</span>
                  <span>Rp {total.toLocaleString('id-ID')}</span>
                </div>
                {fanInfo.fanClubMember && (
                  <p className="text-xs text-green-600 mt-1">You saved Rp {fanClubDiscount.toLocaleString('id-ID')} with Fan Club membership! 💛</p>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition font-semibold text-lg shadow-lg">
                Complete Your Order 💛
              </button>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>Secure & encrypted payment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Truck className="w-4 h-4" />
                  <span>Free returns within 30 days</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Official H5-Revolution merchandise</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-500 text-center">
                By completing this order, you agree to our{" "}
                <a href="#" className="text-yellow-600 hover:underline">Terms</a>{" "}
                and{" "}
                <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Thank you for supporting H5-Revolution! 💛</h3>
          <p className="text-yellow-100">
            Every purchase helps our girls continue their journey and create amazing music for all Revolutions around the world!
          </p>
        </div>
      </div>
    </div>
  );
}