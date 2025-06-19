"use client";

import Resume from "@/components/Resume";
import Link from "next/link";
import { TbDownload, TbEye } from "react-icons/tb";

export default function ResumePage({ file }: { file: string }) {
  return (
    <div className="relative whitespace-nowrap">
      <div className="flex w-full flex-row justify-end">
        <button className="focus:ring-ring text-primary ml-0 inline-flex max-w-full items-center rounded-tl-2xl border-l border-t border-primary-500 bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <Link href="/resume">
            🇺🇸<span className="hidden md:inline"> English</span>
          </Link>
        </button>

        <button className="focus:ring-ring text-primary ml-0 inline-flex max-w-full items-center border-l border-t border-primary-500 bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <Link href="/resume/id">
            🇮🇩<span className="hidden md:inline"> Bahasa Indonesia</span>
          </Link>
        </button>

        <button className="focus:ring-ring text-primary ml-0 inline-flex max-w-full items-center border-l border-t border-primary-500 bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <a href={file} download>
            <TbDownload className="inline-block" />
            <span className="hidden md:inline"> Download File</span>
          </a>
        </button>

        <button className="focus:ring-ring text-primary ml-0 inline-flex max-w-full items-center rounded-tr-2xl border-l border-r border-t border-primary-500 bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <Link href={file} target="_blank" rel="noopener noreferrer">
            <TbEye className="inline-block" />
            <span className="hidden md:inline"> View in Native</span>
          </Link>
        </button>
      </div>

      <Resume file={file} maxWidth={1024} />
    </div>
  );
}
