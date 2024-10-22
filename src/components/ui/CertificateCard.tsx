import { type Certificate } from "@/data/certificates";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

export default function CertificateCard(
  props: Certificate & { resolvedTheme?: string; imageClassName: string },
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
        <div>
          <h1 className="font-bold capitalize dark:text-neutral-100">
            {props.title}
          </h1>

          <h2 className="text-sm font-semibold capitalize dark:text-neutral-100">
            {props.issuedBy}
          </h2>

          <h3 className="text-sm font-light capitalize dark:text-neutral-100">
            Issued {props.issuedAt.start} · Expires {props.issuedAt.start}
          </h3>
        </div>

        <p className="truncate-2 text-sm leading-6 dark:text-neutral-300">
          {props.description}
        </p>

        {props.skills && props.skills.length > 0 && (
          <div className="flex flex-wrap items-center gap-1">
            {props.skills.map((skill) => (
              <Link
                key={skill.text}
                href={skill.url}
                target="_blank"
                className="rounded-lg bg-sky-600 px-2 py-1 text-xs text-white dark:bg-gray-900 dark:text-neutral-400"
              >
                {skill.text}
              </Link>
            ))}
          </div>
        )}

        {props.href && (
          <div className="flex items-center gap-4 py-2">
            <Link
              href={props.href}
              title="Credential URL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:text-gray-500 hover:dark:text-white"
            >
              <TbExternalLink className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
