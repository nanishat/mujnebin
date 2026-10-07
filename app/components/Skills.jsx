import { skillCategories } from '@/data/skills'
import { motion } from 'motion/react'

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:scroll-mt-24 md:px-12 md:py-28"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
        TECHNICAL SKILLSET
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-extrabold text-neutral-900 md:text-4xl dark:text-neutral-100"
      >
        Skills &amp; Technologies
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="h-full rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            <div className="mb-4">
              <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                {category.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={`${category.label}-${skill}`}
                  className="rounded-lg border border-neutral-200/50 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700/50 dark:bg-neutral-800/80 dark:text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
