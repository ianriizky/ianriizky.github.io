"use client";

import navLinks from "@/data/navLinks";
import Link from "next/link";

export default function NavLink() {
  return (
    <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.title}
          href={navLink.href}
          target={navLink.target}
          className="flex items-center space-x-1 font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        >
          <span>{navLink.title}</span>
          {navLink?.icon && navLink.icon}
        </Link>
      ))}
    </div>
  );
}
