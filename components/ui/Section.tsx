import { cn } from "@/lib/utils/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className,
  as: Component = "section",
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn("py-20 sm:py-24 lg:py-28", className)}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </Component>
  );
}
