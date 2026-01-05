import "./Ideology.css";

export default function Ideology() {
  return (
    <section className="ideology">
      <div className="ideology-header">
        <span className="ideology-subtitle">OUR IDEOLOGY</span>
        <h2>
          Walk On Ideology With <br />
          People Hope
        </h2>
      </div>

      <div className="ideology-cards">
        {/* CARD 1 */}
        <div className="ideology-card">
          <div className="card-image">
            <img
              src="https://torado.envytheme.com/election-campaign-political/default/assets/images/ideology/i-image-2.jpg"
              alt="Protecting City"
            />
            <div className="card-icon">🏙️</div>
          </div>

          <div className="card-content">
            <h4>Protecting City</h4>
            <p>
              Fummy text of the printing and type setting indust standard known
              prin aretok printing and typene ws dol.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="ideology-card">
          <div className="card-image">
            <img
              src="https://torado.envytheme.com/election-campaign-political/default/assets/images/ideology/i-image-3.jpg"
              alt="Fair Governance"
            />
            <div className="card-icon">🏛️</div>
          </div>

          <div className="card-content">
            <h4>Fair Governance</h4>
            <p>
              Fummy text of the printing and type setting indust standard known
              prin aretok printing and typene ws dol.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="ideology-card">
          <div className="card-image">
            <img
              src="https://torado.envytheme.com/election-campaign-political/default/assets/images/ideology/i-image-6.jpg"
              alt="Build Strong Country"
            />
            <div className="card-icon">🗺️</div>
          </div>

          <div className="card-content">
            <h4>Build Strong Country</h4>
            <p>
              Fummy text of the printing and type setting indust standard known
              prin aretok printing and typene ws dol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
