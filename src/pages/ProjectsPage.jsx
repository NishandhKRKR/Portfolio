import Projects from '../components/Projects';
import PageTransition from '../components/PageTransition';

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <Projects />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
