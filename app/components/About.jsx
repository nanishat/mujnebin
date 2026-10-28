import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id='about'
      className='mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:scroll-mt-24 md:px-12 md:py-28'
    >
      <p className='mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400'>
        Who I am
      </p>
      <h2 className='mb-10 text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 md:text-4xl'>
        About me
      </h2>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8'>
        <article className='rounded-3xl bg-ink p-6 text-white md:p-10 lg:col-span-8'>
          <div className='space-y-7'>
            <div>
              <p className='mb-2 font-mono text-xs uppercase tracking-wider text-white/60'>
                My Background &amp; Foundation
              </p>
              <p className='font-Ovo leading-relaxed text-white/90'>
                Experienced across software engineering, full-stack
                architecture, and network infrastructure, I bring over{' '}
                <span className='text-[#F87171]'>
                  4 years of overall development experience
                </span>{' '}
                and{' '}
                <span className='text-[#5AEECC]'>
                  1.5+ years of hands-on professional work
                </span>
                . Throughout my journey, I’ve naturally drifted toward
                understanding systems as a whole—whether that means
                architecting enterprise tools, deploying web applications, or
                configuring underlying network environments. Having that
                technical range has shaped how I approach engineering problems
                from day one.
              </p>
            </div>

            <div>
              <p className='mb-2 font-mono text-xs uppercase tracking-wider text-white/60'>
                My Focus &amp; Next Chapter
              </p>
              <p className='font-Ovo leading-relaxed text-white/90'>
                Now, I am actively focusing my path toward{' '}
                <span className='text-[#F87171]'>Data Science</span>. Backed by
                specialized training and continuous hands-on projects, my focus
                is on bridging software development with data analytical
                models. I want to build intelligent, data-driven software that
                doesn&apos;t just collect information, but turns it into
                meaningful insights that help businesses and people grow.
              </p>
            </div>
          </div>
        </article>

        <aside className='rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:bg-transparent md:p-8 lg:col-span-4'>
          <h3 className='mb-6 font-Ovo text-xl'>Journey</h3>
          <ol className='space-y-5'>
            <li>
              <p className='font-mono text-xs text-neutral-500 dark:text-chineseWhite/70'>
                First role
              </p>
              <p className='text-sm'>BRAC SDP · 6-month internship</p>
            </li>
            <li>
              <p className='font-mono text-xs text-neutral-500 dark:text-chineseWhite/70'>
                Publication
              </p>
              <a
                href='https://ieeexplore.ieee.org/document/10392259/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm transition-colors hover:text-[#E27355]'
              >
                Nursing Robot — IEEE Conference
              </a>
            </li>
            <li>
              <p className='font-mono text-xs text-neutral-500 dark:text-chineseWhite/70'>
                Publication
              </p>
              <a
                href='https://www.researchgate.net/publication/373832770_A_Case_Study_on_IP_Security_CSE_406_Cryptography_and_Network_Security'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm transition-colors hover:text-[#E27355]'
              >
                IP Security Case Study
              </a>
            </li>
            <li>
              <p className='font-mono text-xs text-neutral-500 dark:text-chineseWhite/70'>
                Current role
              </p>
              <p className='text-sm'>Software Developer · Protection One</p>
            </li>
          </ol>
        </aside>
      </div>

      <blockquote className='mt-10 rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-xs dark:bg-neutral-900/60 dark:border-neutral-800 md:p-8'>
        <span className='mb-3 block text-xs font-bold uppercase tracking-widest text-neutral-400'>
          Leadership endorsement
        </span>
        <p className='mb-4 text-base font-medium text-neutral-800 dark:text-neutral-200 italic leading-relaxed md:text-lg'>
          Safiul successfully led a critical Google Drive &amp; Sheets API
          integration when documentation was minimal. His initiative, deep
          R&amp;D, and independent problem-solving mindset delivered a seamless
          solution. He brings the exact dedication, efficiency, and engineering
          ownership that drives major projects forward.
        </p>
        <footer className='text-sm font-semibold text-neutral-900 dark:text-neutral-100 not-italic'>
          — Osman Haruni Shin, Deputy Manager at SDP, BRAC
        </footer>
      </blockquote>
    </motion.section>
  )
}

export default About
