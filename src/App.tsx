import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { useAuthStore } from './store/authStore';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { VideoPlayer } from './components/VideoPlayer';
import { BackgroundEffects } from './components/BackgroundEffects';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    toast.loading('Generating your video...');

    setTimeout(() => {
      setVideoUrl('https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
      setIsGenerating(false);
      toast.success('Video generated successfully!');
    }, 2000);
  };

  const MainContent = () => (
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
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" /> : <LoginPage />} 
        />
        <Route 
          path="/" 
          element={user ? <MainContent /> : <Navigate to="/login" />} 
        />
      </Routes>
      
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(17, 24, 39, 0.8)',
            color: '#fff',
            border: '1px solid rgba(55, 65, 81, 0.5)',
            backdropFilter: 'blur(8px)',
          },
        }}
      />
    </Router>
  );
}

export default App;