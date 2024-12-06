export interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface SignupCredentials extends LoginCredentials {
    displayName: string;
  }