import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DonateSection.css";

export default function DonateSection() {
  const [amount, setAmount] = useState(50);
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate("/donate", {
      state: { amount },
    });
  };

  return (
    <section className="donate-section">
      <span className="donate-subtitle">DONATE US</span>
      <h2 className="donate-title">
        Ideological Leader For <br /> Youth Generation
      </h2>

      <div className="donate-wrapper">
        {/* LEFT IMAGE */}
        <div className="donate-image">
          <img
            src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Donate"
          />
        </div>

        {/* CENTER CARD */}
        <div className="donate-card">
          <h3>Contribute & Be A Part Of Us</h3>

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
            <button className={amount === 0 ? "active" : ""} onClick={() => setAmount(0)}>
              Others
            </button>
          </div>

          <button className="donate-btn" onClick={handleDonate}>
            Donate Now
          </button>
        </div>

        {/* RIGHT BROCHURE */}
        <div className="donate-brochure">
          <h3>The Election Brochure</h3>
          <p>
            Vestibulum ac diam sit amet quam vehicula sit amet dui praesent
            moni.
          </p>
          <button className="brochure-btn">Download Brochure</button>
        </div>
      </div>
    </section>
  );
}
