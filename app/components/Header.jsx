'use client'

import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const roles = ['Software Developer', 'Full Stack Engineer', 'Web Architect']

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const isRoleComplete = displayedRole === currentRole
    const delay = isRoleComplete ? 1600 : isDeleting ? 45 : 90

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
        } else {
          setIsDeleting(true)
        }
      } else if (displayedRole.length > 0) {
        setDisplayedRole(currentRole.slice(0, displayedRole.length - 1))
      } else {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [displayedRole, isDeleting, roleIndex])

  return (
    <section className='flex min-h-[85vh] flex-col justify-center bg-[#FBF9F5] py-20 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 md:py-28'>
      <div className='mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='order-first flex flex-col items-center lg:order-last lg:col-span-5'
        >
          <div className='profile-ring shrink-0'>
            <Image
              src={assets.profile_img}
              alt='Safiul Mujnebin'
              className='h-40 w-40 rounded-full object-cover md:h-56 md:w-56'
              priority
            />
          </div>

          <div className='mt-6 hidden w-full grid-cols-3 gap-4 rounded-2xl bg-neutral-100 p-4 text-center dark:bg-neutral-900 lg:grid'>
            <div className='px-2'>
              <p className='text-2xl font-bold text-[#E27355] md:text-3xl'>1+</p>
              <p className='mt-1 text-xs font-medium text-neutral-600 dark:text-neutral-400'>Yrs Experience</p>
            </div>
            <div className='border-x border-neutral-200 px-2 dark:border-neutral-700'>
              <p className='text-2xl font-bold text-[#E27355] md:text-3xl'>8+</p>
              <p className='mt-1 text-xs font-medium text-neutral-600 dark:text-neutral-400'>Projects</p>
            </div>
            <div className='px-2'>
              <p className='text-2xl font-bold text-[#E27355] md:text-3xl'>2</p>
              <p className='mt-1 text-xs font-medium text-neutral-600 dark:text-neutral-400'>Publications</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='order-last flex w-full flex-col items-center text-center lg:order-first lg:col-span-7 lg:items-start lg:text-left'
        >
          <p className='mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold tracking-wide text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-300'>
            <span className='h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.45)] animate-pulse' />
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Safiul Mujnebin
          </h1>

          <p
            aria-label={`${roles[roleIndex]} • Dhaka, Bangladesh`}
            className='mt-2 text-lg font-medium text-neutral-600 dark:text-neutral-400 md:text-xl'
          >
            <span aria-hidden='true'>{displayedRole}</span>
            <span aria-hidden='true' className='ml-1 inline-block h-5 w-px animate-pulse bg-current align-middle' />
            <span aria-hidden='true'> • Dhaka, Bangladesh</span>
          </p>

          <p className='mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg'>
            I’m a Full Stack Engineer from Dhaka, Bangladesh, with 1.5+ years of
            experience building and deploying impactful web applications across
            multiple projects.
          </p>

          <div className='mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap'>
            <a
              href='#contact'
              className='flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#18181B] px-6 text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 sm:w-auto'
            >
              Get in Touch
              <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </a>

            <a
              href='/mujnebin-resume.pdf'
              download='mujnebin-resume.pdf'
              className='flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 px-6 text-neutral-900 transition-colors hover:bg-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 sm:w-auto'
            >
              Download Resume
              <Image src={assets.download_icon} alt='' className='w-4' />
            </a>
            <a
              href='https://github.com/nanishat'
              target='_blank'
              rel='noreferrer'
              className='flex h-11 w-full items-center justify-center rounded-xl border border-neutral-300 px-6 text-neutral-900 transition-colors hover:bg-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 sm:w-auto'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/mujnebin-safiul/'
              target='_blank'
              rel='noreferrer'
              className='flex h-11 w-full items-center justify-center rounded-xl border border-neutral-300 px-6 text-neutral-900 transition-colors hover:bg-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 sm:w-auto'
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
