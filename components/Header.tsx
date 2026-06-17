"use client";
import { easeOut, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveContext } from "@/context/activeSectionContext";

function Header() {
  const { setactiveSection, activeSection, setLastClickTime } =
    useActiveContext();
  return (
    <header className="z-999 relative ">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-1/2 h-18 w-full rounded-none py-3 flex justify-center items-center border border-white/40 -translate-x-1/2 bg-slate-200/60 dark:bg-gray-950/40 shadow-lg shadow-black/3 backdrop-blur-sm sm:top-4 sm:h-13 sm:w-xl sm:rounded-full"
      >
        <nav className="py-2 sm:py-0">
          <ul className="flex flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-700 dark:text-gray-400 sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <li
                key={link.hash}
                className="h-3/4 flex justify-center items-center relative"
              >
                <Link
                  href={link.hash}
                  className={clsx(
                    "px-3 py-2 w-full hover:text-gray-950 dark:hover:text-gray-200 transition",
                    {
                      "text-gray-950": activeSection === link.name,
                    }
                  )}
                  onClick={() => {
                    setactiveSection(link.name);
                    setLastClickTime(Date.now());
                  }}
                >
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activSection"
                      className="bg-gray-500  rounded-full absolute -z-10 inset-0"
                    ></motion.span>
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
