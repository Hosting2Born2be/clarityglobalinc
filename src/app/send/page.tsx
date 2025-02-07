import { Faq, Reviews } from '@/widgets/common/components';
import {
  ChangeTheWay,
  Header,
  KnowMore,
  PaymentSteps,
  SendMoneySteps,
  WhyChoose,
} from '@/widgets/send/components';

export default function Send() {
  return (
    <main>
      <Header />
      <PaymentSteps />
      <WhyChoose />
      <SendMoneySteps />
      <Reviews />
      <ChangeTheWay />
      <Faq />
      <KnowMore />
    </main>
  );
}
