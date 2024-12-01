import React from 'react';

interface VideoPreviewProps {
  videoUrl: string | null;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({ videoUrl }) => {
  if (!videoUrl) return null;

  return (
    <div className="rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      <video
        className="w-full aspect-video"
        controls
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};