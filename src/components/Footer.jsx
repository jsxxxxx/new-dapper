import React from 'react';
import { Gem, Twitter, Github, MessageSquare, Shield, Lock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center mt-2 mb-2">
              <img src="/PNG Chainnova.png" alt="Chainnova Logo" className="h-10 w-auto mr-3" />
              <span className="text-3xl font-space-grotesk font-bold text-primary tracking-tight">Chainnova</span>
            </div>
            <p className="text-primary/60 leading-relaxed">
              The most secure decentralized trading platform with end-to-end encryption.
            </p>
            <div className="inline-flex items-center px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-sm text-primary">
              <Shield className="w-4 h-4 mr-2" />
              <span>Military-Grade Security</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary/60 hover:text-primary transition-colors p-2 border border-transparent hover:border-primary/30 hover:bg-primary/5 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary/60 hover:text-primary transition-colors p-2 border border-transparent hover:border-primary/30 hover:bg-primary/5 rounded-full">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary/60 hover:text-primary transition-colors p-2 border border-transparent hover:border-primary/30 hover:bg-primary/5 rounded-full">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-6 text-primary">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Secure Exchange</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Encrypted Trading</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Protected Wallet</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Secure API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-6 text-primary">Security</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Security Center</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Encryption Guide</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Bug Bounty</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-6 text-primary">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary/40">&copy; 2026 Chainnova. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="inline-flex items-center px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs text-primary">
              <Lock className="w-3 h-3 mr-1" />
              <span>E2E Encrypted Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;