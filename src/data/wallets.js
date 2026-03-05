export const wallets = [
  { 
    id: 'metamask', 
    name: 'MetaMask', 
    description: 'The most popular Ethereum wallet',
    category: 'Browser Extension',
    supported: ['Ethereum', 'BSC', 'Polygon'],
    brandColor: '#F6851B',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/metaMaskWallet/metaMaskWallet.svg'
  },
  { 
    id: 'phantom', 
    name: 'Phantom', 
    description: 'Solana ecosystem wallet',
    category: 'Browser Extension',
    supported: ['Solana', 'Ethereum'],
    brandColor: '#AB9FF2',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/phantomWallet/phantomWallet.svg'
  },
  { 
    id: 'coinbase', 
    name: 'Coinbase Wallet', 
    description: 'Self-custody wallet by Coinbase',
    category: 'Mobile/Desktop',
    supported: ['Ethereum', 'Bitcoin', 'Litecoin'],
    brandColor: '#0052FF',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/coinbaseWallet/coinbaseWallet.svg'
  },
  { 
    id: 'trust', 
    name: 'Trust Wallet', 
    description: 'Multi-cryptocurrency wallet',
    category: 'Mobile',
    supported: ['60+ Blockchains'],
    brandColor: '#3375BB',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/trustWallet/trustWallet.svg'
  },
  { 
    id: 'binance', 
    name: 'Binance Wallet', 
    description: 'Official Binance ecosystem wallet',
    category: 'Browser Extension',
    supported: ['BSC', 'Ethereum'],
    brandColor: '#F3BA2F',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/binance/info/logo.png'
  },
  { 
    id: 'okx', 
    name: 'OKX Wallet', 
    description: 'Multichain wallet by OKX',
    category: 'Mobile/Extension',
    supported: ['Ethereum', 'Bitcoin', 'OKC'],
    brandColor: '#000000',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/okxWallet/okxWallet.svg'
  },
  { 
    id: 'solflare', 
    name: 'Solflare', 
    description: 'A powerful Solana wallet',
    category: 'Extension/Mobile',
    supported: ['Solana'],
    brandColor: '#FF6F00',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/solana/info/logo.png'
  },
  { 
    id: 'ledger', 
    name: 'Ledger', 
    description: 'Hardware wallet for maximum security',
    category: 'Hardware',
    supported: ['1800+ Coins'],
    brandColor: '#000000',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/ledgerWallet/ledgerWallet.svg'
  },
  { 
    id: 'trezor', 
    name: 'Trezor', 
    description: 'Original hardware wallet',
    category: 'Hardware',
    supported: ['1600+ Coins'],
    brandColor: '#000000',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/bitcoin/info/logo.png'
  },
  { 
    id: 'bitget', 
    name: 'Bitget Wallet', 
    description: 'Ultimate Web3 trading wallet',
    category: 'Mobile/Extension',
    supported: ['Multi-chain'],
    brandColor: '#00F0FF',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/bitgetWallet/bitgetWallet.svg'
  },
  { 
    id: 'petra', 
    name: 'Petra', 
    description: 'Aptos ecosystem wallet',
    category: 'Browser Extension',
    supported: ['Aptos'],
    brandColor: '#34D399',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/aptos/info/logo.png'
  },
  { 
    id: 'martian', 
    name: 'Martian', 
    description: 'Aptos and Sui wallet',
    category: 'Browser Extension',
    supported: ['Aptos', 'Sui'],
    brandColor: '#000000',
    logo: 'https://martianwallet.xyz/favicon.ico'
  },
  { 
    id: 'sui', 
    name: 'Sui Wallet', 
    description: 'Official Sui network wallet',
    category: 'Browser Extension',
    supported: ['Sui'],
    brandColor: '#6FB9FF',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/sui/info/logo.png'
  },
  { 
    id: 'other', 
    name: 'Other Wallet', 
    description: 'Connect any other wallet',
    category: 'Custom',
    supported: ['Various'],
    brandColor: '#333333',
    logo: null
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
