import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Wallet2, Shield, Bitcoin, Gem, ChevronRight, ArrowRight, Lock, Zap, Users, Rocket, BarChart3, Globe2, Sparkles, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CryptoTicker from '../components/CryptoTicker';
import Footer from '../components/Footer';
import FeaturesSection from '../components/sections/FeaturesSection';
import FutureReleaseSection from '../components/sections/FutureReleaseSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import CryptoHubLogo from '../assets/CryptoHub.svg';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const { ref: trustRef, inView: trustInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: platformRef, inView: platformInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-white z-50 py-4 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <Gem className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-space-grotesk font-bold text-black">DappServer</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigate('/waitlist')}
              className="btn btn-outline flex items-center space-x-2 group"
            >
              <Shield className="w-4 h-4" />
              <span>Secure Validation</span>
              <div className="encryption-badge ml-2">
                <Lock className="w-3 h-3 mr-1" />
                E2E
              </div>
            </button>
          </div>

          <button 
            className="md:hidden text-black hover:opacity-70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black py-4">
            <nav className="flex flex-col space-y-4 px-6">
              <a href="#features" className="text-black hover:opacity-70 transition-colors">Features</a>
              <a href="#about" className="text-black hover:opacity-70 transition-colors">About</a>
              <a href="#how-it-works" className="text-black hover:opacity-70 transition-colors">How It Works</a>
              <button 
                onClick={() => navigate('/waitlist')}
                className="btn btn-filled flex items-center justify-center space-x-2"
              >
                <Shield className="w-4 h-4" />
                <span>Secure Validation</span>
                <div className="encryption-badge">
                  <Lock className="w-3 h-3 mr-1" />
                  E2E
                </div>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Crypto Ticker */}
      <div className="fixed top-[100px] left-0 right-0 z-40 border-b border-black bg-white">
        <CryptoTicker />
      </div>

      {/* Main Content */}
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-16 pb-24">
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 border border-black mb-6">
                  <Star className="w-4 h-4 text-black mr-2" />
                  <span className="text-sm text-black">Next-Gen Crypto Platform</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-space-grotesk font-bold leading-tight text-black">
                  The Future of <span className="">Secure Trading</span> is Here
                </h1>
                
                <p className="text-xl text-black max-w-xl leading-relaxed">
                  Experience lightning-fast trades with military-grade encryption, institutional-level security, 
                  and deep liquidity pools. Join thousands of traders in the most secure trading environment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/waitlist')}
                    className="btn btn-filled text-lg group relative"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Secure Wallet Validation</span>
                    <div className="encryption-badge ml-2">
                      <Lock className="w-3 h-3 mr-1" />
                      E2E Encrypted
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a href="#features" className="btn btn-outline text-lg">
                    Explore Features
                  </a>
                </div>
                
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-black">
                  <div className="text-center">
                    <p className="text-3xl font-space-grotesk text-black font-bold">$5B+</p>
                    <p className="text-black opacity-60">Secured Volume</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-space-grotesk text-black font-bold">100K+</p>
                    <p className="text-black opacity-60">Protected Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-space-grotesk text-black font-bold">99.9%</p>
                    <p className="text-black opacity-60">Uptime</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Trading Interface Preview */}
              <div className="relative">
                <div className="relative z-10 bg-white border border-black p-6">
                  <img 
                    src="/tenor.gif" 
                    alt="Secure Trading Interface"
                    className="w-full border border-black"
                  />
                  
                  {/* Floating Security Badge */}
                  <div className="absolute -top-4 -right-4 bg-white border border-black p-3">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-6 h-6 text-black" />
                      <div>
                        <p className="text-xs text-black font-medium">256-bit</p>
                        <p className="text-xs text-black opacity-60">Encryption</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -right-12 top-1/4 transform translate-x-1/2 bg-white border border-black p-4">
                    <div className="flex items-center space-x-3">
                      <Bitcoin className="w-8 h-8 text-black" />
                      <div>
                        <p className="text-sm text-black opacity-60">24h Volume</p>
                        <p className="text-lg font-space-grotesk font-bold text-black">$2.8B</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-12 bottom-1/4 transform -translate-x-1/2 bg-white border border-black p-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-8 h-8 text-black" />
                      <div>
                        <p className="text-sm text-black opacity-60">Active Users</p>
                        <p className="text-lg font-space-grotesk font-bold text-black">100K+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Future Release Section */}
        <FutureReleaseSection />

        {/* Platform Features */}
        <section 
          ref={platformRef}
          className={`py-24 bg-white border-t border-black transition-all duration-1000 ${
            platformInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          id="about"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold text-black">
                  Military-Grade <span className="underline">Security</span>
                </h2>
                <p className="text-xl text-black leading-relaxed">
                  Access professional-grade trading tools with end-to-end encryption, 
                  real-time market data, and advanced security protocols that protect every transaction.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-black flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-black">End-to-end encrypted communications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-black flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-black">Zero-knowledge proof validation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-black flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-black">Multi-signature wallet protection</span>
                  </li>
                </ul>
                <button 
                  onClick={() => navigate('/waitlist')}
                  className="btn btn-outline group"
                >
                  Get Secure Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=2000"
                  alt="Security Features"
                  className="grayscale border border-black"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;