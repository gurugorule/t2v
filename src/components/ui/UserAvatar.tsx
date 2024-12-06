import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
import { auth } from '../../config/firebase';

interface UserAvatarProps {
  name: string;
  email: string;
  imageUrl?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ name, email, imageUrl }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="focus:outline-none">
          <Avatar.Root className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            {imageUrl ? (
              <Avatar.Image
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Avatar.Fallback className="flex items-center justify-center w-full h-full bg-blue-500 text-white text-sm font-medium">
                {name.slice(0, 2).toUpperCase()}
              </Avatar.Fallback>
            )}
          </Avatar.Root>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-2"
          sideOffset={5}
          align="end"
        >
          <div className="px-2 py-1.5 border-b border-gray-200 dark:border-gray-800">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{email}</p>
          </div>

          <DropdownMenu.Item className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <User size={16} />
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
            <Settings size={16} />
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-gray-200 dark:bg-gray-800 my-1" />

          <DropdownMenu.Item 
            className="flex items-center gap-2 px-2 py-1.5 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer"
            onClick={handleSignOut}
          >
            <LogOut size={16} />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};