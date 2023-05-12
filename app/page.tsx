import Footer from '@/components/Footer';
import Ilustration from '@/components/Ilustration';
import Presentation from '@/components/Presentation';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';

export default function Home() {
  return (
    <div>
      <Ilustration />
      <div className="max-w-[700px] flex flex-col mx-auto ">
        <Presentation />
        <Projects />
        <div id="/#technologies">
          <Technologies />
        </div>
        <Footer />
      </div>
    </div>
  );
}
