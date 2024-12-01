import React from 'react';
import { Wand2 } from 'lucide-react';

interface GenerateButtonProps {
  onClick: () => void;
  isGenerating: boolean;
  disabled: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  isGenerating,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isGenerating}
      className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 
                disabled:bg-gray-600 disabled:cursor-not-allowed
                text-white rounded-lg flex items-center justify-center gap-2
                transition-colors duration-200"
    >
      <Wand2 className="w-5 h-5" />
      {isGenerating ? 'Generating...' : 'Generate Video'}
    </button>
  );
};