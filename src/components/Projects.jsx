import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.7 4.9 4.9 0 0 0-.13-3.65s-1.12-.36-3.67 1.36a12.7 12.7 0 0 0-6.6 0C5.12 2.36 4 2.7 4 2.7a4.9 4.9 0 0 0-.13 3.65A5.2 5.2 0 0 0 2.5 10c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path></svg>;

const projects = [
  {
    title: 'InstaTrendz E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://smagstoredemo.netlify.app/',
    githubUrl: '#',
  },
  {
    title: 'Geofenced Attendance System',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    tech: ['MERN Stack', 'Tailwind', 'Geolocation API'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Premium Gym Landing Page',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
    tech: ['React.js', 'Tailwind', 'Framer Motion'],
    demoUrl: '#',
    githubUrl: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Here are some of my recent works that showcase my skills and experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-[2rem] overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techItem, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-foreground/10 text-foreground/80"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex gap-4 pt-4 border-t border-foreground/10">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-foreground/20 hover:bg-foreground/5 transition-colors font-medium"
                  >
                    <GithubIcon size={18} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
