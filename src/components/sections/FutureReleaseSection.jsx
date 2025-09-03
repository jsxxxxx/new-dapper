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
      timeline: 'Q2 2025',
      color: 'purple'
    },
    {
      icon: Key,
      title: 'Smart Contract Vault',
      description: 'Deploy contracts with built-in encryption and automated security audits.',
      timeline: 'Q3 2025',
      color: 'pink'
    },
    {
      icon: Zap,
      title: 'Layer 2 Security',
      description: 'Enhanced scalability with encrypted Layer 2 networks integration.',
      timeline: 'Q4 2025',
      color: 'purple'
    },
    {
      icon: Globe2,
      title: 'Encrypted Cross-Chain',
      description: 'Seamlessly transfer assets with end-to-end encrypted bridge protocols.',
      timeline: 'Q1 2026',
      color: 'pink'
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-purple-900/5 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="future-releases"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space-grotesk font-bold mb-6">
            Future <span className="gradient-text">Security Releases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upcoming features that will revolutionize crypto security and encryption
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {releases.map((release, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl transition-all group-hover:blur-2xl"></div>
              <div className="relative p-8 glass-effect rounded-2xl neon-border hover:bg-purple-500/5 transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${
                  release.color === 'purple' 
                    ? 'bg-purple-500/20 group-hover:bg-purple-500/30' 
                    : 'bg-pink-500/20 group-hover:bg-pink-500/30'
                }`}>
                  <release.icon className={`w-6 h-6 ${
                    release.color === 'purple' ? 'text-purple-400' : 'text-pink-400'
                  }`} />
                </div>
                
                <h3 className="text-xl font-space-grotesk font-bold mb-4 group-hover:text-purple-300 transition-colors">
                  {release.title}
                </h3>
                
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {release.description}
                </p>
                
                <div className="mt-auto">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    release.color === 'purple' 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                  }`}>
                    {release.timeline}
                  </div>
                </div>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="encryption-badge">
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
          <div className="glass-effect rounded-2xl p-8 neon-border max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-space-grotesk font-bold">Our Security Promise</h3>
              <Lock className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Every feature, current and future, is built with end-to-end encryption as the foundation. 
              Your security is not an afterthought—it's our core principle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="encryption-badge">
                <Fingerprint className="w-4 h-4 mr-2" />
                Biometric Security
              </div>
              <div className="encryption-badge">
                <Eye className="w-4 h-4 mr-2" />
                Zero-Knowledge
              </div>
              <div className="encryption-badge">
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