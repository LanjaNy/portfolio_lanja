"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Résumé", path: "/resume" },
  { name: "Projets", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize font-medium hover:text-accent transition-all ${
            pathname === link.path ? "text-accent border-b-2 border-accent" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
