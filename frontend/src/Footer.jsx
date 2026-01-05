import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <span>NEWSLETTER</span>
            <h2>Stay Connected With<br />Torado</h2>
          </div>

          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Here..." />
            <button>✉</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">◔</span>
              <h3>Torado</h3>
            </div>

            <p>
              Lorem ipsum dolor sit amconsec
              adipiscing elit eiusmod tempor incididunt
              labore dolore magna aliqua con tetur.
            </p>

            <div className="socials">
              <span>f</span>
              <span>x</span>
              <span>◎</span>
              <span>in</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>› Who We Are</li>
              <li>› Recent Causes</li>
              <li>› Join Campaign</li>
              <li>› Latest Blog</li>
              <li>› Become A Volunteer</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <p><strong>Location:</strong> 3016 sunrise road las vegas</p>
            <p><strong>Email:</strong> hello@torado.com</p>
            <p><strong>Phone:</strong> (+30) 098765432150</p>
          </div>

          {/* INSTAGRAM */}
          <div className="footer-col">
            <h4>Instagram</h4>
            <div className="insta-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            <span className="brand">Torado</span> All Right Reserved Design By:
            <span className="envy"> EnvyTheme</span>
          </p>

          <div className="links">
            <a onClick={()=>navigate("/privacy")}>Privacy Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </>
  );
}
