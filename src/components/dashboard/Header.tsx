
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, LogOut } from 'lucide-react';

export const Header = ({ user, onLogout, walletBalance }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Billyatra</h1>
            <p className="text-blue-100">Hello, {user?.name || 'User'}!</p>
          </div>
          <Button variant="ghost" onClick={onLogout} className="text-white hover:bg-white/20">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
        
        <Card className="mt-6 bg-white/10 backdrop-blur border-0 text-white">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Wallet Balance</p>
                <p className="text-2xl font-bold">₹{walletBalance}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <User className="w-6 h-6" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
