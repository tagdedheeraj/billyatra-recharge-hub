
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Calendar, User, Ticket, Clock } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    { icon: Phone, label: 'Mobile Recharge', available: true },
    { icon: Calendar, label: 'DTH Recharge', available: true },
    { icon: User, label: 'Postpaid Bills', available: true },
    { icon: Ticket, label: 'Bus Tickets', available: false },
    { icon: Ticket, label: 'Flight Tickets', available: false },
    { icon: Ticket, label: 'Train Tickets', available: false },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">All Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <Card key={index} className="p-4 text-center hover:shadow-lg transition-all relative">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">{service.label}</p>
              {!service.available && (
                <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-600">
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
