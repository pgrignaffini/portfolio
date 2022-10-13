import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
type Props = {}

function WorkExperience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left 
            md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 
            snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 
            scrollbar-thumb-[#F7Ab0A]/80'>
                <ExperienceCard
                    image="/nmsu.png"
                    society='New Mexico State University'
                    role='Web Administrator'
                    startDate='1/2018'
                    endDate='5/2019'
                    summary={["Web administrator for the college of Arts&Sciences"]}
                    skills={["/html.png", "/css.png", "/js.png"]} />
                <ExperienceCard
                    image="/ca.png"
                    society='Credit Agricole Group Solutions'
                    role='DevOps Engineer'
                    startDate='2/2020'
                    endDate='3/2022'
                    summary={[
                        "Architectural documentation of the company's infrastructure",
                        "Automation of CI/CD pipelines",
                        "Implementation of infrastructure provisioning, monitoring and logging",
                        "Project management with Azure DevOps"
                    ]}
                    skills={["python.png", "jenkins.png", "azure.jpeg"]} />
                <ExperienceCard
                    image="/web3.jpeg"
                    society=''
                    role='Freelance Web3 Developer'
                    startDate='3/2022'
                    summary={[
                        "Developed, implemented and deployed Web3 full-stack applications",
                        "Greengo: decentralized crowdfunding made on Algorand",
                        "PostThread: decentralized social media made on Polkadot",
                        "BazaarMarket: decentralized nft trading marketplace made on Polygon",
                        "For further details see CV"
                    ]}
                    skills={["react.png", "next.png", "tailwind.png", "graphql.png", "trpc.svg", "postgres.png", "js.png", "ts.png"]} />
            </div>
        </motion.div>
    )
}

export default WorkExperience