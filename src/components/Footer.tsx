import BrandLink from "@/components/icons/BrandLink";
import SimpleIconsLink from "@/components/icons/SimpleIconsLink";
import Brand from "@/components/icons/brand";
import SimpleIcons from "@/components/icons/simpleicons";
import site from "@/data/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="mb-4 mt-4 grid h-24 grid-cols-1 justify-items-center md:h-auto md:grid-cols-3">
        <div className="flex space-x-1 md:place-self-start">
          <span className="mr-1 text-gray-500 dark:text-gray-400">
            Built with
          </span>

          <div className="flex space-x-1.5">
            <BrandLink component={Brand.Nextjs} href="https://nextjs.org" />
            <BrandLink
              component={Brand.TypeScript}
              href="https://www.typescriptlang.org"
            />
            <BrandLink
              component={Brand.TailwindCSS}
              href="https://tailwindcss.com"
            />
          </div>
        </div>

        <div className="flex space-x-4 md:place-content-center">
          <SimpleIconsLink
            component={SimpleIcons.Mail}
            href={`mailto:${site.social.email}`}
          />
          <SimpleIconsLink
            component={SimpleIcons.GitHub}
            href={site.social.github}
          />
          <SimpleIconsLink
            component={SimpleIcons.LinkedIn}
            href={site.social.linkedin}
          />
          <SimpleIconsLink
            component={SimpleIcons.Dev}
            href={site.social.devto}
          />
        </div>

        <div className="flex space-x-2 text-gray-500 dark:text-gray-400 md:place-self-end">
          <div className="whitespace-nowrap">{site.author.name}</div>
          <div>{` • `}</div>
          <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>

      <div className="mb-8 flex justify-center text-center text-sm">
        <Link
          href={site.sourceCode}
          className="text-gray-500 underline underline-offset-4 dark:text-gray-400"
        >
          <span>View source</span>
        </Link>
      </div>
    </footer>
  );
}
