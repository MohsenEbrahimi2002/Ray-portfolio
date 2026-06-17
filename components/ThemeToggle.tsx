"use client";
import { useEffect, useState } from "react";
import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";

function ThemeToggle() {

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="fixed bg-white dark:bg-slate-950 dark:text-slate-50 flex justify-center items-center  border backdrop-blur-md cursor-pointer transition-all border-slate-900/60 bottom-6 w-12 h-12 rounded-full right-6 hover:scale-110 active:scale-105"
    >
      {theme === "light" ? <FaSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeToggle;
