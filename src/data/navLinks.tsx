import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export type NavLink = Parameters<typeof Link>[0] & {
  title: string;
  icon?: JSX.Element;
};

const navLinks: Array<NavLink> = [
  { href: "/", title: "Home" },
  {
    href: "https://ngodingbang.my.id/en",
    title: "Blog",
    icon: <FaArrowUpRightFromSquare className="h-5" />,
    target: "_blank",
  },
  { href: "/project", title: "Project" },
  { href: "/certificate", title: "Certificate" },
  { href: "/resume", title: "Resume" },
  { href: "/about", title: "About" },
];

export default navLinks;
