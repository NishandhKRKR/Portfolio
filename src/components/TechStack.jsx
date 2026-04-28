import { motion } from 'framer-motion';
import Parallax from './Parallax';

// SVG Icons
const HtmlIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.212-2.776H6.084l.321 5.372L12 19.998l5.592-1.559.818-8.689H8.531z"/></svg>;
const CssIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.41H5.41l.23 2.626h10.057l-.232 2.716H6.085l.235 2.502h8.77l-.326 3.426-2.91.803-2.955-.81-.212-2.776H6.084l.321 5.372L12 19.998l5.592-1.559.818-8.689H8.59z"/></svg>;
const ReactIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M11.955 2.583c-1.378 0-2.67.625-3.69 1.637l-1.127-1.12c1.39-1.298 3.208-2.025 5.09-1.986 4.095-.084 7.502 3.125 7.6 7.21v.204c0 3.86-3.045 7.02-6.91 7.202l1.168 1.156c-1.077 1.054-2.52 1.658-4.04 1.714-3.153.078-5.836-2.316-6.196-5.434h2.158c.28 2.015 2.115 3.513 4.156 3.407 1.39-.074 2.628-.887 3.23-2.128L12.3 12.34l-.403.41c-2.41 2.39-6.31 2.39-8.72 0-2.39-2.39-2.39-6.28 0-8.67l.38-.37.38.37c2.39 2.39 6.29 2.39 8.68 0L9.43 14.172c-.675.645-1.742.62-2.39-.055-.63-.64-.63-1.666 0-2.308l2.91-2.936v-2.15l-4.417 4.417c-1.2 1.173-1.2 3.12 0 4.293 1.165 1.144 3.033 1.144 4.198 0l2.766-2.78 4.22 4.25c.616 1.258-.2 2.764-1.576 2.92-2.062.18-3.92-1.353-4.14-3.41h-2.152c.288 3.14 2.992 5.56 6.136 5.46 1.488-.04 2.894-.61 3.974-1.6l1.2 1.2c-1.897 1.9-4.8 2.157-6.994.61-3.26-2.288-4.113-6.732-1.92-9.972L8.766 5.127C7.632 3.978 5.8 4.015 4.7 5.2 3.585 6.426 3.655 8.358 4.86 9.53l.38.38-2.6 2.61c-3.1-3.175-3.064-8.24.08-11.378z"/></svg>; // React generic, better to use standard React icon.
// Let's use simpler solid generic SVGs for these
const ReactSvg = ({ size }) => <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size}><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
const TailwindSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12.001 5.413c-3.593 0-5.389 2.245-5.389 6.736.898-1.796 2.246-2.694 4.042-2.694 1.255 0 2.17.65 3.189 1.737 1.56 1.666 3.4 3.633 8.157 3.633 3.593 0 5.389-2.245 5.389-6.736-.898 1.796-2.246 2.694-4.042 2.694-1.255 0-2.17-.65-3.188-1.737-1.56-1.666-3.401-3.633-8.158-3.633zM6.611 12.149c-3.592 0-5.388 2.245-5.388 6.736.898-1.796 2.246-2.694 4.042-2.694 1.255 0 2.17.649 3.188 1.736 1.56 1.667 3.4 3.634 8.158 3.634 3.593 0 5.389-2.245 5.389-6.736-.898 1.796-2.246 2.694-4.042 2.694-1.255 0-2.17-.65-3.189-1.737-1.56-1.666-3.401-3.633-8.158-3.633z" fill="currentColor"/></svg>;
const NodeSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M11.874 0L1.75 5.811v11.665l10.124 5.812 10.125-5.812V5.81L11.874 0zm7.683 16.037l-7.683 4.417-7.682-4.417V7.202l7.682-4.417 7.683 4.417v8.835z"/><path d="M16.924 15.696L11.875 18.6l-5.048-2.904V9.89l5.048-2.904 5.049 2.904v2.798H9.37v-1.725h5.368v-1.077h-3.488v1.077H8.847v-1.688l3.028-1.74 3.028 1.74v4.062l-3.028 1.742-3.028-1.742v-2.33h2.404v1.272l1.62-.931V10.22l-1.62-.93-1.62.93v2.668l-3.025 1.742-3.025-1.742V9.524l3.025-1.742 3.025 1.742V10h-1.62v-1.127l-1.405-.808-1.404.808v3.178l1.404.808 1.405-.808v-1.42H16.924z"/></svg>;
const MongoSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12.007 24a80.6 80.6 0 0 1-2.96-6.19 12.06 12.06 0 0 1-1.75-5.88C7.143 6.94 12.007.03 12.007.03c0 0 4.873 6.91 4.708 11.905-.03 1.996-.645 4.144-1.789 5.867-1.129 1.733-2.188 3.992-2.919 6.2-.218-.002-1.999-.408-1.999-.408m.463-14.773s-1.894 1.152-1.968 4.2c-.066 2.665 1.958 4.417 1.958 4.417s.745-.316.906-2.115c.162-1.757-1.026-3.805-.896-6.502" /></svg>;
const ExpressSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><text x="0" y="16" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="11" letterSpacing="-0.5">ex</text><text x="14" y="16" fontFamily="Arial, Helvetica, sans-serif" fontSize="11">press</text></svg>;

const techStack = [
  { name: 'HTML5', icon: <HtmlIcon size={50} />, brandColor: '#E34F26' },
  { name: 'CSS3', icon: <CssIcon size={50} />, brandColor: '#1572B6' },
  { name: 'JavaScript', icon: <svg width={50} height={50} viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><text x="12" y="18" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fill="#000" fontSize="15" textAnchor="middle">JS</text></svg>, brandColor: '#F7DF1E' },
  { name: 'React.js', icon: <ReactSvg size={50} />, brandColor: '#61DAFB' },
  { name: 'Tailwind CSS', icon: <TailwindSvg size={50} />, brandColor: '#06B6D4' },
  { name: 'Node.js', icon: <NodeSvg size={50} />, brandColor: '#339933' },
  { name: 'Express.js', icon: <ExpressSvg size={50} />, brandColor: '#FFFFFF' },
  { name: 'MongoDB', icon: <MongoSvg size={50} />, brandColor: '#47A248' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

const TechStack = () => {
  return (
    <section id="tech" className="py-20 relative overflow-hidden bg-foreground/5">
      <Parallax offset={40} className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            Technologies
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Technologies I work with to bring ideas to life.</p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              tabIndex={0}
              whileHover={{ 
                y: -10, 
                scale: 1.1,
                color: tech.brandColor,
                boxShadow: `0 0 25px ${tech.brandColor}66`
              }}
              whileFocus={{ 
                y: -10, 
                scale: 1.1,
                color: tech.brandColor,
                boxShadow: `0 0 25px ${tech.brandColor}66`
              }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl glass transition-all w-32 h-32 md:w-40 md:h-40 group text-foreground/80 cursor-pointer outline-none focus:outline-none"
            >
              <div className="mb-4 transition-colors duration-300 drop-shadow-xl" style={{ color: "inherit" }}>
                {tech.icon}
              </div>
              <span className="font-bold text-sm md:text-base opacity-70 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" style={{ color: "inherit" }}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </Parallax>
    </section>
  );
};

export default TechStack;
