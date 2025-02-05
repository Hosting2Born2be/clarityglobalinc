import {
  AsSimple,
  CanYouDo,
  Faq,
  GetFreeAccount,
  Header,
  KnowMore,
  NoFee,
  Offers,
  OurValues,
  Reviews,
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
