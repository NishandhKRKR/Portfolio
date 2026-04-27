import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <div className="pb-24">
        <Testimonials />
      </div>
    </PageTransition>
  );
};

export default Home;
