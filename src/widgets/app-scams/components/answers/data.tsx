import Link from 'next/link';

export const data = [
  {
    title: 'What is an APP Scam?',
    answer: (
      <p>
        An APP (Authorised Push Payment) scam, also known as a bank transfer
        scam, occurs when an individual or organization is deceived into
        transferring money to a fraudster’s account. The fraudster typically
        impersonates a trusted party, such as a vendor, supplier, or even a
        family member or friend. The scam often begins with contact via email,
        phone, or text, where the fraudster provides false information, such as
        fake invoices or payment requests. Victims are urged to make payments
        under the pretense of urgency or other time-sensitive circumstances. To
        manipulate the victim, the fraudster may use tactics like creating a
        false sense of urgency, threatening legal action or penalties, or
        offering fake assurances of security or legitimacy. Once the payment is
        made, the fraudster quickly withdraws the funds, making it difficult for
        the victim to recover their money.
      </p>
    ),
  },
  {
    title:
      'Can I submit a reimbursement claim to you if I have been the victim of an APP Scam?',
    answer: (
      <>
        <p>
          If you have been the victim of an APP Scam from 7 October 2024, you
          may be able to submit a reimbursement claim to us if the following has
          occurred:
        </p>
        <ul>
          <li>you are a consumer or micro-enterprisey;</li>
          <li>
            “Consumer” stands for an individual who, in contracts for payment
            services to which the Electronic Money Regulations 2011 and Payment
            Services Regulations 2017 apply, is acting for purposes other than a
            trade, business or profession
          </li>
          <li>
            “micro-enterprise” stands for an enterprise that employs fewer than
            10 persons and whose annual turnover and/or annual balance sheet
            total does not exceed €2 million (or equivalent)
          </li>
          <li>
            you are a customer of Clarity Global Inc. and hold an account with
            us;
          </li>
          <li>
            the payment transaction was authorised by you from your account held
            with us to a third party in the UK;
          </li>
          <li>
            the payment transaction was authorised on 7 October 2024 or later;
          </li>
          <li>
            the third party account that the payment was sent to is not
            controlled by you;
          </li>
          <li>
            the payment was sent through the Faster Payments System or CHAPS;
          </li>
          <li>
            the payment was sent to an unintended recipient that you were
            deceived into transferring to, or it was sent to the recipient after
            being deceived as to the purpose of the transfer; and
          </li>
          <li>
            the payment transaction was authorised within 13 months of the date
            you are making a claim.
          </li>
        </ul>
        <p>
          If your claim meets the requirements set out above and no exceptions
          under the APP Scam Reimbursement Rules apply, then the final
          reimbursable amount (as determined by our investigation) will be paid
          to you within five (5) business days of receiving the claim (unless we
          are permitted to extend this timeframe under the APP Scam
          Reimbursement Rules). Please note that an excess of up to £100 will be
          applied to an APP Scam claim if you are not a vulnerable customer.
          This amount will be deducted from the amount reimbursed to you.
        </p>
      </>
    ),
  },
  {
    title: 'Can my reimbursement claim be rejected?',
    answer: (
      <>
        <p>Your APP Scam claim may be rejected in such cases:</p>
        <ul>
          <li>
            if it did not meet the requirements set out above in{' '}
            <span>
              ‘Can I submit a reimbursement claim to you if I have been the
              victim of an APP Scam?’
            </span>
          </li>
          <li>for any amount claimed in excess of £85,000;</li>
          <li>
            where payments are sent or received by credit unions, municipal
            banks and national savings banks;
          </li>
          <li>
            if the consumer standard of caution exception applies (unless you
            are considered a vulnerable customer) – please see below section
            <span>‘What is the consumer standard of caution exception?’</span>;
          </li>
          <li>
            if the amount claimed is the subject of a civil dispute or other
            civil legal action;
          </li>
          <li>
            if you have acted fraudulently, such as by committing first party
            fraud;
          </li>
          <li>
            if the APP Scam claim has been submitted fraudulently or
            dishonestly; or
          </li>
          <li>
            if otherwise required by applicable laws, including the APP Scam
            Reimbursement Rules set out by the PSR, Pay.UK and any other
            relevant regulatory authorities (as they may be amended from time to
            time).
          </li>
        </ul>
        <p>
          Please note that the above list is not exhaustive, and there may be
          other reasons why your APP Scam claim may not be approved. Each claim
          is assessed individually based on the applicable APP Scam regulations,
          and approval will only be granted if all regulatory requirements are
          met.
        </p>
      </>
    ),
  },
  {
    title: 'What is the consumer standard of caution exception?',
    answer: (
      <>
        <p>
          The Consumer Standard of Caution outlines the responsibilities
          customers are expected to follow. If a customer fails to meet these
          requirements due to gross negligence, their APP Scam reimbursement
          claim may be denied by the payment service provider under this
          exception.
        </p>
        <p>Customers are expected to:</p>
        <ul>
          <li>
            Pay attention to warnings or advice from their payment service
            provider or relevant authorities (such as the police);
          </li>
          <li>
            Report the scam to their payment service provider as soon as they
            become aware or suspect they’ve been scammed;
          </li>
          <li>
            Provide necessary information to their payment service provider to
            assist in evaluating the claim;
          </li>
          <li>
            Report the scam to the police, or allow the payment service provider
            to do so if needed.
          </li>
        </ul>
        <p>
          This exception does not apply if the customer was vulnerable at the
          time the transaction occurred.
        </p>
      </>
    ),
  },
  {
    title: 'How do I make an APP Scam claim?',
    answer: (
      <p>
        Starting from 7 October 2024, customers with eligible APP Scam claims
        (i.e., claims that meet all the requirements outlined above) will be
        able to complete an online claim form. Please note that to investigate
        an APP Scam claim, we may need to share personal information, such as
        your name and account details, with the receiving payment service
        provider. To submit an APP Scam reimbursement claim to Clarity Global
        Inc, please use this online form:{' '}
        <Link href="/claim-submission">Link</Link> If you are dissatisfied with
        the outcome of your APP Scam claim, you can follow our existing
        complaints process and submit your complaint via{' '}
        <Link href="mailto:dispute@clarityglobalinc.com">
          dispute@clarityglobalinc.com
        </Link>{' '}
        or phone number <Link href="tel:+17788193278">+17788193278</Link> during
        our office hours 8.00-17.00 CET, Monday-Friday.
      </p>
    ),
  },
  {
    title: 'How can I protect myself against APP Scams?',
    answer: (
      <>
        <p>
          To help protect yourself from APP Scams, we recommend taking the
          following proactive steps:
        </p>
        <ul>
          <li>
            Be cautious of unsolicited offers, such as investment opportunities
            that seem too good to be true or unexpected payment requests. Always
            research the company or individual and verify their identity by
            contacting them through official contact details.
          </li>
          <li>
            If you receive an unexpected call or message from an organization,
            confirm its authenticity by reaching out directly using the
            organization’s official contact information.
          </li>
          <li>
            If someone is pressuring you to make a payment urgently, take time
            to think it over before authorizing any transfers.
          </li>
          <li>
            Report suspected scams to the appropriate national authorities as
            soon as possible. Additional resources can be found at Stop Scams
            UK.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'What other types of fraud should I be aware of?',
    answer: (
      <>
        <h6>Cyber Fraud</h6>
        <p>
          Cyber fraud involves fraudulent activity conducted online, using the
          internet or technology to deceive individuals and organizations into
          providing sensitive information. This includes phishing scams,
          identity theft, hacking, and malware attacks. Cyber fraud can be
          perpetrated by individuals or organized groups targeting entities with
          weak security defenses. Common examples include phishing emails, fake
          websites, and ransomware attacks, which can lead to financial losses,
          reputational damage, and legal implications. To prevent cyber fraud,
          keep software up to date, use strong and unique passwords, enable
          two-factor authentication, and be cautious of suspicious emails and
          messages.
        </p>
        <h6>Account Takeover</h6>
        <p>
          Account takeover occurs when criminals gain unauthorized access to a
          customer’s account, often through phishing, social engineering, or
          hacking. They trick the account holder into providing sensitive
          information, allowing them to steal funds, make unauthorized
          transactions, or alter account details to lock the legitimate owner
          out. This can result in substantial financial losses. Preventive
          measures include implementing strong security protocols like
          multi-factor authentication, monitoring for suspicious login activity,
          educating customers on security practices, and having a response plan
          in place to notify affected customers and law enforcement.
        </p>
        <h6>CEO Email Fraud</h6>
        <p>
          CEO email fraud, also known as business email compromise, involves
          criminals impersonating a CEO or other high-ranking executive to
          deceive employees or business partners into transferring funds or
          providing sensitive information. This type of fraud can lead to
          significant financial losses and damage to an organization’s
          reputation.
        </p>
      </>
    ),
  },
];
