import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ userRole, setUserRole }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserRole(null);
    navigate('/');
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            EditHub
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            {!userRole && (
              <Link to="/signup" className="text-gray-300 hover:text-white transition">
                Sign Up
              </Link>
            )}
            {userRole && (
              <>
                <Link 
                  to={userRole === 'client' ? '/client-dashboard' : '/editor-dashboard'} 
                  className="text-gray-300 hover:text-white transition"
                >
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-gray-300 hover:text-white transition">
                  Logout
                </button>
              </>
            )}
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-gray-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">
              Home
            </Link>
            {!userRole && (
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">
                Sign Up
              </Link>
            )}
            {userRole && (
              <>
                <Link 
                  to={userRole === 'client' ? '/client-dashboard' : '/editor-dashboard'}
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block text-gray-300 hover:text-white"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => { handleLogout(); setMobileMenuOpen(false); }} 
                  className="block w-full text-left text-gray-300 hover:text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;