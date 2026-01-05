import "./Contact.css";
import { useState } from "react";
import api from "../../utils/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await api.post("/contact", form);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error",error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Home / <span>Contact</span>
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-wrapper">
          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="info-card">
              <div className="icon">📍</div>
              <h4>Our Location</h4>
              <p>70-80 Upper St Norwich NR<br />London United Kingdom</p>
            </div>

            <div className="info-card">
              <div className="icon">✉️</div>
              <h4>Email Address</h4>
              <p>info@torado.com<br />hello@torado.com</p>
            </div>

            <div className="info-card">
              <div className="icon">📞</div>
              <h4>Phone Number</h4>
              <p>+98 12345 67890<br />+000 123 456 789</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Write A Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="error">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
