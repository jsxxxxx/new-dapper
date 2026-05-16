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
      title: 'Initialize Login',
      description: 'Synchronize your digital wallet via our hardened, stealth-mode gateway.',
      features: ['Quantum-resistant mapping', 'Silent Auth', 'Data Obfuscation']
    },
    {
      icon: ShieldCheck,
      title: 'Identity Assertion',
      description: 'Lock in your session through decentralized, on-chain credential checks.',
      features: ['Hardware Keys', 'Threshold Sigs', 'Vault Isolation']
    },
    {
      icon: Rocket,
      title: 'Execute with Protocol',
      description: 'Deploy assets and interact seamlessly within our heavily fortified sandbox.',
      features: ['Stealth Routing', 'Liquidity Cloaking', 'Fail-safe Reverts']
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-background transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6 text-primary">
            The <span className="underline">Chainnova</span> Flow
          </h2>
          <p className="text-xl text-primary opacity-60 max-w-2xl mx-auto">
            Three core phases to activate our decentralized shielding network
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-px bg-primary hidden lg:block"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group flex flex-col items-center"
              >
                <div className="p-10 bg-background border-2 border-primary rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-300 h-full w-full max-w-sm cursor-pointer" onClick={() => navigate('/waitlist')}>
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl border-2 border-background rounded-full shadow-[0_4px_15px_rgba(168,85,247,0.5)] z-10">
                    {index + 1}
                  </div>
                  
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-10 h-10 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </div>
                  
                  <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-center text-primary">
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
                  
                  <div className="mt-8 pt-6 border-t border-primary/20 flex justify-center w-full relative z-10 transition-transform duration-300 group-hover:scale-105">
                    <div className="inline-flex items-center px-4 py-2 font-medium bg-primary text-primary-foreground border-2 border-primary rounded-xl hover:bg-background hover:text-primary transition-colors">
                      <Lock className="w-4 h-4 mr-2" />
                      Login
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;