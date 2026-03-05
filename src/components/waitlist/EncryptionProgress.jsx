import React from 'react';
import { Shield, CheckCircle2, Loader2, Lock } from 'lucide-react';

function EncryptionProgress({ encryptionStep, brandColor = '#000000' }) {
  const steps = [
    { id: 1, label: 'Encrypting data payload' },
    { id: 2, label: 'Establishing secure tunnel' },
    { id: 3, label: 'Validating with node' }
  ];

  return (
    <div className="py-6 space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center relative shadow-inner">
          <div 
            className="absolute inset-0 rounded-full border-4 border-primary/10 transition-all duration-1000"
            style={{ 
              borderTopColor: brandColor,
              transform: `rotate(${encryptionStep * 120}deg)`
            }} 
          />
          <Shield className="h-8 w-8 text-primary/40" />
        </div>
        <div className="text-center">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-1">
            Secure Protocol Active
          </h4>
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            End-to-End Encryption in Progress
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        {steps.map((step) => (
          <div 
            key={step.id}
            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${
              encryptionStep >= step.id 
                ? 'bg-primary/5 border-primary/20 translate-x-1' 
                : 'bg-secondary/20 border-border/50 opacity-40'
            }`}
          >
            <div className={`h-6 w-6 rounded-full flex items-center justify-center transition-all duration-500 ${
              encryptionStep >= step.id ? 'bg-primary text-primary-foreground scale-110' : 'bg-secondary text-muted-foreground'
            }`}>
              {encryptionStep > step.id ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : encryptionStep === step.id ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="text-[10px] font-bold">{step.id}</span>
              )}
            </div>
            <span className={`text-sm font-bold uppercase tracking-tight transition-colors duration-500 ${
              encryptionStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-secondary/40 rounded-2xl flex gap-3 border border-border/50 items-center">
        <Lock className="h-4 w-4 text-primary opacity-40 shrink-0" />
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
          AES-256 Military Grade Security
        </p>
      </div>
    </div>
  );
}

export default EncryptionProgress;
