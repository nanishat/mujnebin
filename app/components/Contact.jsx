import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/nanishat' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mujnebin-safiul/' },
  { label: 'Discord', href: 'https://discord.com/users/702535873450999838' },
]

const welcomeEntry = {
  command: null,
  output: "Type 'help' or click buttons below to run interactive commands.",
}

const Contact = () => {
  const [result, setResult] = useState('')
  const [command, setCommand] = useState('')
  const [entries, setEntries] = useState([welcomeEntry])
  const outputRef = useRef(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [entries])

  const runCommand = (input) => {
    const normalizedCommand = input.trim().toLowerCase()

    if (!normalizedCommand) return
    if (normalizedCommand === 'clear') {
      setEntries([])
      setCommand('')
      return
    }

    const outputs = {
      help: {
        output: 'Available commands: help, about, skills, contact, socials, clear',
      },
      about: {
        output:
          "I'm Safiul, a software developer who turns complex business needs into clear, reliable systems.\nI build full-stack tools that solve real problems and create value.",
      },
      skills: {
        output:
          'Frontend: React, Next.js\nBackend: Node.js, Express.js, GCP\nDatabase: PostgreSQL, MySQL',
      },
      contact: { type: 'contact' },
      socials: { type: 'socials' },
    }

    const response = outputs[normalizedCommand] ?? {
      output: "Command not found. Type 'help' for a list of available commands.",
    }

    setEntries((currentEntries) => [
      ...currentEntries,
      { command: input.trim(), ...response },
    ])
    setCommand('')
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'e3c6d922-0d77-43ff-8226-e1753e90d2ad')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  const renderOutput = (entry) => {
    if (entry.type === 'contact') {
      return (
        <a
          href='mailto:mujnebinsafiul@gmail.com'
          className='text-emerald-300 underline underline-offset-2 hover:text-emerald-200'
        >
          mujnebinsafiul@gmail.com
        </a>
      )
    }

    if (entry.type === 'socials') {
      return (
        <span className='flex flex-wrap gap-x-4 gap-y-1'>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-emerald-300 underline underline-offset-2 hover:text-emerald-200'
            >
              {link.label}
            </a>
          ))}
        </span>
      )
    }

    return <span className='whitespace-pre-line'>{entry.output}</span>
  }

  const quickActions = [
    { label: 'help', command: 'help' },
    { label: 'skills', command: 'skills' },
    { label: 'github', command: 'socials' },
    { label: 'linkedin', command: 'socials' },
    { label: 'email', command: 'contact' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id='contact'
      className='scroll-mt-20 bg-[#FBF9F5] py-20 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 md:scroll-mt-24 md:py-28'
    >
      <div className='mx-auto max-w-6xl px-6 md:px-12'>
        <p className='mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400'>
          Contact
        </p>
        <h2 className='mb-10 text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 md:text-4xl'>
          Get in touch
        </h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='flex flex-col gap-4 lg:col-span-5'
          >
            <div className='flex min-h-[320px] flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900 p-5 font-mono text-xs text-neutral-300 shadow-xl'>
              <div className='mb-4 flex items-center gap-2 border-b border-neutral-800 pb-4'>
                <span aria-hidden='true' className='h-2.5 w-2.5 rounded-full bg-red-500' />
                <span aria-hidden='true' className='h-2.5 w-2.5 rounded-full bg-yellow-400' />
                <span aria-hidden='true' className='h-2.5 w-2.5 rounded-full bg-green-500' />
                <span className='ml-2 text-neutral-500'>safiul@dev:~ (zsh)</span>
              </div>

              <div
                ref={outputRef}
                aria-live='polite'
                className='mb-4 min-h-0 flex-1 space-y-3 overflow-y-auto'
              >
                {entries.map((entry, index) => (
                  <div key={`${entry.command ?? 'welcome'}-${index}`}>
                    {entry.command && (
                      <p className='mb-1 text-neutral-400'>
                        <span className='text-emerald-400'>safiul@portfolio:~$</span>{' '}
                        {entry.command}
                      </p>
                    )}
                    <div className='break-words leading-relaxed'>
                      {renderOutput(entry)}
                    </div>
                  </div>
                ))}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  runCommand(command)
                }}
                className='flex items-center border-t border-neutral-800 pt-4'
              >
                <label
                  htmlFor='terminal-command'
                  className='shrink-0 text-emerald-400'
                >
                  safiul@portfolio:~$
                </label>
                <input
                  id='terminal-command'
                  aria-label='Terminal command'
                  autoComplete='off'
                  spellCheck='false'
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  className='ml-2 min-w-0 flex-1 bg-transparent text-neutral-100 outline-none'
                />
              </form>
            </div>

            <div className='flex flex-wrap gap-2' aria-label='Terminal quick actions'>
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type='button'
                  onClick={() => runCommand(action.command)}
                  className='rounded-full border border-neutral-300 px-3 py-1.5 font-mono text-xs text-neutral-700 transition-colors hover:border-[#E27355] hover:text-[#E27355] dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-[#E27355] dark:hover:text-[#E27355]'
                >
                  [{action.label}]
                </button>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={onSubmit}
            className='rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm lg:col-span-7 md:p-8 dark:border-neutral-800 dark:bg-neutral-900'
          >
            <div className='mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <input
                name='name'
                type='text'
                placeholder='Enter your name'
                required
                className='h-11 w-full rounded-xl border border-neutral-300 bg-transparent px-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30'
              />
              <input
                name='email'
                type='email'
                placeholder='Enter your email'
                required
                className='h-11 w-full rounded-xl border border-neutral-300 bg-transparent px-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30'
              />
            </div>

            <textarea
              name='message'
              rows='6'
              placeholder='Enter your message'
              required
              className='mb-6 w-full rounded-xl border border-neutral-300 bg-transparent p-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30'
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type='submit'
              className='flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#18181B] px-6 text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300'
            >
              Submit now
              <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </motion.button>

            <p className='mt-4 text-sm text-neutral-600 dark:text-neutral-400'>
              {result}
            </p>
          </motion.form>
        </div>

        <p className='mt-8 border-t border-neutral-200/80 pt-5 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400'>
          © 2026 Safiul Mujnebin. All rights reserved.
        </p>
      </div>
    </motion.section>
  )
}

export default Contact
