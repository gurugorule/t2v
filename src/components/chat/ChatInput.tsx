import React, { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt.trim());
      setPrompt("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-center">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Prompt here..."
          className="w-full p-4 pr-12 rounded-2xl bg-gray-100 dark:bg-gray-800 border-0
                   focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden
                   text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          rows={1}
          style={{ minHeight: "56px" }}
        />
        <button
          type="submit"
          disabled={!prompt.trim() || isLoading}
          className="absolute right-2 p-2 rounded-lg bg-blue-600 hover:bg-blue-700
                   disabled:bg-gray-400 disabled:cursor-not-allowed
                   text-white transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};
