
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Smartphone, Building2, Plus } from 'lucide-react';

export const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: '1',
      type: 'UPI',
      details: 'john@paytm',
      icon: Smartphone,
      color: 'bg-green-500'
    },
    {
      id: '2',
      type: 'Credit Card',
      details: '**** **** **** 1234',
      icon: CreditCard,
      color: 'bg-blue-500'
    },
    {
      id: '3',
      type: 'Net Banking',
      details: 'HDFC Bank',
      icon: Building2,
      color: 'bg-purple-500'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Payment Methods</span>
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`${method.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{method.type}</p>
                  <p className="text-sm text-gray-500">{method.details}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
