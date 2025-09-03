import React from 'react';
import { CheckCircle, AlertTriangle, Shield } from 'lucide-react';

function StatusMessages({ submitStatus, showSuccessMessage }) {
  if (submitStatus === 'success') {
    return (
      <div className="glass-effect neon-border p-6 rounded-xl mb-8 bg-green-500/10">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <span className="text-green-300 font-medium">Successfully validated and encrypted! 🎉</span>
        </div>
      </div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <div className="glass-effect border-red-500/50 p-6 rounded-xl mb-8 bg-red-500/10">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <span className="text-red-300 font-medium">Validation failed. Please try again.</span>
        </div>
      </div>
    );
  }

  if (showSuccessMessage) {
    return (
      <div className="glass-effect neon-border p-6 rounded-xl mb-8 bg-purple-500/10 animate-pulse-purple">
        <div className="flex items-center space-x-3">
          <Shield className="w-6 h-6 text-purple-400" />
          <span className="text-purple-300 font-medium">🎉 Wallet successfully validated with E2E encryption!</span>
        </div>
      </div>
    );
  }

  return null;
}

export default StatusMessages;