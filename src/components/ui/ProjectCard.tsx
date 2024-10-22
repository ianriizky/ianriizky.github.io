import { type Project } from "@/data/projects";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";

export default function ProjectCard(
  props: Project & { resolvedTheme?: string; imageClassName: string },
) {
  return (
    <>
      <div className={props.imageClassName}>
        <ExportedImage
          title={props.title}
          alt={props.title}
          src={props.imgSrc}
          width={1200}
          height={630}
          placeholder="blur"
          className="placeholder rounded-lg object-cover backdrop-blur-xl transition-all duration-300 lg:group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col justify-start gap-3">
        <h1 className="font-bold capitalize dark:text-neutral-100">
          {props.title}
        </h1>

        <p className="truncate-2 text-sm leading-6 dark:text-neutral-300">
          {props.description}
        </p>

        {props.tools && props.tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1">
            {props.tools.map((tool) => (
              <Link
                key={tool.text}
                href={tool.url}
                target="_blank"
                className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white dark:bg-gray-900 dark:text-neutral-400"
              >
                {tool.text}
              </Link>
            ))}
          </div>
        )}

        {props.href && (
          <div className="flex items-center gap-4 py-2">
            {props.href.github && (
              <Link
                href={props.href.github}
                title="Source Code on GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 dark:text-gray-500 hover:dark:text-white"
              >
                <SiGithub className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
              </Link>
            )}

            {props.href.deploy && (
              <Link
                href={props.href.deploy}
                title="Live Preview"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 dark:text-gray-500 hover:dark:text-white"
              >
                <TbExternalLink className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
