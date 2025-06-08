
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Ticket } from 'lucide-react';

export const ScratchCardModal = ({ onClose, onBonusWon }) => {
  const [isScratched, setIsScratched] = useState(false);
  const [bonus, setBonus] = useState(0);

  const handleScratch = () => {
    const bonusAmount = Math.floor(Math.random() * 100) + 10; // Random bonus between 10-109
    setBonus(bonusAmount);
    setIsScratched(true);
    onBonusWon(bonusAmount);
  };

  const handleClaim = () => {
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center">
            <Ticket className="w-5 h-5" />
            Congratulations! 🎉
          </DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4">
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <p className="text-gray-600">You've won a scratch card!</p>
          
          <Card className="p-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-orange-400/20"></div>
            <div className="relative z-10">
              {!isScratched ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <Ticket className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-bold text-lg">Scratch to Win!</p>
                    <p className="text-sm opacity-90">Win cashback up to ₹100</p>
                  </div>
                  <Button
                    onClick={handleScratch}
                    className="w-full bg-white text-orange-600 hover:bg-gray-100"
                  >
                    Scratch Now!
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">₹{bonus}</div>
                    <p className="text-sm opacity-90">Cashback Won!</p>
                    <Badge className="mt-2 bg-white text-orange-600">
                      Added to Wallet
                    </Badge>
                  </div>
                  <Button
                    onClick={handleClaim}
                    className="w-full bg-white text-orange-600 hover:bg-gray-100"
                  >
                    Claim Reward
                  </Button>
                </div>
              )}
            </div>
          </Card>
          
          <p className="text-xs text-gray-500">
            * Cashback will be credited to your wallet instantly
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
