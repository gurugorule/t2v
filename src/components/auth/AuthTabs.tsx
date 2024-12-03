import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export const AuthTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors
            ${activeTab === 'login'
              ? 'bg-purple-500 text-white'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
            }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors
            ${activeTab === 'signup'
              ? 'bg-purple-500 text-white'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
            }`}
        >
          Sign Up
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'login' ? <LoginForm /> : <SignUpForm />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
