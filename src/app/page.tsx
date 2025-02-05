import { AsSimple } from './components/as-simple';
import { CanYouDo } from './components/can-you-do';
import { Faq } from './components/faq';
import { GetFreeAccount } from './components/get-free-account';
import { Header } from './components/header';
import { KnowMore } from './components/know-more';
import { NoFee } from './components/no-fee';
import { Offers } from './components/offers';
import { OurValues } from './components/our-values';
import { Reviews } from './components/reviews';
import { SimpleSteps } from './components/simple-steps';
import { WhyChooseUs } from './components/why-choose-us';

export default function Home() {
  return (
    <main>
      <Header />
      <Offers />
      <WhyChooseUs />
      <OurValues />
      <NoFee />
      <AsSimple />
      <SimpleSteps />
      <CanYouDo />
      <Reviews />
      <Faq />
      <KnowMore />
      <GetFreeAccount />
    </main>
  );
}
