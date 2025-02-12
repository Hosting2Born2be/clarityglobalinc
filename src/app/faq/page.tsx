import { Faq as FaqList } from '@/widgets/common/components';
import { ContactUs, Header } from '@/widgets/faq/components';

export default function Faq() {
  return (
    <main>
      <Header />
      <FaqList extended showLabel={false} />
      <ContactUs />
    </main>
  );
}
