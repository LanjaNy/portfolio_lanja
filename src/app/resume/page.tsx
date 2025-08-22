"use client";
import { useTranslation } from "react-i18next";
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
  SiRedux,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const profileData = {
  about: {
    titleKey: "aboutTitle",
    descriptionKey: "aboutDescription",
    info: [
      { fieldKey: "name", value: "Ny Lanja" },
      { fieldKey: "phone", value: "(+261) 34 991 88 48" },
      { fieldKey: "experience", value: "3+ Years" },
      { fieldKey: "whatsapp", value: "(+261) 34 141 51 87" },
      { fieldKey: "nationality", value: "Malagasy" },
      { fieldKey: "email", value: "rnflanja06@gmail.com" },
      { fieldKey: "freelance", value: "Available" },
      { fieldKey: "languages", value: "English, French, Malagasy" },
    ],
  },
  experience: {
    titleKey: "experienceTitle",
    descriptionKey: "experienceDescription",
    items: [
      {
        company: "Arato Fianarantsoa.",
        positionKey: "experiencePosition1",
        duration: "2022 - Present",
      },
      {
        company: "EMITECH.",
        positionKey: "experiencePosition2",
        duration: "2023 - 2024",
      },
      {
        company: "Arato Fianarantsoa.",
        positionKey: "experiencePosition3",
        duration: "2022 - 2023",
      },
      {
        company: "Freelance jobs.",
        positionKey: "experiencePosition4",
        duration: "2022 - 2023",
      },
    ],
  },
  education: {
    titleKey: "educationTitle",
    descriptionKey: "educationDescription",
    items: [
      { institution: "EMIT Fianarantsoa", degreeKey: "degree1", duration: "Present" },
      { institution: "Esti certificate Docker", degreeKey: "degree2", duration: "2025" },
      { institution: "EMIT Fianarantsoa", degreeKey: "degree3", duration: "2023" },
    ],
  },
  skills: {
    titleKey: "skillsTitle",
    descriptionKey: "skillsDescription",
    skillList: [
      { icon: <FaHtml5 />, nameKey: "html5" },
      { icon: <FaCss3 />, nameKey: "css3" },
      { icon: <FaAngular />, nameKey: "angular" },
      { icon: <SiIonic />, nameKey: "ionic" },
      { icon: <SiFlutter />, nameKey: "flutter" },
      { icon: <SiPostgresql />, nameKey: "postgresql" },
      { icon: <SiMysql />, nameKey: "mysql" },
      { icon: <SiUml />, nameKey: "uml" },
      { icon: <FaJs />, nameKey: "javascript" },
      { icon: <SiTypescript />, nameKey: "typescript" },
      { icon: <SiDocker />, nameKey: "docker" },
      { icon: <FaPhp />, nameKey: "php" },
      { icon: <FaLaravel />, nameKey: "laravel" },
      { icon: <FaReact />, nameKey: "react" },
      { icon: <FaFigma />, nameKey: "figma" },
      { icon: <SiTailwindcss />, nameKey: "tailwindcss" },
      { icon: <SiNextdotjs />, nameKey: "nextjs" },
      { icon: <SiRedux />, nameKey: "redux" },
      { icon: <SiGit />, nameKey: "git" },
    ],
  },
};

const ProfilePage = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t("experienceTab")}</TabsTrigger>
            <TabsTrigger value="education">{t("educationTab")}</TabsTrigger>
            <TabsTrigger value="skills">{t("skillsTab")}</TabsTrigger>
            <TabsTrigger value="about">{t("aboutTab")}</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t(profileData.experience.titleKey)}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t(profileData.experience.descriptionKey)}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {profileData.experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {t(item.positionKey)}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t(profileData.education.titleKey)}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t(profileData.education.descriptionKey)}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {profileData.education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {t(item.degreeKey)}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t(profileData.skills.titleKey)}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {t(profileData.skills.descriptionKey)}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-[20px] p-5">
                    {profileData.skills.skillList.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[174px] py-6 marker:rounded-xl flex flex-col justify-center items-center gap-5"
                      >
                        <span className="text-accent text-5xl">{item.icon}</span>
                        <h3 className="text-md text-white/50 text-center lg:text-left">
                          {t(item.nameKey)}
                        </h3>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{t(profileData.about.titleKey)}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t(profileData.about.descriptionKey)}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {profileData.about.info.map((abt, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{t(abt.fieldKey)}</span>
                      <span>{abt.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
