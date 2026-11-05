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
      <h2 className='mb-10 text-3xl font-extrabold text-neutral-900 md:text-4xl dark:text-neutral-100'>
        About me
      </h2>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8'>
        <article className='rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-200 shadow-xl md:p-10 lg:col-span-8'>
          <div className='space-y-5'>
            <div>
              <p className='mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-500'>
                MY BACKGROUND &amp; FOUNDATION
              </p>
              <p className='text-sm leading-relaxed text-neutral-300 md:text-base'>
                I’m a software developer with over{' '}
                <span className='font-semibold text-red-500'>
                  4 years of overall development experience
                </span>{' '}
                and{' '}
                <span className='font-semibold text-emerald-400'>
                  1.5+ years of hands-on professional work
                </span>
                . My path has covered full-stack development, enterprise system
                design, and network infrastructure, from building the accounting
                engine of an in-house ERP to deploying web applications and
                configuring the networks beneath them. That range taught me to
                think about systems end to end, not just the piece in front of
                me.
              </p>
            </div>

            <div>
              <p className='mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-500'>
                MY FOCUS &amp; NEXT CHAPTER
              </p>
              <p className='text-sm leading-relaxed text-neutral-300 md:text-base'>
                My strongest direction is{' '}
                <span className='font-semibold text-red-500'>
                  Data Science &amp; Analytics
                </span>
                : turning raw information into analysis, models, and insights
                people can act on. Backed by specialized training and ongoing
                hands-on projects, I’m working to bridge software development
                with data analytics, building software that doesn’t just collect
                data but makes sense of it.
              </p>
            </div>

            <div>
              <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                That said, I’m{" "}
                <span className="font-semibold text-emerald-400">
                  adaptable across software, data, and infrastructure roles
                </span>
                . With a foundation in software development and networking, I can
                contribute wherever I add value, and I’m always{" "}
                <span className="font-semibold text-red-500">
                  ready to learn what a role demands
                </span>
                .
              </p>
            </div>
          </div>
        </article>

        <aside className='rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm md:p-8 lg:col-span-4 dark:bg-transparent'>
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

      <blockquote className='shadow-xs mt-10 rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 md:p-8 dark:border-neutral-800 dark:bg-neutral-900/60'>
        <span className='mb-3 block text-xs font-bold uppercase tracking-widest text-neutral-400'>
          Leadership endorsement
        </span>
        <p className='mb-4 text-base font-medium italic leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200'>
          Safiul successfully led a critical Google Drive &amp; Sheets API
          integration when documentation was minimal. His initiative, deep
          R&amp;D, and independent problem-solving mindset delivered a seamless
          solution. He brings the exact dedication, efficiency, and engineering
          ownership that drives major projects forward.
        </p>
        <footer className='text-sm font-semibold not-italic text-neutral-900 dark:text-neutral-100'>
          — Osman Haruni Shin, Deputy Manager at SDP, BRAC
        </footer>
      </blockquote>
    </motion.section>
  )
}

export default About
