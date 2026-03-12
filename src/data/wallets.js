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
    id: 'corer', 
    name: 'Core', 
    description: 'Avalanche ecosystem wallet',
    category: 'Extension/Mobile',
    supported: ['Avalanche', 'Ethereum'],
    brandColor: '#E84142',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/coreWallet/coreWallet.svg'
  },
  { 
    id: 'exodus', 
    name: 'Exodus', 
    description: 'Multi-asset Web3 wallet',
    category: 'Desktop/Mobile',
    supported: ['Multi-chain'],
    brandColor: '#1F2033',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/ethereum/assets/0x0000000000000000000000000000000000000000/info/logo.png' // Generic placeholder or skip
  },
  { 
    id: 'keplr', 
    name: 'Keplr', 
    description: 'Cosmos ecosystem wallet',
    category: 'Browser Extension',
    supported: ['Cosmos'],
    brandColor: '#E1F6F5',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/cosmos/info/logo.png'
  },
  {
    id: 'atomic',
    name: 'Atomic Wallet',
    description: 'Multi-currency crypto wallet',
    category: 'Desktop/Mobile',
    supported: ['Multi-chain'],
    brandColor: '#222B50',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/ethereum/assets/0x140411BDaA3b53f3C42dffA0aEBdF0A272765A2b/info/logo.png'
  },
  {
    id: 'leap',
    name: 'Leap Cosmos',
    description: 'Next-gen Cosmos wallet',
    category: 'Browser Extension',
    supported: ['Cosmos'],
    brandColor: '#12E7B3',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/cosmos/info/logo.png' // Cosmos logo as placeholder
  },
  {
    id: 'cake',
    name: 'Cake Wallet',
    description: 'Open source wallet for Monero and more',
    category: 'Mobile',
    supported: ['Monero', 'Bitcoin', 'Litecoin'],
    brandColor: '#F54E34',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cakewallet.com/&size=128'
  },
  {
    id: 'guarda',
    name: 'Guarda',
    description: 'Lightweight non-custodial wallet',
    category: 'Desktop/Mobile',
    supported: ['Multi-chain'],
    brandColor: '#0F265A',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://guarda.com/&size=128'
  },
  {
    id: 'uniswap',
    name: 'Uniswap Wallet',
    description: 'The powerful self-custody wallet',
    category: 'Mobile',
    supported: ['Ethereum', 'Polygon', 'Arbitrum'],
    brandColor: '#FF007A',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/info/logo.png'
  },
  {
    id: 'cryptocom',
    name: 'Crypto.com',
    description: 'Defi Wallet by Crypto.com',
    category: 'Mobile',
    supported: ['Multi-chain'],
    brandColor: '#1199FA',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/ethereum/assets/0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b/info/logo.png'
  },
  {
    id: 'jupiter',
    name: 'Jupiter Wallet',
    description: 'Solana wallet and aggregator',
    category: 'Browser Extension',
    supported: ['Solana'],
    brandColor: '#20A886',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/solana/info/logo.png'
  },
  {
    id: 'rabby',
    name: 'Rabby Wallet',
    description: 'The game-changing wallet for Ethereum',
    category: 'Browser Extension',
    supported: ['EVM Networks'],
    brandColor: '#8697FF',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/rabbyWallet/rabbyWallet.svg'
  },
  {
    id: 'stargazer',
    name: 'Stargazer Wallet',
    description: 'Constellation Network wallet',
    category: 'Browser Extension',
    supported: ['Constellation', 'EVM'],
    brandColor: '#000000',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://stargazer.constellationnetwork.io/&size=128'
  },
  {
    id: 'tangem',
    name: 'Tangem',
    description: 'Hardware wallet in a card format',
    category: 'Hardware',
    supported: ['Multi-chain'],
    brandColor: '#000000',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tangem.com/&size=128'
  },
  {
    id: 'near',
    name: 'NEAR Mobile',
    description: 'Official NEAR protocol wallet',
    category: 'Mobile',
    supported: ['NEAR'],
    brandColor: '#000000',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/near/info/logo.png'
  },
  {
    id: 'starkey',
    name: 'Starkey Wallet',
    description: 'Supra Oracles ecosystem wallet',
    category: 'Browser Extension',
    supported: ['Supra', 'Aptos', 'Sui'],
    brandColor: '#DC2626',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://starkey.app/&size=128'
  },
  {
    id: 'nabox',
    name: 'Nabox',
    description: 'Web3 digital identity wallet',
    category: 'Extension/Mobile',
    supported: ['Multi-chain'],
    brandColor: '#0BB78B',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nabox.io/&size=128'
  },
  {
    id: 'tap',
    name: 'Tap Wallet',
    description: 'Bitcoin Ordinals and Taproot wallet',
    category: 'Browser Extension',
    supported: ['Bitcoin'],
    brandColor: '#F7931A',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.tap.global/&size=128'
  },
  {
    id: 'robinhood',
    name: 'Robinhood Wallet',
    description: 'Self-custody crypto wallet',
    category: 'Mobile',
    supported: ['Ethereum', 'Polygon', 'Arbitrum'],
    brandColor: '#00C805',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://robinhood.com/&size=128'
  },
  {
    id: 'tonkeeper',
    name: 'Tonkeeper',
    description: 'Wallet for The Open Network',
    category: 'Mobile/Extension',
    supported: ['TON'],
    brandColor: '#0098EA',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/ton/info/logo.png'
  },
  {
    id: 'enjin',
    name: 'Enjin Wallet',
    description: 'Blockchain gaming crypto wallet',
    category: 'Mobile',
    supported: ['Multi-chain'],
    brandColor: '#6242D3',
    logo: 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/ethereum/assets/0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c/info/logo.png'
  },
  {
    id: 'safepal',
    name: 'SafePal',
    description: 'Hardware to software wallet suite',
    category: 'Hardware/Mobile',
    supported: ['Multi-chain'],
    brandColor: '#000000',
    logo: 'https://cdn.jsdelivr.net/gh/rainbow-me/rainbowkit@main/packages/rainbowkit/src/wallets/walletConnectors/safeWallet/safeWallet.svg'
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
