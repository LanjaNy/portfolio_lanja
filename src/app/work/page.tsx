/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsGithub, BsGitlab } from "react-icons/bs";
// import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useRouter } from "next/navigation";

const projects = [
  {
    num: "01",
    category: "Frontend & Backend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis repellat aliquid voluptatibus magni quos rem a eos, architecto dolorem deserunt",
    stack: [
      { name: "Angular 16" },
      { name: "Laravel 10" },
      { name: "PostgreSql" },
    ],
    image: "/assets/work/w1.PNG",
    live: "http://localhost:4000",
    github: "",    
    gitlab: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "Amet consectetur adipisicing elit. Veritatis repellat aliquid voluptatibus magni quos rem a eos, architecto dolorem deserunt",
    stack: [{ name: "Angular 16" }],
    image: "/assets/work/w2.PNG",
    live: "",
    github: "",    
    gitlab: "",
  },
  {
    num: "03",
    category: "Frontend & Backend",
    title: "project 3",
    description:
      "Veritatis repellat aliquid voluptatibus magni quos rem a eos, architecto dolorem deserunt met consectetur adipisicing elit.",
    stack: [{ name: "NextJs" }, { name: "NestJs" }, { name: "MongoDB" }],
    image: "/assets/work/w3.PNG",
    live: "",
    github: "",    
    gitlab: "",
  },
];

const page = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setActiveIndex(swiper.activeIndex);
  };
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
              {/* <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul> */}
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                <Link
                  href={project.live}
                  className="bg-black/10 rounded-full p-5 hover:-rotate-45 group-hover:bg-accent transition-all duration-500"
                >
                  <BsArrowRight className="text-white text-3xl" />
                </Link>
                <Link
                  href={project.github}
                  className="bg-black/10 rounded-full p-5"
                >
                  <BsGithub className="text-white text-3xl group-hover:text-accent" />
                </Link>
                <Link
                  href={project.github}
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
              {projects.map((project, index) => (
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
                        fill
                        className="object-cover rounded-xl pb-3"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
