import "./AboutCampaign.css";

export default function AboutCampaign() {
  return (
    <section className="campaign">
      {/* TOP CARDS */}
      <div className="campaign-cards">
        <div className="card">
          <div className="icon blue">🌱</div>
          <h4>Safe Environment</h4>
          <p>Sed perspiciatis unde omn ausantium doloremque laudant.</p>
        </div>

        <div className="card">
          <div className="icon blue">💰</div>
          <h4>Veterans Benefits</h4>
          <p>Sed perspiciatis unde omn ausantium doloremque laudant.</p>
        </div>

        <div className="card active">
          <div className="icon white">🛡️</div>
          <h4>Family Protection</h4>
          <p>Sed perspiciatis unde omn ausantium doloremque laudant.</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="campaign-content">
        {/* LEFT */}
        <div className="campaign-text">
          <span className="sub-title">ABOUT OUR CAMPAIGN</span>

          <h2>
            Campaign Is About <br />
            Politics & Future
          </h2>

          <p className="description">
            There are many variations of passages of lorem ipsum amet but
            majority have suffered alteration in some form by injected humour
            or randomise words which don't sure amet consorm.
          </p>

          <div className="checklist">
            <div className="check-item">
              <span className="check">✔</span>
              <div>
                <h5>Economical Stability</h5>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum tum sed
                  sit amet dui praesent sapien pellen tesqu.
                </p>
              </div>
            </div>

            <div className="check-item">
              <span className="check">✔</span>
              <div>
                <h5>Educational Institution</h5>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum tum sed
                  sit amet dui praesent sapien pellen tesqu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="campaign-images">
          <img
            src="https://torado.envytheme.com/election-campaign-political/default/assets/images/about/a-image-2.jpg"
            alt="campaign"
            className="img-one"
          />
          <img
            src="https://torado.envytheme.com/election-campaign-political/default/assets/images/about/a-image-1.jpg"
            alt="protest"
            className="img-two"
          />

          <div className="badge">
            <h3>300+</h3>
            <span>Legislation Passed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
