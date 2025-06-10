
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, Plus, ArrowUpRight, ArrowDownLeft, CreditCard, Gift, TrendingUp } from 'lucide-react';

export const WalletPage = ({ walletBalance }) => {
  const recentActivity = [
    { type: 'credit', amount: 500, description: 'Added to wallet', time: '2 hours ago', icon: Plus },
    { type: 'debit', amount: 299, description: 'Mobile Recharge', time: '3 hours ago', icon: ArrowUpRight },
    { type: 'credit', amount: 50, description: 'Cashback earned', time: '1 day ago', icon: Gift },
    { type: 'debit', amount: 150, description: 'Bill Payment', time: '2 days ago', icon: ArrowUpRight }
  ];

  const quickActions = [
    { icon: Plus, label: 'Add Money', color: 'from-green-500 to-emerald-600' },
    { icon: ArrowUpRight, label: 'Send Money', color: 'from-blue-500 to-blue-600' },
    { icon: CreditCard, label: 'Pay Bills', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, label: 'Invest', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="space-y-6 pb-24">
      {/* Wallet Balance Card */}
      <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white border-0 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-100 text-sm opacity-90">Total Balance</p>
              <p className="text-4xl font-bold mt-1 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                ₹{walletBalance}
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg animate-pulse">
              <Wallet className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="flex-1 bg-white/20 hover:bg-white/30 text-white border-0">
              <Plus className="w-4 h-4 mr-2" />
              Add Money
            </Button>
            <Button className="flex-1 bg-white/20 hover:bg-white/30 text-white border-0">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <div className={`bg-gradient-to-br ${action.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700">{action.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowUpRight className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <activity.icon className={`w-5 h-5 ${
                      activity.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    activity.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {activity.type === 'credit' ? '+' : '-'}₹{activity.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
