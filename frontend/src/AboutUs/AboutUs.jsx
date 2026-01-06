import DonateSection from "../Home/DonateSection";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <h1>Know About Us</h1>
        <p>
          Home / <span>About Us</span>
        </p>
      </section>

      {/* MARQUEE */}
      <div className="about-marquee">
        <span>
          Our Campaign Is Need Raised Requirement * Our Campaign Is Need Raised
          Requirement * Our Campaign Is Need Raised Requirement *
        </span>
      </div>

      {/* CAMPAIGN SECTION */}
      <section className="about-campaign-v2">
        <div className="about-campaign-wrapper">
          {/* LEFT IMAGE STACK */}
          <div className="about-images">
            <div className="stat-card">
              <h3>300+</h3>
              <p>Legislation Passed</p>
            </div>

            <img
              className="main-img"
              src="https://torado.envytheme.com/election-campaign-political/default/assets/images/about/a-image-3.jpg"
              alt=""
            />

            <img
              className="secondary-img"
              src="https://torado.envytheme.com/election-campaign-political/default/assets/images/about/a-image-4.jpg"
              alt=""
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <span className="tag">ABOUT OUR CAMPAIGN</span>

            <h2>
              Campaign Is About
              <br />
              Politics & Future
            </h2>

            <p className="desc">
              There are many variations of passages of lorem ipsum amet but
              majority have suffered alteration in some form by injected humour
              or randomised words which don't sure amet consrom.
            </p>

            <ul className="features">
              <li>
                Lorem ipsum dolor sit amet into consectetur adipiscing elit
              </li>
              <li>Amet into consectetur best strategic planning sit</li>
              <li>
                Best odio velit auctor nam elit nulla eget sodales dui pulvinar
              </li>
            </ul>

            <div className="cta-row">
              <button className="btn-primary">More About Us</button>

              <div className="call-box">
                <div className="call-icon">📞</div>
                <div>
                  <small>Call Us On:</small>
                  <strong>+855 2669 1234 894</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDEOLOGY */}
      <section className="about-ideology">
        <span className="small-title">OUR IDEOLOGY</span>
        <h2>
          Walk On Ideology With
          <br />
          People Hope
        </h2>

        <div className="ideology-grid">
          <div className="ideology-card">
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70" />
            <h4>Protecting City</h4>
            <p>Focused on safety, infrastructure, and urban development.</p>
          </div>

          <div className="ideology-card">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" />
            <h4>Fair Governance</h4>
            <p>Ensuring transparency and equality in leadership.</p>
          </div>

          <div className="ideology-card">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" />
            <h4>Build Strong Country</h4>
            <p>Long-term strategies for national growth.</p>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="about-stats">
        <div>
          <h3>180+</h3>
          <p>Total Donors</p>
        </div>
        <div>
          <h3>241+</h3>
          <p>Elections Won</p>
        </div>
        <div>
          <h3>231+</h3>
          <p>Issues Solved</p>
        </div>
        <div>
          <h3>3M+</h3>
          <p>Fund Raised</p>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section className="build-country">
        <div className="build-wrapper">
          {/* LEFT CONTENT */}
          <div className="build-content">
            <span className="build-tag">FIGHT FOR NATION</span>

            <h2>
              How We Can Build A Better <br />
              Country Together
            </h2>

            <p className="build-desc">
              There are many variations of passages of lorem ipsum amet but
              majority havey suffered alteration in some form by injected
              humour.
            </p>

            {/* ACCORDION */}
            <div className="build-accordion">
              <details open>
                <summary>
                  Reasons To Vote For Us?
                  <span className="icon">−</span>
                </summary>
                <p>
                  Collaboratively simplify user friendly networks after
                  principle methods of empowerment distributed niche markets
                  pursue mark after resource sucking applications magna.
                </p>
              </details>

              <details>
                <summary>
                  What You Need To Know Before Caucus?
                  <span className="icon">+</span>
                </summary>
              </details>

              <details>
                <summary>
                  How Do I Know That I’ve Voted?
                  <span className="icon">+</span>
                </summary>
              </details>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="build-image">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt=""
            />

            <div className="build-badge">
              <h3>300+</h3>
              <p>Legislation Passed</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="about-testimonials">
        <h2>
          8k+ People Say About
          <br />
          Our Great Work
        </h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “A campaign that genuinely listens to people and delivers
              results.”
            </p>
            <h4>Katherine Ford</h4>
            <span>CEO Founder</span>
          </div>

          <div className="testimonial-card">
            <p>“Transparent leadership with real impact on communities.”</p>
            <h4>Darlene Robertson</h4>
            <span>Developer</span>
          </div>
        </div>
      </section>

      {/* VOLUNTEERS */}
      <section className="about-volunteers">
        <span className="small-title">BECOME A VOLUNTEER</span>
        <h2>
          Every Person Important
          <br />
          To Leader
        </h2>

        <div className="volunteer-grid">
          <div className="volunteer-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
            <h4>Heather Knight</h4>
            <p>Campaign Influencer</p>
          </div>

          <div className="volunteer-card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" />
            <h4>Cration Ronald</h4>
            <p>Donation Collector</p>
          </div>

          <div className="volunteer-card">
            <img src="https://randomuser.me/api/portraits/men/55.jpg" />
            <h4>Kelesha Brawon</h4>
            <p>Donation Distributor</p>
          </div>

          <div className="volunteer-card">
            <img src="https://randomuser.me/api/portraits/men/60.jpg" />
            <h4>Barrow Gertrude</h4>
            <p>Donation Collector</p>
          </div>
        </div>
      </section>

      <DonateSection/>
    </>
  );
}
