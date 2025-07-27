import Link from 'next/link';
import { Play } from 'lucide-react';
import { Accordion } from '@/features/shared/components';
import { TitleGradient } from '@/features/marketing/component/TitleGradient';
import { FadingSection } from '@/features/marketing/component/FadingSection';
import Image from 'next/image';

export default function Home() {
  return (
      <>
        {/* Hero Section */}
        <section className='px-5 py-20 flex flex-col gap-24 items-center md:gap-9'>
          <TitleGradient className="from-green-100 via-purple-300 to-green-100">
            Welcome to Leadoc
          </TitleGradient>

          <div className='text-center flex flex-col gap-5 items-center'>
            <h1 className="text-title-md md:text-5xl lg:text-[64px] lg:w-[920px]">The fastest way to turn code into
              clear documentation</h1>
            <p className="text-neutral-600 md:text-body-xl lg:text-lg max-md:font-medium md:w-[536px]">
              Generate your README without writing it manually. One-click, smart
              summaries, GitHub sync, and live editing.
            </p>
          </div>

          <div className="relative">
            <div
                className="absolute -bottom-1 top-6 inset-0 bg-gradient-to-r from-[#B151FF] via-[#FA0011] to-[#B151FF] blur-md"
            />
            <Link href='/'
                  className='relative block w-fit h-[44px] py-3 px-4 bg-neutral-900 rounded-lg text-neutral-200 font-medium'>
              Generate Your README Now
            </Link>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-10 px-5 lg:p-10 flex justify-center">
          <div
              className="relative w-full max-w-[1200px] bg-neutral-100 p-5 border-2 border-neutral-200 rounded-lg md:p-10 lg:py-[72px] lg:px-[100px]"
          >
            <div className="w-full max-h-[532px] aspect-video bg-neutral-500 rounded-lg"/>
            <button
                type='button'
                className='absolute top-1/2 left-1/2 -translate-1/2 bg-neutral-900 text-white flex gap-2 items-center p-3 rounded-xl font-semibold'
            >
              <Play/>
              <span>Watch demo</span>
            </button>
          </div>
        </section>

        {/* About Section */}
        <FadingSection section='about'>
          <TitleGradient className="from-indigo-100 via-pink-300 to-indigo-100">
            Instant README
          </TitleGradient>

          <h1 className="about text-title-sm md:text-title-md lg:text-title-xl lg:w-[856px]">
            Leadoc turns your code
            into a clean, <br className='max-md:hidden'/>
            professional README, fast, simple,
            no setup.
          </h1>

          <h2 className="about text-title-sm text-neutral-500 md:text-title-md lg:text-title-xl">
            We’re just getting started.
          </h2>
        </FadingSection>

        {/* Futures Section */}
        <section className="futures py-20 px-5 md:px-10 flex flex-col items-center">
          <div className="max-w-[1200px]">
            <div className='pb-16 lg:pb-20'>
              <TitleGradient className='from-purple-100 via-green-300 to-purple-100'>
                What You Get
              </TitleGradient>
              <div className="mt-9 md:w-[680px]">
                <h1 className="text-title-sm mb-3 md:text-title-md lg:text-title-xl">
                  Explore features that make <br className='max-lg:hidden'/> creating your README easier.
                </h1>
                <p className="text-neutral-500 lg:text-body-xl">
                  Leadoc gives you the tools to save time, stay consistent, and focus on your code. From the Smart
                  Section
                  Picker to All Language Support, everything is built to simplify your documentation process.
                </p>
              </div>
            </div>

            <section className="flex flex-col gap-[60px]">
              {/* Smart Section Picker */}
              <div className='flex flex-col justify-center gap-11 lg:flex-row-reverse lg:items-end lg:gap-20'>
                <div className="aspect-square w-full lg:w-[588px] lg:h-[588px] bg-neutral-50 rounded-xl">
                  <Image src="/gif/Smart-section-picker.gif"
                         alt="smart-section" width={588} height={588}
                         className='w-full h-full object-center object-cover'/>
                </div>

                <div>
                  <TitleGradient className='from-green-100 via-purple-300 to-green-100'>
                    Smart Section Picker
                  </TitleGradient>

                  <h2 className="max-md:text-title-xxs max-lg:max-w-[400px] py-4 md:text-title-sm lg:text-title-md lg:py-6">
                    Auto-detects the best sections based on your repository content.
                  </h2>

                  <p className="max-md:text-body-sm md:font-medium">
                    Smart Section Picker analyzes your repository to understand its structure and content. It
                    automatically
                    recommends the most relevant sections for your README. No guesswork, no manual setup — just the
                    right
                    sections, ready to go.
                  </p>
                </div>
              </div>

              {/* Custom Sections */}
              <div className='flex flex-col justify-center gap-11 lg:flex-row-reverse lg:items-end lg:gap-20'>
                <div className="aspect-square w-full lg:w-[588px] lg:h-[588px] bg-neutral-50 rounded-xl">
                  <Image src="/gif/Custom-Sections.gif"
                         alt="smart-section" width={588} height={588}
                         className='w-full h-full object-center object-cover'/>
                </div>

                <div>
                  <TitleGradient className='from-purple-100 via-green-300 to-purple-100'>
                    Custom Sections
                  </TitleGradient>

                  <h2 className="max-md:text-title-xxs max-lg:max-w-[400px] py-4 md:text-title-sm lg:text-title-md lg:py-6">
                    Pick the sections that fit your project. Customize your README your way.
                  </h2>

                  <p className="max-md:text-body-sm md:font-medium">
                    Custom Sections lets you choose exactly what goes into your README. Select only the sections that
                    are
                    relevant to your project — no more, no less. You’re in control, so your documentation fits your
                    style
                    and needs.
                  </p>
                </div>
              </div>

              {/* AI Summary */}
              <div className='flex flex-col justify-center gap-11 lg:flex-row-reverse lg:items-end lg:gap-20'>
                <div className="aspect-square w-full lg:w-[588px] lg:h-[588px] bg-neutral-50 rounded-xl">
                  <Image src="/gif/AI-Summary.gif"
                         alt="smart-section" width={588} height={588}
                         className='w-full h-full object-center object-cover'/>
                </div>

                <div>
                  <TitleGradient className='from-green-100 via-orange-300 to-green-100'>
                    AI Summary
                  </TitleGradient>

                  <h2 className="max-md:text-title-xxs max-lg:max-w-[400px] py-4 md:text-title-sm lg:text-title-md lg:py-6">
                    Make your README sound great. <br className='max-md:hidden'/> Let AI handle the writing.
                  </h2>

                  <p className="max-md:text-body-sm md:font-medium">
                    Make your README sound great — clear, professional, and easy to understand. Leadoc’s AI Summary
                    helps
                    you describe your project without overthinking it. Just connect your repo and let the writing take
                    care of itself.
                  </p>
                </div>
              </div>

              {/* All Language Support */}
              <div className='flex flex-col justify-center gap-11 lg:flex-row-reverse lg:items-end lg:gap-20'>
                <div className="aspect-square w-full lg:w-[588px] lg:h-[588px] bg-neutral-50 rounded-xl">
                  <Image src="/gif/All-Language-Support.gif"
                         alt="smart-section" width={588} height={588}
                         className='w-full h-full object-center object-cover'/>
                </div>

                <div>
                  <TitleGradient className='from-indigo-100 via-pink-300 to-indigo-100'>
                    All Language Support
                  </TitleGradient>

                  <h2 className="max-md:text-title-xxs max-lg:max-w-[400px] py-4 md:text-title-sm lg:text-title-md lg:py-6">
                    Build with any language. <br/>
                    Let Leadoc handle the README.
                  </h2>

                  <p className="max-md:text-body-sm md:font-medium">
                    Leadoc works with any language — from JavaScript to Python, and everything in between. No setup, no
                    limits — just connect your repo and generate your README. It’s made for every developer, no matter
                    what you’re building.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Pricing Section */}
        <FadingSection section="pricing">
          <TitleGradient className="from-purple-100 via-green-300 to-purple-100">
            Pricing
          </TitleGradient>

          <h1 className="pricing text-title-sm md:text-title-md lg:text-title-xl lg:w-[856px]">
            Pay as you go. <br/>
            Buy credits when you need them <br/>
            and use them however you like.
          </h1>

          <h2 className="pricing text-title-sm text-neutral-500 md:text-title-md lg:text-title-xl">
            it's that simple.
          </h2>
        </FadingSection>

        {/* Quick Answers */}
        <section className="py-20 px-5 flex flex-col gap-20 items-center md:px-10">
          <div className='flex flex-col items-center text-center gap-9'>
            <TitleGradient className='from-green-100 via-orange-300 to-green-100'>Quick Answers</TitleGradient>
            <h1 className="text-title-sm md:text-title-md lg:text-title-xl">Quick answers to help you get started.</h1>
          </div>

          <div className="grid gap-2">
            <Accordion title='Who is Leadoc for?'>
              Leadoc is designed for developers, engineers, and technical teams who want to save time and reduce manual
              work when writing README files. Whether you're building open-source libraries, internal tools, or startup
              projects, Leadoc helps you generate clean, structured, and AI-powered documentation — all in just a few
              clicks. <br/> <br/>
              If you have a GitHub repository, Leadoc is for you.
            </Accordion>

            <Accordion title='What is the Smart Section Picker?'>
              The Smart Section Picker is a feature in Leadoc that automatically analyzes your GitHub repository and
              suggests the most relevant README sections based on your project’s content. Powered by AI, it understands
              your project’s structure, programming language, and key files to recommend sections like Installation,
              Usage, API Reference, Contributing, and more—without you having to select them manually. <br/> <br/>
              It’s designed to help you generate clear, context-aware documentation in just seconds.
            </Accordion>

            <Accordion title='Does Leadoc support all programming languages?'>
              Yes! Leadoc is designed to be language-agnostic and supports all programming languages. Whether your
              project is written in JavaScript, Python, Go, Rust, Java, C++, or even a mix of languages, Leadoc can
              analyze your repository and generate meaningful, structured README documentation using AI.. <br/> <br/>
              No matter what you build, Leadoc is ready to document it.
            </Accordion>

            <Accordion title='How does the credit system work?'>
              Leadoc uses a simple pay-as-you-go credit system. Each time you generate a section in your README, a fixed
              number of credits is used, based on the type of section or feature. You can purchase credits in advance,
              and they never expire. There are no subscriptions — you only pay for what you use. <br/> <br/>
              This gives you full flexibility and control over your usage, whether you're documenting one project or a
              dozen.
            </Accordion>

            <Accordion title='Can I use Leadoc for private repositories?'>
              Yes, Leadoc fully supports private repositories. With your explicit authorization via GitHub OAuth, Leadoc
              can securely access your private repo to analyze its contents and generate documentation. We only access
              your data for the purpose of generating README files, and all processing is handled securely. <br/> <br/>
              Your privacy and repository security are a top priority.
            </Accordion>

            <Accordion title='What happens after I generate a README??'>
              Once you generate a README with Leadoc, you’ll immediately see the result on your screen. From there, you
              can edit the content, copy it to your clipboard, or manually upload it to your GitHub repository. This
              gives you full control to review, customize, and use the output however you like—before making it public
              or sharing it with your team. <br/> <br/>
              Leadoc helps you get started faster, but you stay in charge of the final version.
            </Accordion>

            <Accordion title='Does Leadoc store my code?'>
              No, Leadoc does not permanently store or sell your code. We only access your repository with your
              permission via GitHub OAuth, and your code is processed temporarily to generate documentation. The data is
              handled securely and used only for the purpose of creating README files. <br/> <br/>
              We do not sell, share, or expose your code to third parties. Your privacy and control over your repository
              remain fully in your hands.
            </Accordion>
          </div>

          <span className="flex gap-3 text-title-xxs md:text-title-sm">
            Something unclear?
            <Link href='/' className='text-purple-600'>Feel free to ask.</Link>
          </span>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-5 md:px-10 flex justify-center">
          <div
              className="w-full max-w-[1200px] bg-[url('/bg-CTA-section.png')] bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden">
            <div
                className="aspect-[30/13] w-full min-h-[420px] lg:h-auto bg-[#050505]/60 text-white text-center flex flex-col items-center justify-center">
              <div className='px-5 flex flex-col items-center'>
                <h1 className="text-title-sm md:text-title-md lg:text-title-xl">Ready to simplify your README?</h1>
                <p className="max-w-[465px] font-medium mt-4 mb-12 md:text-body-xl">
                  Write better READMEs in seconds with Leadoc and let your code speak clearly, without the extra effort.
                </p>

                <div className="relative">
                  <div
                      className="absolute -bottom-1 top-6 inset-0 bg-gradient-to-r from-[#B151FF] via-[#FA0011] to-[#B151FF] blur-md"
                  />
                  <Link href='/'
                        className='relative block h-[44px] py-3 px-4 bg-white rounded-lg text-neutral-900 font-medium'>
                    Get Started for Free
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </>
  );
}
