export interface VideoGenerationRequest {
  prompt: string;
}

export interface VideoGenerationResponse {
  videoUrl: string;
  status: 'success' | 'error';
  message?: string;
}