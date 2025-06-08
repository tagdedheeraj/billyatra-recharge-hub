
import React from 'react';
import { Card } from '@/components/ui/card';
import { Phone, User, Calendar, Search, Zap, Droplets, Wifi, CreditCard } from 'lucide-react';

export const QuickActions = ({ onRecharge }) => {
  const quickActions = [
    { icon: Phone, label: 'Mobile Recharge', color: 'bg-green-500', onClick: onRecharge },
    { icon: User, label: 'DTH Recharge', color: 'bg-blue-500', onClick: onRecharge },
    { icon: Calendar, label: 'Postpaid', color: 'bg-purple-500', onClick: onRecharge },
    { icon: Zap, label: 'Electricity', color: 'bg-yellow-500', onClick: () => {} },
    { icon: Droplets, label: 'Water Bill', color: 'bg-blue-400', onClick: () => {} },
    { icon: Wifi, label: 'Broadband', color: 'bg-green-400', onClick: () => {} },
    { icon: CreditCard, label: 'Credit Card', color: 'bg-red-500', onClick: () => {} },
    { icon: Search, label: 'Browse Plans', color: 'bg-orange-500', onClick: () => {} }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Recharge & Bills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Card 
            key={index}
            className="p-4 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
            onClick={action.onClick}
          >
            <div className="text-center space-y-2">
              <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700">{action.label}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
