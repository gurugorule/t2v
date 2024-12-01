import { VideoGenerationRequest, VideoGenerationResponse } from '../types/video';

// Simulated video generation service
export const generateVideo = async (
  request: VideoGenerationRequest
): Promise<VideoGenerationResponse> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    status: 'success',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  };
};