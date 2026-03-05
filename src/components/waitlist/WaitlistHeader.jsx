import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { Badge } from '../ui/badge';

function WaitlistHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-12">
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="outline" className="px-3 py-1 rounded-full border-primary/20 bg-primary/5 text-primary/70 font-medium">
          <Shield className="w-3.5 h-3.5 mr-1.5" />
          Beta Access
        </Badge>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold tracking-tight text-foreground">
        Secure Wallet <span className="text-primary/60">Validation</span>
      </h1>
      
      <p className="text-muted-foreground max-w-lg text-lg font-medium leading-relaxed">
        Verify your ownership with end-to-end encryption. Minimal process, maximum security.
      </p>

      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/40 pt-2">
        <Lock className="w-3 h-3" />
        <span>E2E Encrypted Protocol</span>
      </div>
    </div>
  );
}

export default WaitlistHeader;