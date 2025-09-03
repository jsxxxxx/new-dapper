import React from 'react';
import { Shield, CheckCircle, Lock, Eye } from 'lucide-react';

function EncryptionProgress({ encryptionStep }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full glass-effect neon-border flex items-center justify-center animate-pulse-purple">
          <Shield className="w-8 h-8 text-purple-400" />
        </div>
      </div>
      
      <h3 className="text-lg font-space-grotesk text-center mb-6">End-to-End Encryption in Progress</h3>
      
      <div className="space-y-3">
        <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
          encryptionStep >= 1 ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-800/50 text-gray-500'
        }`}>
          {encryptionStep >= 1 ? <CheckCircle className="w-5 h-5" /> : <div className="w-5 h-5 border-2 border-gray-600 rounded-full" />}
          <span>Encrypting wallet data...</span>
        </div>
        
        <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
          encryptionStep >= 2 ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-800/50 text-gray-500'
        }`}>
          {encryptionStep >= 2 ? <CheckCircle className="w-5 h-5" /> : <div className="w-5 h-5 border-2 border-gray-600 rounded-full" />}
          <span>Establishing secure connection...</span>
        </div>
        
        <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
          encryptionStep >= 3 ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-800/50 text-gray-500'
        }`}>
          {encryptionStep >= 3 ? <CheckCircle className="w-5 h-5" /> : <div className="w-5 h-5 border-2 border-gray-600 rounded-full" />}
          <span>Validating with blockchain...</span>
        </div>
      </div>
      
      <div className="mt-6 p-4 glass-effect rounded-lg neon-border">
        <div className="flex items-center space-x-2 mb-2">
          <Lock className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">Security Notice</span>
        </div>
        <p className="text-xs text-gray-400">
          Your wallet information is being encrypted using AES-256 encryption before transmission. 
          No sensitive data is stored in plain text.
        </p>
      </div>
    </div>
  );
}

export default EncryptionProgress;