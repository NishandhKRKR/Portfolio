import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who I Am</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden glass p-2 border-primary/20 aspect-[4/5] shadow-2xl bg-background/30">
              <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
                alt="3D Frontend Boy Character" 
                className="w-full h-full object-cover rounded-2xl opacity-90 hover:opacity-100 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute bottom-6 right-6 glass p-4 rounded-2xl flex items-center gap-3 animate-bounce bg-background/80 backdrop-blur-md">
                <span className="text-3xl">👋</span>
                <div className="text-sm font-medium leading-tight">
                  <span className="text-primary block">Available for</span>
                  Work
                </div>
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Hi, I'm the founder of <span className="text-primary">StackNova Technology</span>.
            </h3>
            <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
              We specialize in creating interactive, scalable, and responsive web applications. With a strong eye for design and a deep understanding of modern web technologies, we bridge the gap between design and an engaging user experience, utilizing the best in 3D and Framer Motion.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50">Experience</span>
                  <span className="font-medium">3+ Years</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50">Location</span>
                  <span className="font-medium">Remote / India</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50">Email</span>
                  <span className="font-medium">nishandhkr2000@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="block text-sm text-foreground/50">Availability</span>
                  <span className="font-medium">Full-time, Freelance</span>
                </div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-background border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
