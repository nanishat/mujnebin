'use client'

import { navigationLinks } from '@/config/site'
import {
  Briefcase,
  Code,
  Folder,
  Home,
  Mail,
  Moon,
  Sun,
  User,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const dockItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Folder },
  { href: '#contact', label: 'Contact', icon: Mail },
]

const MobileDock = ({ isDarkMode, setIsDarkMode }) => {
  const [activeHref, setActiveHref] = useState('#top')

  useEffect(() => {
    const sections = dockItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section) => section !== null)

    const handleScroll = () => {
      if (window.scrollY <= 80) {
        setActiveHref('#top')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY <= 80) {
          setActiveHref('#top')
          return
        }

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top - window.innerHeight / 2) -
              Math.abs(second.boundingClientRect.top - window.innerHeight / 2),
          )

        if (visibleSections.length > 0) {
          setActiveHref(`#${visibleSections[0].target.id}`)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 flex w-full justify-around items-center border-t border-neutral-800 bg-neutral-900/95 px-1 pt-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
    >
      <motion.a
        href="#top"
        aria-label="Mujnebin home"
        aria-current={activeHref === '#top' ? 'location' : undefined}
        whileTap={{ scale: 0.92 }}
        className={`relative flex min-h-12 flex-1 items-center justify-center text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
          activeHref === '#top' ? 'text-emerald-400' : ''
        }`}
      >
        <Home aria-hidden="true" focusable="false" size={19} strokeWidth={2} />
        {activeHref === '#top' && (
          <span
            aria-hidden="true"
            className="absolute bottom-0 h-0.5 w-5 rounded-full bg-emerald-400"
          />
        )}
      </motion.a>

      {navigationLinks.map(({ href }) => {
        const dockItem = dockItems.find((item) => item.href === href)
        if (!dockItem) return null

        const { label, icon: Icon } = dockItem

        const isActive = activeHref === href

        return (
          <motion.a
            key={href}
            href={href}
            aria-label={label}
            aria-current={isActive ? 'location' : undefined}
            whileTap={{ scale: 0.92 }}
            className={`relative flex min-h-12 flex-1 items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isActive
                ? 'text-emerald-400'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Icon
              aria-hidden="true"
              focusable="false"
              size={19}
              strokeWidth={2}
            />
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 h-0.5 w-5 rounded-full bg-emerald-400"
              />
            )}
          </motion.a>
        )
      })}

      <motion.button
        type="button"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDarkMode}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="flex min-h-12 flex-1 items-center justify-center text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        {isDarkMode ? (
          <Sun aria-hidden="true" focusable="false" size={19} strokeWidth={2} />
        ) : (
          <Moon
            aria-hidden="true"
            focusable="false"
            size={19}
            strokeWidth={2}
          />
        )}
      </motion.button>
    </nav>
  )
}

export default MobileDock
