import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.7 4.9 4.9 0 0 0-.13-3.65s-1.12-.36-3.67 1.36a12.7 12.7 0 0 0-6.6 0C5.12 2.36 4 2.7 4 2.7a4.9 4.9 0 0 0-.13 3.65A5.2 5.2 0 0 0 2.5 10c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
);

const projects = [
  {
    title: 'InstaTrendz E-Commerce',
    description: 'A premium, high-conversion e-commerce platform built for a modern Instagram store.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://smagstoredemo.netlify.app/',
    githubUrl: '#',
    color: 'from-blue-600/20 to-purple-600/20'
  },
  {
    title: 'Geofenced Attendance',
    description: 'An enterprise-grade attendance system utilizing Haversine formulas and precise geolocation API constraints.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600',
    tech: ['MERN Stack', 'Tailwind', 'Geolocation API'],
    demoUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-600/20 to-cyan-600/20'
  },
  {
    title: 'Premium Gym Landing',
    description: 'A high-octane, visually striking landing page engineered to maximize lead generation for fitness brands.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600',
    tech: ['React.js', 'Tailwind', 'Framer Motion'],
    demoUrl: '#',
    githubUrl: '#',
    color: 'from-rose-600/20 to-orange-600/20'
  }
];

const ProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);
  const isEven = index % 2 === 0;
  
  // Parallax for the image inside the card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imageScale = useTransform(smoothProgress, [0, 1], [1.2, 1]);
  const yParallax = useTransform(smoothProgress, [0, 1], [-50, 50]);

  return (
    <div ref={containerRef} className="flex items-center justify-center px-4 md:px-6 mb-24 md:mb-40">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`relative w-full max-w-6xl h-auto md:h-[70vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden glass shadow-2xl bg-gradient-to-br ${project.color} border border-white/10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-20 bg-background/40 backdrop-blur-sm h-full order-2 md:order-none">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-tight">
              {project.title}
            </h3>
            <p className="text-foreground/70 text-lg md:text-xl font-light mb-8 max-w-md">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tech.map((techItem, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-foreground text-background"
                >
                  {techItem}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary/80 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full glass font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Github size={18} />
                Code
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Side with Parallax */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden order-1 md:order-none">
          <motion.div 
            style={{ scale: imageScale, y: yParallax }}
            className="w-full h-[120%]"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Subtle gradient overlay to blend image edge */}
          <div className={`absolute inset-0 bg-gradient-to-t ${isEven ? 'md:bg-gradient-to-r' : 'md:bg-gradient-to-l'} from-background/40 via-background/10 to-transparent pointer-events-none`} />
        </div>

      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative pb-24 pt-10">
      <div className="pt-32 pb-24 px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-6">
            Portfolio
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            Selected <span className="text-gradient">Works.</span>
          </h2>
          <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto">
            A showcase of premium digital experiences crafted with precision.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            index={index} 
            project={project} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
