import logo from "../../assets/labflow-logo.png";
import { cn } from "@/lib/utils";

const LabFlowLogo = ({ compact = false, className }) => {
  return (
    <div
      className={cn(
        "flex items-center select-none",
        compact ? "justify-start" : "w-full justify-center",
        className,
      )}
    >
      <img
        src={logo}
        alt="LabFlow Logo"
        className={cn(
          "h-auto object-contain",
          compact
            ? "w-[110px] sm:w-[130px]"
            : "w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] xl:w-[560px]",
        )}
      />
    </div>
  );
};

export default LabFlowLogo;
