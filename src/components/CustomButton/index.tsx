import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

export default function CustomButton({
  children,
  onClick,
  icon,
  variant = "primary",
  className = "",
  style,
  type = "button",
}: CustomButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md active:scale-95",
    outline:
      "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`
        flex items-center justify-center gap-2
        px-4 py-2 rounded-xl
        transition-all cursor-pointer
        font-semibold animate-slide
        ${variants[variant]}
        ${className}
      `}
    >
      {icon}
      {children}
    </button>
  );
}
