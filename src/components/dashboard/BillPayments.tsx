
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Droplets, Wifi, Phone, Car, Home } from 'lucide-react';

export const BillPayments = () => {
  const billTypes = [
    { icon: Zap, label: 'Electricity', color: 'from-yellow-400 to-orange-500' },
    { icon: Droplets, label: 'Water', color: 'from-blue-400 to-cyan-500' },
    { icon: Wifi, label: 'Broadband', color: 'from-green-400 to-emerald-500' },
    { icon: Phone, label: 'Landline', color: 'from-purple-400 to-purple-600' },
    { icon: Car, label: 'Gas', color: 'from-orange-400 to-red-500' },
    { icon: Home, label: 'DTH', color: 'from-red-400 to-pink-500' }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Bill Payments 💰
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {billTypes.map((bill, index) => (
          <Card 
            key={index}
            className="group p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-center space-y-3">
              <div className={`bg-gradient-to-br ${bill.color} w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-all duration-300`}>
                <bill.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {bill.label}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
