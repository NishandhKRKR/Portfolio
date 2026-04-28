import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          
          <motion.div 
            className="w-full text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-foreground/80 mb-8"
            >
              <Sparkles size={16} className="text-primary" />
              <span>StackNova Technology Studio</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-6 leading-[0.9]"
            >
              Crafting <span className="text-gradient">Digital</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40">Masterpieces.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl text-foreground/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We engineer premium, high-converting web experiences that elevate your brand to the next level.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                to="/projects" 
                className="glow-border w-full sm:w-auto"
              >
                <div className="w-full sm:w-auto px-10 py-4 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 group relative z-10">
                  View Our Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-foreground/40 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-16 bg-foreground/10 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
