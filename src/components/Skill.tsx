"use client";

import OptionalLink from "@/components/OptionalLink";
import skills, { type Skill } from "@/data/skills";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace("#", ""), 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return r + "," + g + "," + b;
}

function Badge(props: {
  resolvedTheme?: string;
  isParent: boolean;
  skill: Skill;
}) {
  const { resolvedTheme, isParent, skill } = props;

  return (
    <OptionalLink href={skill.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        title={skill.name}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            opacity: 1,
            scale: 1,
          },
          transition: {
            type: "spring",
          },
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const color =
            (resolvedTheme || "dark") === "dark"
              ? "255,255,255"
              : hexToRgb(colors.emerald[500]);

          e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${color},0.2), rgba(${color},0))`;
          e.currentTarget.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px, rgba(${color},0.7), rgba(${color},0.1)) 1 / 1px / 0px stretch`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "";
          e.currentTarget.style.borderImage = "";
        }}
        className={`dark:bg-darkPrimary hover:dark:bg-darkSecondary group flex origin-center transform items-center justify-center gap-4 rounded-sm ${!isParent ? "border border-gray-300 dark:border-neutral-700" : "border-b border-b-gray-300 dark:border-b-neutral-700"} p-4 sm:justify-start md:origin-top`}
      >
        <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
          <skill.logo className="h-8 w-8" />
        </div>
        <p
          className={`pointer-events-none ${isParent && "hidden"} select-none text-sm font-semibold sm:inline-flex md:text-base`}
        >
          {skill.name}
        </p>
      </motion.div>
    </OptionalLink>
  );
}

export default function Skill() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <h2 className="title-font text-3xl font-bold">
        <RoughNotation
          type="highlight"
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
    </div>
  );
}
