"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const UsedLinksPage = () => {
  const currentPath = usePathname();

  const links = [
    { name: "Home", url: "/" },
    { name: "Experiences", url: "/experiences" },
    { name: "Education", url: "/education" },
    { name: "Skills", url: "/skills" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
    { name: "CV", url: "/cv" },
  ];

  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 m-4">
      {links.map((link, index) => (
        <li
          className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:text-cyan-500 transition-all"
          key={index}
        >
          <Link
            href={link.url}
            className={currentPath == link.url ? "text-cyan-300" : ""}
          >
            {link.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UsedLinksPage;
