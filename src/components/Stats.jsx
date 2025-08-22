"use client";

import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const stat = [
  {
    num: 3,
    key: "yearsExperience"
  },
  {
    num: 10,
    key: "projectsCompleted"
  },
  {
    num: 5,
    key: "technologiesMastered"
  },
  {
    num: 150,
    key: "codeCommits"
  },
];

const Stats = () => {
  const { t } = useTranslation("common");

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stat.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  t(item.key).length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {t(item.key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
