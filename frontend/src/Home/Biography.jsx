import "./Biography.css";

export default function Biography() {
  return (
    <section className="biography-section">
      <span className="bio-tag">BIOGRAPHY</span>
      <h2>
        Your Vote For Progress <br />
        We Make History
      </h2>

      <div className="bio-card">
        {/* IMAGE */}
        <div className="bio-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1661488538787-3028c44f0612?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Protest"
          />
        </div>

        {/* YEAR CIRCLE */}
        <div className="bio-year">1980</div>

        {/* CONTENT */}
        <div className="bio-content">
          <h3>The Value Of Feasibility</h3>
          <p>
            The point of using Lorem Ipsum is that it has a more normal
            distribution of letters, as opposed using making it do look like
            readable English. Many desktop publish.
          </p>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="bio-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
