'use server';

import axios from 'axios';

import {
  PrivacyList,
  PrivacyPolicyTemplate,
} from '@/widgets/privacy-policy/components';

export default async function PrivacyPolicy() {
  try {
    const res = await axios.get(`${process.env.SERVER_URL}/policies/1`);
    return (
      <PrivacyPolicyTemplate>
        <PrivacyList data={res.data.content.root.children} />
      </PrivacyPolicyTemplate>
    );
  } catch (err) {
    console.error(err);

    return (
      <PrivacyPolicyTemplate>
        <p style={{ margin: '50px 165px' }}>No content</p>
      </PrivacyPolicyTemplate>
    );
  }
}
