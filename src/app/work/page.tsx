/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsGithub, BsGitlab } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useRouter } from "next/navigation";

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
  //// design UI UX
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
        stackNames.includes("angular 16")
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

const page = () => {
  const [activeService, setActiveService] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(
    getFilteredProjects(services[0].title)
  );
  const [project, setProject] = useState(filteredProjects[0] || projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newFilteredProjects = getFilteredProjects(
      services[activeService].title
    );
    setFilteredProjects(newFilteredProjects);
    setProject(newFilteredProjects[0] || projects[0]);
    setActiveIndex(0);
  }, [activeService]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(filteredProjects[currentIndex] || projects[0]);
    setActiveIndex(currentIndex);
  };

  const handleImageClick = (url: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // router.push(url);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">My projects</h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeService === index
                    ? "bg-accent text-primary"
                    : "bg-black/10 text-white hover:bg-accent/50"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          <p className="text-white/60 text-lg">
            {services[activeService].description}
          </p>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  hidden={project.live == ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/10 rounded-full p-5 hover:-rotate-45 group-hover:bg-accent transition-all duration-500"
                >
                  <BsArrowRight className="text-white text-3xl" />
                </Link>
                <Link
                  href={project.github}
                  hidden={project.github == ""}
                  className="bg-black/10 rounded-full p-5"
                >
                  <BsGithub className="text-white text-3xl group-hover:text-accent" />
                </Link>
                <Link
                  href={project.gitlab}
                  hidden={project.gitlab == ""}
                  className="bg-black/10 rounded-full p-5"
                >
                  <BsGitlab className="text-white text-3xl group-hover:text-accent" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className={`h-[460px] relative group flex justify-center items-center cursor-pointer ${
                        isLoading && activeIndex === index ? "loading" : ""
                      }`}
                      onClick={() => handleImageClick(project.live)}
                    >
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          unoptimized
                          fill
                          className="object-cover rounded-xl pb-3"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide className="w-full">
                  <div className="h-[460px] flex justify-center items-center text-white/60 text-lg">
                    No projects available for this service.
                  </div>
                </SwiperSlide>
              )}
              <div>
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:-bottom-0 z-20 w-full justify-between items-center xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  iconsStyles={undefined}
                >
                  <ul className="flex gap-4">
                    {project.stack.map((item, index) => (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                </WorkSliderBtns>
              </div>
            </Swiper>
            <style jsx>{`
              .loading {
                position: relative;
              }
              .loading::after {
                content: "";
                position: absolute;
                bottom: -4px;
                left: 0;
                height: 4px;
                width: 0;
                background: #00ff99;
                animation: progress 3s linear forwards;
              }
              @keyframes progress {
                0% {
                  width: 0;
                }
                100% {
                  width: 100%;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;