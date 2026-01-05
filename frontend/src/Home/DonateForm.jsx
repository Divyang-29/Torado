import { useLocation } from "react-router-dom";
import { useState } from "react";
import api from "../../utils/api";
import "./DonateForm.css";

export default function DonateForm() {
  const location = useLocation();

  // 👇 amount from previous page
  const defaultAmount = location.state?.amount || 20;
  const [amount, setAmount] = useState(defaultAmount);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log("Sending:", { amount, ...form });

      await api.post("/donate", {
        amount,
        ...form,
      });

      alert("Donation successful");
    } catch (error) {
      console.error("Backend error:", error.response?.data);
      alert(error.response?.data?.message || "Donation failed");
    }
  };

  return (
    <section className="donate-form">
      <h2>Donate Us</h2>

      {/* AMOUNT */}
      <div className="amounts">
        {[10, 20, 30, 50, 100].map((val) => (
          <button
            key={val}
            className={amount === val ? "active" : ""}
            onClick={() => setAmount(val)}
          >
            ${val}.00
          </button>
        ))}
      </div>

      {/* FORM */}
      <div className="form-grid">
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
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          name="address1"
          placeholder="Address Line 1"
          value={form.address1}
          onChange={handleChange}
        />
        <input
          name="address2"
          placeholder="Address Line 2"
          value={form.address2}
          onChange={handleChange}
        />
      </div>

      {/* PAYMENT */}
      <div className="payment">
        {["cash", "card", "paypal"].map((method) => (
          <label key={method}>
            <input
              type="radio"
              checked={form.paymentMethod === method}
              onChange={() =>
                setForm({ ...form, paymentMethod: method })
              }
            />
            {method.toUpperCase()}
          </label>
        ))}
      </div>

      <button className="donate-btn" onClick={handleSubmit}>
        Donate Now
      </button>
    </section>
  );
}
