"use client";

import BlankIcon from "@/components/icons/Blank";
import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark",
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {mounted ? (
          theme === "dark" || resolvedTheme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )
        ) : (
          <BlankIcon />
        )}
      </svg>
    </button>
  );
}
