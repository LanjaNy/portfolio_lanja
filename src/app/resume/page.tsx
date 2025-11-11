"use client";
import {
  FaHtml5,
  FaCss3,
  FaAngular,
  FaJs,
  FaPhp,
  FaLaravel,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiIonic,
  SiTypescript,
  SiDocker,
  SiFlutter,
  SiPostgresql,
  SiUml,
  SiMysql,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ItemText } from "@radix-ui/react-select";

const about = {
  title: "About me",
  description:
    "I’m a passionate developer and designer, skilled in building responsive web and mobile applications. I focus on creating seamless user experiences, leveraging both frontend and backend technologies to deliver high-quality solutions. Always learning and evolving to stay ahead in the tech world.",
  info: [
    {
      fieldName: "Name",
      filedValue: "Ny Lanja",
    },
    {
      fieldName: "Phone",
      filedValue: "(+261) 34 991 88 48",
    },
    {
      fieldName: "Experience",
      filedValue: "3+ Years",
    },
    {
      fieldName: "WhatsApp",
      filedValue: "(+261) 34 141 51 87",
    },
    {
      fieldName: "Nationality",
      filedValue: "Malagasy",
    },
    {
      fieldName: "Email",
      filedValue: "rnflanja06@gmail.com",
    },
    {
      fieldName: "Freelance",
      filedValue: "Available",
    },
    {
      fieldName: "Languages",
      filedValue: "English, French, Malagasy",
    },
  ],
};
const experience = {
  icon: "icon",
  title: "My experience",
  description:
    "Full-Stack Developer & UI/UX Designer skilled in React, Next, Angular, NestJS, Laravel, and Flutter. Passionate about building seamless digital experiences, optimizing performance, and crafting intuitive user interfaces.",
  items: [
    {
      company: "Arato Fianarantsoa.",
      position: "Fullstack developer & UI/UX designer",
      duration: "2022 - Present",
    },
    {
      company: "EMITECH.",
      position: "Teaching Assistant",
      duration: "2023 - 2024",
    },
    {
      company: "Arato Fianarantsoa.",
      position: "Frontend developer Interne",
      duration: "2022 - 2023",
    },
    {
      company: "Freelance jobs.",
      position: "Freelance",
      duration: "2022 - 2023",
    },
  ],
};
const education = {
  icon: "icon",
  title: "My education",
  description:
    "Professional training in software development at the University of Fianarantsoa, EMIT.",
  items: [
    {
      institution: "EMIT Fianarantsoa",
      degree: "Master one",
      duration: "Present",
    },
    {
      institution: "Esti certificate Docker",
      degree: "Certification in Docker",
      duration: "2025",
    },
    {
      institution: "EMIT Fianarantsoa",
      degree: "Licences diploma",
      duration: "2023",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Here you'll find a list of the technologies I specialize in, covering both frontend and backend development, database management, and UI/UX design, empowering me to create high-quality and responsive digital solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiIonic />,
      name: "Ionic",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSql",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <SiUml />,
      name: "Uml",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next",
    },
    {
      icon: <SiGit />,
      name: "Git command",
    },
  ],
};
const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-centerlg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-centerlg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-[20px] p-5">
                    {skills.skillList.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[174px] py-6 marker:rounded-xl flex flex-col justify-center items-center gap-5"
                        >
                          <span className="text-accent text-5xl">
                            {item.icon}
                          </span>
                          <h3 className="text-md text-white/50 text-center lg:text-left">
                            {item.name}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((abt, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{abt.fieldName}</span>
                        <span>{abt.filedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
