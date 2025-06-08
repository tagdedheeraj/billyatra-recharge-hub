
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ticket } from 'lucide-react';

export const OffersSection = () => {
  const offers = [
    {
      title: "Cashback Offer",
      description: "Get 10% cashback on recharge above ₹100",
      code: "CASH10",
      color: "bg-gradient-to-r from-green-400 to-green-600"
    },
    {
      title: "First Recharge",
      description: "Extra ₹20 on your first recharge",
      code: "FIRST20",
      color: "bg-gradient-to-r from-purple-400 to-purple-600"
    },
    {
      title: "Weekend Special",
      description: "Double rewards on weekends",
      code: "WEEKEND",
      color: "bg-gradient-to-r from-orange-400 to-orange-600"
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Offers & Coupons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`${offer.color} p-4 text-white`}>
              <div className="flex items-center gap-2 mb-2">
                <Ticket className="w-4 h-4" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {offer.code}
                </Badge>
              </div>
              <h3 className="font-bold text-lg">{offer.title}</h3>
              <p className="text-sm opacity-90">{offer.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
