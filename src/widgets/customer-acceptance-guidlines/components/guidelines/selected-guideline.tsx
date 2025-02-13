'use client';

import { Text } from '@/shared/ui/kit/text';

import { NotAcceptableCountries } from '../not-acceptable-countries';
import { ProhibitedBusinesses } from '../prohibited-businesses';
import { RestrictedBusinesses } from '../restricted-businesses';
import { RestrictedCountries } from '../restricted-countries';
import st from './guidelines.module.css';

export function SelectedGuideline({ value }: { value: string }) {
  return (
    <>
      {value === '' ? (
        <div className={st.noTabInfo}>
          <div>
            <Text size="base" weight={500} className={st.title}>
              The purpose of this document is to provide guidance concerning the
              topic of Client Acceptance:
            </Text>
            <Text size="base" weight={500}>
              1. Which Business Types Clarity Global would not accept.
            </Text>
            <Text size="base" weight={500}>
              2. Which business types can Clarity Global accept, and whether we
              classify these as High, Medium, or Low Risk.
            </Text>
            <Text size="base" weight={500}>
              3. Jurisdictions non - acceptable
            </Text>
            <Text size="base" weight={500}>
              4. Jurisdictions - acceptable
            </Text>
          </div>
          <div>
            <Text size="base" weight={500} className={st.title}>
              When determining which industries to accept for onboarding,
              Clarity Global uses various factors, in particular:
            </Text>
            <Text size="base" weight={500}>
              1. What are the Global regulations of the industry?
            </Text>
            <Text size="base" weight={500}>
              2. Which level of Risk does the industry represent?
            </Text>
            <Text size="base" weight={500}>
              3. Is working with this industry within the Company’s Risk
              appetite?
            </Text>
            <Text size="base" weight={500}>
              4. Is working with this industry within the Company’s Partners’
              Risk appetite?
            </Text>
            <Text size="base" weight={500}>
              5. In which country is the client located or incorporated?
            </Text>
            <Text size="base" weight={500}>
              6. In which countries do the company officials reside?
            </Text>
          </div>
        </div>
      ) : null}
      {value === 'Prohibited Businesses' ? <ProhibitedBusinesses /> : null}
      {value === 'Restricted Businesses' ? <RestrictedBusinesses /> : null}
      {value === 'Not Acceptable Countries' ? <NotAcceptableCountries /> : null}
      {value === 'Restricted Countries' ? <RestrictedCountries /> : null}
    </>
  );
}
