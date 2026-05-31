import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Star, Upload, Users, Settings } from 'lucide-react';

const Sidebar = ({ userRole }) => {
  const location = useLocation();

  const clientLinks = [
    { to: '/client-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/client-dashboard', icon: Users, label: 'Browse Editors' },
    { to: '/client-dashboard', icon: Briefcase, label: 'My Projects' },
    { to: '/client-dashboard', icon: Upload, label: 'Upload Project' },
    { to: '/client-dashboard', icon: Settings, label: 'Settings' },
  ];

  const editorLinks = [
    { to: '/editor-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/editor-dashboard', icon: Briefcase, label: 'My Projects' },
    { to: '/editor-dashboard', icon: Star, label: 'Reviews' },
    { to: '/editor-dashboard', icon: Settings, label: 'Settings' },
  ];

  const links = userRole === 'client' ? clientLinks : editorLinks;

  return (
    <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-900/95 border-r border-gray-800 backdrop-blur-sm">
      <nav className="p-4 space-y-2">
        {links.map((link, index) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <Link
              key={index}
              to={link.to}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;