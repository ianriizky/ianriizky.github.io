import ElysiaJS from "@/components/icons/ElysiaJS";
import MaterialUI from "@/components/icons/MaterialUI";
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
    name: "Web Development",
    logo: Tb.TbCode,
    children: [
      {
        name: "Next.js",
        logo: Si.SiNextdotjs,
        url: "https://nextjs.org",
      },
      {
        name: "NestJS",
        logo: Si.SiNestjs,
        url: "https://nestjs.com",
      },
      {
        name: "Laravel",
        logo: Si.SiLaravel,
        url: "https://laravel.com",
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
        name: "React",
        logo: Si.SiReact,
        url: "https://reactjs.org",
      },
      {
        name: "Vue",
        logo: Si.SiVuedotjs,
        url: "https://vuejs.org",
      },
    ],
  },
  {
    name: "Database",
    logo: Tb.TbDatabase,
    children: [
      {
        name: "Supabase",
        logo: Si.SiSupabase,
        url: "https://supabase.com",
      },
      {
        name: "MySQL",
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
    name: "CSS",
    logo: Si.SiCss3,
    url: "https://www.w3schools.com/css",
    children: [
      {
        name: "Tailwind CSS",
        logo: Si.SiTailwindcss,
        url: "https://tailwindcss.com",
      },
      {
        name: "Material UI",
        logo: MaterialUI,
        url: "https://mui.com",
      },
    ],
  },

  {
    name: "Git",
    logo: Tb.TbBrandGithub,
    url: "https://github.com/about",
  },
];

export default skills;
