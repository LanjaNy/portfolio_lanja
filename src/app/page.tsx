"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-16">
          <div className="text-center xl:text-left space-y-3">
            <span className="text-xl">{t("role")}</span>
            <h1 className="h1 mb-6">
              {t("greeting")} <span className="text-accent">Lanja</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {t("description")}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>{t("download")}</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border borde-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div>
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
