import { motion } from 'framer-motion';
import { Layout, Globe, Code2, Users, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: 'Attendance Management System (Fullstack)',
    description: 'Developing secure, geofence-based employee attendance systems with complete dashboards.',
    icon: <Users size={32} className="text-primary" />,
  },
  {
    title: 'E-Commerce Applications',
    description: 'Building high-performance e-commerce platforms with smooth shopping interactions.',
    icon: <ShoppingCart size={32} className="text-secondary" />,
  },
  {
    title: 'Landing Page Development',
    description: 'High-converting, beautiful landing pages optimized for performance and capturing leads.',
    icon: <Layout size={32} className="text-accent" />,
  },
  {
    title: 'Website Development',
    description: 'Full-scale scalable websites with modern architectures and robust responsive styling.',
    icon: <Globe size={32} className="text-primary" />,
  },
  {
    title: 'Frontend Development',
    description: 'Interactive UI/UX implementations, complex web apps using React and advanced animations.',
    icon: <Code2 size={32} className="text-secondary" />,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-secondary mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Providing high-quality digital solutions tailored to your business needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Background gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
