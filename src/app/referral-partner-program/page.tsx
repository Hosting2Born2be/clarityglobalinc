import { Faq, KnowMore } from '@/widgets/common/components';
import {
  BecomeOurPartner,
  ContactTeam,
  GetStarted,
  Header,
  UniqueProposition,
} from '@/widgets/referral-partner-program/components';

export default function ReferralPartnerProgram() {
  return (
    <main>
      <Header />
      <BecomeOurPartner />
      <UniqueProposition />
      <Faq />
      <KnowMore />
      <GetStarted />
      <ContactTeam />
    </main>
  );
}
