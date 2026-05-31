import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const mockEditors = [
  { id: 1, name: "Alex Turner", rating: 4.9, software: "Premiere Pro, After Effects", experience: "5 years", projects: 127, avatar: "AT" },
  { id: 2, name: "Sarah Chen", rating: 4.8, software: "Final Cut Pro, DaVinci", experience: "4 years", projects: 98, avatar: "SC" },
  { id: 3, name: "Mike Johnson", rating: 4.7, software: "Premiere Pro, Photoshop", experience: "6 years", projects: 156, avatar: "MJ" },
  { id: 4, name: "Emma Davis", rating: 4.9, software: "After Effects, Cinema 4D", experience: "3 years", projects: 89, avatar: "ED" }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Find Professional Video Editors
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
                In Minutes
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect with talented video editors for your projects. Fast, reliable, and professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/signup')} 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/signup')} 
                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold border border-gray-700 hover:border-blue-500 transition-all"
              >
                Browse Editors
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Editors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Editors</h2>
          <p className="text-gray-400">Top-rated professionals ready to bring your vision to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockEditors.map((editor) => (
            <div 
              key={editor.id} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                {editor.avatar}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{editor.name}</h3>
              <div className="flex items-center mb-3">
                <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                <span className="text-white font-semibold">{editor.rating}</span>
                <span className="text-gray-400 ml-2 text-sm">({editor.projects} projects)</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">{editor.software}</p>
              <p className="text-xs text-gray-500 mb-4">{editor.experience} experience</p>
              <button 
                onClick={() => navigate('/signup')} 
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-sm font-medium"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400">Professional Editors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">2,500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose EditHub?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Top Quality</h3>
            <p className="text-gray-400">Vetted professionals with proven track records</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-400">Get your projects done on time, every time</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Payment</h3>
            <p className="text-gray-400">Safe and secure payment processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;