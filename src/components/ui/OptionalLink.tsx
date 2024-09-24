import Link from "next/link";

export default function OptionalLink(
  props: Readonly<Partial<Parameters<typeof Link>[0]>>,
) {
  if (!props.href) {
    return <>{props.children}</>;
  }

  return (
    <Link href={props.href} {...props}>
      {props.children}
    </Link>
  );
}
