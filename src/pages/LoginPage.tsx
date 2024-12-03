import React from 'react';
import { motion } from 'framer-motion';
import { AuthTabs } from '../components/auth/AuthTabs';
import { BackgroundEffects } from '../components/BackgroundEffects';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-rose-900">
      <BackgroundEffects />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Welcome</h1>
          <p className="text-gray-300">Sign in or create an account to generate your video</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-md"
        >
          <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-lg border border-gray-700/50 shadow-xl">
            <AuthTabs onLoginSuccess={onLoginSuccess} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};