import React from "react";
import { motion } from "framer-motion";
import { Video } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center gap-3"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-30" />
        <Video className="w-8 h-8 text-blue-400 relative" />
      </div>
      <h1 className="text-3xl font-bold text-white">AI Video Generator</h1>
    </motion.div>
  );
};
