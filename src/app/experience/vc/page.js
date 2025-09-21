'use client';
import { useState, useEffect } from 'react';
import { Calendar, Clock, Star, Users, Heart, Gift, Video, Headphones, Shield, Bell } from 'lucide-react';

export default function H5RevolutionVC() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [userCredits, setUserCredits] = useState(45);
  const [favoriteMembers, setFavoriteMembers] = useState(['Yuki']);
  const [notifications, setNotifications] = useState(true);
  const [upcomingSessions, setUpcomingSessions] = useState([
    {
      member: 'Yuki',
      date: '30 Sep',
      time: '19:00 - 19:05',
      status: 'confirmed'
    }
  ]);

  const members = [
    {
      name: 'Yuki',
      credits: 18,
      color: 'yellow',
      avatar: '👧',
      popularity: 95,
      totalSessions: 1247,
      rating: 4.9,
      specialties: ['Gaming', 'Anime', 'J-Pop'],
      nextAvailable: '2 hours',
      sessions: [
        { date: '30 Sep', time: '19:00 - 19:05', status: 'available' },
        { date: '1 Okt', time: '20:00 - 20:05', status: 'available' },
        { date: '2 Okt', time: '18:30 - 18:35', status: 'limited' },
        { date: '3 Okt', time: '19:30 - 19:35', status: 'available' }
      ]
    },
    {
      name: 'Akira',
      credits: 15,
      color: 'amber',
      avatar: '🌟',
      popularity: 88,
      totalSessions: 892,
      rating: 4.8,
      specialties: ['Music', 'Dance', 'Fashion'],
      nextAvailable: '4 hours',
      sessions: [
        { date: '30 Sep', time: '17:00 - 17:05', status: 'available' },
        { date: '1 Okt', time: '19:30 - 19:35', status: 'available' },
        { date: '2 Okt', time: '20:30 - 20:35', status: 'available' },
        { date: '3 Okt', time: '18:00 - 18:05', status: 'limited' }
      ]
    },
    {
      name: 'Hana',
      credits: 12,
      color: 'orange',
      avatar: '🌸',
      popularity: 92,
      totalSessions: 1056,
      rating: 4.9,
      specialties: ['Art', 'Cooking', 'Travel'],
      nextAvailable: '1 hour',
      sessions: [
        { date: '30 Sep', time: '16:00 - 16:05', status: 'available' },
        { date: '1 Okt', time: '17:30 - 17:35', status: 'available' },
        { date: '2 Okt', time: '19:00 - 19:05', status: 'available' },
        { date: '3 Okt', time: '20:00 - 20:05', status: 'limited' }
      ]
    }
  ];

  const toggleFavorite = (memberName) => {
    setFavoriteMembers(prev => 
      prev.includes(memberName) 
        ? prev.filter(name => name !== memberName)
        : [...prev, memberName]
    );
  };

  const bookSession = (member, session) => {
    if (userCredits >= member.credits) {
      setUserCredits(prev => prev - member.credits);
      setUpcomingSessions(prev => [...prev, {
        member: member.name,
        date: session.date,
        time: session.time,
        status: 'confirmed'
      }]);
      alert(`Sesi berhasil dibooking dengan ${member.name}!`);
    } else {
      alert('Credits tidak mencukupi!');
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'limited': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black flex items-center gap-2">
                <Video className="text-yellow-500" />
                H5-Revolution VC Experience
              </h1>
              <p className="text-gray-700 mt-1">Exclusive video call sessions with your favorite idols</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 px-4 py-2 rounded-full border-2 border-yellow-300">
                <span className="font-bold text-black">{userCredits} Credits</span>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)}
                className={`p-2 rounded-full ${notifications ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-600'}`}
              >
                <Bell size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-black">24</p>
              </div>
              <Users className="text-yellow-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Favorite Members</p>
                <p className="text-2xl font-bold text-black">{favoriteMembers.length}</p>
              </div>
              <Heart className="text-amber-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-black">8</p>
              </div>
              <Calendar className="text-orange-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Next Session</p>
                <p className="text-sm font-bold text-black">2 hours</p>
              </div>
              <Clock className="text-yellow-600" size={24} />
            </div>
          </div>
        </div>

        {/* Member Selection */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Star className="text-black" />
              Available Members
            </h2>
            <p className="mt-2 opacity-90">Choose your favorite member for an exclusive video call session</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {members.map((member) => (
                <div 
                  key={member.name}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedMember?.name === member.name 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-200 bg-white hover:border-yellow-300'
                  }`}
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{member.avatar}</div>
                    <h3 className="text-xl font-bold text-black flex items-center justify-center gap-2">
                      {member.name}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(member.name);
                        }}
                        className={`${favoriteMembers.includes(member.name) ? 'text-red-500' : 'text-gray-400'}`}
                      >
                        <Heart size={16} fill={favoriteMembers.includes(member.name) ? 'currentColor' : 'none'} />
                      </button>
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                      <Star className="text-yellow-400" size={14} fill="currentColor" />
                      <span>{member.rating}</span>
                      <span>•</span>
                      <span>{member.totalSessions} sessions</span>
                    </div>
                    <div className="bg-yellow-100 text-black px-3 py-1 rounded-full text-sm font-bold mb-3">
                      {member.credits} Credits
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={14} className="text-gray-500" />
                      <span className="text-gray-600">Next: {member.nextAvailable}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${member.popularity}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 ml-1">{member.popularity}%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-1">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty) => (
                        <span key={specialty} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Available Sessions */}
            {selectedMember && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <Calendar className="text-yellow-600" />
                  {selectedMember.name}'s Available Sessions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {selectedMember.sessions.map((session, index) => (
                    <div key={index} className="bg-white border-2 border-yellow-200 rounded-lg p-4 text-center hover:shadow-md transition-all">
                      <p className="font-bold text-black">{session.date}</p>
                      <p className="text-sm text-gray-600 mb-2">{session.time}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                        {session.status}
                      </span>
                      <button
                        onClick={() => bookSession(selectedMember, session)}
                        disabled={userCredits < selectedMember.credits}
                        className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:text-gray-500 text-black font-medium py-2 px-4 rounded-lg transition-colors"
                      >
                        {userCredits >= selectedMember.credits ? `Book (${selectedMember.credits})` : 'Not enough credits'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black p-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Clock />
                Upcoming Sessions
              </h2>
            </div>
            <div className="p-6">
              {upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-black">{session.member}</p>
                          <p className="text-sm text-gray-600">{session.date} • {session.time}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(session.status)}`}>
                          {session.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Video className="mx-auto mb-4" size={48} />
                  <p>No upcoming sessions</p>
                  <p className="text-sm">Book a session above to get started!</p>
                </div>
              )}
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black p-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield />
                Session Guidelines
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Clock className="text-yellow-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-black">Punctuality</p>
                    <p className="text-sm text-gray-600">Login 5 minutes before session starts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Headphones className="text-yellow-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-black">Audio Quality</p>
                    <p className="text-sm text-gray-600">Use headphones for better experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Shield className="text-yellow-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-black">Privacy</p>
                    <p className="text-sm text-gray-600">No recording or screenshots allowed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Heart className="text-yellow-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-black">Respect</p>
                    <p className="text-sm text-gray-600">Be polite and respectful during sessions</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="text-yellow-600" size={16} />
                  <span className="font-medium text-black">Pro Tip</span>
                </div>
                <p className="text-sm text-gray-700">Book sessions in advance to secure your preferred time slots with popular members!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}