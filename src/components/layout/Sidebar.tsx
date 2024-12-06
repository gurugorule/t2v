import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Video, Image, MessageSquare, Settings, Plus } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: Video, label: 'Video', path: '/video' },
    { icon: Image, label: 'Image', path: '/image' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <motion.aside 
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
            <Plus size={20} />
            <span>New Chat</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
};