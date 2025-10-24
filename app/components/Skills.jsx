import { skillCategories } from '@/assets/assets';
import { motion } from 'motion/react'
import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className="min-h-screen py-[10rem] px-4">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo mb-10'
      >
        My skills
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="text-5xl mb-2 cursor-pointer">{category.emoji}</div>
              <div className="text-lg font-semibold font-Ovo">{category.label}</div>
            </div>

            <div className="flex-1 border border-arsenic dark:border-chineseWhite rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-12 justify-center">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
                  >
                    <div className="text-4xl cursor-pointer">{<Image src={skill.icon} alt='' />}</div>
                    <div className="text-sm font-medium text-arsenic dark:text-chineseWhite">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;