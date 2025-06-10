
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, LogOut, Bell, Wallet } from 'lucide-react';

export const Header = ({ user, onLogout, walletBalance, onProfileClick }) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Billyatra
            </h1>
            <p className="text-blue-100 mt-1">Hello, {user?.name || 'User'}! 👋</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
            <Button 
              variant="ghost" 
              onClick={onProfileClick}
              className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <User className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              onClick={onLogout} 
              className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
        
        <Card className="mt-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border-0 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm opacity-90">Wallet Balance</p>
                <p className="text-3xl font-bold mt-1 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  ₹{walletBalance}
                </p>
                <p className="text-xs text-blue-200 mt-1">Available for recharge</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg animate-pulse">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mt-4 bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
