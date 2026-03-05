import React, { useState, useEffect } from 'react';
import { Search, Wallet2, Lock, Shield, ChevronRight } from 'lucide-react';
import { searchWallets } from '../../data/wallets';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

function WalletSearchSection({ onWalletSelect, selectedWallet }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWallets, setFilteredWallets] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const results = searchWallets(searchQuery);
        setFilteredWallets(results);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setFilteredWallets(searchWallets(''));
      setIsSearching(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    setFilteredWallets(searchWallets(''));
  }, []);

  return (
    <div className="space-y-6">
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for your wallet..."
          className="pl-10 h-12 bg-secondary/30 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-primary/20"
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-primary/20 rounded-full animate-spin border-t-primary"></div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
        {filteredWallets.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-secondary/10 rounded-2xl border border-dashed border-border">
            <Wallet2 className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-20" />
            <p className="text-sm text-muted-foreground font-medium">No wallets found matching your search</p>
          </div>
        ) : (
          filteredWallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => onWalletSelect(wallet)}
              className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200 group relative overflow-hidden ${
                selectedWallet?.id === wallet.id 
                  ? 'border-primary ring-1 ring-primary/20 bg-primary/5' 
                  : 'bg-background hover:bg-secondary/50 border-border hover:border-primary/30'
              }`}
            >
              <div className="h-12 w-12 rounded-xl bg-secondary/50 flex items-center justify-center p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                {wallet.logo ? (
                  <img src={wallet.logo} alt={wallet.name} className="h-full w-full object-contain" />
                ) : (
                  <Wallet2 className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-foreground text-sm truncate uppercase tracking-tight">
                    {wallet.name}
                  </span>
                  {selectedWallet?.id === wallet.id && (
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground font-medium uppercase truncate">
                    {wallet.category}
                  </span>
                  <span className="text-[10px] text-primary/40 font-bold">•</span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center">
                    <Lock className="w-2.5 h-2.5 mr-1" />
                    E2E
                  </span>
                </div>
              </div>

              <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                selectedWallet?.id === wallet.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              }`} />
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default WalletSearchSection;
