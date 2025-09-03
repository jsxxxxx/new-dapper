import React from 'react';
import { Shield, Lock } from 'lucide-react';

function WaitlistHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
        Secure Wallet <span className="gradient-text">Validation</span>
      </h1>
      
      <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full neon-border mb-8">
        <Shield className="w-5 h-5 text-purple-400 mr-3" />
        <span className="text-purple-300 font-medium">End-to-End Encrypted</span>
        <Lock className="w-4 h-4 text-purple-400 ml-3" />
      </div>
      
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Your wallet data is protected with military-grade encryption throughout the entire validation process.
      </p>
    </div>
  );
}

export default WaitlistHeader;