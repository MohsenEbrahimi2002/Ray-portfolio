"use client";
import Image from "next/image";
import mypic from "@/public/mypic.png";
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import SocialButton from "./SocialButton";
import { useInViewSection } from "@/lib/hook";
import { useActiveContext } from "@/context/activeSectionContext";

function MyIntro() {
  const { ref } = useInViewSection("Home", 0.5);
  const {setLastClickTime , setactiveSection} = useActiveContext()
  return (
    <section ref={ref} className="scroll-mt-60 max-w-200">
      <div className="flex sm:flex-row flex-col ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.175, duration: 0.5 }}
          className=" flex justify-center mt-20"
        >
          <Image
            src={mypic}
            width="400"
            height="400"
            quality={100}
            alt="myPhoto"
            className="rounded-full object-cover sm:mr-10 w-30 h-30 sm:w-100 sm:min-w-70 sm:h-100 border-2 box-content border-gray-700/30"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-center max-w-70 text-slate-200 mx-10 sm:mt-18 mt-8 sm:pt-10"
        >
          <span className="text-xl mb-1 hidden sm:block">hello, i'm</span>
          <h2 className="sm:text-7xl whitespace-nowrap text-5xl mb-4">
            Ray West
          </h2>
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Ui/Ux Designer",
              "Backend Developer",
            ]}
            cursorChar="_"
            smartBackspace={false}
            typeSpeed={50}
            backSpeed={50}
            loop
            className="text-3xl text-center max-w-66"
          ></ReactTyped>
          <div className="flex flex-col  justify-center items-center gap-2 px-4 text-lg font-medium">
            <div className="flex items-center justify-center m-4 gap-2">
              <Link
                onClick={() => {
                  setactiveSection("Contact");
                  setLastClickTime(Date.now());
                }}
                href="#contact"
                className="group bg-gray-950 text-white  flex justify-center items-center px-4 py-3 w-40 gap-2 rounded-full transition outline-none hover:bg-gray-950 active:scale-105 hover:scale-110"
              >
                Contact me
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href="/CV.pdf"
                download
                className="group bg-white whitespace-nowrap flex justify-center items-center text-gray-950 gap-2 px-3 py-3 w-40 rounded-full transition outline-none active:scale-105 hover:scale-110 border-black/10"
              >
                Download CV
                <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
              </a>
            </div>
            <div className="flex mt-4 gap-2">
              <SocialButton />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MyIntro;
