import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

type ButtonAsButton = ButtonBaseProps & {
  as?: "button";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonAsLink = ButtonBaseProps & {
  as: "link";
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-bm-yellow text-bm-black hover:bg-bm-yellow/90 focus:ring-bm-yellow font-accent uppercase",
  secondary:
    "bg-bm-grayDark text-bm-white hover:bg-bm-grayDark/90 focus:ring-bm-grayLight",
  outline:
    "border-2 border-bm-yellow bg-transparent text-bm-yellow hover:bg-bm-yellow hover:text-bm-black focus:ring-bm-yellow",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    className,
    children,
    "aria-label": ariaLabel,
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-bmSm px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bm-black disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100";

  if (props.as === "link") {
    const { href } = props;
    return (
      <Link
        href={href}
        className={cn(base, variantStyles[variant], className)}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, variantStyles[variant], className)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
