import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-6"
            >
              🚀 Welcome to StackNova Technology
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              I build modern <br />
              <span className="text-gradient">high-converting</span> <br />
              websites.
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
              Transforming your ideas into premium, interactive web experiences. 
              Specializing in Frontend Development with a focus on modern design and smooth animations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/projects" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full glass font-medium hover:bg-white/20 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-md lg:max-w-none relative aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-full h-full p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="w-full h-full glass rounded-[2rem] border border-foreground/10 shadow-2xl overflow-hidden relative z-10 flex items-center justify-center bg-background/50 drop-shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop" 
                  alt="3D Frontend Developer Avatar" 
                  className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-8 text-center pointer-events-none">
                  <span className="font-bold text-2xl tracking-tight text-white bg-black/50 px-4 py-2 rounded-xl backdrop-blur-md">Frontend Dev.</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Discover</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
