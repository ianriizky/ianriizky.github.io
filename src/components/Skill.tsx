"use client";

import AnimationHover from "@/components/ui/AnimationHover";
import OptionalLink from "@/components/ui/OptionalLink";
import skills, { type Skill } from "@/data/skills";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";

function Badge(props: {
  resolvedTheme?: string;
  isParent: boolean;
  skill: Skill;
}) {
  const { resolvedTheme, isParent, skill } = props;

  return (
    <OptionalLink href={skill.url} target="_blank" rel="noopener noreferrer">
      <AnimationHover
        title={skill.name}
        className={`group flex origin-center transform items-center justify-center gap-4 rounded-lg ${!props.isParent ? "border border-gray-300 dark:border-gray-500" : "border-b border-b-gray-300 dark:border-b-gray-500"} p-4 sm:justify-start md:origin-top`}
        resolvedTheme={resolvedTheme}
      >
        <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
          <skill.logo className="h-8 w-8" />
        </div>
        <p
          className={`pointer-events-none ${isParent && "hidden"} select-none text-sm font-semibold sm:inline-flex md:text-base`}
        >
          {skill.name}
        </p>
      </AnimationHover>
    </OptionalLink>
  );
}

export default function Skill() {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <h2 className="title-font text-2xl font-bold md:text-3xl">
        <RoughNotation
          type="box"
          show={true}
          color={
            colors.emerald[(resolvedTheme || "dark") === "dark" ? 500 : 300]
          }
          animationDelay={2100}
          animationDuration={1200}
        >
          My Skill
        </RoughNotation>
      </h2>

      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0, staggerChildren: 0.1 },
            },
          }}
          viewport={{ once: true }}
        >
          <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Badge
              resolvedTheme={resolvedTheme}
              isParent={false}
              skill={skill}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {(skill.children || []).map((skill) => (
              <Badge
                key={skill.name}
                resolvedTheme={resolvedTheme}
                isParent={true}
                skill={skill}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
}
