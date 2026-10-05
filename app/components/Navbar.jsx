import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* radiant background */}
      {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div> */}

      {/* navbar section */}
      <nav className={`w-full fixed top-0 z-50
         ${isScroll ? "bg-paper/80 backdrop-blur border-b border-neutral-200/80 dark:bg-richBlack/80 dark:border-arsenic" : ""}`}>
        <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8'>

          {/* brand */}
          <a href="#top" aria-label="Mujnebin home">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Mujnebin.' className='w-28 cursor-pointer' />
          </a>

          {/* navigation and controls */}
          <div className='flex items-center gap-2 md:gap-4'>
            <ul className={`hidden md:flex items-center gap-4 lg:gap-8 rounded-full px-6 py-3 lg:px-10
              ${isScroll ? "" : "shadow-sm bg-opacity-50 dark:border dark:border-arsenic dark:bg-transparent"} `}>
              <li><a className='relative font-Ovo after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100' href="#top">Home</a></li>
              <li><a className='relative font-Ovo after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100' href="#about">About me</a></li>
              <li><a className='relative font-Ovo after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100' href="#experience">Experience</a></li>
              <li><a className='relative font-Ovo after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100' href="#skills">Skills</a></li>
              <li><a className='relative font-Ovo after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100' href="#projects">Projects</a></li>
              <li><a className='relative font-Ovo after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100' href="#contact">Contact me</a></li>
            </ul>

            <button
              type='button'
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className='flex min-h-11 min-w-11 items-center justify-center'
              onClick={() => setIsDarkMode(prev => !prev)}
            >
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
            </button>

            <button
              type='button'
              aria-label='Open navigation menu'
              aria-expanded={isMenuOpen}
              className='flex min-h-11 min-w-11 items-center justify-center md:hidden'
              onClick={() => setIsMenuOpen(true)}
            >
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
          </div>

          {/* mobile menu */}
          <div
            className={`fixed right-0 top-0 z-50 flex h-screen w-64 flex-col gap-4 bg-arsenic px-10 py-20 text-chineseWhite transition-transform duration-500 dark:bg-arsenic md:hidden
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              type='button'
              aria-label='Close navigation menu'
              className='absolute right-6 top-6 flex min-h-11 min-w-11 items-center justify-center'
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
            </button>

            <a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#about">About me</a>
            <a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#experience">Experience</a>
            <a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#skills">Skills</a>
            <a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#projects">Projects</a>
            <a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href="#contact">Contact me</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar