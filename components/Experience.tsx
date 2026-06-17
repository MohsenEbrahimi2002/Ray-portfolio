"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";

function Experience() {
  return (
    <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
      <SectionHeading>My Experience</SectionHeading>

      <div className="relative mt-12">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-400/70 dark:bg-gray-600 -translate-x-1/2" />

        <div className="flex flex-col gap-16">
          {experiencesData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative w-full flex"
              >
                <div className="w-full">
                  <div className="max-w-md p-4 rounded-md shadow-md bg-gray-300 dark:bg-gray-700">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <div
                        className="rounded-full flex justify-center items-center p-2"
                        style={{
                          backgroundColor: item.iconBg,
                          color: index === 2 ? "white" : "",
                        }}
                      >
                        <Icon className="text-lg" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
