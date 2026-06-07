import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Lock } from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import AuthFormField from "../components/auth/AuthFormField";
import AuthSubmitButton from "../components/auth/AuthSubmitButton";

const ResetPassword = () => {
  const navigate = useNavigate();
  // const { token } = useParams();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.currentPassword.trim()) {
      setError("Current password is required.");
      return;
    }

    if (form.newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      console.log("Reset Token:", token);

      // Replace with API call later
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigate("/login", {
        state: {
          message:
            "Password reset successfully. Please sign in using your new password.",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your current password and choose a new one"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <AuthFormField
          id="currentPassword"
          name="currentPassword"
          label="Current Password"
          type="password"
          placeholder="Enter current password"
          icon={Lock}
          value={form.currentPassword}
          onChange={handleChange}
          required
        />

        <AuthFormField
          id="newPassword"
          name="newPassword"
          label="New Password"
          type="password"
          placeholder="Enter new password"
          icon={Lock}
          value={form.newPassword}
          onChange={handleChange}
          required
        />

        <AuthFormField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm new password"
          icon={Lock}
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <AuthSubmitButton disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </AuthSubmitButton>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;