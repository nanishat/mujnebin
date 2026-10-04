import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <section className='bg-[#FBF9F5] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto py-10 md:py-20 px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='order-first flex flex-col items-center gap-8 lg:order-last lg:col-span-5'
        >
          <Image
            src={assets.profile_img}
            alt='Safiul Mujnebin'
            className='h-28 w-28 rounded-2xl border-2 border-white object-cover shadow-md md:h-36 md:w-36'
          />

          <div className='hidden w-full grid-cols-3 rounded-2xl border border-neutral-200/80 bg-[#18181B] py-6 text-center text-white shadow-sm lg:grid'>
            <div className='px-3'>
              <p className='text-3xl font-extrabold text-[#E27355]'>1+</p>
              <p className='mt-1 font-mono text-xs uppercase'>Years Exp.</p>
            </div>
            <div className='border-x border-white/15 px-3'>
              <p className='text-3xl font-extrabold text-[#E27355]'>8+</p>
              <p className='mt-1 font-mono text-xs uppercase'>Projects</p>
            </div>
            <div className='px-3'>
              <p className='text-3xl font-extrabold text-[#E27355]'>2</p>
              <p className='mt-1 font-mono text-xs uppercase'>Publications</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left'
        >
          <p className='mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-300'>
            <span className='h-2 w-2 animate-pulse rounded-full bg-green-500' />
            Available for full-time roles
          </p>

          <h2 className='mb-3 flex items-end gap-2 text-xl font-semibold tracking-tight sm:text-2xl'>
            Hi! I'm Safiul Mujnebin
            <Image src={assets.hand_icon} alt='' className='w-7' />
          </h2>

          <h1 className='text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
            Full Stack Engineer<br /> based in Bangladesh.
          </h1>

          <p className='mt-5 max-w-2xl text-neutral-600 dark:text-neutral-400'>
            I’m a Full Stack Engineer from Dhaka, Bangladesh, with 1.5+ years of experience building and deploying impactful web applications across multiple projects.
          </p>

          <div className='mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row'>
            <a
              href="#contact"
              className='flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#18181B] px-6 text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 sm:w-auto'
            >
              Contact me
              <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </a>

            <a
              href="/mujnebin-resume.pdf"
              download="mujnebin-resume.pdf"
              className='flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 px-6 text-neutral-900 transition-colors hover:bg-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 sm:w-auto'
            >
              My resume
              <Image src={assets.download_icon} alt='' className='w-4' />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Header