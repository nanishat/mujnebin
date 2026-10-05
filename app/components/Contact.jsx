import React, { useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3c6d922-0d77-43ff-8226-e1753e90d2ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id='contact'
      className='scroll-mt-20 bg-[#FBF9F5] py-10 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 md:py-20'
    >
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-2'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-[#18181B] p-8 text-white shadow-sm md:p-12'
        >
          <p className='mb-3 font-medium text-[#E27355]'>Connect with me</p>
          <h2 className='text-4xl font-Ovo tracking-tight md:text-5xl'>Get in touch</h2>
          <p className='mt-5 max-w-lg font-Ovo leading-relaxed text-neutral-300'>
            I'd love to hear from you! If you have any questions, comment or feedback, please use the form below.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={onSubmit}
          className='rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm md:p-8 dark:border-neutral-800 dark:bg-neutral-900'
        >
          <div className='mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <input
              name='name' type="text" placeholder='Enter your name' required
              className='h-11 w-full rounded-xl border border-neutral-300 bg-transparent px-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30'
            />
            <input
              name='email' type="email" placeholder='Enter your email' required
              className='h-11 w-full rounded-xl border border-neutral-300 bg-transparent px-4 outline-none transition-colors focus:border-[#E27355] dark:border-neutral-700 dark:bg-darkHover/30'
            />
          </div>

          <textarea
            name='message' rows='6' placeholder='Enter your message' required
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

          <p className='mt-4 text-sm text-neutral-600 dark:text-neutral-400'>{result}</p>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact