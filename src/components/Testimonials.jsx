import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Your Vision Here',
    role: 'Future Client',
    content: 'We are ready to build the next big thing with you. Secure your spot here by reaching out today!',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=200&auto=format&fit=crop' // Abstract/placeholder art
  },
  {
    name: 'Reserved For You',
    role: 'Pioneering Partner',
    content: 'Imagine your glowing review here after we successfully launch your premium, high-converting React application.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Your Next Milestone',
    role: 'Industry Leader',
    content: 'Take your web presence to an entirely new dimension. Your success story will be featured right here.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 blur-3xl -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-accent mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Feedback</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Don't just take my word for it. Here's what others have to say.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-foreground/10" size={60} />
              
              <div className="flex items-center gap-4 mb-6 relative">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/50">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-foreground/70 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
