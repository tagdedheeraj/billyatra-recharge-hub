
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Smartphone, Zap, Droplets, Car } from 'lucide-react';

export const TransactionHistory = () => {
  const transactions = [
    {
      id: '1',
      type: 'Mobile Recharge',
      number: '9876543210',
      amount: 299,
      status: 'Success',
      date: '2024-06-07 14:30',
      icon: Smartphone,
      color: 'bg-green-500'
    },
    {
      id: '2',
      type: 'Electricity Bill',
      number: 'MSEB123456',
      amount: 1250,
      status: 'Success',
      date: '2024-06-06 10:15',
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      id: '3',
      type: 'Water Bill',
      number: 'WB789012',
      amount: 680,
      status: 'Pending',
      date: '2024-06-05 16:45',
      icon: Droplets,
      color: 'bg-blue-500'
    },
    {
      id: '4',
      type: 'DTH Recharge',
      number: 'DT345678',
      amount: 399,
      status: 'Success',
      date: '2024-06-04 12:20',
      icon: Car,
      color: 'bg-purple-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className={`${transaction.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                  <transaction.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.type}</p>
                  <p className="text-sm text-gray-500">{transaction.number}</p>
                  <p className="text-xs text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">₹{transaction.amount}</p>
                <Badge className={`text-xs ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
