import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30 selection:text-primary relative">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 z-[-1] bg-noise pointer-events-none"></div>
      
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
