import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Header } from "./components/Header";
import { PromptForm } from "./components/PromptForm";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    toast.loading("Generating your video...");

    // Simulate video generation
    setTimeout(() => {
      setVideoUrl(
        "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      );
      setIsGenerating(false);
      toast.success("Video generated successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Header />

        <div className="space-y-8">
          <PromptForm
            prompt={prompt}
            onPromptChange={setPrompt}
            onSubmit={handleGenerate}
            isGenerating={isGenerating}
          />

          {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
        </div>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid #374151",
          },
        }}
      />
    </div>
  );
}

export default App;
