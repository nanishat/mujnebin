'use client'

import { navigationLinks } from '@/config/site'
import { Briefcase, Code, Folder, Mail, User } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const dockItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Folder },
  { href: '#contact', label: 'Contact', icon: Mail },
]

const MobileDock = () => {
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
      aria-label="Mobile section navigation"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-neutral-200/80 bg-white/80 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-lg md:hidden dark:border-neutral-800 dark:bg-neutral-900/80"
    >
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
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isActive
                ? 'bg-neutral-100 text-emerald-500 dark:bg-neutral-800'
                : 'text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
            }`}
          >
            <Icon
              aria-hidden="true"
              focusable="false"
              size={20}
              strokeWidth={2}
            />
          </motion.a>
        )
      })}
    </nav>
  )
}

export default MobileDock
