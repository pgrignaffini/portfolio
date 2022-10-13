import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
        min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for details</h3>
            <div className='grid grid-cols-4 gap-5'>
                <Skill src="/ts.png" name="Typescript" directionLeft={true} />
                <Skill src="/js.png" name="Javascript" directionLeft={true} />
                <Skill src="/tailwind.png" name="Tailwind" directionLeft={true} />
                <Skill src="/postgres.jpeg" name="PostgreSQL" directionLeft={true} />
                <Skill src="/graphql.png" name="GraphQL" directionLeft={true} />
                <Skill src="/next.png" name="NextJS" directionLeft={true} />
                <Skill src="/react.png" name="ReactJS" directionLeft={true} />
                <Skill src="/trpc.svg" name="tRPC" directionLeft={true} />
                <Skill src="/css.png" name="CSS" />
                <Skill src="/html.png" name="HTML" />
                <Skill src="/python.png" name="Python" />
                <Skill src="/solidity.jpeg" name="Solidity" />
                <Skill src="/jenkins.png" name="Jenkins" />
                <Skill src="/docker.webp" name="Docker" />
                <Skill src="/git.png" name="Git" />
                <Skill src="/azure.jpeg" name="Azure" />
            </div>
        </motion.div>
    )
}

export default Skills