import React from 'react';
import { TitleGradient } from '@/features/marketing/component/TitleGradient';
import Link from 'next/link';
import { CtaSection } from '@/features/marketing/component/CTASection';

export default function TermPage() {
  return (
      <main className='overflow-hidden xl:pt-20 pt-16 bg-neutral-100'>
        <section className="py-10 px-5 flex justify-center md:px-10 md:py-20">
          <div className='flex flex-col justify-between items-start lg:w-[1200px]'>
            <TitleGradient className='from-green-100 via-orange-300 to-green-100'>
              Term of Service
            </TitleGradient>

            <h1 className="text-title-sm md:text-title-md lg:text-title-xl mt-9">
              Term of Service
            </h1>

            <p className="text-neutral-500 mt-5">
              Last updated:
              <span className='font-medium text-neutral-900'> July 9, 2025</span>
            </p>
          </div>
        </section>

        <section className="py-20 px-5 bg-neutral-50 md:px-10 flex flex-col justify-center items-center">
          <div className="max-w-[1200px] font-medium text-body-xl grid gap-10 leading-6">
            <section className="grid gap-6">
              <div>
                <p>
                  If you have entered into a separate written agreement with Leadoc, such as an Order Form or any other
                  specific contractual arrangement that governs your use of the product or services, that agreement will
                  take
                  precedence over the terms stated in this document. In the absence of such a separate agreement, these
                  Terms
                  of Service apply when you access or use Leadoc.
                  <br/> <br/>
                  This Agreement is a legally binding contract between Leadoc ("the Company", "we") and you, either as
                  an
                  individual or as a representative of a legal entity ("you" or "Customer"). By registering an account,
                  accessing, or using Leadoc in any form—whether via web application, API, or integrated services—you
                  agree
                  that you:
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    Have read and understood the terms of this Agreement;
                  </li>
                  <li>
                    Agree to be legally bound by all applicable terms and conditions;
                  </li>
                  <li>
                    And, if you are acting on behalf of a company or organization, you confirm that you have full
                    authority to represent and bind that entity under this Agreement.
                  </li>
                </ul>
                <br/>
                <p className="font-semibold">
                  IF YOU DO NET AGREE WITH ANY PART OF THIS AGREEMENT, YOU MAY NOT USE THE LEADOC SERVICE.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Our Services
              </h1>
              <div>
                <p>
                  Leadoc is a software-as-a-service (SaaS) platform that provides automated generation of README
                  documentation files for GitHub repositories using artificial intelligence (AI). By authorizing access
                  to
                  a GitHub repository, the platform performs automated analysis of the repository’s structure, source
                  code, configuration files, and other relevant metadata.
                  <br/> <br/>
                  The output of this process is a machine-generated README file designed to reflect the technical
                  content
                  and structure of the repository. Leadoc does not guarantee the accuracy, completeness, or suitability
                  of
                  the generated documentation and provides the output “as is,” to be reviewed and used at the customer’s
                  discretion.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Eligibility & Account
              </h1>
              <div>
                <ul className='list-disc list-inside'>
                  <li>
                    You must be at least 13 years old to use Leadoc.
                  </li>
                  <li>
                    You must have a valid and active GitHub account to access the service.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of your account credentials and all
                    activities under your account.
                  </li>
                  <li>
                    You may not use a false identity or access another person’s account without proper authorization.
                  </li>
                  <li>
                    If you are using Leadoc on behalf of an organization, you confirm that you have full legal authority
                    to represent and bind that entity to this Agreement.
                  </li>
                  <li>
                    We reserve the right to suspend or reject account registration if a violation of these terms is
                    detected.
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Use of the Platform
              </h1>
              <div>
                <p>
                  You may use Leadoc only for lawful, ethical purposes and in full compliance with this Agreement and
                  applicable laws.
                  By using the service, you agree not to:
                </p>
                <ul className='list-disc list-inside'>
                  <li>
                    Access or manipulate GitHub repositories without proper authorization, including connecting or
                    managing repositories you do not own without permission.
                  </li>
                  <li>
                    Reverse engineer, decompile, or attempt to extract any source code, system architecture, or
                    intellectual property of the Leadoc platform.
                  </li>
                  <li>
                    Overload or disrupt the system through automated scripts, bots, crawlers, scraping tools, or other
                    abusive or excessive access behaviors.
                  </li>
                  <li>
                    Misuse the AI features or credit system in a way that aims to exploit, circumvent limitations, or
                    place unreasonable burdens on the system.
                  </li>
                </ul>
                <br/>
                <p className="font-semibold">
                  WE RESERVE THE RIGHT TO SUSPEND OR TERMINATE YOUR ACCESS TO THE SERVICE, IN WHOLE OR IN PART, IF A
                  VIOLATION OF THIS SECTION IS DETECTED, WHETHER DIRECTLY OR INDIRECTLY.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Intellectual Property
              </h1>
              <div>
                <ul className='list-disc list-inside'>
                  <li>
                    You retain full ownership of your GitHub repositories and any content you upload or provide.
                  </li>
                  <li>
                    Leadoc does not claim ownership of your code or documentation.
                  </li>
                  <li>
                    You are free to use, modify, or export the documentation generated by Leadoc without restriction.
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Credit System & Payments
              </h1>
              <div>
                <ul className='list-disc list-inside'>
                  <li>
                    To use Leadoc's documentation generation features, users are required to use credits that must be
                    purchased in advance.
                  </li>
                  <li>
                    Each generation process will deduct credits based on the number of sections or features used.
                  </li>
                  <li>
                    Credits must be purchased beforehand and will be automatically deducted at the time of generation.
                  </li>
                  <li>
                    Purchased credits are non-refundable and do not expire.
                  </li>
                  <li>
                    All payments are processed securely through third-party payment providers, such as DOKU.
                  </li>
                  <li>
                    Leadoc does not use a subscription model; all services operate on a pay-as-you-go basis.
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Data & Privacy
              </h1>
              <div>
                <ul className='list-disc list-inside'>
                  <li>
                    Leadoc will only access your repository data after you provide explicit authorization via GitHub
                    OAuth.
                  </li>
                  <li>
                    Access to your code, files, or repository structure is conducted solely for the purpose of
                    generating documentation and improving the performance of Leadoc’s artificial intelligence (AI)
                    systems.
                  </li>
                  <li>
                    By using this service, you acknowledge and agree that portions of your repository data may be
                    processed and utilized to train Leadoc’s AI models in order to enhance the quality and accuracy of
                    future outputs.
                  </li>
                  <li>
                    Leadoc does not share, sell, or rent your repository data to any third parties, except as required
                    by law or at your written and lawful request.
                  </li>
                  <li>
                    We implement reasonable technical and organizational safeguards to protect your data from
                    unauthorized access, misuse, loss, or unintended disclosure.
                  </li>
                </ul>
                <p>For more details regarding how we handle personal data and privacy, please refer to our {' '}
                  <span
                      className="text-purple-600 underline">
                    <Link href='privacy-policy'>Privacy Policy</Link>
                  </span>
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Termination
              </h1>
              <div>
                <p>We reserve the right to suspend or permanently terminate your account, with or without prior notice,
                  if you:</p>
                <ul className='list-disc list-inside'>
                  <li>
                    Violate any provision of this Agreement;
                  </li>
                  <li>
                    Misuse the platform for unlawful, harmful, or unauthorized purposes;
                  </li>
                  <li>
                    Interfere with the system, attempt to extract data improperly, or access the API without permission;
                  </li>
                  <li>
                    Engage in conduct that, in our sole discretion, compromises the security or integrity of the
                    platform.
                  </li>
                </ul>
                <br/>
                <p className="font-semibold">
                  IN THE EVENT OF TERMINATION DUE TO A VIOLATION, ANY REMAINING CREDITS WILL BE FORFEITED AND ARE
                  NON-REFUNDABLE.
                </p>
                <br/>
                <p>
                  You may delete your account at any time via your account settings. Upon confirmed deletion, all
                  associated data will be permanently removed from our systems within 7 days.
                </p>
                <br/>
                <p className="font-semibold">
                  LEADOC IS NOT RESPONSIBLE FOR ANY LOSS OF DATA OR CONTENT RESULTING FROM THE VOLUNTARY OR ENFORCED
                  TERMINATION OF YOUR ACCOUNT.
                </p>

              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Disclaimer & Limitation of Liability
              </h1>
              <div>
                <p>
                  The Leadoc platform and all related services are provided "<span
                    className="font-semibold">AS IS</span>" and "<span className="font-semibold">AS AVAILABLE</span>",
                  without warranties of any kind, either express or implied. This includes, but is not limited to, <span
                    className="font-semibold">WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, SYSTEM AVAILABILITY, OR ACCURACY OF GENERATED OUTPUT.</span>
                  <br/>
                  We <span className="font-semibold">DO NOT GUARANTEE</span> that the platform will operate
                  uninterrupted, be secure or error-free, or that the
                  documentation generated will meet your expectations or business requirements.
                  <br/>
                  To the <span className="font-semibold">FULLEST EXTENT PERMITTED BY LAW,</span> Leadoc <span
                    className="font-semibold">SHALL NOT BE LIABLE</span> for any <span className="font-semibold">DIRECT, INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES,</span> including but not limited to:
                </p>
                <ul className='list-disc list-inside font-semibold'>
                  <li>
                    DATA LOSS
                  </li>
                  <li>
                    BUSINESS INTERRUPTION
                  </li>
                  <li>
                    LOST PROFITS
                  </li>
                  <li>
                    SERVICE OUTAGES
                  </li>
                  <li>
                    UNAUTHORIZED ACCESS TO YOUR ACCOUNT OR DATA
                  </li>
                </ul>
                <p className="font-semibold">
                  ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM.
                </p>
                <br/>
                <p className="font-semibold">
                  IN NO EVENT SHALL LEADOC’S TOTAL CUMULATIVE LIABILITY EXCEED THE AMOUNT PAID BY YOU (IF ANY) FOR THE
                  SERVICE DURING THE SIX (6) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Changes to This Agreement
              </h1>
              <div>
                <p>
                  We reserve the right to modify or update these Terms of Service at any time, with or WITHOUT PRIOR
                  NOTICE, in order to reflect changes in our services, applicable laws, or business operations.
                  <br/> <br/>
                  If <span className="font-semibold">MATERIAL CHANGES</span> are made, we will make reasonable efforts
                  to notify you through appropriate channels, such as email, in-app messages, or clear announcements on
                  our website.
                  <br/> <br/>
                  By continuing to use Leadoc after such changes take effect, you AGREE TO BE BOUND BY THE UPDATED
                  TERMS. If you do not agree with the updated Terms, you must stop using the platform immediately.
                  <br/> <br/>
                  It is <span className="font-semibold">YOUR RESPONSIBILITY</span> to review these Terms periodically to
                  stay informed of any updates. The “Last Updated” date at the top of this document indicates the most
                  recent revision.
                </p>
              </div>
            </section>

            <section className="grid gap-6">
              <h1 className="font-semibold text-title-sm md:text-title-md">
                Contact
              </h1>
              <div>
                <p>
                  If you have any questions, feedback, or legal inquiries related to these Terms or your use of the Leadoc platform, please contact us through our official communication channels:
                  <br/> <br/>
                  Email:                   <span
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
