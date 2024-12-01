import React from 'react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder="Describe the video you want to create..."
      className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 
                 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 placeholder:text-gray-400 min-h-[100px]
                 disabled:opacity-50 disabled:cursor-not-allowed"
    />
  );
};