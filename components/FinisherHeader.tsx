"use client";
import { useEffect } from "react";

export default function FinisherHeader() {
  useEffect(() => {
   

    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      new (window as any).FinisherHeader({
        count: 100,
        size: { min: 1, max: 3, pulse: 0 },
        speed: {
          x: { min: 0, max: 0.2 },
          y: { min: 0, max: 0.1 },
        },
        colors: {
          background:"#131120",
          particles: ["#ffffff"],
        },
        blending: "overlay",
        opacity: { center: 0.5, edge: 0.4 },
        skew: -3,
        shapes: ["c"],
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <header className="finisher-header w-full min-w-84 h-170 sm:h-200 absolute top-0 -z-10 overflow-hidden">
        
    </header>
  );
}