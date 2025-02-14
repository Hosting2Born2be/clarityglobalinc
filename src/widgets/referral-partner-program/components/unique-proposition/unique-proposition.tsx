'use client';

import { WhyChoose } from '@/widgets/common/components';

const propositions = [
  {
    title: 'Tailored solutions',
    description:
      "Your vision, our expertise. Tailor-made solutions that match your client's unique requirements. From wire transfers to OTC transactions, we customise every step to success.",
  },
  {
    title: 'Personalized care',
    description:
      'Your success, our priority. Beyond clients, we value our partners like no other. As a referral partner, expect dedicated support and partnership-focused engagement.',
  },
  {
    title: 'Instant transactions',
    description:
      'If you have suppliers or customers already with us, you can also open an account and transfer money immediately.',
  },
];

export function UniqueProposition() {
  return (
    <WhyChoose
      optionsView="list"
      title="Our unique value proposition:"
      options={propositions}
    />
  );
}
