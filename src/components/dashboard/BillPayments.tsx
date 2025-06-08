
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Droplets, Wifi, Phone, Car, Home } from 'lucide-react';

export const BillPayments = () => {
  const billTypes = [
    { icon: Zap, label: 'Electricity', color: 'bg-yellow-500' },
    { icon: Droplets, label: 'Water', color: 'bg-blue-500' },
    { icon: Wifi, label: 'Broadband', color: 'bg-green-500' },
    { icon: Phone, label: 'Landline', color: 'bg-purple-500' },
    { icon: Car, label: 'Gas', color: 'bg-orange-500' },
    { icon: Home, label: 'DTH', color: 'bg-red-500' }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Bill Payments</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {billTypes.map((bill, index) => (
          <Card 
            key={index}
            className="p-4 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
          >
            <div className="text-center space-y-2">
              <div className={`${bill.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto`}>
                <bill.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700">{bill.label}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
