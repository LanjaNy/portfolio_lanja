"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // const languages = [
  //   { code: "fr", name: "FR", flag: "/assets/flag/fr.png", alt: "French flag" },
  //   { code: "en", name: "EN", flag: "/assets/flag/en.png", alt: "English flag" },
  // ];

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Lanja <span className="text-accent">*</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <div className="relative">
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent border border-accent text-white px-4 py-2 rounded flex items-center text-sm gap-2"
            >
              <Image
                src={languages.find((lang) => lang.code === i18n.language)?.flag || "/assets/flag/en.png"}
                width={20}
                unoptimized
                height={20}
                alt={languages.find((lang) => lang.code === i18n.language)?.alt || "English flag"}
                className="inline-block"
              />
              {languages.find((lang) => lang.code === i18n.language)?.name || "EN"}
            </button> */}

            {/* {isOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg z-10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleChangeLanguage(lang.code)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-accent/20 w-full text-left text-sm"
                  >
                    <Image
                      src={lang.flag}
                      unoptimized
                      width={20}
                      height={20}
                      alt={lang.alt}
                      className="inline-block"
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            )} */}
          </div>
          <Link href={"/contact"}>
            <Button>Contact me</Button>
          </Link>

        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}