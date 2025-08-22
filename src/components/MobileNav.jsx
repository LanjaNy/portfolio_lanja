"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState } from "react";

const Links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "fr", flag: "/assets/flag/fr.png", alt: "French flag" },
    { code: "en", flag: "/assets/flag/en.png", alt: "English flag" },
  ];

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-black px-2 py-2 rounded flex items-center"
        >
          <Image
            src={languages.find((lang) => lang.code === i18n.language)?.flag || "/assets/flag/en.png"}
            unoptimized
            width={20}
            height={20}
            alt={languages.find((lang) => lang.code === i18n.language)?.alt || "English flag"}
            className="inline-block"
          />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 bg-white rounded shadow-lg z-10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleChangeLanguage(lang.code)}
                className="flex items-center px-2 py-2 hover:bg-accent/20 w-full"
              >
                <Image
                  src={lang.flag}
                  unoptimized
                  width={20}
                  height={20}
                  alt={lang.alt}
                  className="inline-block"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <Sheet>
        <SheetTrigger>
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-8 text-2xl text-center">
            <Link href="/">
              <h1 className="text-4xl">
                Ny Lanja <span className="text-accent">*</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col justify-center items-center gap-8 mb-8">
            {Links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;