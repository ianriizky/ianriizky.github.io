import { type BrandType } from "@/components/icons/brand";
import Link, { LinkProps } from "next/link";

export default function BrandLink(props: {
  component: BrandType;
  href: LinkProps["href"];
  className?: string;
}) {
  const className = props?.className || "h-5 w-5";

  return (
    <Link href={props.href}>
      <props.component className={className} fill="currentColor" />
    </Link>
  );
}
