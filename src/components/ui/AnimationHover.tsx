import { motion } from "framer-motion";
import colors from "tailwindcss/colors";

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace("#", ""), 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return r + "," + g + "," + b;
}

export default function AnimationHover(
  props: Readonly<{
    children: React.ReactNode;
    title: string;
    className: string;
    resolvedTheme?: string;
  }>,
) {
  return (
    <motion.div
      title={props.title}
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
          (props.resolvedTheme || "dark") === "dark"
            ? "255,255,255"
            : hexToRgb(colors.emerald[500]);

        e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${color},0.2), rgba(${color},0))`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "";
        e.currentTarget.style.borderImage = "";
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
}
