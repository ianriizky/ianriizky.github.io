import ArrowUpRight from "@/components/icons/ArrowUpRight";
import Link from "next/link";

export type NavLink = Parameters<typeof Link>[0] & {
  title: string;
  icon?: JSX.Element;
};

const navLinks: Array<NavLink> = [
  { href: "/", title: "Home" },
  {
    href: "https://ngodingbang.my.id",
    title: "Blog",
    icon: <ArrowUpRight className="h-5" />,
    target: "_blank",
  },
  { href: "/resume", title: "Resume" },
  { href: "/about", title: "About" },
];

export default navLinks;
