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
      description: 'Multi-signature wallets and advanced encryption protect your assets.'
    },
    {
      icon: Coins,
      title: 'Staking',
      description: 'Maximize your earnings with secure and reliable staking options. Our platform ensures your assets grow efficiently with minimal risk.'
    },
    {
      icon: Zap,
      title: 'Fix Transactions',
      description: 'Instant resolution of transaction errors for a seamless trading experience. We ensure that any issues are corrected quickly and your funds are secure.'
    },
    {
      icon: Lock,
      title: 'Login Issue',
      description: 'Robust security measures to prevent and resolve login issues. Our support ensures you can access your account securely and without hassle.'
    },
    {
      icon: ArrowDownUp,
      title: 'Migration',
      description: 'Migrate to the latest protocols for enhanced performance, scalability, and security.'
    },
    {
      icon: Wallet2,
      title: 'Assets Recovery',
      description: 'Expert assistance for recovering lost or inaccessible assets. Our team works tirelessly to help you regain control of your digital wealth.'
    },
    {
      icon: Crosshair,
      title: 'Wallet Retification',
      description: 'Execute trades in milliseconds with our advanced matching engine.'
    },
    {
      icon: Gift,
      title: 'Claim Issues',
      description: 'Effortless claims process for your rewards and airdrops. We ensure you receive what you’re entitled to, without delays.'
    },
    {
      icon: Check,
      title: 'Validation',
      description: 'Secure and accurate transaction verification with cutting-edge blockchain technology. Ensuring your transactions are processed swiftly and without errors.'
    },
    {
      icon: Users,
      title: 'Synchronize',
      description: 'Instant wallet synchronization for real-time updates. Stay in sync with the latest blockchain state without missing a beat.'
    },
    {
      icon: ArrowDownNarrowWide,
      title: 'Slippage Issue',
      description: 'Minimized slippage with precision trading technology. Our system ensures you get the best possible price for your trades.'
    },
    {
      icon: CircleDotDashed,
      title: 'Regulatory Compliance',
      description: 'Full compliance with global cryptocurrency regulations.'
    },
    {
      icon: BookCheck,
      title: 'Airdrops json error',
      description: 'Full compliance with global cryptocurrency regulations.'
    },
    {
      icon: BarChart3,
      title: 'Gas Fee Issues',
      description: 'Full compliance with global cryptocurrency regulations.'
    },
    {
      icon: CircleOff,
      title: 'Bridging',
      description: 'Bridge your assets across blockchains to unlock greater liquidity and seamless interoperability..'
    },
    {
      icon: Cross,
      title: 'Wallet Glitch',
      description: 'Robust wallet technology with glitch-proof performance. We ensure your wallet remains fully functional at all times.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Swapping',
      description: 'Instantly swap tokens with minimal fees and seize market opportunities effortlessly.'
    },
    {
      icon: Check,
      title: 'Validate',
      description: 'Fast and secure transaction validation using advanced blockchain technology. We ensure your transactions are confirmed quickly and reliably.'
    },
    {
      icon: Boxes,
      title: 'Asset Recovery',
      description: 'Quick and efficient recovery of lost assets with expert assistance. We help you regain access to your cryptocurrencies safely and swiftly.'
    },
    {
      icon: Wallet2,
      title: 'NFT Issues',
      description: 'Smooth NFT management with full support for minting and transfers. Our platform ensures your NFT operations are handled without hiccups.'
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