import Icon from "@/app/icon.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export type Project = {
  title: string;
  description: JSX.Element;
  imgSrc: Parameters<typeof ExportedImage>[0]["src"];
  href: {
    github: Parameters<typeof Link>[0]["href"];
    deploy?: Parameters<typeof Link>[0]["href"];
  };
  tools: Array<string>;
};

const projects: Array<Project> = [
  {
    title: "Personal Website 1",
    description: (
      <span className="text-justify">
        This is a repository of my portofolio page of using{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Next.js
        </Link>{" "}
        intended for personal use only. The site is forked from the incredible{" "}
        <Link
          href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Tailwind-Nextjs-Starter-Blog
        </Link>{" "}
        by{" "}
        <Link
          href="https://github.com/timlrx"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Tim Lrx
        </Link>
        . Check out{" "}
        <Link
          href="https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          the parent repository documentation
        </Link>{" "}
        or fork this project to start building your own portofolio.
      </span>
    ),
    imgSrc: Icon,
    href: {
      github: "https://github.com/ianriizky/ianriizky.github.io",
      deploy: "https://ianriizky.github.io",
    },
    tools: [
      "Node.js",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages",
    ],
  },
];

export default projects;
