import React from 'react';
import { Lock, Zap, Users, BarChart3, Shield, Wallet2, Gift, Coins, Cross, CircleDotDashed, Boxes, ArrowDownNarrowWide, BookCheck, Crosshair, Check, CircleOff, ArrowDownUp, ArrowLeftRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Multi-signature wallets with AES-256 encryption protect your assets with military-grade security.'
    },
    {
      icon: Zap,
      title: 'Secure Staking',
      description: 'Maximize earnings with encrypted staking pools. Your assets grow efficiently with zero-knowledge validation.'
    },
    {
      icon: BarChart3,
      title: 'Fix Transactions',
      description: 'Instant resolution of transaction errors with end-to-end encrypted communication channels.'
    },
    {
      icon: Lock,
      title: 'Login Protection',
      description: 'Advanced authentication with biometric verification and encrypted session management.'
    },
    {
      icon: ArrowDownUp,
      title: 'Secure Migration',
      description: 'Migrate to latest protocols with encrypted data transfer and zero downtime.'
    },
    {
      icon: Wallet2,
      title: 'Asset Recovery',
      description: 'Expert-assisted recovery with encrypted communication and secure key management.'
    },
    {
      icon: Zap,
      title: 'Wallet Rectification',
      description: 'Lightning-fast wallet fixes with encrypted validation and secure processing.'
    },
    {
      icon: Crosshair,
      title: 'Claim Resolution',
      description: 'Effortless claims with encrypted verification and automated secure processing.'
    },
    {
      icon: BookCheck,
      title: 'Validation',
      description: 'End-to-end encrypted transaction verification with blockchain-level security.'
    },
    {
      icon: Users,
      title: 'Synchronization',
      description: 'Real-time encrypted sync across all devices with zero-knowledge architecture.'
    },
    {
      icon: ArrowDownNarrowWide,
      title: 'Slippage Protection',
      description: 'Minimized slippage with encrypted order routing and secure price optimization.'
    },
    {
      icon: CircleDotDashed,
      title: 'Compliance Shield',
      description: 'Full regulatory compliance with encrypted audit trails and secure reporting.'
    },
    {
      icon: Gift,
      title: 'Airdrop Security',
      description: 'Secure airdrop management with encrypted distribution and fraud protection.'
    },
    {
      icon: Coins,
      title: 'Gas Optimization',
      description: 'Intelligent gas fee optimization with encrypted transaction batching.'
    },
    {
      icon: CircleOff,
      title: 'Secure Bridging',
      description: 'Cross-chain bridging with end-to-end encryption and multi-layer validation.'
    },
    {
      icon: Boxes,
      title: 'Glitch Protection',
      description: 'Robust wallet technology with encrypted error handling and automatic recovery.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Encrypted Swapping',
      description: 'Instant token swaps with encrypted routing and secure liquidity pools.'
    },
    {
      icon: Check,
      title: 'Validation',
      description: 'Fast transaction validation with encrypted verification and blockchain security.'
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-white transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6 text-black">
            Why Choose <span className="underline">DappServer</span>
          </h2>
          <p className="text-xl text-black opacity-60 max-w-3xl mx-auto">
            Every feature is built with security-first architecture and end-to-end encryption
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              onClick={() => navigate('/waitlist')}
            >
              <div className="w-12 h-12 border border-black flex items-center justify-center mb-6 transition-all group-hover:border-white">
                <feature.icon className="w-6 h-6 text-black group-hover:text-white" />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="opacity-60 group-hover:opacity-100 transition-colors leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white text-black border border-black">
                  <Lock className="w-3 h-3 mr-1" />
                  E2E Encrypted
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;