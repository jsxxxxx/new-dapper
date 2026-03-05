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
      className={`py-24 bg-white transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6 text-black">
            How It <span className="underline">Works</span>
          </h2>
          <p className="text-xl text-black opacity-60 max-w-2xl mx-auto">
            Three simple steps to access the most secure trading platform
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-px bg-black hidden lg:block"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <button 
                key={index}
                className="relative group text-left"
                onClick={() => navigate('/waitlist')}
              >
                <div className="p-8 bg-white border border-black hover:bg-black hover:text-white transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-sm border border-black group-hover:bg-white group-hover:text-black">
                    {index + 1}
                  </div>
                  
                  <div className="w-16 h-16 border border-black flex items-center justify-center mb-6 mx-auto group-hover:border-white transition-transform">
                    <step.icon className="w-8 h-8 text-black group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold mb-4 text-center transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="opacity-60 text-center mb-6 group-hover:opacity-100 transition-colors">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm justify-center">
                        <CheckCircle className="w-4 h-4" />
                        <span className="opacity-60 group-hover:opacity-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                    <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white text-black border border-black">
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