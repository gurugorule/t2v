import React from 'react';
import { useUserStore } from '../../store/userStore';
import { Menu, Bell } from 'lucide-react';
import { UserAvatar } from '../ui/UserAvatar';

export const TopBar: React.FC = () => {
  const { userData } = useUserStore();

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="h-full px-4 flex items-center justify-between">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <Menu size={20} className="text-gray-700 dark:text-gray-300" />
        </button>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <Bell size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          
          {userData && (
            <UserAvatar 
              name={userData.displayName} 
              email={userData.email}
              imageUrl={userData.photoURL}
            />
          )}
        </div>
      </div>
    </header>
  );
};