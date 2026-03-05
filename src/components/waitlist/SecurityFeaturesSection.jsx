import React from 'react';
import { Shield, Lock, Key, Eye, Fingerprint } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

function SecurityFeaturesSection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Encryption',
      description: 'AES-256 standards'
    },
    {
      icon: Eye,
      title: 'ZK-Proof',
      description: 'Zero disclosure'
    },
    {
      icon: Key,
      title: 'Multi-Sig',
      description: 'Layered security'
    }
  ];

  return (
    <div className="pt-8 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <feature.icon className="h-5 w-5 text-primary/70" />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-tight uppercase text-foreground">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-4 bg-secondary/30 rounded-2xl flex items-center justify-center gap-3 border border-border/50">
        <Shield className="w-5 h-5 text-primary opacity-50" />
        <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest text-center">
          Institutional grade security protocols active
        </p>
      </div>
    </div>
  );
}

export default SecurityFeaturesSection;
