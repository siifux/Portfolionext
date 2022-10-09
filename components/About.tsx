import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        About
      </motion.h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/profil.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a motivated and driven Fullstack developer, working for
          Puzzlepart. My passion is playing around with ideas and being able to
          make a difference. I am a teamplayer, which is shown in my everyday
          work where I develop and maintain software with my co-workers. <br />
          <br /> I have a huge interest for design and creativity, and often
          find myself drawn into the idea of creating something "new". I am also
          a big photo enthusiast, often roaming the streets taking photos of the
          world and the people I meet along the way. <br />
          <br />
          <span className="uppercase text-gray-400 tracking-[3px] font-bold">Skills & Interests:</span>{" "}JavaScript, React, HTML5, CSS, Git, Github,
          Angular, Vue, Testing, ASP.NET, SQL.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
