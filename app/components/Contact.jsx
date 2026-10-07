import { useEffect, useRef, useState } from 'react'
import { profile, socialLinks } from '@/config/site'
import { quickActions, welcomeEntry } from '@/data/contact'
import { getTerminalResponse } from '@/lib/terminal'
import { submitContactForm } from '@/lib/contact-form'
import { motion } from 'motion/react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

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
    const response = getTerminalResponse(input)
    if (!response) return

    if (response.clear) {
      setEntries([])
      setCommand('')
      return
    }

    setEntries((currentEntries) => [...currentEntries, response])
    setCommand('')
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    try {
      const data = await submitContactForm(formData)
      if (data.success) {
        setResult('Form Submitted Successfully')
        event.target.reset()
      } else {
        setResult(data.message)
      }
    } catch (error) {
      console.error('Contact form submission failed', error)
      setResult('Unable to submit the form. Please try again.')
    }
  }

  const onCommandSubmit = (event) => {
    event.preventDefault()
    runCommand(command)
  }

  const renderOutput = (entry) => {
    if (entry.type === 'contact') {
      return (
        <a
          href={`mailto:${profile.email}`}
          className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
        >
          {profile.email}
        </a>
      )
    }

    if (entry.type === 'socials') {
      return (
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
            >
              {link.label}
            </a>
          ))}
        </span>
      )
    }

    return <span className="whitespace-pre-line">{entry.output}</span>
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="scroll-mt-20 bg-[#FBF9F5] py-20 text-neutral-900 md:scroll-mt-24 md:py-28 dark:bg-neutral-950 dark:text-neutral-100"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
          Contact
        </p>
        <h2 className="mb-10 text-3xl font-extrabold text-neutral-900 md:text-4xl dark:text-neutral-100">
          Get in touch
        </h2>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="flex h-[420px] max-h-[420px] flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900 p-5 font-mono text-xs text-neutral-300 shadow-xl">
              <div className="mb-4 flex items-center gap-2 border-b border-neutral-800 pb-4">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-red-500"
                />
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-yellow-400"
                />
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-green-500"
                />
                <span className="ml-2 text-neutral-500">
                  safiul@dev:~ (zsh)
                </span>
              </div>

              <div
                ref={outputRef}
                aria-live="polite"
                className="custom-scrollbar mb-4 min-h-0 flex-1 space-y-3 overflow-y-auto"
              >
                {entries.map((entry, index) => (
                  <div key={`${entry.command ?? 'welcome'}-${index}`}>
                    {entry.command && (
                      <p className="mb-1 text-neutral-400">
                        <span className="text-emerald-400">
                          safiul@portfolio:~$
                        </span>{' '}
                        {entry.command}
                      </p>
                    )}
                    <div className="break-words leading-relaxed">
                      {renderOutput(entry)}
                    </div>
                  </div>
                ))}
              </div>

              <form
                onSubmit={onCommandSubmit}
                className="flex items-center border-t border-neutral-800 pt-4"
              >
                <label
                  htmlFor="terminal-command"
                  className="shrink-0 text-emerald-400"
                >
                  safiul@portfolio:~$
                </label>
                <input
                  id="terminal-command"
                  aria-label="Terminal command"
                  autoComplete="off"
                  spellCheck="false"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  className="ml-2 min-w-0 flex-1 bg-transparent text-neutral-100 outline-none"
                />
              </form>
            </div>

            <div
              className="flex flex-wrap gap-2"
              aria-label="Terminal quick actions"
            >
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => runCommand(action.command)}
                  className="rounded-full border border-neutral-300 px-3 py-1.5 font-mono text-xs text-neutral-700 transition-colors hover:border-[#E27355] hover:text-[#E27355] dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-[#E27355] dark:hover:text-[#E27355]"
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
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm md:p-8 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="h-11 w-full rounded-xl border border-neutral-300 bg-transparent px-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30"
              />
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="h-11 w-full rounded-xl border border-neutral-300 bg-transparent px-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30"
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              className="mb-6 w-full rounded-xl border border-neutral-300 bg-transparent p-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#18181B] px-6 text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              Submit now
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </motion.button>

            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              {result}
            </p>
          </motion.form>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center space-y-1 px-2 pt-8 pb-16 text-center">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Just another guy on a mission to turn caffeine into code.
          </p>
          <p className="font-mono text-xs tracking-tight text-neutral-500 dark:text-neutral-500">
            Handcrafted with Next.js, Motion &amp; Tailwind
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
