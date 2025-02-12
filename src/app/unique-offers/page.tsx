import {
  CanCover,
  DevelopOffer,
  Header,
  MoneyServices,
} from '@/widgets/unique-offers/components';

export default function UniqueOffer() {
  return (
    <main>
      <Header />
      <DevelopOffer />
      <CanCover />
      <MoneyServices />
    </main>
  );
}
