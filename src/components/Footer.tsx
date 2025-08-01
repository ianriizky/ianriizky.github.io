import TypeScript from "@/components/icons/TypeScript";
import site from "@/data/site";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="mb-4 mt-4 grid h-24 grid-cols-1 justify-items-center md:h-auto md:grid-cols-3">
        <div className="flex space-x-1 md:place-self-start">
          <span className="mr-1 text-gray-500 dark:text-gray-400">
            Built with
          </span>

          <div className="flex space-x-1.5">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org"
            >
              <span className="sr-only">nextjs</span>
              <SiNextdotjs className="h-5 w-5" fill="currentColor" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org"
            >
              <span className="sr-only">typescript</span>
              <TypeScript className="h-5 w-5" fill="currentColor" />
            </Link>
          </div>
        </div>

        <div className="flex space-x-4 md:place-content-center">
          <Link
            href={site.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 underline underline-offset-4 dark:text-gray-400"
          >
            <span>View source</span>
          </Link>
        </div>

        <div className="flex space-x-2 text-gray-500 dark:text-gray-400 md:place-self-end">
          <div className="whitespace-nowrap">{site.author.shortname}</div>
          <div>{` • `}</div>
          <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}
