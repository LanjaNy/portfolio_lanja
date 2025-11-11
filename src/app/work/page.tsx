/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import WorkCard from "@/components/ui/WorksCard";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Last portfolio",
    description:
      "A modern and elegant portfolio showcasing skills and projects with a smooth and responsive user interface.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/last_portfolio.png",
    live: "https://nylanja.netlify.app/",
    github: "",
    gitlab: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Typing speed",
    description:
      "Interactive application to measure and improve typing speed with real-time statistics and performance tracking.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/typ-eo.png",
    live: "https://typ-eo.netlify.app/",
    github: "",
    gitlab: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Workpulsetimer",
    description:
      "Productivity timer based on the Pomodoro technique to optimize time management and improve focus.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/workpulsetimer.png",
    live: "https://workpulsetimer.netlify.app/",
    github: "",
    gitlab: "",
  },
  {
    num: "04",
    category: "Frontend & Backend",
    title: "ESN Arato Madagascar website",
    description:
      "Complete corporate website with content management system for a digital services company in Madagascar.",
    stack: [
      { name: "Angular 16" },
      { name: "Tailwindcss" },
      { name: "Laravel 10" },
    ],
    image: "/assets/work/arato.png",
    live: "https://www.arato.mg/home",
    github: "",
    gitlab: "",
  },
  {
    num: "05",
    category: "Frontend & Backend",
    title: "Chrono delivery",
    description:
      "Real-time delivery platform with order tracking and comprehensive logistics management system.",
    stack: [
      { name: "Angular" },
      { name: "SpringBoot" },
      { name: "PostgreSql" },
    ],
    image: "/assets/work/chrono_delivery.png",
    live: "https://www.chrono-delivery.com/",
    github: "",
    gitlab: "",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Price comparison",
    description:
      "Web application for comparing product prices from different sources in real-time with advanced filters.",
    stack: [{ name: "NextJs" }, { name: "RTK Query" }, { name: "Tailwindcss" }],
    image: "/assets/work/comparateur.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Social network",
    description:
      "Social media platform with sharing features, instant messaging and personalized news feed.",
    stack: [{ name: "NextJs" }, { name: "RTK Query" }, { name: "Tailwindcss" }],
    image: "/assets/work/voyance.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "08",
    category: "Frontend",
    title: "Online consultation",
    description:
      "Telemedicine platform allowing appointment booking and video consultations with professionals.",
    stack: [{ name: "NextJs" }, { name: "RTK Query" }, { name: "Tailwindcss" }],
    image: "/assets/work/consultation.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "09",
    category: "Frontend",
    title: "Kajy University Madagascar e-learning platform",
    description:
      "Online learning management system with video courses, interactive quizzes and student progress tracking.",
    stack: [{ name: "Codeigniter 3" }, { name: "Jquery" }],
    image: "/assets/work/kajyu.png",
    live: "",
    github: "",
    gitlab: "",
  },
  // UI/UX Design Projects
  {
    num: "01",
    category: "UI/UX Design",
    title: "Finance platform",
    description:
      "Intuitive interface for financial management with interactive dashboards and data visualization.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/pjsp.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "02",
    category: "UI/UX Design",
    title: "3D Web",
    description:
      "Immersive web experience with interactive 3D elements and smooth animations for modern navigation.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/web3d.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "03",
    category: "UI/UX Design",
    title: "El Pirata",
    description:
      "Colorful and engaging design for an entertainment application with a playful and intuitive interface.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/el_pirata.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "04",
    category: "UI/UX Design",
    title: "Empty trip",
    description:
      "Carpooling application optimizing empty trips with geolocation and reservation system.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/trajet_a_vide.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "05",
    category: "UI/UX Design",
    title: "Internship hub mobile",
    description:
      "Mobile application facilitating internship search and management with intelligent student-company matching.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/pole_stage.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "06",
    category: "UI/UX Design",
    title: "Chrono delivery mobile",
    description:
      "Clean mobile interface for real-time delivery tracking with push notifications and interactive map.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/chrono_delivery.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "07",
    category: "UI/UX Design",
    title: "Project management",
    description:
      "Collaborative project management tool with Kanban boards, Gantt charts and time tracking.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/gestion_projet.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "08",
    category: "UI/UX Design",
    title: "Online consultation",
    description:
      "Professional interface for remote medical consultations with integrated secure payment system.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/consultation_doctor.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "09",
    category: "UI/UX Design",
    title: "Price comparison",
    description:
      "Minimalist and efficient design to quickly compare prices with advanced filters and personalized alerts.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/comparateur.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "10",
    category: "UI/UX Design",
    title: "Bom",
    description:
      "Modern application with clean design and innovative features for an optimal user experience.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/bom.png",
    live: "",
    github: "",
    gitlab: "",
  },
  {
    num: "11",
    category: "UI/UX Design",
    title: "Aura",
    description:
      "Elegant and sophisticated interface with special attention to visual details and accessibility.",
    stack: [{ name: "figma" }],
    image: "/assets/work/design/aura.png",
    live: "",
    github: "",
    gitlab: "",
  },
];

const services = [
  {
    title: "UI/UX Design",
    description:
      "I create digital interfaces that combine aesthetics and functionality, always putting the user at the center. My approach combines research, prototyping and visual design to deliver intuitive and memorable experiences.",
  },
  {
    title: "Web Development",
    description:
      "I build high-performance, responsive and secure websites and web applications, combining modern technologies and development best practices. My goal is to transform ideas into functional digital experiences, optimized for all devices and interfaces.",
  },
  {
    title: "Mobile Development",
    description:
      "I develop cross-platform mobile applications with clean code and optimal functionality.",
  },
];

const getFilteredProjects = (serviceTitle: string) => {
  return projects.filter((project) => {
    const stackNames = project.stack.map((item) => item.name.toLowerCase());
    if (serviceTitle === "UI/UX Design") {
      return stackNames.includes("figma");
    } else if (serviceTitle === "Web Development") {
      return (
        stackNames.includes("html") ||
        stackNames.includes("css") ||
        stackNames.includes("tailwindcss") ||
        stackNames.includes("nextjs") ||
        stackNames.includes("angular") ||
        stackNames.includes("angular 16") ||
        stackNames.includes("laravel") ||
        stackNames.includes("springboot") ||
        stackNames.includes("codeigniter 3") ||
        stackNames.includes("jquery")
      );
    } else if (serviceTitle === "Mobile Development") {
      return (
        stackNames.includes("flutter") ||
        stackNames.includes("react native") ||
        stackNames.includes("ionic angular")
      );
    }
    return false;
  });
};

const WorkPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(
    getFilteredProjects(services[0].title)
  );

  useEffect(() => {
    const newFiltered = getFilteredProjects(services[activeService].title);
    setFilteredProjects(newFiltered);
  }, [activeService]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen py-12 xl:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center xl:text-left">
          <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6">My Projects</h2>

          <div className="flex flex-wrap justify-center xl:justify-start gap-3 mb-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full text-sm xl:text-base font-medium transition-all duration-300 ${
                  activeService === index
                    ? "bg-accent text-primary"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <p className="text-white/60 max-w-3xl mx-auto xl:mx-0 text-sm xl:text-base">
            {services[activeService].description}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {filteredProjects.map((project, index) => (
              <WorkCard key={index} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No projects available for this category yet.</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default WorkPage;