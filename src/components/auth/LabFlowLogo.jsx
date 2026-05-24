import logo from "../../assets/labflow-logo.png";

const LabFlowLogo = () => {
  return (
    <div className="w-full flex items-center justify-center select-none">
      <img
        src={logo}
        alt="LabFlow Logo"
        className="
          w-[280px]
          sm:w-[340px]
          md:w-[420px]
          lg:w-[500px]
          xl:w-[560px]
          h-auto
          object-contain
        "
      />
    </div>
  );
};

export default LabFlowLogo;