export const wallets = [
  { 
    id: 'metamask', 
    name: 'MetaMask', 
    description: 'The most popular Ethereum wallet',
    category: 'Browser Extension',
    supported: ['Ethereum', 'BSC', 'Polygon']
  },
  { 
    id: 'walletconnect', 
    name: 'WalletConnect', 
    description: 'Connect to any dApp with QR code',
    category: 'Protocol',
    supported: ['Multi-chain']
  },
  { 
    id: 'coinbase', 
    name: 'Coinbase Wallet', 
    description: 'Self-custody wallet by Coinbase',
    category: 'Mobile/Desktop',
    supported: ['Ethereum', 'Bitcoin', 'Litecoin']
  },
  { 
    id: 'trust', 
    name: 'Trust Wallet', 
    description: 'Multi-cryptocurrency wallet',
    category: 'Mobile',
    supported: ['60+ Blockchains']
  },
  { 
    id: 'ledger', 
    name: 'Ledger', 
    description: 'Hardware wallet for maximum security',
    category: 'Hardware',
    supported: ['1800+ Coins']
  },
  { 
    id: 'phantom', 
    name: 'Phantom', 
    description: 'Solana ecosystem wallet',
    category: 'Browser Extension',
    supported: ['Solana', 'Ethereum']
  },
  { 
    id: 'exodus', 
    name: 'Exodus', 
    description: 'Beautiful desktop and mobile wallet',
    category: 'Desktop/Mobile',
    supported: ['260+ Assets']
  },
  { 
    id: 'atomic', 
    name: 'Atomic Wallet', 
    description: 'Decentralized wallet with built-in exchange',
    category: 'Desktop/Mobile',
    supported: ['500+ Coins']
  },
  { 
    id: 'rainbow', 
    name: 'Rainbow', 
    description: 'Ethereum wallet built for DeFi',
    category: 'Mobile',
    supported: ['Ethereum', 'Polygon']
  },
  { 
    id: 'argent', 
    name: 'Argent', 
    description: 'Smart contract wallet with social recovery',
    category: 'Mobile',
    supported: ['Ethereum', 'StarkNet']
  },
  { 
    id: 'safepal', 
    name: 'SafePal', 
    description: 'Hardware and software wallet solution',
    category: 'Hardware/Software',
    supported: ['100+ Blockchains']
  },
  { 
    id: 'trezor', 
    name: 'Trezor', 
    description: 'Original hardware wallet',
    category: 'Hardware',
    supported: ['1600+ Coins']
  },
  { 
    id: 'keplr', 
    name: 'Keplr', 
    description: 'Cosmos ecosystem wallet',
    category: 'Browser Extension',
    supported: ['Cosmos', 'IBC Chains']
  },
  { 
    id: 'terra', 
    name: 'Terra Station', 
    description: 'Official Terra ecosystem wallet',
    category: 'Browser Extension',
    supported: ['Terra', 'Cosmos']
  },
  { 
    id: 'other', 
    name: 'Other Wallet', 
    description: 'Connect any other wallet',
    category: 'Custom',
    supported: ['Various']
  }
];

export const getWalletById = (id) => {
  return wallets.find(wallet => wallet.id === id);
};

export const searchWallets = (query) => {
  if (!query) return wallets;
  
  const lowercaseQuery = query.toLowerCase();
  return wallets.filter(wallet => 
    wallet.name.toLowerCase().includes(lowercaseQuery) ||
    wallet.description.toLowerCase().includes(lowercaseQuery) ||
    wallet.category.toLowerCase().includes(lowercaseQuery) ||
    wallet.supported.some(chain => chain.toLowerCase().includes(lowercaseQuery))
  );
};