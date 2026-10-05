import { assets, workData } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const Projects = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='projects'
      className='mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:scroll-mt-24 md:px-12 md:py-28'
    >
      <p className='mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400'>
        Work I've done
      </p>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='mb-10 text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 md:text-4xl'
      >
        Selected projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
      >
        {workData.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className='flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm dark:bg-transparent'
          >
            <div className='aspect-video overflow-hidden'>
              <Image
                src={project.bgImage}
                alt={project.title}
                width={640}
                height={360}
                className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
              />
            </div>

            <div className='flex flex-1 flex-col p-5'>
              <h3 className='font-semibold'>{project.title}</h3>
              <p className='mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-chineseWhite/80'>
                {project.description}
              </p>

              <div className='mt-auto flex items-center justify-between border-t border-neutral-200/80 pt-4 dark:border-neutral-700'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 text-sm font-medium text-[#E27355] transition-colors hover:text-[#c95f43]'
                >
                  View project
                  <Image src={assets.send_icon} alt='' className='w-4' />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href='https://github.com/nanishat'
        target='_blank'
        rel='noreferrer'
        className='my-12 flex w-full items-center justify-center gap-2 rounded-full border-[0.5px] border-neutral-700 px-10 py-3 text-neutral-700 transition-colors hover:bg-neutral-100 md:mx-auto md:w-max dark:border-white dark:text-white dark:hover:bg-darkHover'
      >
        Show more
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='' className='w-4' />
      </motion.a>
    </motion.section>
  )
}

export default Projects