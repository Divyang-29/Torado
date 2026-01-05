import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">
          📢 Press: Let’s make our Country better for every Citizen From Now...
        </div>

        <div className="top-right">
          <span>✉ hello@torado.com</span>
          <span>📞 88 57 00 24 51</span>
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo" onClick={()=>navigate("/")}>
          <img
            src="https://torado.envytheme.com/election-campaign-political/default/assets/images/logo.svg"
            alt="Torado"
          />
        </div>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => navigate("/")}>Home +</li>

          {/* ✅ PAGES DROPDOWN */}
          <li
            className="dropdown"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            Pages +
            <ul className={`dropdown-menu ${pagesOpen ? "show" : ""}`}>
              <li onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => navigate("/donation")}>Donation</li>
              <li onClick={() => navigate("/volunteer")}>Become A Volunteer</li>
              <li onClick={() => navigate("/testimonials")}>
                Our Testimonials
              </li>
              <li onClick={() => navigate("/team")}>Our Team</li>
              <li onClick={() => navigate("/faq")}>FAQ's</li>
              <li onClick={() => navigate("/gallery")}>Gallery</li>
              <li className="highlight" onClick={() => navigate("/login")}>
                Login
              </li>
              <li onClick={() => navigate("/register")}>Register</li>
              <li onClick={() => navigate("/privacy")}>Privacy Policy</li>
              <li onClick={() => navigate("/terms")}>Terms & Conditions</li>
              <li onClick={() => navigate("/404")}>Error 404</li>
            </ul>
          </li>

          <li onClick={()=>navigate("/issues")}>Issue +</li>
          <li onClick={()=>navigate("/events")}>Events +</li>
          <li onClick={()=>navigate("/candidates")}>Candidates +</li>
          <li onClick={()=>navigate("/blog")}>Blog +</li>
          <li onClick={()=>navigate("/contact")}>Contact Us</li>
        </ul>

        {/* ACTIONS */}
        <div className="nav-actions">
          <span className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>

          <button className="donate-btn" onClick={() => navigate("/donate")}>
            Donate Now
          </button>

          <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </span>
        </div>
      </nav>
    </>
  );
}
