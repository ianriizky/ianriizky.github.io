import Icon from "@/app/icon.png";
import MobileNavLinks from "@/components/MobileNavLinks";
import NavLinks from "@/components/NavLinks";
import ThemeSwitch from "@/components/ThemeSwitch";
import OpenToWorkBadge from "@/components/ui/OpenToWorkBadge";
import site from "@/data/site";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between bg-white px-4 py-10 dark:bg-gray-950 sm:px-0">
      <div className="align-center flex flex-row items-center">
        <Link href="/" aria-label={site.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <ExportedImage
                src={Icon}
                alt={site.headerTitle}
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {site.headerTitle}
            </div>
          </div>
        </Link>

        {site.isOpenToWork && <OpenToWorkBadge />}
      </div>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <NavLinks />
        <ThemeSwitch />
        <MobileNavLinks />
      </div>
    </header>
  );
};

export default Header;
