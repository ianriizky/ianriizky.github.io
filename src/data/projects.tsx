import ArtopologiBlog from "@/app/project/artopologi-blog.png";
import Artopologi from "@/app/project/artopologi.png";
import BayarinDong from "@/app/project/bayarindong.jpeg";
import BCADenpasarChatbot from "@/app/project/bcadenpasar-chatbot.jpg";
import BlogPro from "@/app/project/blogpro.png";
import NgodingBangBlog from "@/app/project/ngodingbang.png";
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
    title: "BlogPro | Turn Notion into Blog in Seconds",
    description: (
      <>
        The goal was to turn Notion into a fully-functional, SEO-optimized
        blogging platform with zero setup. I built a SaaS solution using Next.js
        and Supabase that converts Notion content into live blog pages in
        seconds. This solution enabled creators to launch personal blogs
        effortlessly, saving both cost and time.
      </>
    ),
    imgSrc: BlogPro,
    href: {
      deploy: "https://blogpro.so",
    },
    tools: [
      { url: "https://typescriptlang.org", text: "TypeScript" },
      { url: "https://nextjs.org", text: "Next.js" },
      { url: "https://tailwindcss.com", text: "Tailwind CSS" },
      { url: "https://www.supabase.com", text: "Supabase" },
    ],
  },
  {
    title: "Artopologi | Connecting Artists to the Public",
    description: (
      <>
        This project aimed to connect artists and art lovers through a
        tech-driven platform. I built both the frontend and backend, including
        gallery browsing, user registration, and admin tools. The platform now
        supports national art initiatives and artist catalog page with modern
        and intuitive UX.
      </>
    ),
    imgSrc: Artopologi,
    href: {
      deploy: "https://www.artopologi.com",
    },
    tools: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        text: "JavaScript",
      },
      { url: "https://nextjs.org", text: "Next.js" },
      { url: "https://expressjs.com", text: "Express" },
      { url: "https://mui.com", text: "Material UI" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
  },
  {
    title: "Nossa | Largest Gaming & E-sports Community in Indonesia",
    description: (
      <>
        The client needed a scalable membership platform for Indonesia’s largest
        gaming and e-sports community. I developed the fullstack system using
        Laravel and Vue.js, including user levels, wallet, and reward tracking.
        The site now serves thousands of users with fast performance and smooth
        content management.
      </>
    ),
    imgSrc: Nossa,
    href: {
      deploy: "https://nossa.co.id",
    },
    tools: [
      { url: "https://laravel.com", text: "Laravel" },
      { url: "https://vuejs.org", text: "Vue.js" },
      { url: "https://tailwindcss.com", text: "Tailwind CSS" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
  },
  {
    title: "Artopologi Blog",
    description: (
      <>
        This is a blog platform owned by Artopologi featuring articles and
        resources related to the world of art and creative industries. It
        provides insights, inspiration, and updates on various topics within the
        arts, including modern art trends, techniques, and stories from artists
        and creatives, catering to both art enthusiasts and professionals.
      </>
    ),
    imgSrc: ArtopologiBlog,
    href: {
      deploy: "https://www.artopologi.com/blog",
    },
    tools: [
      { url: "https://wordpress.org", text: "WordPress" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
  },
  {
    title: "ianrizky Portofolio Page",
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
    title: "NgodingBang Blog | A Notion-based CMS for Blogging",
    description: (
      <>
        This is my personal blog built by Hugo as static page generator and
        Notion as it&apos;s CMS. I created my posts manually as a Notion page,
        then create a TypScript code to convert the data from Notion into a
        markdown file. Using Hugo, I generated a static page file then deployed
        it on GitHub Pages. It&apos;s all free cost and extremely simple to use
        for everyone.
      </>
    ),
    imgSrc: NgodingBangBlog,
    href: {
      deploy: "https://www.ngodingbang.com/blog",
    },
    tools: [
      { url: "https://typescriptlang.org", text: "TypeScript" },
      { url: "https://gohugo.io", text: "Hugo" },
      { url: "https://www.notion.so", text: "Notion" },
      { url: "https://tailwindcss.com", text: "Tailwind CSS" },
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
