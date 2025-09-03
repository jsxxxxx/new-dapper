import React from 'react';
import { Shield, Lock, Key, Eye, Fingerprint } from 'lucide-react';

function SecurityFeaturesSection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'AES-256 Encryption',
      description: 'Military-grade encryption for all data transmission'
    },
    {
      icon: Eye,
      title: 'Zero-Knowledge Proof',
      description: 'Validate without revealing sensitive information'
    },
    {
      icon: Key,
      title: 'Multi-Signature Security',
      description: 'Multiple validation layers for enhanced protection'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Authentication',
      description: 'Advanced biometric security protocols'
    },
    {
      icon: Shield,
      title: 'Secure Key Management',
      description: 'Enterprise-grade key storage and management'
    }
  ];

  return (
    <div className="glass-effect p-8 rounded-2xl neon-border">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-space-grotesk font-bold">Security Features</h2>
      </div>
      
      <div className="space-y-4">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-500/5 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
              <feature.icon className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 glass-effect rounded-lg neon-border bg-purple-500/5">
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">Security Guarantee</span>
        </div>
        <p className="text-xs text-gray-400">
          All wallet connections are protected by end-to-end encryption with zero-knowledge validation.
        </p>
      </div>
    </div>
  );
}

export default SecurityFeaturesSection;