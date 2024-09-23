"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
      {mounted ? (
        theme === "dark" || resolvedTheme === "dark" ? (
          <MdDarkMode className="h-6 w-6" />
        ) : (
          <MdLightMode className="h-6 w-6" />
        )
      ) : (
        <AiOutlineLoading className="h-6 w-6 animate-spin" />
      )}
    </button>
  );
}
