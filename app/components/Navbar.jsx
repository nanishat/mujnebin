import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translate(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translate(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
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

        {/* left section */}
        <a
          href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
        </a>

        {/* middle section */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
          ${isScroll ? "" : "shadow-sm bg-opacity-50 dark:border dark:border-arsenic dark:bg-transparent"} `}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#experience">Experience</a></li>
          <li><a className='font-Ovo' href="#skills">Skills</a></li>
          <li><a className='font-Ovo' href="#projects">Projects</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        {/* right section */}
        <div className='flex items-center gap-4'>

          {/* dark mode button */}
          <button className='flex min-h-11 min-w-11 items-center justify-center' onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          {/* contact button */}
          <a
            href="#contact"
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-davyGray rounded-full ml-4 hover:bg-tigerEye font-Ovo dark:border-arsenic dark:hover:bg-chineseRed'>
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />
          </a>

          {/* menu button for phone screen */}
          <button className='ml-3 flex min-h-11 min-w-11 items-center justify-center md:hidden' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50
          h-screen text-chineseWhite bg-arsenic transition duration-500 dark:bg-arsenic'
        >

          <div
            className='absolute right-6 top-6 flex min-h-11 min-w-11 items-center justify-center'
            onClick={closeMenu}
          >
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar