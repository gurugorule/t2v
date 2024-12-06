import { create } from 'zustand';
import { UserData } from '../services/userService';

interface UserState {
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
  isAuthenticated: boolean;
}

export const useUserStore = create<UserState>((set) => ({
  userData: null,
  isAuthenticated: false,
  setUserData: (userData) => set({ 
    userData, 
    isAuthenticated: !!userData 
  }),
}));