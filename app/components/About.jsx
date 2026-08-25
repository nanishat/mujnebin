import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            I started coding at the beginning of my university career and completed a six-month internship with BRAC's Skills Development Programme (SDP). There, I built a field information collection web application with cascading, multi-layer filtering that supported BRAC's existing system and reached 400+ users across 370+ branches. I currently work at Protection One Pvt. Ltd. as an in-house Software Developer, building an ERP solution from scratch with <span className='text-[#F87171]'>Next.js, PostgreSQL</span> and <span className='text-[#5AEECC]'>Docker</span>. My long-term goal is to build technology that creates meaningful impact and adds real value to people's work and lives.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className='border-[0.5px] border-arsenic rounded-xl p-6 cursor-pointer
                 hover:bg-lightHover/50 hover:-translate-y-1 duration-500 shadow-md hover:shadow-lg hover:shadow-richBlack
                 dark:border-chineseWhite dark:hover:shadow-chineseWhite dark:hover:bg-darkHover/50 min-w-0'
              >
                <Image src={isDarkMode ? item.iconDark : item.icon} alt={item.title} className='w-7 mt-7' />
                <h3 className='my-4 font-semibold break-words'>{item.title}</h3>

                {item.period && <p className='mb-3 text-sm font-semibold'>{item.period}</p>}

                {item.kpis && (
                  <div className='grid grid-cols-3 gap-2 mb-4'>
                    {item.kpis.map((kpi) => (
                      <div key={kpi.label}>
                        <p className='text-lg font-semibold leading-tight'>{kpi.value}</p>
                        <p className='text-xs leading-4 text-gray-600 dark:text-white/80'>{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.description && <p className='text-gray-600 text-sm dark:text-white/80'>{item.description}</p>}

                {item.stack && <p className='mt-3 text-sm font-medium'>{item.stack}</p>}

                {item.publications && (
                  <div className='text-gray-600 text-sm dark:text-white/80 space-y-2'>
                    {item.publications.map((research) => (
                      <a
                        key={research.title}
                        href={research.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='block hover:text-tigerEye dark:hover:text-chineseRed transition-colors'
                      >
                        {research.title}
                      </a>
                    ))}
                  </div>
                )}

                {item.projectCount && <p className='mt-3 text-sm font-medium'>{item.projectCount}</p>}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About