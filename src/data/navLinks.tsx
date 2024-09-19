import ArrowUpRight from "@/components/icons/ArrowUpRight";
import { LinkProps } from "next/link";

export type NavLink = LinkProps & {
  title: string;
  icon?: JSX.Element;
};

const navLinks: Array<NavLink> = [
  { href: "/", title: "Home" },
  {
    href: "https://ngodingbang.my.id",
    title: "Blog",
    icon: <ArrowUpRight className="h-5" />,
  },
  { href: "/resume", title: "Resume" },
  { href: "/about", title: "About" },
];

export default navLinks;
