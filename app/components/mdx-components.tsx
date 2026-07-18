import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  EndSession,
  LearningNote,
  ProgressiveHints,
  Hint,
} from "./learning-tools";

function ExternalLink({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...props}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function Pre({ children }: { children?: ReactNode }) {
  return <pre className="code-block">{children}</pre>;
}

export const mdxComponents = {
  a: ExternalLink,
  pre: Pre,
  LearningNote,
  ProgressiveHints,
  Hint,
  EndSession,
};
