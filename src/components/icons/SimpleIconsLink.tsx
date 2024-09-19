import { type SimpleIconsType } from "@/components/icons/simpleicons";
import Link, { LinkProps } from "next/link";

export default function SimpleIconsLink(props: {
  component: SimpleIconsType;
  href: LinkProps["href"];
  size?: number;
}) {
  const size = props?.size || 6;

  return (
    <Link
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
    >
      <span className="sr-only">{props.component.name}</span>
      <props.component
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </Link>
  );
}
