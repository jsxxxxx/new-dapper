import React from 'react';
import { Shield, Globe2, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className={`py-24 bg-white transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-space-grotesk font-bold text-center mb-16 text-black uppercase tracking-tighter">
          About <span className="underline">DappServer</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-black hover:bg-black hover:text-white transition-all group">
            <div className="w-12 h-12 bg-black flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
              <Shield className="w-6 h-6 text-white group-hover:text-black" />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold mb-4 uppercase tracking-tight">Secure Platform</h3>
            <p className="opacity-60 group-hover:opacity-100 transition-opacity font-medium">Built with industry-leading security measures to protect your assets.</p>
          </div>
          
          <div className="p-8 bg-white border border-black hover:bg-black hover:text-white transition-all group">
            <div className="w-12 h-12 bg-black flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
              <Globe2 className="w-6 h-6 text-white group-hover:text-black" />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold mb-4 uppercase tracking-tight">Global Access</h3>
            <p className="opacity-60 group-hover:opacity-100 transition-opacity font-medium">Trade from anywhere in the world with our globally distributed infrastructure.</p>
          </div>
          
          <div className="p-8 bg-white border border-black hover:bg-black hover:text-white transition-all group">
            <div className="w-12 h-12 bg-black flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
              <Sparkles className="w-6 h-6 text-white group-hover:text-black" />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold mb-4 uppercase tracking-tight">Innovation First</h3>
            <p className="opacity-60 group-hover:opacity-100 transition-opacity font-medium">Constantly evolving with the latest blockchain technologies and features.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;