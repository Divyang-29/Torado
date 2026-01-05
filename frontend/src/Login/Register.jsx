import "./Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user", // 👈 DEFAULT ROLE
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="auth-hero">
        <h1>Register Now</h1>
        <p>
          Home / <span>Register</span>
        </p>
      </section>

      {/* FORM */}
      <section className="auth-section">
        <div className="auth-card">
          <h2>Create Account</h2>

          {error && <p className="error">{error}</p>}

          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />

          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {/* 👇 ROLE SELECTION */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            className="auth-btn"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register Now"}
          </button>

          <p className="auth-footer">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </section>
    </>
  );
}
