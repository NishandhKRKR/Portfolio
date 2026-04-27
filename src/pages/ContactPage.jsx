import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <Contact />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
