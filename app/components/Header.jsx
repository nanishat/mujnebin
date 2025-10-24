import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pb-20'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Hi! I'm Safiul Mujnebin
        <motion.div
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          <Image src={assets.hand_icon} alt='' className='w-8' />
        </motion.div>
      </motion.h3>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        Full Stack Engineer<br /> based in Bangladesh.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        I’m a Full Stack Engineer from Dhaka, Bangladesh, with 1.5+ years of experience building and deploying impactful web applications across multiple projects.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border border-chineseWhite rounded-full bg-richBlack text-chineseWhite flex items-center gap-2 dark:bg-transparent'
        >
          Contact me
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/mujnebin-resume.pdf"
          download="mujnebin-resume.pdf"
          className='px-10 py-3 border rounded-full border-arsenic flex items-center gap-2 bg-chineseWhite dark:text-richBlack'
        >
          My resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>
    </div>
  )
}

export default Header