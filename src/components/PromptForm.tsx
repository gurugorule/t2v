import React from "react";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";
import { Button } from "./ui/Button";

interface PromptFormProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: () => void;
  isGenerating: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({
  prompt,
  onPromptChange,
  onSubmit,
  isGenerating,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="Describe your video idea in detail..."
          className="w-full p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white border border-gray-700
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     placeholder:text-gray-400 min-h-[120px] resize-none"
          disabled={isGenerating}
        />
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          {prompt.length}/500 characters
        </div>
      </div>

      <Button
        type="submit"
        disabled={!prompt.trim() || isGenerating}
        className="w-full"
        size="lg"
      >
        <Wand2 className="w-5 h-5 mr-2" />
        {isGenerating ? "Generating Video..." : "Generate Video"}
      </Button>
    </motion.form>
  );
};
