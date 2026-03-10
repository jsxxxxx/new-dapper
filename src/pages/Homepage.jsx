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
    <div className="min-h-screen bg-background">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-background z-50 py-4 px-6 border-b border-primary">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Gem className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-space-grotesk font-bold text-primary">DappServer</span>
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
            className="md:hidden text-primary hover:opacity-70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-primary py-4">
            <nav className="flex flex-col space-y-4 px-6">
              <a href="#features" className="text-primary hover:opacity-70 transition-colors">Features</a>
              <a href="#about" className="text-primary hover:opacity-70 transition-colors">About</a>
              <a href="#how-it-works" className="text-primary hover:opacity-70 transition-colors">How It Works</a>
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
      <div className="fixed top-[100px] left-0 right-0 z-40 border-b border-primary bg-background">
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
                <div className="inline-flex items-center px-4 py-2 border border-primary mb-6">
                  <Star className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-primary">The Ultimate Dapp Companion</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-space-grotesk font-bold leading-tight text-primary">
                  Master Your <span className="">Web3 Journey</span>
                </h1>
                
                <p className="text-xl text-primary max-w-xl leading-relaxed">
                  Navigate the decentralized ecosystem with unparalleled confidence. Our protocol ensures lightning-quick execution shielded by impenetrable cryptographic layers, tailored for maximum user peace of mind.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/waitlist')}
                    className="btn btn-filled text-lg group relative"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Authenticate via Wallet</span>
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
                
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary">
                  <div className="text-center">
                    <p className="text-3xl font-space-grotesk text-primary font-bold">$5B+</p>
                    <p className="text-primary opacity-60">Secured Volume</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-space-grotesk text-primary font-bold">100K+</p>
                    <p className="text-primary opacity-60">Protected Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-space-grotesk text-primary font-bold">99.9%</p>
                    <p className="text-primary opacity-60">Uptime</p>
                  </div>
                </div>
              </div>

                <div className="relative mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen"></div>
                
                <div className="relative z-10 bg-background border-2 border-primary shadow-[8px_8px_0_0_theme(colors.primary.DEFAULT)] transition-transform duration-500 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_0_theme(colors.primary.DEFAULT)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                  {/* Animated Dashboard Panel */}
                  <div className="hero-dashboard p-5 font-mono text-xs select-none">
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-primary/30 pb-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-primary tracking-widest uppercase text-[10px] font-bold">DappServer // LIVE</span>
                      </div>
                      <span className="text-primary/50 text-[10px]">NODE_ID: 0x7f3A…c9B2</span>
                    </div>

                    {/* Sparkline chart */}
                    <div className="mb-4 border border-primary/20 p-3 bg-primary/5">
                      <div className="flex items-end justify-between h-14 gap-[3px]">
                        {[30,45,35,60,50,75,55,80,65,90,72,88,70,95,80,100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-primary transition-all duration-700"
                            style={{
                              height: `${h}%`,
                              opacity: 0.3 + (i / 16) * 0.7,
                              animation: `pulse ${1 + (i % 4) * 0.3}s ease-in-out infinite alternate`
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-primary/40 text-[9px]">
                        <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span>
                      </div>
                    </div>

                    {/* Token rows */}
                    <div className="space-y-2 mb-4">
                      {[
                        { sym: 'BTC', price: '67,241.80', chg: '+2.34%', up: true },
                        { sym: 'ETH', price: '3,512.44',  chg: '+1.87%', up: true },
                        { sym: 'SOL', price: '148.92',    chg: '-0.61%', up: false },
                        { sym: 'ARB', price: '1.204',     chg: '+4.10%', up: true },
                      ].map(({ sym, price, chg, up }) => (
                        <div key={sym} className="flex items-center justify-between border border-primary/20 px-3 py-2 hover:border-primary/60 transition-colors group">
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border border-primary/40 flex items-center justify-center text-primary text-[8px] font-bold group-hover:bg-primary/10 transition-colors">{sym[0]}</div>
                            <span className="text-primary font-bold">{sym}</span>
                          </div>
                          <span className="text-primary/80">${price}</span>
                          <span className={up ? 'text-primary font-bold' : 'text-red-400 font-bold'}>{chg}</span>
                        </div>
                      ))}
                    </div>

                    {/* Console log strip */}
                    <div className="border border-primary/20 bg-black/30 p-3 space-y-1">
                      <div className="text-primary/40 text-[9px] mb-1 tracking-wider">// PROTOCOL LOG</div>
                      {[
                        '> TX_CONFIRMED :: 0xab12…e4f9',
                        '> VAULT_LOCKED :: session#8821',
                        '> NODE_SYNC  :: 12/12 peers',
                        '> CIPHER_OK  :: AES-256-GCM',
                      ].map((line, i) => (
                        <div key={i} className="text-primary/60 text-[9px] flex items-center space-x-2">
                          <span className="text-primary">›</span>
                          <span className="hero-console-line" style={{ animationDelay: `${i * 0.4}s` }}>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Security Badge */}
                  <div className="absolute -top-6 -right-6 lg:-right-12 bg-background border-2 border-primary p-4 shadow-[4px_4px_0_0_theme(colors.primary.DEFAULT)] z-20 animate-pulse">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center border border-primary/30">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary tracking-widest uppercase">256-bit</p>
                        <p className="text-xs text-primary opacity-70">Cipher Active</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -right-8 lg:-right-20 top-1/3 bg-background border-2 border-primary px-6 py-4 shadow-[4px_4px_0_0_theme(colors.primary.DEFAULT)] z-20 hover:-translate-y-1 transition-transform cursor-default">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center bg-primary/5">
                        <Bitcoin className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-bold tracking-widest uppercase opacity-70 mb-1">24h Flow</p>
                        <p className="text-2xl font-space-grotesk font-black text-primary">$2.8B</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-8 lg:-left-20 bottom-1/4 bg-background border-2 border-primary px-6 py-4 shadow-[4px_4px_0_0_theme(colors.primary.DEFAULT)] z-20 hover:-translate-y-1 transition-transform cursor-default">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center bg-primary/5">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-bold tracking-widest uppercase opacity-70 mb-1">Nodes Active</p>
                        <p className="text-2xl font-space-grotesk font-black text-primary">100K+</p>
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
          className={`py-24 bg-background border-t border-primary transition-all duration-1000 ${
            platformInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          id="about"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold text-primary">
                  Impenetrable <span className="underline">Architecture</span>
                </h2>
                <p className="text-xl text-primary leading-relaxed">
                  Leverage robust cryptographic utilities that safeguard your digital footprint. From private key isolation to real-time network defense, every user interaction is enveloped in absolute privacy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-primary flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-primary">Always-on cryptographic tunneling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-primary flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-primary">Instant trustless verification schemas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-primary flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-primary">Distributed multi-party computation</span>
                  </li>
                </ul>
                <button 
                  onClick={() => navigate('/waitlist')}
                  className="btn btn-outline group"
                >
                  Enter the Vault
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=2000"
                  alt="Security Features"
                  className="grayscale border border-primary"
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