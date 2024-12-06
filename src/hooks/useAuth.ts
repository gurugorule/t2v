import { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from '../store/userStore';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUserData } = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserData({
          uid: user.uid,
          email: user.email!,
          displayName: user.displayName || '',
          createdAt: Date.now(),
        });
      } else {
        setUserData(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [setUserData]);

  return { isLoading };
};