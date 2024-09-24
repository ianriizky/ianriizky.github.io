import site from "@/data/site";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";

export default function Hero() {
  return (
    <>
      <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Hello, I&#39;m {site.headerTitle}
        <br />I craft{" "}
        <RoughNotation
          type="circle"
          show={true}
          color={colors.emerald[500]}
          animationDelay={1400}
          animationDuration={1200}
        >
          end-to-end{" "}
        </RoughNotation>
        <br className="xl:hidden" />
        <RoughNotation
          type="underline"
          show={true}
          color={colors.sky[500]}
          animationDelay={1700}
          animationDuration={1200}
        >
          {" "}
          web platforms.{" "}
        </RoughNotation>
      </h1>

      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p>
    </>
  );
}
