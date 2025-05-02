import ImageScroller from './components/ImageScroller';
import ProjectShowcase from './components/ProjectShowcase';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="relative">
      <ImageScroller />
      <ProjectShowcase />
      <ContactForm />
    </div>
  );
}
