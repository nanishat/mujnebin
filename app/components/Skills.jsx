import React from 'react';
import { skillCategories } from '@/assets/assets';

const Skills = () => {
  return (
    <div id='skills' className="min-h-screen py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-16">Skills</h1>

      <div className="max-w-7xl mx-auto space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="text-5xl mb-2">{category.emoji}</div>
              <div className="text-lg font-semibold">{category.label}</div>
            </div>

            <div className="flex-1 border border-gray-700 rounded-2xl p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
              <div className="flex flex-wrap gap-12 justify-center">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <div className="text-sm font-medium text-gray-300">{skill.name}</div>
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