type ButtonProps = {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xlg";
  className?: string;
};

export default function Button({
  children,
  leftIcon,
  rightIcon,
  variant = "primary",
  size = "sm",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 cursor-pointer font-semibold rounded transition focus-visible:outline-2 focus-visible:outline-offset-2 w-fit text-sm font-semibold sm:text-lg";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary border border-secondary text-white hover:bg-secondary/90",
  };

  const sizes = {
    sm: "px-5.5 py-3 h-10 sm:px-4 sm:py-2 sm:h-12",
    md: "px-5.5 py-3 h-10 sm:px-6 sm:py-[10.5px] sm:h-12",
    lg: "px-5.5 py-3 h-10 sm:px-5 sm:py-[10.5px] sm:h-12",
    xlg: "px-5.5 py-3 h-10 sm:px-6 sm:py-3 sm:h-12",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}
