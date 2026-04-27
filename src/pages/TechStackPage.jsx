import TechStack from '../components/TechStack';
import PageTransition from '../components/PageTransition';

const TechStackPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen">
        <TechStack />
      </div>
    </PageTransition>
  );
};

export default TechStackPage;
