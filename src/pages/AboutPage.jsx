import About from '../components/About';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <About />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
