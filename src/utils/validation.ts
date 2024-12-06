export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };
  
  export const validatePrompt = (prompt: string): boolean => {
    return prompt.trim().length > 0 && prompt.length <= 500;
  };