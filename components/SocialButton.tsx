import { socials } from "@/lib/data"

function SocialButton() {
  return (
    <ul className="flex justify-center items-center gap-5 list-none">
      {socials.map((soc) => (
        <li key={soc.name} className="relative group">
          <a
            href={soc.href}
            target="_blank"
            aria-label={soc.name}
            className="relative flex justify-center items-center border w-[50px] h-[50px] rounded-full bg-white text-gray-900 overflow-hidden transition-all duration-300 hover:text-white hover:shadow-[3px_2px_45px_rgba(0,0,0,0.12)]"
          >
            <div
              className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ${soc.bg} group-hover:h-full`}
            />
            <soc.icon className="relative z-10 w-[30px] h-[30px]" />
          </a>
          <div
            className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 text-white text-sm rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-[0.5px] transition-all duration-300 ${soc.bg}`}
          >
            {soc.name}
          </div>
        </li>
      ))}
    </ul>


  )
}

export default SocialButton