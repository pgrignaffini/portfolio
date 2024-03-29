import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col 
            items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
      <div
        className="flex w-full snap-x snap-mandatory space-x-5 
            overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 
            scrollbar-thumb-[#F7Ab0A]/80"
      >
        <ExperienceCard
          image="/nmsu.png"
          society="New Mexico State University"
          role="Web Administrator"
          startDate="1/2018"
          endDate="5/2019"
          summary={["Web administrator for the college of Arts&Sciences"]}
          skills={["/html.png", "/css.png", "/js.png"]}
        />
        <ExperienceCard
          image="/ca.png"
          society="Credit Agricole Group Solutions"
          role="DevOps Engineer"
          startDate="2/2020"
          endDate="3/2022"
          summary={[
            "Architectural documentation of the company's infrastructure",
            "Automation of CI/CD pipelines",
            "Implementation of infrastructure provisioning, monitoring and logging",
            "Project management with Azure DevOps",
          ]}
          skills={["python.png", "jenkins.png", "azure.jpeg"]}
        />
        <ExperienceCard
          image="/web3.jpeg"
          society=""
          role="Freelance Web3 Developer"
          startDate="3/2022"
          summary={[
            "Developed, implemented and deployed Web3 full-stack applications",
            "Greengo: decentralized crowdfunding made on Algorand",
            "PostThread: decentralized social media made on Polkadot",
            "UnstableLabs: AI-generated NFTs made on Polygon",
            "For further details see CV",
          ]}
          skills={[
            "react.png",
            "next.png",
            "tailwind.png",
            "graphql.png",
            "trpc.svg",
            "postgres.png",
            "js.png",
            "ts.png",
          ]}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
