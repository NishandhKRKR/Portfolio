import { motion } from 'framer-motion';

// SVG Icons
const HtmlIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.212-2.776H6.084l.321 5.372L12 19.998l5.592-1.559.818-8.689H8.531z"/></svg>;
const CssIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.41H5.41l.23 2.626h10.057l-.232 2.716H6.085l.235 2.502h8.77l-.326 3.426-2.91.803-2.955-.81-.212-2.776H6.084l.321 5.372L12 19.998l5.592-1.559.818-8.689H8.59z"/></svg>;
const ReactIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M11.955 2.583c-1.378 0-2.67.625-3.69 1.637l-1.127-1.12c1.39-1.298 3.208-2.025 5.09-1.986 4.095-.084 7.502 3.125 7.6 7.21v.204c0 3.86-3.045 7.02-6.91 7.202l1.168 1.156c-1.077 1.054-2.52 1.658-4.04 1.714-3.153.078-5.836-2.316-6.196-5.434h2.158c.28 2.015 2.115 3.513 4.156 3.407 1.39-.074 2.628-.887 3.23-2.128L12.3 12.34l-.403.41c-2.41 2.39-6.31 2.39-8.72 0-2.39-2.39-2.39-6.28 0-8.67l.38-.37.38.37c2.39 2.39 6.29 2.39 8.68 0L9.43 14.172c-.675.645-1.742.62-2.39-.055-.63-.64-.63-1.666 0-2.308l2.91-2.936v-2.15l-4.417 4.417c-1.2 1.173-1.2 3.12 0 4.293 1.165 1.144 3.033 1.144 4.198 0l2.766-2.78 4.22 4.25c.616 1.258-.2 2.764-1.576 2.92-2.062.18-3.92-1.353-4.14-3.41h-2.152c.288 3.14 2.992 5.56 6.136 5.46 1.488-.04 2.894-.61 3.974-1.6l1.2 1.2c-1.897 1.9-4.8 2.157-6.994.61-3.26-2.288-4.113-6.732-1.92-9.972L8.766 5.127C7.632 3.978 5.8 4.015 4.7 5.2 3.585 6.426 3.655 8.358 4.86 9.53l.38.38-2.6 2.61c-3.1-3.175-3.064-8.24.08-11.378z"/></svg>; // React generic, better to use standard React icon.
// Let's use simpler solid generic SVGs for these
const ReactSvg = ({ size }) => <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size}><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
const TailwindSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12.001 5.413c-3.593 0-5.389 2.245-5.389 6.736.898-1.796 2.246-2.694 4.042-2.694 1.255 0 2.17.65 3.189 1.737 1.56 1.666 3.4 3.633 8.157 3.633 3.593 0 5.389-2.245 5.389-6.736-.898 1.796-2.246 2.694-4.042 2.694-1.255 0-2.17-.65-3.188-1.737-1.56-1.666-3.401-3.633-8.158-3.633zM6.611 12.149c-3.592 0-5.388 2.245-5.388 6.736.898-1.796 2.246-2.694 4.042-2.694 1.255 0 2.17.649 3.188 1.736 1.56 1.667 3.4 3.634 8.158 3.634 3.593 0 5.389-2.245 5.389-6.736-.898 1.796-2.246 2.694-4.042 2.694-1.255 0-2.17-.65-3.189-1.737-1.56-1.666-3.401-3.633-8.158-3.633z" fill="currentColor"/></svg>;
const NodeSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M11.874 0L1.75 5.811v11.665l10.124 5.812 10.125-5.812V5.81L11.874 0zm7.683 16.037l-7.683 4.417-7.682-4.417V7.202l7.682-4.417 7.683 4.417v8.835z"/><path d="M16.924 15.696L11.875 18.6l-5.048-2.904V9.89l5.048-2.904 5.049 2.904v2.798H9.37v-1.725h5.368v-1.077h-3.488v1.077H8.847v-1.688l3.028-1.74 3.028 1.74v4.062l-3.028 1.742-3.028-1.742v-2.33h2.404v1.272l1.62-.931V10.22l-1.62-.93-1.62.93v2.668l-3.025 1.742-3.025-1.742V9.524l3.025-1.742 3.025 1.742V10h-1.62v-1.127l-1.405-.808-1.404.808v3.178l1.404.808 1.405-.808v-1.42H16.924z"/></svg>;
const MongoSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12.007 24a80.6 80.6 0 0 1-2.96-6.19 12.06 12.06 0 0 1-1.75-5.88C7.143 6.94 12.007.03 12.007.03c0 0 4.873 6.91 4.708 11.905-.03 1.996-.645 4.144-1.789 5.867-1.129 1.733-2.188 3.992-2.919 6.2-.218-.002-1.999-.408-1.999-.408m.463-14.773s-1.894 1.152-1.968 4.2c-.066 2.665 1.958 4.417 1.958 4.417s.745-.316.906-2.115c.162-1.757-1.026-3.805-.896-6.502" /></svg>;
const MySqlSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M22.954 13.923c-.158.468-1.042.871-1.986 1.106-.115-1.859-1.328-3.328-2.617-3.666-.345-.09-1.282.029-1.959.029-.267 0-1.802-.07-2.02-.128-.809-.214-.239-.556-.239-.556s.216-.47-.197-.899c-.394-.411-.322-.962-.322-.962s.069-.74.37-.891c-.482-.821-2.036-.543-3.235-1.317-1.107-.714-3.18-.847-5.111-1.79-1.902-.929-2.868-2.228-3.791-3.411-.371-.476-1.571-1.192-1.838-1.3l.035-.113s.475-.246.732-.352zM2.87 3.518c.846.516 2.072.766 2.76.845.548.062-.03-.231.066-.353.473-.6 1.487-1.108 2.059-1.56.577-.457 4.542.446 4.314 1.111-.122.355-1.049.27-1.385.342-.718.152-1.366 1.256-1.366 1.256s-2.025 1.57-.468 2.656C9.176 8.03 11.2 7.747 11.2 7.747s-.35.539 0 .809c.47.362 1.493-1.018 2.508-.344 1.05.7 1.834.793 2.127 1.62-.276-1.166-.994-.374-1.229-.623-.53-.563-.382-.016-.838-.154-1.465-.443-.198 1.428.188 2.016.326.496.06.76.248.96-.067.873 1.171 1.705 2.146 1.623.238-.02.46-.07.46-.07s.767.142.149 1.13c-.352.564-1.012 1.09-1.536 1.455v.006c.012-.034.023-.069.034-.105.158-.468-.142-.8-.667-.743-.526.057-.156.417-.315.885-.159.467.575.405 1.1.348.526-.057.48.27-.087 1.954-1.109 3.292-3.13 6.002-3.13 6.002s1.393-2.613 2.619-5.91-.497-1.238-.497-1.238L15 15.688c-.918-.088-.868 2.946-1.921 5.92-.099.279.79-1.385.952-1.854.71-2.036-.34-2.222-.34-2.222l1.622-4.004c-.328-.152-.073.491-.321 1.223-.284.846-1.195 1.551-2.035 1.87-.838.318-1.503-.131-1.503-.131s.145 1.688-2.607.039c.083.562-1.3-.122-1.3-.122s.67 1.258-2.31-2.316c-.234-.339-.516-.764-.78-1.157-1.91 3.528-6.177 4.195-6.177 4.195s5.044-.22 7.078-4.707c-2.484-1.114-1.562-3.123-1.562-3.123s.723 1.342 2.378 1.953l1.102-2.368s-2.073.08-1.748-1.296l1.248-2.37c-1.468-.168-1.378-1.371-1.378-1.371s.752.68 1.914.536l.278-1.84c-1.411-.532-.2-2.18-.2-2.18s-1.83.69-.971-1.23C5.975 6.321 4.7 6.136 4.7 6.136s.2 1.353-.615 1.776-1.171 1.053-1.439.462"/></svg>;
const ExpressSvg = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><text x="0" y="16" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="11" letterSpacing="-0.5">ex</text><text x="14" y="16" fontFamily="Arial, Helvetica, sans-serif" fontSize="11">press</text></svg>;

const techStack = [
  { name: 'HTML5', icon: <HtmlIcon size={50} />, brandColor: '#E34F26' },
  { name: 'CSS3', icon: <img src="/css.png" alt="CSS3" className="w-[50px] h-[50px] object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />, brandColor: '#1572B6' },
  { name: 'JavaScript', icon: <img src="/js.png" alt="JavaScript" className="w-[50px] h-[50px] object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />, brandColor: '#F7DF1E' },
  { name: 'React.js', icon: <ReactSvg size={50} />, brandColor: '#61DAFB' },
  { name: 'Tailwind CSS', icon: <TailwindSvg size={50} />, brandColor: '#06B6D4' },
  { name: 'Node.js', icon: <NodeSvg size={50} />, brandColor: '#339933' },
  { name: 'Express.js', icon: <img src="/express.png" alt="Express" className="w-[50px] h-[50px] object-contain bg-white/20 p-1 rounded-lg" onError={(e) => e.currentTarget.style.display = 'none'} />, brandColor: '#FFFFFF' },
  { name: 'MongoDB', icon: <MongoSvg size={50} />, brandColor: '#47A248' },
  { name: 'MySQL', icon: <img src="/mysql.png" alt="MySQL" className="w-[50px] h-[50px] object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />, brandColor: '#4479A1' },
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
    <section className="py-20 relative overflow-hidden bg-foreground/5">
      <div className="container mx-auto px-6">
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
              whileHover={{ 
                y: -10, 
                scale: 1.1,
                color: tech.brandColor,
                boxShadow: `0 0 25px ${tech.brandColor}66`
              }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl glass transition-all w-32 h-32 md:w-40 md:h-40 group text-foreground/80 cursor-pointer"
            >
              <div className="mb-4 transition-colors duration-300 drop-shadow-xl" style={{ color: "inherit" }}>
                {tech.icon}
              </div>
              <span className="font-bold text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: "inherit" }}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
