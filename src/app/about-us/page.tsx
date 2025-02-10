import { Header, Partners, Roadmap } from '@/widgets/about-us/components';
import { Reviews, SignUpBanner } from '@/widgets/common/components';

export default function AboutUs() {
  return (
    <main>
      <Header />
      <Roadmap />
      <Partners />
      <Reviews />
      <SignUpBanner title="Take your online payment experience to the next level with Clarity Global Inc!" />
    </main>
  );
}
