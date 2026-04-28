import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Parallax = ({ children, offset = 50, className = "" }) => {
  const ref = useRef(null);
  
  // Track the scroll progress of this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Apply a spring to smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform the progress into a Y translation based on the offset
  const y = useTransform(smoothProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default Parallax;
