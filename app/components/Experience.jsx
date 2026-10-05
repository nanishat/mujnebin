'use client'

import { experienceData } from '@/assets/assets'
import { motion } from 'motion/react'

const Experience = () => {
  return (
    <section
      id='experience'
      className='mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:scroll-mt-24 md:px-12 md:py-28'
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
                  {item.period && (
                    <p className='mt-1 w-fit rounded-full bg-neutral-100 px-3 py-1 text-sm font-mono dark:bg-arsenic md:hidden'>
                      {item.period}
                    </p>
                  )}
                  <p className='mt-1 text-neutral-600 dark:text-chineseWhite/80'>
                    {item.org}
                  </p>
                </div>

                {item.period && (
                  <p className='hidden shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-sm font-mono dark:bg-arsenic md:block'>
                    {item.period}
                  </p>
                )}
              </div>

              {item.bullets.length > 0 && (
                <ul className='mt-5 list-disc space-y-2 pl-5 text-neutral-600 dark:text-chineseWhite/80'>
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
            </motion.article>
          ))}
      </div>

      <div className='mt-12 md:mt-16'>
        <p className='mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400'>
          Academic background
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
                className='rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm dark:bg-transparent md:p-8'
              >
                <div className='flex flex-col gap-2 md:flex-row md:items-start md:justify-between'>
                  <div>
                    <h4 className='font-semibold'>{item.role}</h4>
                    <p className='mt-1 text-neutral-600 dark:text-chineseWhite/80'>
                      {item.org}
                    </p>
                  </div>
                  {item.period && (
                    <p className='w-fit rounded-full bg-neutral-100 px-3 py-1 text-sm font-mono dark:bg-arsenic'>
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
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
