'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  Facebook,
  Linkedin,
  Telegram,
  Viber,
  Youtube,
} from '@/shared/ui/icons';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.css';
import { Navigation } from './navigation';

export function Footer() {
  return (
    <footer className={st.layout}>
      <section className={st.companyInfoLayout}>
        <div className={st.logo}>
          <Link href="https://clarityglobalinc.com/" className={st.logoLink}>
            <Image src="/full-logo.svg" alt="logo" width={183} height={33} />
          </Link>
          <Text size="xs" color="grey" className={st.companyText}>
            Сlarity Global Inc is owned, operated, and managed by Clarity Global
            Inc, a Canadian company registered with FINTRAC, Registration #
            M22927420.
          </Text>
        </div>
        <div className={st.socialsLayout}>
          <div className={st.socialGroups}>
            <Link
              href="https://www.facebook.com/clarityglobalinc"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link href="https://wa.me/38669403456" target="_blank">
              <Viber />
            </Link>
            <Link href="https://t.me/ClarityGlobalSupport" target="_blank">
              <Telegram />
            </Link>
            <Link href="https://www.youtube.com/@clarityglobal" target="_blank">
              <Youtube />
            </Link>
          </div>
          <div className={st.linkedinGroup}>
            <Link
              className={st.linkedin}
              href="https://www.linkedin.com/company/clarityglobalinc/"
              target="_blank"
            >
              <Linkedin />
              <div>
                <Text size="xs" color="grey" weight={700}>
                  Clarity Global Inc
                </Text>
                <Text size="xs" color="grey">
                  Company Profile
                </Text>
              </div>
            </Link>
            <Link className={st.linkedin} href="#" target="_blank">
              <Linkedin />
              <div>
                <Text size="xs" color="grey" weight={700}>
                  Svitlana Koval
                </Text>
                <Text size="xs" color="grey">
                  Chief Accountant
                </Text>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Divider className={st.divider} />
      <section className={st.menu}>
        <div className={st.column}>
          <Text size="base" color="white" weight={600}>
            Office
          </Text>
          <Navigation href="mailto:info@clarityglobalinc.com">
            info@clarityglobalinc.com
          </Navigation>
          <Navigation href="tel:+14378873911">+14378873911</Navigation>
          <Text size="sm" color="grey" weight={300} className={st.address}>
            Registered address: 125-9th Avenue Southeast, Suite 2000, Calgary,
            Alberta, T2P0P6
          </Text>
          <Text size="sm" color="grey" weight={300} className={st.address}>
            Operational address: 3080 Yonge Street, Suite 6060, Toronto, Ontario
            M4N 3N, Canada
          </Text>
        </div>
        <div className={st.navMenu}>
          <div className={st.column}>
            <Text size="base" color="white" weight={600}>
              Menu
            </Text>
            <Navigation href="/">Home</Navigation>
            <Navigation href="/send">Send</Navigation>
            <Navigation href="/receive">Receive</Navigation>
            <Navigation href="/unique-offer">Unique offer</Navigation>
            <Navigation href="/about-us">About us</Navigation>
            <Navigation href="/whistleblower">Whistleblower</Navigation>
            <Navigation
              href="/customer-acceptance-guidelines"
              className={st.guidelinesMobile}
            >
              Acceptance Guidelines
            </Navigation>
          </div>
          <div className={st.column}>
            <br />
            <Navigation href="/acceptance-guidelines" className={st.guidelines}>
              Acceptance Guidelines
            </Navigation>
            <Navigation href="/referral-partner-program">
              Referral partner program
            </Navigation>
            <Navigation href="/virtual-cards-services">
              Virtual cards services
            </Navigation>
            <Navigation href="/newsletter">Newsletter</Navigation>
            <Navigation href="/faq">FAQ</Navigation>
            <Navigation href="/help">Help</Navigation>
            <Navigation href="/contact-us">Contact us</Navigation>
          </div>
        </div>
        <div className={st.column}>
          <Text size="base" color="white" weight={600}>
            Legal
          </Text>
          <Navigation href="/terms-of-use">Terms of Use</Navigation>
          <Navigation href="/privacy-policy">Privacy Policy</Navigation>
          <Navigation href="/privacy-notice">Privacy Notice</Navigation>
          <Navigation href="/cookie-policy">Cookie Policy</Navigation>
          <Navigation href="/anti-slavery-policy">
            Anti-Slavery Policy
          </Navigation>
          <Navigation href="/approved-communication-channels">
            Approved Communication Channels
          </Navigation>
          <Navigation href="/app-scams-reimbursement">
            APP Scams Reimbursement
          </Navigation>
        </div>
      </section>
      <Divider className={st.divider} />
      <Text
        size="sm"
        color="grey"
        className={st.rights}
      >{`All Rights Reserved. © ${new Date().getFullYear()}`}</Text>
    </footer>
  );
}
