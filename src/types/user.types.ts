export interface UserProfile {
    uid: string;
    email: string;
    displayName: string;
    createdAt: number;
    lastLogin?: number;
    preferences?: UserPreferences;
  }
  
  export interface UserPreferences {
    theme: 'light' | 'dark';
    notifications: boolean;
  }