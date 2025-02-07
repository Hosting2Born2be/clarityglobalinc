import { Faq, KnowMore, Reviews } from '@/widgets/common/components';
import {
  AsSimple,
  CanYouDo,
  GetFreeAccount,
  Header,
  NoFee,
  Offers,
  OurValues,
  SimpleSteps,
  WhyChooseUs,
} from '@/widgets/home/components';

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
