import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.7 4.9 4.9 0 0 0-.13-3.65s-1.12-.36-3.67 1.36a12.7 12.7 0 0 0-6.6 0C5.12 2.36 4 2.7 4 2.7a4.9 4.9 0 0 0-.13 3.65A5.2 5.2 0 0 0 2.5 10c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path></svg>;
const LinkedinIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/stacknovatechno@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "N/A",
            message: formData.message,
            _subject: `StackNova Technology Contact from ${formData.name}`,
            _captcha: "false"
        })
      });

      if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
      } else {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-secondary mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Have a project in mind for StackNova Technology? Reach out and let's make it happen.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block font-medium mb-1">Email</span>
                    <a href="mailto:stacknovatechno@gmail.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">stacknovatechno@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex flex-shrink-0 items-center justify-center text-secondary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block font-medium mb-1">WhatsApp</span>
                    <a href="https://wa.me/919345364014" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-secondary transition-colors">+91 9345364014</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex flex-shrink-0 items-center justify-center text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block font-medium mb-1">Location</span>
                    <span className="text-sm text-foreground/70">India</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="block font-medium mb-4">Follow StackNova</span>
                <div className="flex gap-4">
                  <a href="https://github.com/NishandhKRKR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <GithubIcon size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/nishandh-kr-3737a8248/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://www.instagram.com/stacknova.techno/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <InstagramIcon size={18} />
                  </a>
                  <a href="https://wa.me/919345364014" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center h-full min-h-[400px] text-center border border-green-500/20 bg-green-500/5"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-green-500">Message Sent Successfully!</h3>
                <p className="text-foreground/70 max-w-md mx-auto leading-relaxed">Thank you for reaching out. I've received your message and will get back to you directly at your email address as soon as possible.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 px-6 py-3 rounded-full glass hover:bg-foreground/5 transition-colors font-medium text-sm">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl relative">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/30 disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/30 disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/30 disabled:opacity-50"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/30 resize-none disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
                
                {status === 'error' && <p className="text-red-500 font-medium text-sm mt-4 text-center sm:text-left">Failed to send message. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
