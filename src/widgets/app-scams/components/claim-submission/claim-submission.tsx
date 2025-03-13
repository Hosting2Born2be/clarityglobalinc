'use client';

import { ReactNode } from 'react';

import { Link } from '@/shared/ui/kit/link';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './claim-submission.module.css';

const steps = [
  'The Payment Systems Regulator (PSR) has introduced new reimbursement rules for eligible victims of authorised push payment scams (APP Scam Reimbursement Rules), which have taken effect on 7 October 2024.',
  'Under these rules, if you are a consumer or micro-enterprise, or charity and have fallen victim to an authorised push payment scam from 7 October onwards, you may be eligible to submit a reimbursement claim to your payment service provider for up to £85,000.',
  `To submit an APP Scam reimbursement claim to Clarity Global Inc., please use this online form: ${(<Link href="#">here</Link>)}. Before completing the form, please ensure you have reviewed the information below, as only claims that meet all regulatory requirements will be considered for approval.`,
  'Please see the information below for details on eligibility criteria, circumstances in which a claim may be denied, and instructions for submitting a claim to Clarity Global Inc.',
];

export function ClaimSubmission() {
  return (
    <div className={st.container}>
      <section className={st.layout}>
        <Title className={st.title}>Claim Submission</Title>
        <section className={st.steps}>
          {steps.map(step => (
            <Step key={step}>{step}</Step>
          ))}
        </section>
      </section>
    </div>
  );
}

function Step({ children }: { children: ReactNode }) {
  return (
    <article className={st.stepLayout}>
      <div className={st.dot} />
      <Text size="lg" color="black" weight={400}>
        {children}
      </Text>
    </article>
  );
}
