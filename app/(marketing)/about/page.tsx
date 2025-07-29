import React from 'react';
import { TitleGradient } from '@/features/marketing/component/TitleGradient';
import { TeamCard } from '@/features/marketing/component/TeamCard';
import { TeamAbout } from '@/features/marketing/lib/constant';

export default function About() {
  return (
      <>
        {/* About Section */}
        <section className="py-20 px-5 bg-neutral-100 h-[720px] flex justify-center md:px-10">
          <div className='flex flex-col justify-between items-start lg:w-[1200px]'>
            <div className='grid gap-9 lg:max-w-[693px]'>
              <TitleGradient className='from-green-100 via-orange-300 to-green-100'>
                About Leadoc
              </TitleGradient>

              <h1 className="text-title-sm md:text-title-md lg:text-title-xl">
                Leadoc started with a simple idea that every project deserves a clean and professional README
              </h1>
            </div>

            <p className="md:text-body-xl lg:max-w-[693px]">
              Leadoc was built to make it easier for every developer to create a clean and professional README. We know
              that writing documentation can feel like a chore, especially when you're focused on building something
              great. That’s why we designed a tool that helps you skip the manual work and get a well-structured README
              in
              minutes. <br/> <br/>
              By simplifying the process, Leadoc helps speed up your workflow and takes the pressure off documentation.
              You stay focused on the code — we’ll handle the docs.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-5 lg:flex justify-center md:px-10">
          <div className="max-w-[1200px]">
            <h1 className="text-title-sm mb-10 md:text-title-md lg:text-title-xl">
              Say hello to our team.
            </h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {TeamAbout.map(({name, img, title, link}) => (
                  <TeamCard key={name} name={name} img={img} title={title} link={link}/>
              ))}
            </div>
          </div>
        </section>
      </>
  );
}
