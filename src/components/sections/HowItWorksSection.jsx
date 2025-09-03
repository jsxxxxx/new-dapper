import React from 'react';
import { Wallet2, ShieldCheck, Rocket, ArrowRight, Lock, Key, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function HowItWorksSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

  const steps = [
    {
      icon: Wallet2,
      title: 'Connect Wallet',
      description: 'Link your wallet with end-to-end encryption and zero-knowledge validation.',
      features: ['AES-256 Encryption', 'Zero-Knowledge Proof', 'Secure Handshake']
    },
    {
      icon: ShieldCheck,
      title: 'Verify Securely',
      description: 'Complete encrypted verification with multi-layer security protocols.',
      features: ['Biometric Auth', 'Multi-Signature', 'Encrypted Storage']
    },
    {
      icon: Rocket,
      title: 'Trade Safely',
      description: 'Begin trading with military-grade security and encrypted transactions.',
      features: ['Encrypted Orders', 'Secure Matching', 'Protected Funds']
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to access the most secure trading platform
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hidden lg:block"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <button 
                key={index}
                className="relative group"
                onClick={() => navigate('/waitlist')}
              >
                <div className="p-8 glass-effect rounded-2xl neon-border hover:bg-purple-500/5 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold mb-4 text-center group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="encryption-badge mx-auto">
                      <Lock className="w-3 h-3 mr-1" />
                      E2E Encrypted
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;