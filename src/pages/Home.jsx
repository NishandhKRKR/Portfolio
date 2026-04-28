import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
    </PageTransition>
  );
};

export default Home;
