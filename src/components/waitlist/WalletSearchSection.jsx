import React, { useState, useEffect } from 'react';
import { Search, Wallet2, Lock, Shield } from 'lucide-react';
import { searchWallets } from '../../data/wallets';

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
      }, 500); // Fake search delay

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
      <div className="flex items-center space-x-3 mb-6">
        <Wallet2 className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-space-grotesk font-bold">Connect Your Wallet</h2>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search wallets by name, category, or supported chains..."
          className="w-full glass-effect rounded-xl pl-12 pr-4 py-4 text-white neon-border focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
        />
        <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
        
        {isSearching && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-gray-600 rounded-full animate-spin border-t-purple-500"></div>
          </div>
        )}
      </div>

      {/* Search Results Count */}
      {searchQuery && (
        <div className="text-sm text-gray-400">
          {isSearching ? 'Searching...' : `Found ${filteredWallets.length} wallet${filteredWallets.length !== 1 ? 's' : ''}`}
        </div>
      )}

      {/* Wallet Grid */}
      <div className="grid gap-4 max-h-96 overflow-y-auto">
        {isSearching ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-600 rounded-full animate-spin border-t-purple-500 mb-4 mx-auto"></div>
              <p className="text-purple-300">Searching secure wallets...</p>
            </div>
          </div>
        ) : filteredWallets.length === 0 ? (
          <div className="text-center py-12">
            <Wallet2 className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">No wallets found matching your search</p>
          </div>
        ) : (
          filteredWallets.map((wallet) => (
            <button
              key={wallet.id}
              className={`flex items-center justify-between p-4 glass-effect rounded-xl transition-all group text-left ${
                selectedWallet?.id === wallet.id 
                  ? 'neon-border bg-purple-500/10 border-purple-400' 
                  : 'neon-border hover:bg-purple-500/5'
              }`}
              onClick={() => onWalletSelect(wallet)}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-medium group-hover:text-purple-300 text-lg">
                    {wallet.name}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {wallet.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{wallet.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Supports:</span>
                  <span className="text-xs text-purple-300">{wallet.supported.join(', ')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <div className="encryption-badge">
                  <Lock className="w-3 h-3 mr-1" />
                  E2E
                </div>
                <Wallet2 className="w-5 h-5 text-purple-400" />
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default WalletSearchSection;