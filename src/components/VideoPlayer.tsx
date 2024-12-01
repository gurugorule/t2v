import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "./ui/Button";

interface VideoPlayerProps {
  videoUrl: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="rounded-lg overflow-hidden bg-gray-900/40 backdrop-blur-md border border-gray-700/50 shadow-xl">
        <video
          src={videoUrl}
          controls
          className="w-full aspect-video"
          playsInline
        />
      </div>

      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => window.open(videoUrl, "_blank")}
          className="bg-gray-900/40 backdrop-blur-md border-gray-700/50 hover:bg-gray-800/60"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Video
        </Button>
      </div>
    </motion.div>
  );
};
