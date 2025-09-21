'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);

  // Data statis untuk simulasi
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+62 812-3456-7890",
    membership: "Gold",
    joinDate: "15 Januari 2023",
    avatar: "/api/placeholder/80/80",
    points: 2450,
    vouchers: 3,
    orders: [
      { id: "ORD001", date: "20 Mei 2023", total: "Rp 450.000", status: "Selesai", items: 2 },
      { id: "ORD002", date: "12 Juni 2023", total: "Rp 275.000", status: "Diproses", items: 1 },
      { id: "ORD003", date: "5 Juli 2023", total: "Rp 620.000", status: "Dikirim", items: 3 },
    ],
    addresses: [
      { id: 1, name: "Rumah", address: "Jl. Merdeka No. 123, Jakarta Selatan", isPrimary: true },
      { id: 2, name: "Kantor", address: "Jl. Sudirman No. 456, Jakarta Pusat", isPrimary: false },
    ],
    wishlist: 8,
    reviews: 12
  };

  const handleLogout = () => {
    // Implementasi logout (clear token, redirect, etc.)
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    router.push('/login');
  };

  const tabs = [
    { id: 'profile', name: 'Profil', icon: '👤' },
    { id: 'orders', name: 'Pesanan', icon: '📦' },
    { id: 'addresses', name: 'Alamat', icon: '📍' },
    { id: 'rewards', name: 'Rewards', icon: '🎁' },
    { id: 'settings', name: 'Pengaturan', icon: '⚙️' },
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-black">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl text-yellow-600 font-bold">{userData.name.charAt(0)}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black">{userData.name}</h2>
            <p className="text-black opacity-80">{userData.membership} Member</p>
            <p className="text-black opacity-80 text-sm">Bergabung sejak {userData.joinDate}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-yellow-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-black">{userData.orders.length}</div>
          <div className="text-sm text-black opacity-70">Total Pesanan</div>
        </div>
        <div className="bg-white border border-yellow-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-black">{userData.points}</div>
          <div className="text-sm text-black opacity-70">Poin Reward</div>
        </div>
        <div className="bg-white border border-yellow-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-black">{userData.wishlist}</div>
          <div className="text-sm text-black opacity-70">Wishlist</div>
        </div>
        <div className="bg-white border border-yellow-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-black">{userData.reviews}</div>
          <div className="text-sm text-black opacity-70">Review</div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white rounded-lg border border-yellow-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-black">Informasi Profil</h3>
          <button 
            onClick={() => setShowEditProfile(true)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition font-medium"
          >
            Edit Profil
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black opacity-70">Nama Lengkap</label>
            <p className="mt-1 text-black font-medium">{userData.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-black opacity-70">Email</label>
            <p className="mt-1 text-black font-medium">{userData.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-black opacity-70">Telepon</label>
            <p className="mt-1 text-black font-medium">{userData.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-black opacity-70">Membership</label>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-black">
              {userData.membership}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrdersTab = () => (
    <div className="bg-white rounded-lg border border-yellow-200 p-6">
      <h3 className="text-lg font-semibold mb-4 text-black">Histori Pesanan</h3>
      
      <div className="space-y-4">
        {userData.orders.map((order) => (
          <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-yellow-300 transition">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-black">#{order.id}</h4>
                <p className="text-sm text-black opacity-70">{order.date} • {order.items} item</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-black">{order.total}</p>
                <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                  order.status === "Selesai" ? "bg-green-100 text-green-800" :
                  order.status === "Diproses" ? "bg-yellow-100 text-yellow-800" :
                  "bg-blue-100 text-blue-800"
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
            <div className="mt-3 flex space-x-3">
              <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                Lihat Detail
              </button>
              {order.status === "Selesai" && (
                <button className="text-black opacity-70 hover:opacity-100 text-sm font-medium">
                  Beli Lagi
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddressesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-black">Alamat Pengiriman</h3>
        <button 
          onClick={() => setShowAddAddress(true)}
          className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition font-medium"
        >
          Tambah Alamat
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userData.addresses.map((address) => (
          <div key={address.id} className={`border rounded-lg p-4 ${
            address.isPrimary ? "border-yellow-500 bg-yellow-50" : "border-gray-200 bg-white"
          }`}>
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-black">{address.name}</h4>
              {address.isPrimary && (
                <span className="bg-yellow-100 text-black text-xs px-2 py-1 rounded-full">
                  Utama
                </span>
              )}
            </div>
            <p className="text-black opacity-70 text-sm mb-3">{address.address}</p>
            <div className="flex space-x-3">
              <button className="text-yellow-600 text-sm hover:text-yellow-700">Edit</button>
              {!address.isPrimary && (
                <button className="text-red-600 text-sm hover:text-red-700">Hapus</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRewardsTab = () => (
    <div className="space-y-6">
      {/* Points Card */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-black">
        <h3 className="text-xl font-bold mb-2 text-black">H5 Points</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-black">{userData.points.toLocaleString()}</p>
            <p className="text-black opacity-80">Poin tersedia</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
            Tukar Poin
          </button>
        </div>
      </div>

      {/* Vouchers */}
      <div className="bg-white rounded-lg border border-yellow-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-black">Voucher Saya ({userData.vouchers})</h3>
        <div className="space-y-3">
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
            <h4 className="font-medium text-black">Diskon 10%</h4>
            <p className="text-sm text-black opacity-70">Berlaku hingga 31 Desember 2023</p>
          </div>
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
            <h4 className="font-medium text-black">Gratis Ongkir</h4>
            <p className="text-sm text-black opacity-70">Min. pembelian Rp 200.000</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-yellow-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-black">Pengaturan Akun</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-black">Notifikasi Email</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-black">Notifikasi Push</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>

          <button className="w-full text-left py-3 border-b hover:text-yellow-600 transition text-black">
            Ubah Password
          </button>
          
          <button className="w-full text-left py-3 border-b hover:text-yellow-600 transition text-black">
            Riwayat Login
          </button>
          
          <button className="w-full text-left py-3 border-b hover:text-yellow-600 transition text-black">
            Privasi & Keamanan
          </button>
        </div>
      </div>

      {/* Logout Section */}
      <div className="bg-white rounded-lg border border-red-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-red-600">Zona Bahaya</h3>
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black">Akun Saya</h1>
            <p className="text-black opacity-70">Kelola profil dan pengaturan akun Anda</p>
          </div>
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center space-x-2"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg border border-yellow-200 mb-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 px-4 py-3 text-center border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-yellow-500 text-black bg-yellow-50'
                    : 'border-transparent text-black opacity-70 hover:opacity-100 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'orders' && renderOrdersTab()}
          {activeTab === 'addresses' && renderAddressesTab()}
          {activeTab === 'rewards' && renderRewardsTab()}
          {activeTab === 'settings' && renderSettingsTab()}
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold mb-4 text-black">Konfirmasi Logout</h3>
            <p className="text-black opacity-70 mb-6">Apakah Anda yakin ingin keluar dari akun?</p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition"
              >
                Batal
              </button>
              <button 
                onClick={handleLogout}
                className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}