import Artopologi from "@/app/project/artopologi.png";
import BayarinDong from "@/app/project/bayarindong.jpeg";
import BCADenpasarChatbot from "@/app/project/bcadenpasar-chatbot.jpg";
import NodeCheckVersion from "@/app/project/node-check-version.jpg";
import Nossa from "@/app/project/nossa.png";
import PersonalWebsite from "@/app/project/personal-website.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export type Project = {
  title: string;
  description: JSX.Element;
  imgSrc: Parameters<typeof ExportedImage>[0]["src"];
  href?: {
    github?: Parameters<typeof Link>[0]["href"];
    deploy?: Parameters<typeof Link>[0]["href"];
  };
  tools?: Array<string>;
};

const projects: Array<Project> = [
  {
    title: "Nossa",
    description: (
      <>
        Nossa is the largest gaming & e-sports community in Indonesia based on
        membership & rewards with the aim of providing various benefits for its
        loyal members. This website is built using Laravel 10 on the backend and
        Vue.js 3 on the frontend.
      </>
    ),
    imgSrc: Nossa,
    href: {
      deploy: "https://nossa.co.id",
    },
    tools: ["PHP", "Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Artopologi",
    description: (
      <>
        Artopologi is a marketplace for art lovers who want to find and get
        various types of works based on your desires and needs. All artworks
        sold on Artopologi are original works by an artist with a digital
        certificate of authenticity built on blockchain-based NFT. This website
        is built using Next.js with Express as the backend.
      </>
    ),
    imgSrc: Artopologi,
    href: {
      deploy: "https://www.artopologi.com",
    },
    tools: ["Node.js", "React", "Next.js", "Express", "Material UI", "MySQL"],
  },
  {
    title: "Portofolio Page",
    description: (
      <>
        This is a repository of my portofolio page of using Next.js for personal
        use only. The site is forked from the incredible{" "}
        <Link
          href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Tailwind-Nextjs-Starter-Blog
        </Link>{" "}
        by Tim Lrx.
      </>
    ),
    imgSrc: PersonalWebsite,
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
  {
    title: "BCA Denpasar Chatbot",
    description: (
      <>
        BCA Denpasar Chatbot is a message automation system using a chatbot to
        handle online exchange of small and new money using PHP and Laravel
        Framework (Case Study: PT. Bank Central Asia Tbk. Denpasar Branch).
      </>
    ),
    imgSrc: BCADenpasarChatbot,
    href: {
      github: "https://github.com/ianriizky/bcadenpasar-chatbot",
    },
    tools: ["PHP", "Laravel", "Telegram Bot API", "MySQL"],
  },
  {
    title: "Bayarindong Payment Gateway",
    description: (
      <>
        A simple payment gateway service using Next.js and ElysiaJS made for
        learning purpose.
      </>
    ),
    imgSrc: BayarinDong,
    href: {
      github: "https://github.com/ianriizky/bayarindong",
      deploy: "https://bayarindong.vercel.app",
    },
    tools: ["Node.js", "React", "Next.js", "Tailwind CSS", "Mantine", "Vercel"],
  },
  {
    title: "node-check-version",
    description: (
      <>
        A Node.js library built to make sure that the Node.js and related npm
        installed version run has the same as the version defined in your
        package.json.
      </>
    ),
    imgSrc: NodeCheckVersion,
    href: {
      github: "https://github.com/ianriizky/node-check-version",
    },
    tools: ["Node.js", "npm"],
  },
];

export default projects;
