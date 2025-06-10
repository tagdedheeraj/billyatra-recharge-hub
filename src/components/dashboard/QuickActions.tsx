
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Tv, CreditCard, Zap, Droplets, Wifi, Phone, Search, Clock } from 'lucide-react';

export const QuickActions = ({ onRecharge }) => {
  const quickActions = [
    { icon: Smartphone, label: 'Mobile Recharge', color: 'from-green-500 to-emerald-600', onClick: onRecharge, available: true },
    { icon: Tv, label: 'DTH Recharge', color: 'from-blue-500 to-blue-600', onClick: () => {}, available: false },
    { icon: Phone, label: 'Postpaid', color: 'from-purple-500 to-purple-600', onClick: () => {}, available: false },
    { icon: Zap, label: 'Electricity', color: 'from-yellow-500 to-orange-500', onClick: () => {}, available: false },
    { icon: Droplets, label: 'Water Bill', color: 'from-cyan-500 to-blue-500', onClick: () => {}, available: false },
    { icon: Wifi, label: 'Broadband', color: 'from-green-400 to-teal-500', onClick: () => {}, available: false },
    { icon: CreditCard, label: 'Credit Card', color: 'from-red-500 to-pink-600', onClick: () => {}, available: false },
    { icon: Search, label: 'Browse Plans', color: 'from-orange-500 to-red-500', onClick: () => {}, available: false }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Quick Recharge & Bills ⚡
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Card 
            key={index}
            className="group p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg relative"
            onClick={action.available ? action.onClick : undefined}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center space-y-3">
              <div className={`bg-gradient-to-br ${action.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-all duration-300`}>
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {action.label}
              </p>
              {!action.available && (
                <Badge variant="secondary" className="text-xs bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 border-0 shadow-sm animate-pulse absolute -top-2 -right-2">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
