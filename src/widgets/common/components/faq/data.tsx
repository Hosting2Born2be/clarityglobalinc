import { List } from '@/shared/ui/components/list';
import { Link } from '@/shared/ui/kit/link';
import { Text } from '@/shared/ui/kit/text';

export const faqData = [
  {
    question: 'How do I make an international bank transfer?',
    answer: (
      <>
        <Text size="base">
          It’s so easy to make international bank transfers using our website.
        </Text>
        <Text size="base">Just follow these simple steps:</Text>
        <div>
          <Text size="base">
            1) Login or sign up for a Clarity Global Inc account (it takes just
            2 minutes to create an account).
          </Text>
          <Text size="base">
            2) Select the country and amount you want to send.
          </Text>
          <Text size="base">
            3) Enter your recipient’s details (name, address, phone number) and
            bank details (bank name, IBAN, and SWIFT code).
          </Text>
          <Text size="base">4) Pay for your transaction!</Text>
        </div>
      </>
    ),
  },
  {
    question: 'Is there a limit on the maximum amount that I can send?',
    answer: (
      <Text size="base">
        The maximum amount you can send via bank transfer depends on the country
        you’re sending to, the payment option you choose, and our local
        partner’s transaction limits.
      </Text>
    ),
  },
  {
    question: 'How does Clarity Global Inc protect my privacy?',
    answer: (
      <Text size="base">
        The security and privacy of our customers are of the utmost importance
        to Clarity Global. You can read more about our privacy policy on the
        policy page.
      </Text>
    ),
  },
  {
    question: 'How long will my transfer take?',
    answer: (
      <Text size="base">
        The amount of time a transfer takes can depend on the currency,
        destination, and receiving bank. We are doing our best to get your money
        where it needs to be as quickly as possible!
      </Text>
    ),
  },
  {
    question: 'What countries can I send money to with Clarity Global Inc?',
    answer: (
      <Text size="base">
        You can send money to over 180 countries worldwide with Clarity Global
        Inc.
      </Text>
    ),
  },
  {
    question: 'What are the benefits of using Clarity Global Inc over my bank?',
    answer: (
      <Text size="base">
        You’ll avoid paying high transfer fees and have the constant support of
        our dedicated support team. With our highly competitive exchange rates
        and fast, free transfers, you can save a considerable amount on your
        international money transfers.
      </Text>
    ),
  },
];

export const extendedFaqData = [
  ...faqData,
  {
    question: 'How is Clarity Global Inc. regulated?',
    answer: (
      <Text size="base">
        Clarity Global Inc. is regulated as an authorized Money Services
        Business (MSB) by the Financial Transactions and Reports Analysis Centre
        of Canada (FINTRAC). Registration # M22927420. ^
      </Text>
    ),
  },
  {
    question: 'How does Clarity Global Inc. secure my money?',
    answer: (
      <Text size="base">
        While in your Clarity Global Inc. account, your funds are held in an
        authorized bank in the EEA (European Economic Area). They are protected
        through a process known as safeguarding, wherein Clarity Global Inc.
        segregates 100% of client funds from the company’s operating accounts.
        This is in line with Canadian regulations and the highest security
        standards in the banking industry.
      </Text>
    ),
  },
  {
    question: 'How long do transfers take?',
    answer: (
      <>
        <Text size="base">
          Depending on the type of transfer, it can take between 1 to 3 business
          days.
        </Text>
        <Text size="base">
          If you have initiated a transfer and more than three business days
          have passed, please contact us with the payment confirmation, and we
          will look into it for you.
        </Text>
      </>
    ),
  },
  {
    question:
      'What is the difference between local and international transfers?',
    answer: (
      <>
        <Text size="base">
          Both transactions transmit electronic instructions over a secure
          network to make cash available in a recipient&#39;s account. The
          difference is in the network they use and the security verification
          required, which can affect the cost and transfer time.
        </Text>
        <Text size="base">
          Domestic wire transfers in the US use either the CHIPS or the Fedwire
          systems. In the EU, local transactions use the SEPA network. In the
          UK, local payments use the CHAPS system.
        </Text>
        <Text size="base">
          Most international wire transfers are communicated via SWIFT, a
          network of over 10,000 banks and financial institutions spread over
          200 countries.
        </Text>
      </>
    ),
  },
  {
    question: 'What should I do if I have not received an activation link?',
    answer: (
      <Text size="base">
        Please check your spam folder. If you still haven&#39;t received the
        activation email, please email us at{' '}
        <Link href="mailto:support@clarityglobalinc.com">
          support@clarityglobalinc.com
        </Link>
        , and our team will assist you.
      </Text>
    ),
  },
  {
    question: 'What are the permitted industries?',
    answer: (
      <>
        <Text size="base">
          Clarity Global Inc. accepts business accounts in numerous industries.
        </Text>
        <Text size="base">
          During the onboarding process, you will be asked to provide details
          related to your industry, which will give us the necessary information
          to determine your eligibility.
        </Text>
        <Text size="base">
          You may also contact our sales team with any questions regarding the
          requirements for your industry or refer to the respective section on
          our website:
          <Link href="https://clarityglobalinc.com/customer-acceptance-guidlines">
            https://clarityglobalinc.com/customer-acceptance-guidlines
          </Link>
        </Text>
      </>
    ),
  },
  {
    question: 'In what cases may my account with Clarity Global be closed?',
    answer: (
      <>
        <Text size="base">
          Your account with Clarity Global can be terminated under the following
          circumstances:
        </Text>
        <Text size="base">
          1. Voluntary Termination by You. You can terminate your account at any
          time by notifying Clarity Global via email.
        </Text>
        <Text size="base">2. Involuntary Termination by Clarity Global:</Text>
        <List
          values={[
            "Clarity Global reserves the right to terminate your account with one month's prior notice sent by email.",
            'Immediate suspension or termination may occur if there are reasonable beliefs of illegal activities, non-compliance with laws, fraudulent behavior, identity verification issues, false information, legal disputes, or if required by applicable legislation.',
            'Inactivity (no transactions) for at least 5 months may result in termination, with a one-month notice provided.',
          ]}
        />
        <Text size="base">
          In summary, your account can be terminated voluntarily by you with a
          notice period or involuntarily by Clarity Global for various reasons,
          including legal compliance, fraudulent activities, identity
          verification issues, legal disputes, or prolonged inactivity.
          Termination procedures involve processing outstanding transactions and
          returning the remaining balance minus applicable fees.
        </Text>
      </>
    ),
  },
  {
    question:
      'How can I contact Clarity Global team if my transfer is delayed?',
    answer: (
      <Text size="base">
        To contact our team regarding a delayed transfer, please email
        <Link href="mailto:support@clarityglobalinc.com">
          support@clarityglobalinc.com
        </Link>{' '}
        or reach out through our live chat support, which is available on our
        website at{' '}
        <Link href="https://clarityglobalinc.com/">clarityglobalinc.com</Link>.
        We appreciate your patience and are committed to assisting you promptly.
      </Text>
    ),
  },
  {
    question: 'What documents do I need to provide for my transactions?',
    answer: (
      <>
        <Text size="base">
          Documents supporting the legitimacy and nature of the transaction,
          like invoice and contract copy, may be required.
        </Text>
        <Text size="base">
          Also, depending on the nature of the transaction, our partner banks
          may additionally request:
        </Text>
        <List
          values={[
            'Proof of Identity: Provide company identification documents.',
            'Passport of UBO/Director: Provide the passport of the Ultimate Beneficial Owner (UBO) or Director.',
            'Source of Funds (SOF): Include bank statement, loan agreement, sale of an asset documentation, etc.',
          ]}
        />
        <Text size="base">
          Please note that all documents are requested to facilitate a smooth
          compliance process.
        </Text>
      </>
    ),
  },
];
