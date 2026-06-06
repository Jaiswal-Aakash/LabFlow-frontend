import { cn } from "@/lib/utils";

const AuthFormField = ({
  id,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  autoComplete,
  className,
  ...props
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative group">
        {Icon && (
          <Icon
            className="
              absolute left-3.5 top-1/2 -translate-y-1/2
              h-[18px] w-[18px]
              text-slate-400
              transition-colors duration-200
              group-focus-within:text-violet-500
              pointer-events-none
            "
            strokeWidth={1.75}
          />
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn(
            "w-full h-12 rounded-xl border border-slate-200/90 bg-slate-50/80",
            "text-sm text-slate-900 placeholder:text-slate-400",
            "transition-all duration-200",
            "hover:border-slate-300 hover:bg-white",
            "focus:outline-none focus:border-violet-500 focus:bg-white",
            "focus:ring-[3px] focus:ring-violet-500/12",
            Icon ? "pl-11 pr-4" : "px-4",
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default AuthFormField;
