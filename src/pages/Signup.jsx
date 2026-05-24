import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

const Signup = () => {
  const footer = (
    <>
      Already have an account?{" "}
      <Link
        to="/login"
        className="font-medium text-purple-600 hover:text-purple-700"
      >
        Login
      </Link>
    </>
  );

  return (
    <AuthLayout
      title="Create account"
      subtitle="Get started with LabFlow"
      footer={footer}
    >
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            outline-none
            focus:border-purple-500
            focus:ring-2
            focus:ring-purple-100
            transition-all
          "
        />

        <input
          type="email"
          placeholder="Email"
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            outline-none
            focus:border-purple-500
            focus:ring-2
            focus:ring-purple-100
            transition-all
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            outline-none
            focus:border-purple-500
            focus:ring-2
            focus:ring-purple-100
            transition-all
          "
        />

        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-gradient-to-r
            from-purple-500
            to-violet-700
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:shadow-lg
            hover:scale-[1.01]
          "
        >
          Sign Up
        </button>
      </form>
    </AuthLayout>
  );
};

export default Signup;