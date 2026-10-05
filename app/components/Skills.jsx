import { skillCategories } from '@/assets/assets';
import { motion } from 'motion/react'
import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-12 pb-12 md:scroll-mt-24 md:px-8 md:pt-16 md:pb-16">

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center text-4xl md:text-5xl font-Ovo mb-8 md:mb-10'
      >
        My skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-neutral-200/80 bg-white p-4 md:p-6 shadow-sm dark:bg-arsenic"
          >
            <h3 className="mb-4 text-xl font-semibold font-Ovo text-neutral-900 dark:text-chineseWhite">
              <span className="mr-2" aria-hidden="true">{category.emoji}</span>
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="rounded-full bg-neutral-100 dark:bg-arsenic px-3 py-1 text-xs text-neutral-700 dark:text-chineseWhite"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;