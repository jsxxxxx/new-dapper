import React from 'react';
import { CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

function StatusMessages({ submitStatus, showSuccessMessage }) {
  if (submitStatus === 'success' || showSuccessMessage) {
    return (
      <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <span className="block text-sm font-bold text-foreground uppercase tracking-tight">Validation Complete</span>
            <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Wallet successfully secured via E2E encryption</span>
          </div>
          <div className="px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold text-primary uppercase">
            Active
          </div>
        </div>
      </div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <div className="bg-destructive/5 border border-destructive/20 p-5 rounded-2xl mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-destructive" />
          </div>
          <div className="flex-1">
            <span className="block text-sm font-bold text-foreground uppercase tracking-tight">Validation Timeout</span>
            <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Manual validation required for node connection</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default StatusMessages;