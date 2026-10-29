import { FileText, FolderGit2, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '@/config/site'

const actions = [
  {
    label: 'View Featured Projects',
    href: '#projects',
    icon: FolderGit2,
    variant: 'primary',
  },
  {
    label: 'Download Resume',
    href: profile.resume,
    download: 'mujnebin-resume.pdf',
    icon: FileText,
    variant: 'secondary',
  },
  {
    label: 'Get in Touch',
    href: '#contact',
    icon: Mail,
    variant: 'secondary',
  },
]

const HeroCTAs = () => (
  <div className="mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
    {actions.map(({ label, href, download, icon: Icon, variant }) => (
      <motion.a
        key={label}
        href={href}
        download={download}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl px-5 transition-colors sm:w-auto ${
          variant === 'primary'
            ? 'bg-[#18181B] text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300'
            : 'border border-neutral-300 text-neutral-900 hover:bg-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900'
        }`}
      >
        <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
        {label}
      </motion.a>
    ))}
  </div>
)

export default HeroCTAs
