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
  const [activeHref, setActiveHref] = useState(dockItems[0].href)

  useEffect(() => {
    const sections = dockItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section) => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
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
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-neutral-900/90 px-3 py-2 shadow-2xl backdrop-blur-xl md:hidden"
    >
      <motion.a
        href="#top"
        aria-label="Mujnebin home"
        whileTap={{ scale: 0.92 }}
        className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-all hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <Home aria-hidden="true" focusable="false" size={19} strokeWidth={2} />
      </motion.a>

      <span aria-hidden="true" className="h-4 w-[1px] bg-white/10" />

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
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isActive
                ? 'bg-white/10 text-emerald-400'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Icon
              aria-hidden="true"
              focusable="false"
              size={19}
              strokeWidth={2}
            />
          </motion.a>
        )
      })}

      <span aria-hidden="true" className="h-4 w-[1px] bg-white/10" />

      <motion.button
        type="button"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDarkMode}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-all hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
