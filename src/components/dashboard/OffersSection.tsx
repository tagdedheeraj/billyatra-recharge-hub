
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ticket, Sparkles, Gift } from 'lucide-react';

export const OffersSection = () => {
  const offers = [
    {
      title: "Cashback Offer",
      description: "Get 10% cashback on recharge above ₹100",
      code: "CASH10",
      color: "from-green-400 via-emerald-500 to-teal-600",
      icon: Sparkles
    },
    {
      title: "First Recharge",
      description: "Extra ₹20 on your first recharge",
      code: "FIRST20",
      color: "from-purple-400 via-purple-500 to-indigo-600",
      icon: Gift
    },
    {
      title: "Weekend Special",
      description: "Double rewards on weekends",
      code: "WEEKEND",
      color: "from-orange-400 via-red-500 to-pink-600",
      icon: Ticket
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Offers & Coupons 🎁
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <Card 
            key={index} 
            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 border-0 shadow-lg"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`bg-gradient-to-br ${offer.color} p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <offer.icon className="w-6 h-6 animate-pulse" />
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 shadow-lg">
                    {offer.code}
                  </Badge>
                </div>
                <h3 className="font-bold text-xl mb-2">{offer.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{offer.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
