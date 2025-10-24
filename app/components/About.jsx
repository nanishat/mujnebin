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
            I'm a passionate Full Stack Developer focused on building clean, scalable, and user-centric web applications. I take pride in my problem-solving abilities, which empower me to tackle challenges head-on. My insatiable thirst for knowledge drives me to continuously learn and grow in the ever-evolving tech landscape and work with cutting-edge technologies. I specialize in <span className='text-[#F87171]'>React.js, Next.js</span> and <span className='text-[#F87171]'>TailwindCSS</span> on the <span className='text-[#F87171]'>frontend,</span>, and <span className='text-[#5AEECC]'>Node.js</span> and <span className='text-[#5AEECC]'>Express.js</span> on the <span className='text-[#5AEECC]'>backend</span>. Also I'm used to working with Version Control platforms like <span className='text-[#C084FC]'>Git, Github</span> and <span className='text-[#C084FC]'>GitLab</span>. Let's create exceptional digital experiences together!
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
                 dark:border-chineseWhite dark:hover:shadow-chineseWhite dark:hover:bg-darkHover/50'
              >
                <Image src={isDarkMode ? item.iconDark : item.icon} alt={item.title} className='w-7 mt-7' />
                <h3 className='my-4 font-semibold'>{item.title}</h3>

                {typeof item.description === 'string' ? (
                  <p className='text-gray-600 text-sm dark:text-white/80'>{item.description}</p>
                ) : (
                  <div className='text-gray-600 text-sm dark:text-white/80 space-y-2'>
                    {item.description.map((research, idx) => (
                      <a
                        key={idx}
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
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About