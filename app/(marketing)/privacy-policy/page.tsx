import React from 'react';
import { TitleGradient } from '@/features/marketing/component/TitleGradient';
import Link from 'next/link';
import { CtaSection } from '@/features/marketing/component/CTASection';

export default function TermPage() {
  return (
      <main className='overflow-hidden xl:pt-20 pt-16 bg-neutral-100'>
        <section className="py-10 px-5 flex lg:justify-center md:px-10 md:py-20">
          <div className='flex flex-col justify-between items-start lg:w-[1200px]'>
            <TitleGradient className='from-green-100 via-orange-300 to-green-100'>
              Privacy Policy
            </TitleGradient>

            <h1 className="text-title-sm md:text-title-md lg:text-title-xl mt-9">
              Privacy Policy
            </h1>

            <p className="text-neutral-500 mt-5">
              Last updated: {' '}
              <span className='font-medium text-neutral-900'> July 9, 2025</span>
            </p>
          </div>
        </section>

        <section className="py-20 px-5 bg-neutral-50 md:px-10 flex flex-col justify-center items-center">
          <div className="max-w-[1200px] font-medium text-body-xl grid gap-10 leading-6">
            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Introduction
              </h1>
              <div>
                <p>
                  Leadoc ("we", "us", or "the platform") is committed to protecting the privacy of individuals who use
                  our services, including our website and associated features available {' '}
                  <span className="text-purple-600 underline">
                    <Link href='https://www.leadoc.io'>leadoc.io</Link>
                  </span>. This Privacy
                  Policy ("Policy") explains how we collect, use, store, and protect personal information and repository
                  data that you voluntarily provide or authorize when using our platform.
                  <br/> <br/>
                  Access to your GitHub repositories is granted only with your explicit authorization via GitHub OAuth,
                  and the data retrieved is limited to what is necessary for analyzing your repository structure and
                  generating AI-powered README documentation. As part of our efforts to improve system performance and
                  AI accuracy, the repository data you authorize may also be used to train and enhance our internal AI
                  models. Such training is conducted automatically, without human review, and your data will never be
                  published, sold, or shared with third parties. We do not access or use your data beyond the scope
                  required to deliver our core services.
                  <br/> <br/>
                  By accessing or using the Leadoc platform, you acknowledge that you have read, understood, and agreed
                  to the terms of this Policy, including the permitted use of data for AI training.
                </p>
                <br/>
                <p className="font-semibold">
                  IF YOU DO NOT AGREE WITH THIS POLICY, IN WHOLE OR IN PART, PLEASE DO NOT USE THE PLATFORM.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Information We Collect
              </h1>
              <div>
                <p>
                  Leadoc collects and processes only the data necessary to operate the platform securely, effectively,
                  and to continuously improve our services. This information is collected either through explicit
                  authorization or through your interaction with the platform, and is categorized as follows:
                </p>

                <br/>

                <p>
                  <span className="font-semibold text-xl">
                    a. Information from GitHub (via OAuth)
                  </span>
                  <br/>
                  When you connect your GitHub account to Leadoc, we request authorization via GitHub OAuth to access
                  the following:
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    GitHub username and account ID
                  </li>
                  <li>
                    Email address (if available and not hidden by your GitHub settings)
                  </li>
                  <li>
                    List of repositories you own or explicitly grant access to
                  </li>
                  <li>
                    Repository structure, configuration files, programming languages, and relevant content
                  </li>
                </ul>
                <p>This access is used solely to enable the core functionality of Leadoc—automated README documentation
                  generation using AI.</p>

                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    b. User Activity Data
                  </span>
                  <br/>
                  We collect technical and usage information to support performance monitoring, troubleshooting, and
                  service optimization, including but not limited to:
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    Feature usage metrics (e.g., number of sections generated)
                  </li>
                  <li>
                    Timestamps and session activity
                  </li>
                  <li>
                    IP address, device type, operating system, and browser
                  </li>
                  <li>
                    Error logs and diagnostic data
                  </li>
                </ul>

                <br/>

                <p>
                  <span className="font-semibold text-xl">
                    c. Payment Data
                  </span>
                  <br/>
                  All credit purchases on Leadoc are securely processed via DOKU, a PCI-compliant third-party payment
                  provider. Leadoc does not store credit card information or any sensitive payment data on our servers.
                  <br/>
                  Payment-related data is handled directly by DOKU and subject to DOKU’s own {' '}
                  <span className="text-purple-600 underline">
                    <Link href='privacy-policy'>Privacy Policy,</Link>
                  </span> which we recommend you review before completing any transactions.
                </p>

                <br/>

                <p>
                  <span className="font-semibold text-xl">
                    d. AI Training Data
                  </span>
                  <br/>
                  Repository content accessed through GitHub OAuth may also be used to train and improve Leadoc’s
                  internal artificial intelligence models. This process is fully automated, conducted without human
                  intervention, and the data will never be shared, sold, or published for third-party use.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Use of the Platform
              </h1>
              <div>
                <p>
                  Leadoc uses the data we collect for specific, limited purposes that align with the core functions of
                  the platform and the expectations set forth in this Policy. We process your data only as necessary to
                  deliver our services, operate the platform, and improve your experience. Specifically, your data may
                  be used for the following purposes:
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    a. Service Delivery
                  </span>
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    To access your GitHub repositories upon your authorization and analyze project structure
                  </li>
                  <li>
                    To generate README documentation using our AI-powered engine
                  </li>
                  <li>
                    To track usage of features and credit balance
                  </li>
                  <li>
                    To allow you to export, edit, and manage the documentation generated through the platform
                  </li>
                </ul>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    b. Account and Access Management
                  </span>
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    To authenticate your identity via GitHub OAuth
                  </li>
                  <li>
                    To manage your user account and preferences
                  </li>
                  <li>
                    To prevent unauthorized access or misuse of your account or repository data
                  </li>
                </ul>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    c. Payment Processing
                  </span>
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    To process credit purchases securely through DOKU
                  </li>
                  <li>
                    To provide you with transaction confirmations, receipts, and billing support
                  </li>
                  <li>
                    To maintain accurate records for financial reporting and audit compliance
                  </li>
                </ul>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    d. System Improvement and AI Training
                  </span>
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    To monitor system performance, detect errors, and improve platform reliability
                  </li>
                  <li>
                    To use repository content for automated training of internal AI models, thereby enhancing
                    documentation quality and relevance over time
                  </li>
                  <li>
                    To develop new features and optimize existing tools based on user behavior patterns and content
                    trends
                  </li>
                </ul>
                <br/>

                <p className="font-semibold">
                  WE DO NOT USE YOUR DATA FOR ADVERTISING PURPOSES.
                </p>
                <p className="font-semibold">
                  WE DO NOT SHARE YOUR DATA WITH THIRD PARTIES FOR MARKETING PURPOSES.
                </p>
                <p className="font-semibold">
                  WE DO NOT SELL YOUR PERSONAL INFORMATION OR REPOSITORY CONTENT.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Data Sharing and Disclosure
              </h1>
              <div>
                <p>
                  Leadoc treats your personal and repository data with a high level of confidentiality. We do not sell,
                  rent, or share your data with external parties for marketing or commercial gain. However, in certain
                  cases, we may disclose your information under strict conditions:
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    a. Service Providers
                  </span>
                  <br/>
                  We may share limited data with trusted third-party vendors (such as DOKU for payment processing)
                  solely to perform services on our behalf. These parties are contractually obligated to process your
                  data only for the purpose of providing such services and to comply with applicable data protection
                  laws.
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    b. Legal Compliance
                  </span>
                  <br/>
                  We may disclose your information if required to do so by law, regulation, legal process, or a valid
                  governmental request. This includes obligations related to fraud investigation, enforcement of legal
                  rights, or compliance with applicable financial regulations.
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    c. Business Transfers
                  </span>
                  <br/>
                  In the event of a merger, acquisition, or sale of all or a portion of our assets, your data may be
                  transferred as part of the transaction. You will be notified via email or through the platform of any
                  change in data ownership or control.
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    d. Internal Use
                  </span>
                  <br/>
                  Leadoc’s team may access anonymized or non-personally identifiable data internally for the purposes of
                  improving platform performance, ensuring security, and training AI models. Access to sensitive data is
                  restricted to authorized personnel only.
                </p>
                <br/>

                <p className="font-semibold">
                  WE DO NOT DISCLOSE YOUR PERSONAL OR REPOSITORY DATA TO ANY THIRD PARTIES FOR UNRELATED PURPOSES.
                </p>
                <p className="font-semibold">
                  ALL DATA SHARING IS LIMITED TO WHAT IS NECESSARY TO OPERATE THE PLATFORM AND MEET LEGAL OBLIGATIONS.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Data Retention
              </h1>
              <div>
                <p>
                  Leadoc retains your data only for as long as necessary to provide our services, fulfill legal
                  obligations, and maintain the operational integrity of the platform. Our data retention policy
                  includes the following provisions:
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    a. Active User Data
                  </span>
                  <br/>
                  As long as your account remains active, we retain all relevant data necessary to deliver platform
                  functionality, including account information, usage history, and authorized repository data.
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    b. Data After Account Deletion
                  </span>
                  <br/>
                  If you permanently delete your account, all associated data—including authorized repository data, user
                  preferences, and usage history—will be permanently deleted from our systems within a maximum of seven
                  (7) calendar days from the date of confirmed deletion.
                </p>
                <br/>
                <p>
                  <span className="font-semibold text-xl">
                    c. Retention for Legal Compliance
                  </span>
                  <br/>
                  We may retain certain data for a longer period if required by applicable laws, including for:
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    Investigations into suspected fraud or misuse
                  </li>
                  <li>
                    Compliance with accounting or tax reporting obligations
                  </li>
                  <li>
                    Resolution of unresolved legal claims or disputes
                  </li>
                  <li>
                    To allow you to export, edit, and manage the documentation generated through the platform
                  </li>
                </ul>
                <p>
                  Any data retained for legal purposes will be isolated from active systems and accessible only by
                  authorized personnel.
                </p>
                <br/>
                <p className="font-semibold">
                  ANY DATA NO LONGER REQUIRED WILL BE SAFELY DELETED IN ACCORDANCE WITH INDUSTRY-STANDARD PRIVACY
                  PROTECTION PRACTICES.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Data Retention
              </h1>
              <div>
                <p>
                  Leadoc may update this Privacy Policy from time to time to reflect changes in our practices, services,
                  or applicable legal obligations. If we make material changes, we will notify you via your registered
                  email or through an in-app notification. Each new version of this Policy will include the “Last
                  Updated” date at the top of the document.
                </p>
                <br/>
                <p className="font-semibold">
                  BY CONTINUING TO USE THE PLATFORM AFTER CHANGES HAVE BEEN IMPLEMENTED, YOU ARE DEEMED TO HAVE ACCEPTED
                  THE REVISED POLICY.
                </p>
                <br/>
                <p>
                  We encourage you to review this Policy periodically to stay informed about how we collect, use, and
                  protect your information.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Contact
              </h1>
              <div>
                <p>
                  If you have any questions, feedback, or legal inquiries related to these Terms or your use of the
                  Leadoc platform, please contact us through our official communication channels:
                  <br/> <br/>
                  Email: <span
                    className="text-purple-600 underline">
                    <Link href='mailto:team@leadoc.io'>team@leadoc.io</Link>
                  </span>
                </p>
              </div>
            </section>
          </div>
        </section>

        <CtaSection/>
      </main>
  );
}
