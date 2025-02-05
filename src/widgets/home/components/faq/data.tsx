import { Text } from '@/shared/ui/kit/text';

export const faqData = [
  {
    question: 'How do I make an international bank transfer?',
    answer: (
      <>
        <Text>
          It’s so easy to make international bank transfers using our website.
        </Text>
        <Text>Just follow these simple steps:</Text>
        <div>
          <Text>
            1) Login or sign up for a Clarity Global Inc account (it takes just
            2 minutes to create an account).
          </Text>
          <Text>2) Select the country and amount you want to send.</Text>
          <Text>
            3) Enter your recipient’s details (name, address, phone number) and
            bank details (bank name, IBAN, and SWIFT code).
          </Text>
          <Text>4) Pay for your transaction!</Text>
        </div>
      </>
    ),
  },
  {
    question: 'Is there a limit on the maximum amount that I can send?',
    answer: (
      <Text>
        The maximum amount you can send via bank transfer depends on the country
        you’re sending to, the payment option you choose, and our local
        partner’s transaction limits.
      </Text>
    ),
  },
  {
    question: 'How does Clarity Global Inc protect my privacy?',
    answer: (
      <Text>
        The security and privacy of our customers are of the utmost importance
        to Clarity Global. You can read more about our privacy policy on the
        policy page.
      </Text>
    ),
  },
  {
    question: 'How long will my transfer take?',
    answer: (
      <Text>
        The amount of time a transfer takes can depend on the currency,
        destination, and receiving bank. We are doing our best to get your money
        where it needs to be as quickly as possible!
      </Text>
    ),
  },
  {
    question: 'What countries can I send money to with Clarity Global Inc?',
    answer: (
      <Text>
        You can send money to over 180 countries worldwide with Clarity Global
        Inc.
      </Text>
    ),
  },
  {
    question: 'What are the benefits of using Clarity Global Inc over my bank?',
    answer: (
      <Text>
        You’ll avoid paying high transfer fees and have the constant support of
        our dedicated support team. With our highly competitive exchange rates
        and fast, free transfers, you can save a considerable amount on your
        international money transfers.
      </Text>
    ),
  },
];
