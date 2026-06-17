"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AboutSectionCard from "./AboutSectionCard";

import { useInViewSection } from "@/lib/hook";

function About() {
  const { ref } = useInViewSection("About", 0.5);
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 , duration:0.4 }}
      ref={ref}
      id="about"
      className="mb-20 max-w-360 text-left leading-8 sm:mb-24 scroll-mt-28 mt-28 sm:mt-0"
    >
      <SectionHeading>About Me</SectionHeading>

      <AboutSectionCard />
      <div className="max-w-260 border-l-2 dark:border-l-gray-400 mt-8 text-left pl-2 ml-9">
        <p className="mb-3 dark:text-gray-400">
          After graduating with a degree in{" "}
          <span className="font-medium">Accounting</span>, I decided to pursue
          my passion for programming. I enrolled in a coding bootcamp and
          learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. My core stack is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
