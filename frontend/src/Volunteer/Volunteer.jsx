import { useState } from "react";
import axios from "axios";
import "./Volunteer.css";

export default function Volunteer() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    about: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://torado.onrender.com/api/volunteer", form);
      alert("Volunteer form submitted successfully");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        about: "",
      });
    } catch (err) {
      alert("Something went wrong",err);
    }
  };

  return (
    <>
      <section className="volunteer-hero">
        <h1>Become A Volunteer</h1>
        <p>
          Home / <span>Volunteer</span>
        </p>
      </section>

      <section className="volunteer-section">
        <form className="volunteer-form" onSubmit={submitForm}>
          <div className="form-grid">
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="address1" placeholder="Address Line 1" value={form.address1} onChange={handleChange} />
            <input name="address2" placeholder="Address Line 2" value={form.address2} onChange={handleChange} />
          </div>

          <textarea
            name="about"
            placeholder="Describe a little about yourself"
            value={form.about}
            onChange={handleChange}
          />

          <button className="volunteer-btn">Submit</button>
        </form>
      </section>
    </>
  );
}
