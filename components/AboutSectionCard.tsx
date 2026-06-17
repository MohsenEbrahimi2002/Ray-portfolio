import { cards } from "@/lib/data";
import React from "react";

function AboutSectionCard() {
  return (
  <div className="flex flex-row flex-wrap justify-center gap-16  p-8">
      {cards.map(({ title, description, icon: Icon, color }, index) => (
        <div
          key={index}
          className="relative w-[300px] h-[350px] text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl overflow-hidden isolate group"
          style={{
            backgroundColor: '#393e41',
            '--color': color,
          } as React.CSSProperties}
        >
          {/* Border animation */}
          <div className="absolute -inset-[50%] z-[-2] animate-spin-slow group-hover:paused before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(var(--color)_0deg,transparent_60deg,transparent_180deg,var(--color)_180deg,transparent_240deg)]" />
          {/* Inner background */}
          <div className="absolute inset-1 z-[-1] rounded-[0.875rem] bg-[#222131] group-hover:bg-[#393e41] transition-all duration-300" />

          {/* Icon */}
         <Icon className="text-[3.5rem] mb-4 transition-all duration-300" style={{ color }} />
          {/* Title */}
          <h3
            className="text-xl font-semibold text-center mb-4"
            style={{ color }}
          >
            {title}
          </h3>
          {/* Description */}
          <p className="text-center text-md opacity-75 tracking-wider leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </div>


  );
}

export default AboutSectionCard;
