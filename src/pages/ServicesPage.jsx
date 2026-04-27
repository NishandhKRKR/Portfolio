import Services from '../components/Services';
import Process from '../components/Process';
import PageTransition from '../components/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <Services />
        <div className="mt-24">
          <Process />
        </div>
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
