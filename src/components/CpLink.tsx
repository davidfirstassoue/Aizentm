import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
};

export function CpLink({ children, className, ...rest }: Props) {
  return (
    <Link {...rest} className={`cp-link ${className ?? ""}`}>
      <span className="cp-link__label">{children}</span>
    </Link>
  );
}
