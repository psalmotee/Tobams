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
    "inline-flex items-center justify-center gap-2 cursor-pointer font-semibold rounded transition focus-visible:outline-2 focus-visible:outline-offset-2 w-fit ";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary border border-secondary text-white hover:bg-secondary/90",
  };

  const sizes = {
    sm: "px-4 py-2 text-[11px] h-12 sm:text-[18px]",
    md: "px-[24px] py-[10.5px] h-12 text-[18px]",
    lg: "px-[20px] py-[10.5px] h-12 text-[18px]",
    xlg: "px-6 py-3 text-[18px]",
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
