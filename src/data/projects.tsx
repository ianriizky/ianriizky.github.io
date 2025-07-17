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
import { SiExpress, SiHugo } from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandGithub,
  TbBrandJavascript,
  TbBrandLaravel,
  TbBrandMantine,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandNotion,
  TbBrandNpm,
  TbBrandPhp,
  TbBrandReact,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandTelegram,
  TbBrandTypescript,
  TbBrandVercel,
  TbBrandVue,
  TbBrandWordpress,
} from "react-icons/tb";

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
    icon?: JSX.Element;
    color: string;
  }>;
};

const projects: Array<Project> = [
  {
    title: "BlogPro | Turn Notion into Blog in Seconds",
    description: (
      <>
        Built a SaaS platform using Next.js and Supabase that converts Notion
        databases into fully-functional, SEO-optimized blogs in seconds. Helped
        creators launch blogs effortlessly with zero setup time, saving both
        cost and time.
      </>
    ),
    imgSrc: BlogPro,
    href: {
      deploy: "https://blogpro.so",
    },
    tools: [
      {
        url: "https://nextjs.org",
        text: "Next.js",
        icon: <TbBrandNextjs />,
        color: "#000000",
      },
      {
        url: "https://react.dev",
        text: "React",
        icon: <TbBrandReact />,
        color: "#61DAFB",
      },
      {
        url: "https://typescriptlang.org",
        text: "TypeScript",
        icon: <TbBrandTypescript />,
        color: "#3178C6",
      },
      {
        url: "https://www.supabase.com",
        text: "Supabase",
        icon: <TbBrandSupabase />,
        color: "#3ECF8E",
      },
      {
        url: "https://tailwindcss.com",
        text: "Tailwind CSS",
        icon: <TbBrandTailwind />,
        color: "#06B6D4",
      },
      {
        url: "https://notion.so",
        text: "Notion",
        icon: <TbBrandNotion />,
        color: "#000000",
      },
    ],
  },
  {
    title: "Artopologi | Connecting Artists to Buyers Nationwide",
    description: (
      <>
        Developed a fullstack platform for artists and art lovers to showcase,
        sell, and collaborate. Delivered modern gallery browsing, user
        registration, and admin tools using Node.js, ExpressJS, and Material
        UI—empowering national art initiatives with intuitive UX.
      </>
    ),
    imgSrc: Artopologi,
    href: {
      deploy: "https://www.artopologi.com",
    },
    tools: [
      {
        url: "https://nextjs.org",
        text: "Next.js",
        icon: <TbBrandNextjs />,
        color: "#000000",
      },
      {
        url: "https://react.dev",
        text: "React",
        icon: <TbBrandReact />,
        color: "#61DAFB",
      },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        text: "JavaScript",
        icon: <TbBrandJavascript />,
        color: "#F7DF1E",
      },
      {
        url: "https://mongodb.com",
        text: "MongoDB",
        icon: <TbBrandMongodb />,
        color: "#4DB33D",
      },
      {
        url: "https://www.mysql.com",
        text: "MySQL",
        icon: <TbBrandMysql />,
        color: "#4479A1",
      },
      {
        url: "https://expressjs.com",
        text: "Express",
        icon: <SiExpress />,
        color: "#000000",
      },
      {
        url: "https://mui.com",
        text: "Material UI",
        color: "#007FFF",
      },
    ],
  },
  {
    title: "Nossa | Gaming SaaS Platform for 100K+ Members",
    description: (
      <>
        Engineered a scalable membership platform for Indonesia’s largest gaming
        & e-sports community. Features include user management, wallets, reward
        systems, and content management using Laravel, Vue.js, and Tailwind
        CSS—supporting thousands of users with fast, secure performance.
      </>
    ),
    imgSrc: Nossa,
    href: {
      deploy: "https://nossa.co.id",
    },
    tools: [
      {
        url: "https://laravel.com",
        text: "Laravel",
        icon: <TbBrandLaravel />,
        color: "#FF2D20",
      },
      {
        url: "https://vuejs.org",
        text: "Vue.js",
        icon: <TbBrandVue />,
        color: "#4FC08D",
      },
      {
        url: "https://tailwindcss.com",
        text: "Tailwind CSS",
        icon: <TbBrandTailwind />,
        color: "#06B6D4",
      },
      {
        url: "https://www.mysql.com",
        text: "MySQL",
        icon: <TbBrandMysql />,
        color: "#4479A1",
      },
      {
        url: "https://php.net",
        text: "PHP",
        icon: <TbBrandPhp />,
        color: "#777BB3",
      },
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
      {
        url: "https://wordpress.org",
        text: "WordPress",
        icon: <TbBrandWordpress />,
        color: "#21759B",
      },
      {
        url: "https://php.net",
        text: "PHP",
        icon: <TbBrandPhp />,
        color: "#777BB3",
      },
      {
        url: "https://www.mysql.com",
        text: "MySQL",
        icon: <TbBrandMysql />,
        color: "#4479A1",
      },
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
      deploy: "https://ianriizky.web.id",
    },
    tools: [
      {
        url: "https://nextjs.org",
        text: "Next.js",
        icon: <TbBrandNextjs />,
        color: "#000000",
      },
      {
        url: "https://react.dev",
        text: "React",
        icon: <TbBrandReact />,
        color: "#61DAFB",
      },
      {
        url: "https://tailwindcss.com",
        text: "Tailwind CSS",
        icon: <TbBrandTailwind />,
        color: "#06B6D4",
      },
      {
        url: "https://www.framer.com/motion",
        text: "Framer Motion",
        icon: <TbBrandFramerMotion />,
        color: "#F24E1E",
      },
      {
        url: "https://pages.github.com",
        text: "GitHub Pages",
        icon: <TbBrandGithub />,
        color: "#000000",
      },
    ],
  },
  {
    title: "NgodingBang Blog | Open Source Notion-based CMS",
    description: (
      <>
        Created a personal CMS that turns Notion content into a markdown-powered
        static site. Built with Hugo and deployed on GitHub Pages for free,
        accessible blogging. Contributed as part of open-source community
        efforts.
      </>
    ),
    imgSrc: NgodingBangBlog,
    href: {
      github: "https://github.com/ngodingbang/ngodingbang.github.io",
      deploy: "https://ngodingbang.my.id",
    },
    tools: [
      {
        url: "https://nextjs.org",
        text: "Next.js",
        icon: <TbBrandNextjs />,
        color: "#000000",
      },
      {
        url: "https://react.dev",
        text: "React",
        icon: <TbBrandReact />,
        color: "#61DAFB",
      },
      {
        url: "https://typescriptlang.org",
        text: "TypeScript",
        icon: <TbBrandTypescript />,
        color: "#3178C6",
      },
      {
        url: "https://gohugo.io",
        text: "Hugo",
        icon: <SiHugo />,
        color: "#FF4088",
      },
      {
        url: "https://tailwindcss.com",
        text: "Tailwind CSS",
        icon: <TbBrandTailwind />,
        color: "#06B6D4",
      },
      {
        url: "https://notion.so",
        text: "Notion",
        icon: <TbBrandNotion />,
        color: "#000000",
      },
      {
        url: "https://pages.github.com",
        text: "GitHub Pages",
        icon: <TbBrandGithub />,
        color: "#000000",
      },
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
      {
        url: "https://laravel.com",
        text: "Laravel",
        icon: <TbBrandLaravel />,
        color: "#FF2D20",
      },
      {
        url: "https://php.net",
        text: "PHP",
        icon: <TbBrandPhp />,
        color: "#777BB4",
      },
      {
        url: "https://core.telegram.org/bots/api",
        text: "Telegram Bot API",
        icon: <TbBrandTelegram />,
        color: "#0088CC",
      },
      {
        url: "https://www.mysql.com",
        text: "MySQL",
        icon: <TbBrandMysql />,
        color: "#4479A1",
      },
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
      {
        url: "https://nextjs.org",
        text: "Next.js",
        icon: <TbBrandNextjs />,
        color: "#000000",
      },
      {
        url: "https://react.dev",
        text: "React",
        icon: <TbBrandReact />,
        color: "#61DAFB",
      },
      {
        url: "https://tailwindcss.com",
        text: "Tailwind CSS",
        icon: <TbBrandTailwind />,
        color: "#06B6D4",
      },
      {
        url: "https://mantine.dev",
        text: "Mantine",
        icon: <TbBrandMantine />,
        color: "#0072F5",
      },
      {
        url: "https://vercel.com",
        text: "Vercel",
        icon: <TbBrandVercel />,
        color: "#000000",
      },
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
      deploy: "https://www.npmjs.com/package/@ianriizky/node-check-version",
    },
    tools: [
      {
        url: "https://nodejs.org",
        text: "Node.js",
        icon: <TbBrandNodejs />,
        color: "#8CC84B",
      },
      {
        url: "https://www.npmjs.com",
        text: "npm",
        icon: <TbBrandNpm />,
        color: "#CB3837",
      },
    ],
  },
];

export default projects;
