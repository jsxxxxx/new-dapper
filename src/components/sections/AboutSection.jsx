import React from 'react';
import { Shield, Globe2, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="py-24 bg-background"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 variants={itemVariants} className="text-4xl font-space-grotesk font-bold text-center mb-16 text-primary uppercase tracking-tighter">
          About <span className="underline">Chainnova</span>
        </motion.h2>
        
        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="p-8 bg-background border border-primary hover:bg-primary hover:text-primary-foreground transition-all group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 group-hover:bg-background transition-colors">
              <Shield className="w-6 h-6 text-primary-foreground group-hover:text-primary" />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold mb-4 uppercase tracking-tight">Secure Platform</h3>
            <p className="opacity-60 group-hover:opacity-100 transition-opacity font-medium">Built with industry-leading security measures to protect your assets.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="p-8 bg-background border border-primary hover:bg-primary hover:text-primary-foreground transition-all group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 group-hover:bg-background transition-colors">
              <Globe2 className="w-6 h-6 text-primary-foreground group-hover:text-primary" />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold mb-4 uppercase tracking-tight">Global Access</h3>
            <p className="opacity-60 group-hover:opacity-100 transition-opacity font-medium">Trade from anywhere in the world with our globally distributed infrastructure.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="p-8 bg-background border border-primary hover:bg-primary hover:text-primary-foreground transition-all group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 group-hover:bg-background transition-colors">
              <Sparkles className="w-6 h-6 text-primary-foreground group-hover:text-primary" />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold mb-4 uppercase tracking-tight">Innovation First</h3>
            <p className="opacity-60 group-hover:opacity-100 transition-opacity font-medium">Constantly evolving with the latest blockchain technologies and features.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;