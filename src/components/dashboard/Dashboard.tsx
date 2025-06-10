
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
import { BottomNavigation } from './BottomNavigation';
import { WalletPage } from './WalletPage';

export const Dashboard = ({ user, onLogout }) => {
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [showScratchCard, setShowScratchCard] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1250);
  const [activeTab, setActiveTab] = useState('home');

  const handleRechargeSuccess = () => {
    setShowRechargeModal(false);
    setShowScratchCard(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'wallet':
        return <WalletPage walletBalance={walletBalance} />;
      case 'history':
        return <TransactionHistory />;
      case 'profile':
        return (
          <div className="space-y-6 pb-24">
            <PaymentMethods />
            <Notifications />
          </div>
        );
      case 'search':
        return (
          <div className="space-y-8 pb-24">
            <ServicesGrid />
            <OffersSection />
          </div>
        );
      default:
        return (
          <div className="space-y-8 pb-24">
            <QuickActions onRecharge={() => setShowRechargeModal(true)} />
            <BillPayments />
            <OffersSection />
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
        );
    }
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
        
        <div className="container mx-auto px-4 py-8">
          {renderContent()}
        </div>

        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
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
