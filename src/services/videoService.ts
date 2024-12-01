import { VideoGenerationRequest, VideoGenerationResponse } from '../types/video';
import { CONFIG } from '../config/constants';

// Simulated video generation service
export const generateVideo = async (
  request: VideoGenerationRequest
): Promise<VideoGenerationResponse> => {
  // Simulate API call with configured timeout
  await new Promise((resolve) => setTimeout(resolve, CONFIG.VIDEO_GENERATION_TIMEOUT));

  return {
    status: 'success',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  };
};