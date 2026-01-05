import "./Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", form);

      const { token, user } = res.data;

      // 🔐 STORE AUTH DATA
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // 🔀 ROLE-BASED REDIRECT
      if (user.role === "admin") {
        navigate("/admin"); // 👈 ADMIN WEBSITE
      } else {
        navigate("/"); // 👈 NORMAL USER WEBSITE
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="auth-hero">
        <h1>Login</h1>
        <p>
          Home / <span>Login</span>
        </p>
      </section>

      <section className="auth-section">
        <div className="auth-card">
          <h2>Login</h2>

          {error && <p className="error">{error}</p>}

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

          <button
            className="auth-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="auth-footer">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>
      </section>
    </>
  );
}
