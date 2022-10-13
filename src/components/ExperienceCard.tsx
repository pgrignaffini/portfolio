import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    image: string
    society: string
    role: string
    startDate: string
    endDate?: string
    summary: string[]
    skills?: string[]
}

function ExperienceCard({ society, role, startDate, endDate, summary, image, skills }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
        md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full object-cover object-center'
                src={image} />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{role}</h4>
                <p className='font-bold text-2xl mt-1'>{society}</p>
                <div className='flex space-x-2 my-2'>
                    {skills?.map((skill, i) => (
                        <img key={i} src={skill} className='h-10 w-10 rounded-full' />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>Started {startDate} - {`${endDate ? `Ended ${endDate}` : "Current"} `}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {summary?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard