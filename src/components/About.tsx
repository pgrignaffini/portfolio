import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col text-center md:text-left relative h-screen md:max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]"
                src="/me.jpg" />
            <div className='space-y-10 mx-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet
                </p>
            </div>
        </motion.div>
    )
}

export default About