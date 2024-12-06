import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Video, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Video className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Video Generation',
      description: 'Transform your ideas into stunning videos with our advanced AI technology'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Generate high-quality videos in minutes, not hours'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Private',
      description: 'Your data and creations are protected with enterprise-grade security'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: 'Custom Styles',
      description: 'Choose from various styles and customize your videos to match your brand'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            AI Video Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create stunning videos with the power of artificial intelligence. Transform your ideas into professional videos in minutes.
          </p>
          <Button
            onClick={() => navigate('/chat')}
            className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full"
          >
            Try Video Generation
          </Button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              { step: '1', text: 'Enter your video idea or description' },
              { step: '2', text: 'Our AI analyzes your input and generates a video' },
              { step: '3', text: 'Download and share your created video' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <p className="text-lg text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};