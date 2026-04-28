import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Briefcase } from 'lucide-react';
import Parallax from './Parallax';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <Parallax offset={50} className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground/80 mb-6">
            About Me
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Who I Am.</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 glass rounded-[2rem] p-10 flex flex-col items-center justify-center text-center border-primary/20 bg-primary/5">
                <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-2">1+</span>
                <span className="text-xl font-medium text-foreground/80">Years of Built<br />Experience</span>
              </div>
              <div className="glass rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black text-foreground mb-1">10+</span>
                <span className="text-sm font-medium text-foreground/60">Projects</span>
              </div>
              <div className="glass rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black text-foreground mb-1">100%</span>
                <span className="text-sm font-medium text-foreground/60">Commitment</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              Hi, I'm the founder of <span className="text-gradient">StackNova</span>.
            </h3>
            <p className="text-foreground/70 mb-10 leading-relaxed text-xl font-light max-w-2xl">
              We specialize in creating interactive, scalable, and responsive web applications. With over a year of dedicated hands-on experience and a strong eye for design, we bridge the gap between aesthetics and an engaging user experience, utilizing the best in frontend technologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50 tracking-widest uppercase mb-1">Experience</span>
                  <span className="font-semibold text-lg">1+ Years</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50 tracking-widest uppercase mb-1">Location</span>
                  <span className="font-semibold text-lg">Remote / India</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50 tracking-widest uppercase mb-1">Email</span>
                  <span className="font-semibold text-lg">nishandhkr2000@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-primary">
                  <Calendar size={24} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50 tracking-widest uppercase mb-1">Availability</span>
                  <span className="font-semibold text-lg">Full-time, Freelance</span>
                </div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </Parallax>
    </section>
  );
};

export default About;
