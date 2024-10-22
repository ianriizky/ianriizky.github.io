import ArtopologiBlog from "@/app/project/artopologi-blog.png";
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
  tools?: Array<{
    url: string;
    text: string;
  }>;
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
    tools: [
      { url: "https://php.net", text: "PHP" },
      { url: "https://laravel.com", text: "Laravel" },
      { url: "https://vuejs.org", text: "Vue.js" },
      { url: "https://tailwindcss.com", text: "Tailwind CSS" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
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
    tools: [
      { url: "https://nodejs.org", text: "Node.js" },
      { url: "https://react.dev", text: "React" },
      { url: "https://nextjs.org", text: "Next.js" },
      { url: "https://expressjs.com", text: "Express" },
      { url: "https://mui.com", text: "Material UI" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
  },
  {
    title: "Artopologi Blog",
    description: (
      <>
        Artopologi is a marketplace for art lovers who want to find and get
        various types of works based on your desires and needs. All artworks
        sold on Artopologi are original works by an artist with a digital
        certificate of authenticity built on blockchain-based NFT. This website
        is built using Next.js with Express as the backend.
      </>
    ),
    imgSrc: ArtopologiBlog,
    href: {
      deploy: "https://www.artopologi.com/blog",
    },
    tools: [
      { url: "https://php.net", text: "PHP" },
      { url: "https://wordpress.org", text: "WordPress" },
      { url: "https://roots.io/bedrock", text: "Bedrock" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
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
      { url: "https://nodejs.org", text: "Node.js" },
      { url: "https://react.dev", text: "React" },
      { url: "https://nextjs.org", text: "Next.js" },
      { url: "https://expressjs.com", text: "Express" },
      { url: "https://mui.com", text: "Material UI" },
      { url: "https://www.mysql.com", text: "MySQL" },
      { url: "https://tailwindcss.com", text: "Tailwind CSS" },
      { url: "https://www.framer.com/motion", text: "Framer Motion" },
      { url: "https://pages.github.com", text: "GitHub Pages" },
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
    tools: [
      { url: "https://php.net", text: "PHP" },
      { url: "https://laravel.com", text: "Laravel" },
      { url: "https://core.telegram.org/bots/api", text: "Telegram Bot API" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
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
    tools: [
      { url: "https://nodejs.org", text: "Node.js" },
      { url: "https://react.dev", text: "React" },
      { url: "https://nextjs.org", text: "Next.js" },
      { url: "https://tailwindcss.com", text: "Tailwind CSS" },
      { url: "https://mantine.dev", text: "Mantine" },
      { url: "https://vercel.com", text: "Vercel" },
    ],
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
    tools: [
      { url: "https://nodejs.org", text: "Node.js" },
      { url: "https://www.npmjs.com", text: "npm" },
    ],
  },
];

export default projects;
