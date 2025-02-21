'use server';

import axios from 'axios';

import { Header, PrivacyList } from '@/widgets/privacy-policy/components';

export default async function PrivacyPolicy() {
  const res = await axios.get('http://localhost:3000/api/policies/1?depth=1');

  return (
    <main>
      <Header />
      <PrivacyList data={res.data.content.root.children} />
    </main>
  );
}
