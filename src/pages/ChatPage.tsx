import React from 'react';
import { ChatInput } from '../components/chat/ChatInput';

export const ChatPage: React.FC = () => {
  const handleSubmit = (prompt: string) => {
    console.log('Submitted prompt:', prompt);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages will go here */}
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <ChatInput onSubmit={handleSubmit} isLoading={false} />
      </div>
    </div>
  );
};