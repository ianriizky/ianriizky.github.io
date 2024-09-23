import ElysiaJS from "@/components/icons/ElysiaJS";
import { IconType } from "react-icons/lib";
import * as Si from "react-icons/si";
import * as Tb from "react-icons/tb";

export type Skill = {
  name: string;
  logo: IconType;
  url?: string;
};

export type SkillWithChildren = Skill & {
  children?: Array<Skill>;
};

const skills: Array<SkillWithChildren> = [
  {
    name: "JavaScript",
    logo: Si.SiJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    children: [
      {
        name: "TypeScript",
        logo: Si.SiTypescript,
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Node.js",
        logo: Si.SiNodedotjs,
        url: "https://nodejs.org/en",
      },
      {
        name: "Express",
        logo: Si.SiExpress,
        url: "https://expressjs.com",
      },
      {
        name: "ElysiaJS",
        logo: ElysiaJS,
        url: "https://elysiajs.com",
      },
      {
        name: "Nextjs",
        logo: Si.SiNextdotjs,
        url: "https://nextjs.org",
      },
      {
        name: "Vue",
        logo: Si.SiVuedotjs,
        url: "https://vuejs.org",
      },
    ],
  },
  {
    name: "PHP",
    logo: Si.SiPhp,
    url: "https://php.net",
    children: [
      {
        name: "Laravel",
        logo: Si.SiLaravel,
        url: "https://laravel.com",
      },
    ],
  },

  {
    name: "Database",
    logo: Tb.TbDatabase,
    children: [
      {
        name: "mySQL",
        logo: Si.SiMysql,
        url: "https://www.mysql.com",
      },
      {
        name: "PostgreSQL",
        logo: Si.SiPostgresql,
        url: "https://www.postgresql.org",
      },
    ],
  },

  {
    name: "Git",
    logo: Si.SiGit,
    url: "https://github.com/about",
  },
];

export default skills;
