import React from 'react';
import { Rocket, Lock, Zap, Globe2, Shield, Key, Fingerprint, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function FutureReleaseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const releases = [
    {
      icon: Rocket,
      title: 'Post-Quantum Protocols',
      description: 'Navigate complex defi landscapes immune to next-generation logic breaches.',
      timeline: 'Q2 2025'
    },
    {
      icon: Key,
      title: 'Autonomous Sandboxes',
      description: 'Initialize highly restrictive contract zones with AI-driven pre-compilation audits.',
      timeline: 'Q3 2025'
    },
    {
      icon: Zap,
      title: 'L2 Hyper-Scaling',
      description: 'Blisteringly fast off-chain settlements backed by localized proof-of-validity mechanisms.',
      timeline: 'Q4 2025'
    },
    {
      icon: Globe2,
      title: 'Omnichain Routing',
      description: 'Move liquidity freely without ever exposing intermediary states to public ledgers.',
      timeline: 'Q1 2026'
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-background border-t border-primary transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="future-releases"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6 text-primary">
            Tomorrow's <span className="underline">Roadmap</span>
          </h2>
          <p className="text-xl text-primary opacity-60 max-w-2xl mx-auto">
            Pioneering the next wave of decentralized privacy and execution speed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {releases.map((release, index) => (
            <div key={index} className="relative group">
              <div className="relative p-8 bg-background border-2 border-primary/50 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-500 h-full overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 text-8xl font-black text-primary/5 select-none pointer-events-none transform translate-x-4 -translate-y-4 group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </div>
                
                <div className="w-14 h-14 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6 transition-all group-hover:border-primary group-hover:scale-110">
                  <release.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-space-grotesk font-bold mb-4 text-primary relative z-10">
                  {release.title}
                </h3>
                
                <p className="opacity-70 mb-8 text-primary leading-relaxed relative z-10 flex-grow">
                  {release.description}
                </p>
                
                <div className="mt-auto relative z-10 flex items-center justify-between border-t border-primary/20 pt-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold border-l-2 border-primary">
                    {release.timeline}
                  </div>
                  <div className="inline-flex items-center text-xs font-bold text-primary tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Shield className="w-3 h-3 mr-1" />
                    Secure
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Promise */}
        <div className="mt-16 text-center">
          <div className="bg-background border-2 border-primary p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-space-grotesk font-bold text-primary">The DappServer Guarantee</h3>
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg text-primary opacity-60 mb-6">
              From our inception to our upcoming milestones, absolute autonomy and profound data 
              secrecy dictate every line of code we ship. You remain the undisputed master of your keys.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary text-primary-foreground border border-primary">
                <Fingerprint className="w-4 h-4 mr-2" />
                Biometric Security
              </div>
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary text-primary-foreground border border-primary">
                <Eye className="w-4 h-4 mr-2" />
                Zero-Knowledge
              </div>
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary text-primary-foreground border border-primary">
                <Key className="w-4 h-4 mr-2" />
                Quantum-Resistant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureReleaseSection;