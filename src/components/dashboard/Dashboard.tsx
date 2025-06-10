
import React, { useState } from 'react';
import { Header } from './Header';
import { QuickActions } from './QuickActions';
import { OffersSection } from './OffersSection';
import { ServicesGrid } from './ServicesGrid';
import { RechargeModal } from './RechargeModal';
import { ScratchCardModal } from './ScratchCardModal';
import { TransactionHistory } from './TransactionHistory';
import { BillPayments } from './BillPayments';
import { UserProfile } from './UserProfile';
import { PaymentMethods } from './PaymentMethods';
import { Notifications } from './Notifications';

export const Dashboard = ({ user, onLogout }) => {
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [showScratchCard, setShowScratchCard] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1250);

  const handleRechargeSuccess = () => {
    setShowRechargeModal(false);
    setShowScratchCard(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <Header 
          user={user} 
          onLogout={onLogout} 
          walletBalance={walletBalance}
          onProfileClick={() => setShowProfile(true)}
        />
        
        <div className="container mx-auto px-4 py-8 space-y-8">
          <QuickActions onRecharge={() => setShowRechargeModal(true)} />
          <BillPayments />
          <OffersSection />
          <ServicesGrid />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <TransactionHistory />
            </div>
            <div className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
                <PaymentMethods />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
                <Notifications />
              </div>
            </div>
          </div>
        </div>
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

      {showProfile && (
        <UserProfile
          user={user}
          onClose={() => setShowProfile(false)}
        />
      )}
    </div>
  );
};
