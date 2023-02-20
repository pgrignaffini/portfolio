import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen flex-col items-center justify-evenly px-10 text-center md:max-w-7xl md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="-mb-20 mt-16 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[400px] xl:w-[300px]"
        src="/me.jpg"
      />
      <div className="mx-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hey there! 👋 <br /> I&apos;m a reliable and passionate individual
          who&apos;s eager to contribute my skills to a blockchain development
          team👨🏻‍💻 <br />
          Through my education and work experience as a DevOps Engineer at an
          international bank, I&apos;ve gained extensive knowledge and hands-on
          experience in computer science 🤓 <br />
          Recently, I&apos;ve been diving deep into the world of blockchain
          technology, participating in several Web3 hackathons such as
          ETHGlobal, Polkadot N.A., and Encode x Algorand. It&apos;s been a
          blast implementing innovative ideas and presenting them to the vibrant
          Web3-community 🚀 <br />
          I&apos;m currently on the lookout for a job that would give me the
          opportunity to work on building the next big thing on Web3 🛠 <br />
          Also, interesting fact about me: I lived in New Mexico for two years
          while pursuing my master&apos;s degree. It was an incredible
          experience and I&apos;m grateful for the knowledge and skills I gained
          during my time there 🇺🇸
        </p>
      </div>
    </motion.div>
  );
}

export default About;
