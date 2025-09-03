import React from 'react';
import { Gem, Twitter, Github, MessageSquare, Shield, Lock } from 'lucide-react';

function Footer() {
  return (
    <footer className="glass-effect border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-space-grotesk font-bold gradient-text">DappServer</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The most secure decentralized trading platform with end-to-end encryption.
            </p>
            <div className="encryption-badge">
              <Shield className="w-4 h-4 mr-2" />
              <span>Military-Grade Security</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-6 text-purple-300">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Secure Exchange</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Encrypted Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Protected Wallet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Secure API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-6 text-purple-300">Security</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Security Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Encryption Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Bug Bounty</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-6 text-purple-300">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 DappServer. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="encryption-badge">
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