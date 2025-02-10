import {
  Faq,
  HeaderWithGadget,
  HowItWork,
  MoneySteps,
  Reviews,
  SignUpBanner,
  WhyChoose,
} from '@/widgets/common/components';
import { KnowMore } from '@/widgets/send/components';

const receiveSteps = [
  {
    title: 'Submit your documents for verification',
    description: 'Enter your account and provide all the KYC requirements.',
  },
  {
    title: 'Get your account approved and make a transfer',
    description:
      'Start processing with a transfer out right after your account is approved.',
  },
  {
    title: 'Receive money',
    description:
      'Log into your account and start the process of transferring payments.',
  },
];

export default function Receive() {
  return (
    <main>
      <HeaderWithGadget type="ipad" />
      <MoneySteps
        title="To receive money, follow three simple steps:"
        steps={receiveSteps}
      />
      <WhyChoose />
      <HowItWork />
      <Reviews />
      <SignUpBanner title="Receive money in a way that suits you with Clarity Global Inc!" />
      <Faq />
      <KnowMore />
    </main>
  );
}
