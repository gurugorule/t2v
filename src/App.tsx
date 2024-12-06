import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useAuth } from './hooks/useAuth';
import { MainLayout } from './components/layout/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { ChatPage } from './pages/ChatPage';
import { VideoPage } from './pages/VideoPage';
import { ImagePage } from './pages/ImagePage';
import { SettingsPage } from './pages/SettingsPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/video" element={<VideoPage />} />
                <Route path="/image" element={<ImagePage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </MainLayout>
          }
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