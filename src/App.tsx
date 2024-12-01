import React, { useState } from 'react';
import { Video } from 'lucide-react';
import { PromptInput } from './components/PromptInput';
import { VideoPreview } from './components/VideoPreview';
import { LoadingSpinner } from './components/LoadingSpinner';
import { GenerateButton } from './components/GenerateButton';
import { generateVideo } from './services/videoService';

function App() {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await generateVideo({ prompt });
      if (response.status === 'success') {
        setVideoUrl(response.videoUrl);
      } else {
        setError(response.message || 'Failed to generate video');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <Video className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold">AI Video Generator</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Enter Your Prompt</h2>
            <PromptInput
              value={prompt}
              onChange={setPrompt}
              disabled={isLoading}
            />
            <div className="mt-4">
              <GenerateButton
                onClick={handleGenerate}
                isGenerating={isLoading}
                disabled={!prompt.trim()}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-200">
              {error}
            </div>
          )}

          {isLoading && <LoadingSpinner />}

          {videoUrl && (
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Generated Video</h2>
              <VideoPreview videoUrl={videoUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;