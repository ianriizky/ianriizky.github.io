import site from "@/data/site";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { SiDevdotto, SiGithub, SiLinkedin } from "react-icons/si";
import Me from "./me.jpg";

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 md:mb-24">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>

      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-row items-center justify-center space-x-2 pt-8 xl:flex-col">
          <div className="pr-8 xl:pr-0">
            <ExportedImage
              src={Me}
              alt="avatar"
              width={192}
              height={192}
              className="h-30 w-30 rounded-full dark:border-2 dark:border-primary-400"
            />
          </div>

          <div>
            <h3 className="pb-2 pt-4 text-3xl font-bold leading-8 tracking-tight xl:text-2xl">
              {site.author.name}
            </h3>
            <div className="text-lg text-gray-500 dark:text-gray-400 xl:text-base">
              {site.author.role}
            </div>
            <div className="flex space-x-3 pt-6">
              <Link
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={site.social.linkedin}
              >
                <span className="sr-only">linkedin</span>
                <SiLinkedin className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
              </Link>
              <Link
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={site.social.github}
              >
                <span className="sr-only">github</span>
                <SiGithub className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
              </Link>
              <Link
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={site.social.devto}
              >
                <span className="sr-only">devto</span>
                <SiDevdotto className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
              </Link>
            </div>
          </div>
        </div>

        <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
          {site.author.about}
          <p>
            View my resume here: <Link href="/resume">Resume</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
