import Resume from "@/components/Resume";
import site from "@/data/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Resume of ${site.title}`,
  description: "This is a page containing my latest resume.",
};

export default function Page() {
  const file = "./resume.en.pdf";

  return (
    <div className="relative whitespace-nowrap">
      <div className="flex w-full flex-row justify-end">
        <button className="focus:ring-ring text-primary ml-0 inline-flex max-w-full items-center rounded-tl-2xl border border-primary-500 bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <a href={file} download>
            Download File
          </a>
        </button>

        <button className="focus:ring-ring text-primary ml-0 inline-flex max-w-full items-center rounded-tr-2xl border border-primary-500 bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <Link href={file} target="_blank" rel="noopener noreferrer">
            View in Native
          </Link>
        </button>
      </div>

      <Resume file={file} maxWidth={1024} />
    </div>
  );
}
