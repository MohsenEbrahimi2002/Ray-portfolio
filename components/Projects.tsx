"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
type ProjectsData = (typeof projectsData)[number];
function Projects({ title, summary, stacks, imageUrl }: ProjectsData) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleP = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const scaleO = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{ opacity: scaleO, scale: scaleP }}
      id="projects"
      ref={ref}
      className="group  scroll-mt-60 "
    >
      <section className="bg-gray-300/70 dark:bg-gray-950 relative rounded-md justify-center my-6 transition max-w-2xl border hover:bg-gray-600/70 border-black/5 sm:h-80 group:even:pr-3 overflow-hidden">
        <div className="py-4 px-5 sm:pl-10  sm:pt-10 sm:max-w-1/2 w-full h-full sm:group-even:ml-88  even:pl-8 flex flex-col">
          <h3 className="text-2xl font-semibold dark:text-gray-400">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-400">{summary}</p>
          <div className="mt-4 flex flex-row">
            <a
            target="_blank"
                href="https://github.com/"
                rel="noopener noreferrer"
                className="text-sm bg-slate-400/60 font-semibold text-black flex flex-row justify-center items-center px-3 py-1 rounded-2xl gap-1 hover:scale-105 "
              >
                GitHub <FaGithub className="text-black"/>
              </a>
            
              <a
              target="_blank"
                href="https://vercel.com/"
                rel="noopener noreferrer"
                className="text-sm flex flex-row gap-1  items-center justify-center mx-4 bg-slate-800 px-3 py-1 rounded-2xl text-slate-50  hover:scale-105 "
              >
                Live Demo
                <IoLogoVercel />
              </a>
</div>

          <ul className="flex flex-wrap gap-2 mt-2 py-2 sm:mt-auto">
            {stacks.map((tag, index) => (
              <li
                className="bg-[#52515e] px-3 py-1 text-[0.75rem] uppercase tracking-wider flex flex-wrap text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={100}
          className="sm:absolute top-8 max-h-100 -right-50 w-113 rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-50 group-hover:translate-y-3 group-hover:group-even:translate-y-3 group-hover:-translate-x-3 group-hover:-rotate-8 transition group-hover:scale-[1.1] group-even:group-hover:translate-x-3 group-even:group-hover:rotate-6"
        />
      </section>
    </motion.div>
  );
}

export default Projects;
