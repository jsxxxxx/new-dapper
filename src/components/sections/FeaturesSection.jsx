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
      title: 'Ironclad Defense',
      description: 'Distributed threshold signatures coupled with AES-256 ciphering to make asset breaches mathematically improbable.'
    },
    {
      icon: Zap,
      title: 'Yield Maximization',
      description: 'Supercharge your compounding mechanisms via encrypted, zero-knowledge validation staking protocols.'
    },
    {
      icon: BarChart3,
      title: 'Rapid Rectification',
      description: 'Instant structural diagnostics and anomaly resolution through decentralized communication layers.'
    },
    {
      icon: Lock,
      title: 'Identity Shielding',
      description: 'Next-gen auth flows integrating biometric checkpoints and session encapsulation techniques.'
    },
    {
      icon: ArrowDownUp,
      title: 'Seamless Uplifts',
      description: 'Transition assets across mainnet iterations with zero downtime and dark-routed data.'
    },
    {
      icon: Wallet2,
      title: 'Vault Retrieval',
      description: 'Assisted fund extraction methodologies relying on offline, multi-party key generation.'
    },
    {
      icon: Zap,
      title: 'Wallet Synchronization',
      description: 'Sub-second digital twin state reconciliation with robust, stealth ledger checks.'
    },
    {
      icon: Crosshair,
      title: 'Protocol Claiming',
      description: 'Frictionless smart-contract allocations securely routed directly to your local enclave.'
    },
    {
      icon: BookCheck,
      title: 'State Verification',
      description: 'Immutable transaction validation anchored to primary layer-1 blockchain records.'
    },
    {
      icon: Users,
      title: 'Device Sync',
      description: 'Instantaneous multi-platform state syncing powered by peer-to-peer encrypted mesh networks.'
    },
    {
      icon: ArrowDownNarrowWide,
      title: 'Slippage Defense',
      description: 'Proprietary MEV-resistant routing algorithms to optimize trade execution sizing.'
    },
    {
      icon: CircleDotDashed,
      title: 'Regulatory Alignment',
      description: 'Built-in privacy-preserving audit tools designed for seamless compliance exports.'
    },
    {
      icon: Gift,
      title: 'Airdrop Interception',
      description: 'Automated, risk-free collection of network distributions using isolated proxy contracts.'
    },
    {
      icon: Coins,
      title: 'Gas Abstraction',
      description: 'Algorithmically batched settlement processes that drastically cut down computational overhead.'
    },
    {
      icon: CircleOff,
      title: 'Cross-Domain Bridges',
      description: 'Trustless asset teleportation across diverse ecosystems with cryptographic finality.'
    },
    {
      icon: Boxes,
      title: 'Latency Protection',
      description: 'Automatic failover mechanisms and resilient fallbacks preventing critical transaction drops.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Darkpool Swaps',
      description: 'Instantaneous liquidity routing utilizing fragmented, obfuscated order paths.'
    },
    {
      icon: Check,
      title: 'Consensus Check',
      description: 'High-speed node validation ensuring every packet meets rigorous decentralized standards.'
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-background transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6 text-primary">
            The <span className="underline">Chainnova</span> Advantage
          </h2>
          <p className="text-xl text-primary opacity-60 max-w-3xl mx-auto">
            A comprehensive suite of fortified tools designed to keep your portfolio entirely in your control.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-background border-2 border-primary hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_theme(colors.primary.DEFAULT)] transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => navigate('/waitlist')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div className="w-14 h-14 bg-background border-2 border-primary shadow-[4px_4px_0_0_theme(colors.primary.DEFAULT)] flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold mb-3 text-primary relative z-10">
                {feature.title}
              </h3>
              <p className="opacity-70 group-hover:opacity-100 text-primary transition-colors leading-relaxed relative z-10">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center space-x-2 relative z-10">
                <div className="w-8 h-px bg-primary transform group-hover:scale-x-150 transition-transform origin-left"></div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                  Explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;