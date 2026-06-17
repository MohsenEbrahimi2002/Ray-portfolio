"use client";
import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useInViewSection } from "@/lib/hook";
import { motion } from "motion/react";

const skillanimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.3
    },
  }),
};

function Skills() {
  const { ref } = useInViewSection("Skills", 0.33);
  return (
    <section ref={ref} id="skills" className="scroll-mt-28 max-w-176 mb-28">
      <SectionHeading>Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center items-center gap-3 text-lg ">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-[#52515e] text-white/70 rounded-lg px-3 py-1.5 "
            variants={skillanimation}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
