import LabFlowLogo from "./LabFlowLogo";

const AuthLayout = ({ title, subtitle, children, footer }) => {
  return (
    <main className="min-h-screen flex bg-[#F8FAFC] overflow-hidden">

      {/* Left Branding Section */}
      <section
        className="
          hidden md:flex
          md:w-[58%]
          lg:w-[60%]
          xl:w-[62%]
          relative
          items-center
          justify-center
          overflow-hidden
          bg-[#0B1120]
        "
      >
        {/* Subtle Purple Ambient */}
        <div
          className="
            absolute
            w-[700px]
            h-[700px]
            rounded-full
            bg-purple-500/10
            blur-[160px]
          "
        />

        {/* Soft Right Blend */}
        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-48
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-[#F8FAFC]
          "
        />

        {/* Logo */}
        <div className="relative z-10 px-8">
          <LabFlowLogo />
        </div>
      </section>

      {/* Right Auth Section */}
      <section
        className="
          w-full
          md:w-[42%]
          lg:w-[40%]
          xl:w-[38%]
          flex
          items-center
          justify-center
          px-8
          py-10
          bg-[#F8FAFC]
        "
      >
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex justify-center mb-8 md:hidden">
            <LabFlowLogo />
          </div>

          {/* Premium Auth Card */}
          <div
            className="
              rounded-[28px]
              bg-white/95
              backdrop-blur-md
              border
              border-gray-100
              p-10
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            "
          >
            <header className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                {title}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                {subtitle}
              </p>
            </header>

            {children}

            <p className="mt-6 text-center text-sm text-gray-500">
              {footer}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;