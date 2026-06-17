import { FaReact } from 'react-icons/fa6';
import {FaGraduationCap, FaBriefcase, FaGamepad } from 'react-icons/fa';
import { LuGraduationCap } from "react-icons/lu";
import flightfinder from "@/public/flightfinder.png"
import weatherView from "@/public/weatherview.png";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { DiCode } from "react-icons/di";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: LuGraduationCap,
    date: "2021",
    iconBg:"rgb(60, 179, 113)",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: FaReact,
    date: "2021 - 2023",
    iconBg:"#0274b3",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: DiCode,
    date: "2023 - present",
    iconBg:"rgb(0, 0, 0)",
  },
] as const;

export const projectsData = [
  {
    title: "Flight Finder",
    summary:
      "A minimalist landing page for flight search with animated form transitions.",
    stacks: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: flightfinder,
  },
  {
    title: "WeatherView",
    summary:
      "A sleek weather app that displays real-time weather data, forecasts, and UV/wind metrics with a clean mobile-first design.",
    stacks: ["TypeScript", "Next.js", "Tailwind",],
    imageUrl: weatherView,
  },
  {
    title: "Word Analytics",
    summary:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    stacks: ["React", "SQL", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
    bg: "bg-[#0274b3]",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
    bg: "bg-[#24262a]",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: FaInstagram,
    bg: "bg-gradient-to-tr from-[#405de6] via-[#b33ab4] to-[#fd1f1f]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: FaYoutube,
    bg: "bg-[#ff0000]",
  },
] as const;

export const cards = [
  {
    title: 'Education',
    description:
      'Bachelor’s degree in Computer Engineering from University of Miami',
    icon: FaGraduationCap,
    color: '#ef476f',
  },
  {
    title: 'Experience',
    description:
      'Full-stack developer with 4 years experience in React, Next.js, Tailwind CSS, and Node.js.',
    icon: FaBriefcase,
    color: '#ffd23f',
  },
  {
    title: 'Hobbies',
    description:
      'I enjoy design, gaming, music, and travel in my free time.',
    icon: FaGamepad,
    color: '#00a6ed',
  },
]as const;


