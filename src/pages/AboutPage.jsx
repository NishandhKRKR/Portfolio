import About from '../components/About';
import TechStack from '../components/TechStack';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <About />
        <div className="mt-24">
          <TechStack />
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
