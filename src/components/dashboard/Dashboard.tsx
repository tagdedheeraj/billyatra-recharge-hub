
import React, { useState } from 'react';
import { Header } from './Header';
import { QuickActions } from './QuickActions';
import { OffersSection } from './OffersSection';
import { ServicesGrid } from './ServicesGrid';
import { RechargeModal } from './RechargeModal';
import { ScratchCardModal } from './ScratchCardModal';

export const Dashboard = ({ user, onLogout }) => {
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [showScratchCard, setShowScratchCard] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1250);

  const handleRechargeSuccess = () => {
    setShowRechargeModal(false);
    setShowScratchCard(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header user={user} onLogout={onLogout} walletBalance={walletBalance} />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        <QuickActions onRecharge={() => setShowRechargeModal(true)} />
        <OffersSection />
        <ServicesGrid />
      </div>

      {showRechargeModal && (
        <RechargeModal 
          onClose={() => setShowRechargeModal(false)}
          onSuccess={handleRechargeSuccess}
        />
      )}

      {showScratchCard && (
        <ScratchCardModal
          onClose={() => setShowScratchCard(false)}
          onBonusWon={(bonus) => setWalletBalance(prev => prev + bonus)}
        />
      )}
    </div>
  );
};
