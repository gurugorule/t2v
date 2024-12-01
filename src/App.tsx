import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Header } from "./components/Header";
import { PromptForm } from "./components/PromptForm";
import { VideoPlayer } from "./components/VideoPlayer";
import { BackgroundEffects } from "./components/BackgroundEffects";

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-rose-900">
      <BackgroundEffects />

      <div className="relative z-10 max-w-2xl mx-auto p-8 space-y-8">
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
            background: "rgba(17, 24, 39, 0.8)",
            color: "#fff",
            border: "1px solid rgba(55, 65, 81, 0.5)",
            backdropFilter: "blur(8px)",
          },
        }}
      />
    </div>
  );
}

export default App;
