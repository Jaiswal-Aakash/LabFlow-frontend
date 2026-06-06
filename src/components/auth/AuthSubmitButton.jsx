import { cn } from "@/lib/utils";

const AuthSubmitButton = ({ children, className, ...props }) => {
  return (
    <button
      type="submit"
      className={cn(
        "w-full h-12 rounded-xl",
        "bg-gradient-to-r from-violet-600 to-purple-700",
        "text-sm font-semibold text-white",
        "shadow-md shadow-violet-600/20",
        "transition-all duration-200",
        "hover:shadow-lg hover:shadow-violet-600/25 hover:brightness-[1.03]",
        "active:brightness-[0.97]",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-violet-500/30",
        "disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default AuthSubmitButton;
