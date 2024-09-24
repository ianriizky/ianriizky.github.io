import site from "@/data/site";
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

      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p>
    </>
  );
}
