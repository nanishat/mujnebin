'use client'

import { experienceData } from '@/assets/assets'
import { motion } from 'motion/react'

const Experience = () => {
  return (
    <section
      id='experience'
      className='mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:scroll-mt-24 md:px-12'
    >
      <p className='mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400'>
        Career
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='mb-10 text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 md:text-4xl'
      >
        Experience
      </motion.h2>

      <div className='space-y-4 border-l border-neutral-300 pl-5 dark:border-arsenic md:space-y-6 md:pl-8'>
        {experienceData
          .filter((item) => item.type !== 'education')
          .map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='relative rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm dark:bg-transparent md:p-8'
            >
              <span
                aria-hidden='true'
                className='absolute -left-[1.65rem] top-7 hidden h-3 w-3 rounded-full bg-[#E27355] ring-4 ring-paper dark:ring-darkTheme md:block md:-left-[2.45rem]'
              />

              <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
                <div className='min-w-0'>
                  <h3 className='font-semibold'>{item.role}</h3>
                  <p className='mt-1 text-neutral-600 dark:text-chineseWhite/80'>
                    {item.org}
                  </p>
                  <p className='mt-1 text-sm text-neutral-500 dark:text-neutral-400'>
                    {item.employmentType} <span aria-hidden='true'>·</span>{' '}
                    {item.location}
                  </p>
                </div>

                {item.period && (
                  <p className='w-fit shrink-0 self-end rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'>
                    {item.period}
                  </p>
                )}
              </div>

              {item.sections ? (
                <div className='mt-5 space-y-5'>
                  {item.sections.map((section) => (
                    <div key={section.title}>
                      <h4 className='font-semibold text-neutral-800 dark:text-neutral-200'>
                        {section.title}
                      </h4>
                      <ul className='mt-2 list-disc space-y-2 pl-5 text-neutral-600 dark:text-chineseWhite/80'>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : item.bullets.length > 0 ? (
                <ul className='mt-5 list-disc space-y-2 pl-5 text-neutral-600 dark:text-chineseWhite/80'>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {item.tech.length > 0 && (
                <div className='mt-6 flex flex-wrap gap-1.5'>
                  {item.tech.map((technology) => (
                    <span
                      key={technology}
                      className='rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-arsenic'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
      </div>

      <div className='mt-12 md:mt-16'>
        <p className='mb-4 block text-xs font-bold uppercase tracking-widest text-neutral-400'>
          ACADEMIC BACKGROUND
        </p>
        <h3 className='mb-6 text-xl font-bold text-neutral-900 dark:text-neutral-100 md:text-2xl'>
          Education
        </h3>
        <div className='space-y-4'>
          {experienceData
            .filter((item) => item.type === 'education')
            .map((item) => (
              <article
                key={item.id}
                className='rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60'
              >
                <div className='flex flex-col gap-2 md:flex-row md:items-start md:justify-between'>
                  <div>
                    <h4 className='font-semibold'>{item.role}</h4>
                    <p className='mt-1 text-neutral-600 dark:text-chineseWhite/80'>
                      {item.org}
                    </p>
                  </div>
                  {item.period && (
                    <p className='w-fit shrink-0 self-end rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'>
                      {item.period}
                    </p>
                  )}
                </div>
                {item.bullets.length > 0 && (
                  <ul className='mt-4 list-disc space-y-2 pl-5 text-neutral-600 dark:text-chineseWhite/80'>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {item.tech.length > 0 && (
                  <div className='mt-6 flex flex-wrap gap-1.5'>
                    {item.tech.map((technology) => (
                      <span
                        key={technology}
                        className='rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-arsenic'
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
        </div>

        <div className='mt-10'>
          <p className='mb-3 block text-xs font-bold uppercase tracking-widest text-neutral-400'>
            COMMUNITY &amp; EVENT VOLUNTEERING
          </p>
          <div className='space-y-4'>
            <article className='rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60'>
              <div className='flex flex-col gap-2 md:flex-row md:items-start md:justify-between'>
                <div>
                  <h4 className='font-semibold'>Treasurer &amp; Executive Member</h4>
                  <p className='mt-1 text-neutral-600 dark:text-chineseWhite/80'>
                    JUKTI (Official CSE Club of Independent University, Bangladesh)
                  </p>
                </div>
                <p className='w-fit shrink-0 self-end rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'>
                  Apr 2021 – Mar 2023 (2 yrs)
                </p>
              </div>
              <ul className='mt-4 list-disc space-y-2 pl-5 text-neutral-600 dark:text-chineseWhite/80'>
                <li>
                  Managed financial budgeting, expense tracking, and reporting for department-wide technical workshops and programs.
                </li>
                <li>
                  Coordinated academic events and student–faculty engagement initiatives to promote independent learning.
                </li>
              </ul>
            </article>

            <article className='rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60'>
              <h4 className='font-semibold'>Academic &amp; Tech Event Volunteer</h4>
              <ul className='mt-4 list-disc space-y-2 pl-5 text-neutral-600 dark:text-chineseWhite/80'>
                <li>Organizing Volunteer — Intra IUB Tech Fest (2023)</li>
                <li>Volunteer — National Hackathon on Frontier Technologies (Feb 2020)</li>
                <li>Organizing Volunteer — Bangladesh Physics Olympiad at IUB (2020)</li>
                <li>Event Volunteer — Bangladesh Retail Congress by APEX &amp; BBF (2020)</li>
                <li>Organizing Volunteer (Runner) — Ascension19 Parliamentary Debate Tournament by IUBDC (2019)</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
