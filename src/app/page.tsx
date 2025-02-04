import { Header } from './components/header';
import { NoFee } from './components/no-fee';
import { Offers } from './components/offers';
import { OurValues } from './components/our-values';
import { WhyChooseUs } from './components/why-choose-us';

export default function Home() {
  return (
    <main>
      <Header />
      <Offers />
      <WhyChooseUs />
      <OurValues />
      <NoFee />
    </main>
  );
}
