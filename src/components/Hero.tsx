import site from "@/data/site";
import { TbBrandLinkedin, TbBrandUpwork, TbMail } from "react-icons/tb";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";

export default function Hero() {
  return (
    <>
      <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Hi, my name is {site.author.nickname}.
        <br />
        I&#39;m a{" "}
        <RoughNotation
          type="circle"
          show={true}
          color={colors.emerald[500]}
          animationDelay={1400}
          animationDuration={1200}
        >
          {site.author.role_rough_notation[0]}
        </RoughNotation>{" "}
        <RoughNotation
          type="underline"
          show={true}
          color={colors.sky[500]}
          animationDelay={1700}
          animationDuration={1200}
        >
          {site.author.role_rough_notation[1]}
        </RoughNotation>
        .
      </h1>

      <div className="flex flex-col gap-8 text-lg leading-7 text-gray-500 dark:text-gray-400">
        <p>
          🚀 Helping startups launch SaaS MVPs faster, scale effortlessly, and
          deliver seamless user experiences.
        </p>
        <p>
          I build scalable SaaS platforms, robust APIs, and production-ready
          MVPs using Next.js, Laravel, and Supabase. Clean, efficient, and
          future-proof code-crafted to grow with your business.
        </p>
        <p>
          Ready to bring your idea to life? Let&apos;s build your scalable SaaS
          MVP, faster and better!
        </p>
        <ul className="flex flex-col gap-2 text-sm md:flex-row md:items-center">
          <li className="flex items-center gap-1 hover:underline">
            <TbMail size={25} />
            <a href="mailto:ian.rizkypratama@gmail.com">hi@ianrizky.web.id</a>
          </li>
          <li className="flex items-center gap-1 hover:underline">
            <TbBrandLinkedin size={25} />
            <a href="https://www.linkedin.com/in/ianrizky">View My LinkedIn</a>
          </li>
          <li className="flex items-center gap-1 hover:underline">
            <TbBrandUpwork size={25} />
            <a href="https://www.upwork.com/freelancers/ianrizky">
              Hire Me on Upwork
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
