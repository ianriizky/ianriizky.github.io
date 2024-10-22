"use client";

import navLinks from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar hidden max-w-80 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-3xl lg:max-w-4xl">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.title}
          href={navLink.href}
          target={navLink.target}
          className={`flex items-center space-x-1 font-medium hover:text-primary-500 dark:hover:text-primary-400 ${pathname === navLink.href ? "text-primary-500 dark:text-primary-400" : "text-gray-900 dark:text-gray-100"}`}
        >
          <span>{navLink.title}</span>
          {navLink?.icon && navLink.icon}
        </Link>
      ))}
    </div>
  );
}
