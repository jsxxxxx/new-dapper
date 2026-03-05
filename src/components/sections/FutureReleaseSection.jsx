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
      title: 'Quantum-Safe DeFi',
      description: 'Access multiple DeFi protocols with quantum-resistant encryption.',
      timeline: 'Q2 2025'
    },
    {
      icon: Key,
      title: 'Smart Contract Vault',
      description: 'Deploy contracts with built-in encryption and automated security audits.',
      timeline: 'Q3 2025'
    },
    {
      icon: Zap,
      title: 'Layer 2 Security',
      description: 'Enhanced scalability with encrypted Layer 2 networks integration.',
      timeline: 'Q4 2025'
    },
    {
      icon: Globe2,
      title: 'Encrypted Cross-Chain',
      description: 'Seamlessly transfer assets with end-to-end encrypted bridge protocols.',
      timeline: 'Q1 2026'
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-white border-t border-black transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="future-releases"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6 text-black">
            Future <span className="underline">Security Releases</span>
          </h2>
          <p className="text-xl text-black opacity-60 max-w-2xl mx-auto">
            Upcoming features that will revolutionize crypto security and encryption
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {releases.map((release, index) => (
            <div key={index} className="relative group">
              <div className="relative p-8 bg-white border border-black hover:bg-black hover:text-white transition-all duration-300 h-full">
                <div className="w-12 h-12 border border-black flex items-center justify-center mb-6 transition-all group-hover:border-white">
                  <release.icon className="w-6 h-6 text-black group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-space-grotesk font-bold mb-4 transition-colors">
                  {release.title}
                </h3>
                
                <p className="opacity-60 mb-6 group-hover:opacity-100 transition-colors leading-relaxed">
                  {release.description}
                </p>
                
                <div className="mt-auto">
                  <div className="inline-block px-4 py-2 bg-black text-white text-sm font-medium border border-black group-hover:bg-white group-hover:text-black">
                    {release.timeline}
                  </div>
                </div>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <Shield className="w-3 h-3 mr-1" />
                    Quantum-Safe
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Promise */}
        <div className="mt-16 text-center">
          <div className="bg-white border-2 border-black p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-8 h-8 text-black" />
              <h3 className="text-2xl font-space-grotesk font-bold text-black">Our Security Promise</h3>
              <Lock className="w-8 h-8 text-black" />
            </div>
            <p className="text-lg text-black opacity-60 mb-6">
              Every feature, current and future, is built with end-to-end encryption as the foundation. 
              Your security is not an afterthought—it's our core principle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-black text-white border border-black">
                <Fingerprint className="w-4 h-4 mr-2" />
                Biometric Security
              </div>
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-black text-white border border-black">
                <Eye className="w-4 h-4 mr-2" />
                Zero-Knowledge
              </div>
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-black text-white border border-black">
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