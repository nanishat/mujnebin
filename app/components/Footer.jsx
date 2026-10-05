import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          mujnebinsafiul@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Safiul Mujnebin. All rights reserved.</p>

        <ul className='mt-4 flex flex-col items-center justify-center gap-3 sm:mt-0 sm:flex-row'>
          <li><a target='_blank' href="https://github.com/nanishat" className='flex h-12 min-w-12 items-center justify-center rounded-xl border border-neutral-200/80 px-4 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900'>Github</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/mujnebin-safiul/" className='flex h-12 min-w-12 items-center justify-center rounded-xl border border-neutral-200/80 px-4 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900'>LinkedIn</a></li>
          <li><a target='_blank' href="https://discord.com/users/702535873450999838" className='flex h-12 min-w-12 items-center justify-center rounded-xl border border-neutral-200/80 px-4 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900'>Discord</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer