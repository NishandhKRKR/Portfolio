import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full mt-auto bg-background overflow-hidden border-t border-white/5 pt-24 pb-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="w-full text-center mb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/50 mb-6">Ready to scale?</p>
          <Link to="/contact">
            <h2 className="text-6xl md:text-8xl lg:text-[11vw] font-black tracking-tighter leading-[0.8] text-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-500">
              LET'S TALK.
            </h2>
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter">StackNova<span className="text-primary">.</span></span>
          </div>
          
          <div className="flex gap-8">
            <Link to="/projects" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Work</Link>
            <Link to="/about" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Contact</Link>
          </div>

          <p className="text-foreground/40 text-xs font-medium">
            © {new Date().getFullYear()} StackNova Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
