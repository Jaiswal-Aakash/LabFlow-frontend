import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthFormField from "../components/auth/AuthFormField";
import AuthSubmitButton from "../components/auth/AuthSubmitButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Replace with API call later
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage(
        "If an account exists with this email address, a password reset link has been sent to your inbox."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email address to receive a reset link"
      footer={
        <Link
          to="/login"
          className="font-semibold text-violet-600 hover:text-violet-700"
        >
          Back to Login
        </Link>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        {message && (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {message}
          </p>
        )}

        <AuthFormField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <AuthSubmitButton disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </AuthSubmitButton>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;