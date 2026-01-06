import "./Faq.css";

export default function Faq() {
  return (
    <>
      {/* HERO */}
      <section className="faq-hero">
        <h1>Check Question</h1>
        <p>
          Home / <span>FAQ</span>
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="faq-section">
        <div className="faq-wrapper">

          {/* LEFT */}
          <div className="faq-content">
            <span className="faq-tag">FIGHT FOR NATION</span>

            <h2>
              How We Can Build A Better <br />
              Country Together
            </h2>

            <p className="faq-desc">
              There are many variations of passages of lorem ipsum amet
              but majority havey suffered alteration in some form by
              injected humour.
            </p>

            <div className="faq-accordion">

              <details open>
                <summary>
                  Reasons To Vote For Us?
                  <span>−</span>
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
                  <span>+</span>
                </summary>
              </details>

              <details>
                <summary>
                  How Do I Know That I’ve Voted?
                  <span>+</span>
                </summary>
              </details>

            </div>
          </div>

          {/* RIGHT */}
          <div className="faq-image">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt=""
            />

            <div className="faq-badge">
              <h3>300+</h3>
              <p>Legislation Passed</p>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURE BOXES */}
      <section className="faq-features mb-5">
        <div className="feature">
          <h4>Safe Environment</h4>
          <p>Sed perspiciatis unde omnis natus error sit.</p>
        </div>

        <div className="feature">
          <h4>Veterans Benefits</h4>
          <p>Sed perspiciatis unde omnis natus error sit.</p>
        </div>

        <div className="feature active">
          <h4>Family Protection</h4>
          <p>Sed perspiciatis unde omnis natus error sit.</p>
        </div>
      </section>
    </>
  );
}
