
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Phone } from 'lucide-react';

export const RechargeModal = ({ onClose, onSuccess }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [operator, setOperator] = useState('');

  const operators = ['Airtel', 'Jio', 'Vi', 'BSNL'];
  
  const plans = [
    { amount: 149, validity: '24 days', data: '1GB/day', calls: 'Unlimited' },
    { amount: 299, validity: '28 days', data: '2GB/day', calls: 'Unlimited' },
    { amount: 399, validity: '56 days', data: '1.5GB/day', calls: 'Unlimited' },
    { amount: 599, validity: '84 days', data: '2GB/day', calls: 'Unlimited' },
  ];

  const handleRecharge = () => {
    if (mobileNumber && selectedPlan && operator) {
      onSuccess();
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Mobile Recharge
          </DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4">
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Mobile Number</label>
            <Input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              maxLength={10}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Select Operator</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {operators.map((op) => (
                <Button
                  key={op}
                  variant={operator === op ? "default" : "outline"}
                  onClick={() => setOperator(op)}
                  className="h-12"
                >
                  {op}
                </Button>
              ))}
            </div>
          </div>

          {operator && (
            <div>
              <label className="text-sm font-medium">Select Plan</label>
              <div className="space-y-2 mt-2">
                {plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`p-3 cursor-pointer transition-all ${
                      selectedPlan?.amount === plan.amount
                        ? 'ring-2 ring-blue-500 bg-blue-50'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg">₹{plan.amount}</span>
                          <Badge variant="secondary">{plan.validity}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {plan.data} • {plan.calls}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleRecharge}
            disabled={!mobileNumber || !selectedPlan || !operator}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            Recharge ₹{selectedPlan?.amount || 0}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
