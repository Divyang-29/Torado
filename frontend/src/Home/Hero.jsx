import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT IMAGE */}
        <div className="hero-image">
          <img
            src="https://torado.envytheme.com/election-campaign-political/default/assets/images/hero/h-image-2.png"
            alt="Candidate"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-content">
          <h1>
            Meet Hanson <br />
            The Next Country <br />
            Politics Leader
          </h1>

          <p>
            At egestas volutpat dolor tincidunt hac varius aenean non lacus
            egestas amet elementum neque massa donec urna eget ulla felis
            facilisis eu ju mattis id In ultricies nam.
          </p>

          <div className="hero-buttons">
            <button className="join-btn" onClick={()=>navigate("/contact")}>Join Us Now</button>

            <div className="video-btn">
              <span className="play-icon">▶</span>
              <span>Watch Success Story</span>
            </div>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div className="stat">
              <h3>834+</h3>
              <p>Mission Complete</p>
            </div>

            <div className="stat">
              <h3>420+</h3>
              <p>Active Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
