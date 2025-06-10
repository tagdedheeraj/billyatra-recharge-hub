
import React from 'react';
import { Card } from '@/components/ui/card';
import { Home, Wallet, History, User, Search } from 'lucide-react';

export const BottomNavigation = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'wallet', icon: Wallet, label: 'Wallet' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'search', icon: Search, label: 'Explore' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-0 shadow-2xl rounded-t-3xl">
      <div className="flex justify-around items-center px-4 py-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
              activeTab === item.id 
                ? 'text-blue-600 scale-110' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              activeTab === item.id 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
                : 'bg-transparent'
            }`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};
