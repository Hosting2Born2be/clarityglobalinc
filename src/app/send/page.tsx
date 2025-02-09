import {
  Faq,
  HeaderWithGadget,
  MoneySteps,
  Reviews,
  SignUpBanner,
  WhyChoose,
} from '@/widgets/common/components';
import { KnowMore, SendMoneySteps } from '@/widgets/send/components';

const paymentSteps = [
  {
    title: 'Sign up for your account',
    description:
      'First, register. Then log in to your account and enter your card or bank details.',
  },
  {
    title: 'Get your account approved',
    description:
      'Submit all the required documents according to the KYC process to start enjoying Clarity Global services.',
  },
  {
    title: 'Send money',
    description:
      'Log into your account and start the process of transferring payments.',
  },
];

export default function Send() {
  return (
    <main>
      <HeaderWithGadget />
      <MoneySteps
        title="To send payment, follow three simple steps:"
        steps={paymentSteps}
      />
      <WhyChoose />
      <SendMoneySteps />
      <Reviews />
      <SignUpBanner title="Change the way you think about money transfers with Clarity Global!" />
      <Faq />
      <KnowMore />
    </main>
  );
}
