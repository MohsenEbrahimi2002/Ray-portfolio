"use client"
import { useInViewSection } from "@/lib/hook"
import SectionHeading from "./SectionHeading"
import { FaPaperPlane } from "react-icons/fa6"

function Contact() {
  const {ref} = useInViewSection("Contact", 0.33)
  return (
    <section ref={ref} id="contact" className="w-[min(100%,28rem)]">
        <SectionHeading>Contact Me</SectionHeading>
       <p className="text-center -mt-10 mb-5 dark:text-gray-400">Please Contact me directly at <a href="mailto:email@mail.com" className="underline">email@mail.com</a> or fill this form</p> 
        <div>
            <form className="flex flex-col gap-2 ">
                <input type="email" placeholder="YourEmail@mail.com" required className="p-2 rounded-lg border dark:text-gray-400" />
                <textarea placeholder="Email Content" required className="p-2 border dark:text-gray-400 rounded-lg h-40" />
                <button type="button" className="group px-3 py-2 my-2 w-26 rounded-full flex justify-center items-center gap-1 bg-slate-950 cursor-pointer transition-all text-slate-50 hover:scale-110">Submit <FaPaperPlane className="text-slate-50/80 text-xs group-hover:-translate-y-1 group-hover:translate-x-1 gr transition-all"/></button>
            </form>
        </div>
    </section>
  )
}

export default Contact