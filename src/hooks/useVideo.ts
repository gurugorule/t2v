import { useState } from 'react';
import { generateVideo } from '../services/videoService';
import { useUserStore } from '../store/userStore';
import { toast } from 'sonner';

export const useVideo = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { userData } = useUserStore();

  const handleGeneration = async (prompt: string) => {
    if (!userData) {
      throw new Error('User must be authenticated');
    }

    try {
      setIsGenerating(true);
      toast.loading('Generating your video...');
      const result = await generateVideo(prompt, userData.uid);
      setVideoUrl(result.videoUrl);
      toast.success('Video generated successfully!');
    } catch (error) {
      toast.error('Failed to generate video');
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    videoUrl,
    handleGeneration
  };
};