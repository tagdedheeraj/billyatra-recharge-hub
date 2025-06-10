
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Tv, Phone, Bus, Plane, Train, Clock } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    { icon: Smartphone, label: 'Mobile Recharge', available: true, color: 'from-green-400 to-emerald-500' },
    { icon: Tv, label: 'DTH Recharge', available: false, color: 'from-blue-400 to-blue-500' },
    { icon: Phone, label: 'Postpaid Bills', available: false, color: 'from-purple-400 to-purple-500' },
    { icon: Bus, label: 'Bus Tickets', available: false, color: 'from-orange-400 to-orange-500' },
    { icon: Plane, label: 'Flight Tickets', available: false, color: 'from-red-400 to-red-500' },
    { icon: Train, label: 'Train Tickets', available: false, color: 'from-indigo-400 to-indigo-500' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        All Services 🚀
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="group p-4 text-center hover:shadow-2xl transition-all duration-300 relative bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:scale-105 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="space-y-3">
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-all duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                {service.label}
              </p>
              {!service.available && (
                <Badge variant="secondary" className="text-xs bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 border-0 shadow-sm animate-pulse">
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
