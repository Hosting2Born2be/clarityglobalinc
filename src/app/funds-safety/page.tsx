import {
  Faq,
  HowItWork,
  Reviews,
  SignUpBanner,
  WhyChoose,
} from '@/widgets/common/components';
import {
  Header,
  KnowMore,
  OfferEmoney,
} from '@/widgets/funds-safety/components';

export default function FundsSafety() {
  return (
    <main>
      <Header />
      <OfferEmoney />
      <WhyChoose />
      <HowItWork />
      <Reviews />
      <SignUpBanner title="Make transactions with your payments with Clarity Global Inc safely!" />
      <Faq />
      <KnowMore />
    </main>
  );
}
