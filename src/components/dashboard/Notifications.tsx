
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Gift, AlertCircle, CheckCircle } from 'lucide-react';

export const Notifications = () => {
  const notifications = [
    {
      id: '1',
      title: 'Recharge Successful',
      message: 'Your mobile recharge of ₹299 was successful',
      type: 'success',
      time: '2 mins ago',
      icon: CheckCircle,
      unread: true
    },
    {
      id: '2',
      title: 'Special Offer',
      message: 'Get 20% cashback on your next recharge',
      type: 'offer',
      time: '1 hour ago',
      icon: Gift,
      unread: true
    },
    {
      id: '3',
      title: 'Bill Reminder',
      message: 'Your electricity bill is due tomorrow',
      type: 'warning',
      time: '3 hours ago',
      icon: AlertCircle,
      unread: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-600';
      case 'offer': return 'bg-blue-100 text-blue-600';
      case 'warning': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notifications
          <Badge variant="destructive" className="ml-auto">
            {notifications.filter(n => n.unread).length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-3 border rounded-lg ${notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
                  <notification.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{notification.title}</p>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
                {notification.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
