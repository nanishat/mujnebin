import { assets } from '@/assets/assets'
import { navigationLinks } from '@/config/site'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full ${isScroll ? 'border-b border-neutral-200/80 bg-paper/80 backdrop-blur dark:border-arsenic dark:bg-richBlack/80' : ''}`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <a href="#top" aria-label="Mujnebin home">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Mujnebin."
              className="w-28 cursor-pointer"
            />
          </a>

          <div className="flex items-center gap-2 md:gap-4">
            <ul
              className={`hidden items-center gap-4 rounded-full px-6 py-3 md:flex lg:gap-8 lg:px-10 ${isScroll ? '' : 'bg-opacity-50 shadow-sm dark:border dark:border-arsenic dark:bg-transparent'} `}
            >
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="relative font-Ovo after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={
                isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
              className="flex min-h-11 min-w-11 items-center justify-center"
              onClick={() => setIsDarkMode((prev) => !prev)}
            >
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt=""
                className="w-6"
              />
            </button>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="flex min-h-11 min-w-11 items-center justify-center md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt=""
                className="w-6"
              />
            </button>
          </div>

          <div
            className={`fixed right-0 top-0 z-50 flex h-screen w-64 flex-col gap-4 bg-arsenic px-10 py-20 text-chineseWhite transition-transform duration-500 md:hidden dark:bg-arsenic ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              className="absolute right-6 top-6 flex min-h-11 min-w-11 items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt=""
                className="w-5 cursor-pointer"
              />
            </button>

            {navigationLinks.map((link) => (
              <a
                key={link.href}
                className="font-Ovo"
                onClick={() => setIsMenuOpen(false)}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
