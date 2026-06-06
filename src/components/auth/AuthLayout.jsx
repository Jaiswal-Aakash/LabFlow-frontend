import LabFlowLogo from "./LabFlowLogo";

// Smooth dark → light background with no visible banding at the seam
const AUTH_BG_GRADIENT =
  "linear-gradient(to right, " +
  "#0B1120 0%, #0B1120 38%, " +
  "#0f1628 42%, #141d30 44%, #1a2438 46%, #212e45 48%, " +
  "#2a3852 49%, #33425c 50%, #3d4d66 51%, #485870 52%, " +
  "#546378 53%, #616f82 54%, #6f7c8c 55%, #7e8998 56%, " +
  "#8e97a4 57%, #9ea6b0 58%, #afb5bd 59%, #c0c4ca 60%, " +
  "#d1d4d8 61%, #dfe1e4 62%, #eaecee 63%, #f0f2f4 64%, " +
  "#F8FAFC 66%, #F8FAFC 100%)";

const AuthLayout = ({ title, subtitle, children, footer }) => {
  return (
    <main className="relative min-h-screen flex overflow-hidden bg-[#F8FAFC]">
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{ background: AUTH_BG_GRADIENT }}
      />

      {/* Left Branding Section */}
      <section
        className="
          hidden md:flex
          w-1/2
          relative
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* Ambient glow — kept in the left third, away from the center seam */}
        <div
          className="
            absolute
            left-[-30%]
            top-1/2
            -translate-y-1/2
            w-[650px]
            h-[650px]
            rounded-full
            bg-purple-600/14
            blur-[200px]
          "
        />
        <div
          className="
            absolute
            left-[-15%]
            bottom-[-25%]
            w-[450px]
            h-[450px]
            rounded-full
            bg-violet-500/10
            blur-[150px]
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
          md:w-1/2
          flex
          items-center
          justify-center
          px-6
          sm:px-10
          lg:px-12
          py-10
        "
      >
        <div className="w-full max-w-lg lg:max-w-xl">

          {/* Mobile Logo */}
          <div className="flex justify-center mb-8 md:hidden">
            <LabFlowLogo />
          </div>

          {/* Auth Card */}
          <div
            className="
              relative overflow-hidden
              rounded-2xl
              border border-slate-200/70
              bg-white
              p-8 sm:p-10
              shadow-[0_4px_24px_rgba(15,23,42,0.06),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* Top accent */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-500 via-purple-600 to-violet-500"
            />

            <header className="mb-8 pt-1">
              <h1 className="text-[1.65rem] font-semibold tracking-tight text-slate-900">
                {title}
              </h1>

              <p className="mt-1.5 text-[15px] leading-relaxed text-slate-500">
                {subtitle}
              </p>
            </header>

            {children}

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-center text-sm text-slate-500">
                {footer}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
