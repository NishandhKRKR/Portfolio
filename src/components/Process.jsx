import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Research',
    description: 'Understanding your business needs, target audience, and project goals.',
    icon: <Search size={24} />,
    color: 'bg-blue-500'
  },
  {
    title: 'Design',
    description: 'Creating wireframes, visual designs, and interactive prototypes.',
    icon: <PenTool size={24} />,
    color: 'bg-purple-500'
  },
  {
    title: 'Development',
    description: 'Writing clean, scalable code and building robust frontend architectures.',
    icon: <Code size={24} />,
    color: 'bg-indigo-500'
  },
  {
    title: 'Launch',
    description: 'Final testing, optimization, and seamless deployment to production.',
    icon: <Rocket size={24} />,
    color: 'bg-green-500'
  }
];

const Process = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-accent mb-4">
            Workflow
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Development Process</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">A structured approach to delivering successful digital products.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/10 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`flex flex-col md:flex-row items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node - Top centered on mobile, Absolute centered on desktop */}
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 mb-6 md:mb-0 w-14 h-14 rounded-full glass flex items-center justify-center z-10 border-4 border-background shadow-xl">
                    <div className={`w-10 h-10 rounded-full ${step.color} text-white flex items-center justify-center shadow-[0_0_15px_currentColor]`}>
                      {step.icon}
                    </div>
                  </div>

                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass p-8 rounded-3xl hover:bg-white/5 dark:hover:bg-black/20 transition-colors shadow-lg text-center md:text-left relative overflow-hidden">
                      <span className="text-7xl font-extrabold text-foreground/5 absolute -top-2 -right-2 pointer-events-none">{`0${index + 1}`}</span>
                      <h3 className="text-2xl font-bold mb-3 relative z-10">{step.title}</h3>
                      <p className="text-foreground/70 relative z-10">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
