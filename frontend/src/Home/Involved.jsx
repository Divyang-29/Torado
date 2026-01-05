import "./Involved.css";

export default function Involved() {
  return (
    <section className="involved">
      <div className="involved-grid">
        {/* LEFT IMAGE */}
        <div className="involved-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1661776217775-ba332ee9566e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Speaker"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="involved-content">
          <div className="box white">
            <h3>Get Involved</h3>
            <p>
              Fummy text of the printing and type setting industrs standard
              known prin aretok.
            </p>
            <button className="arrow">→</button>
          </div>

          <div className="box blue">
            <h3>Tax Return</h3>
            <p>
              Fummy text of the printing and type setting industrs standard
              known prin aretok.
            </p>
            <button className="arrow">→</button>
          </div>

          <div className="box red">
            <h3>Civil Rights</h3>
            <p>
              Fummy text of the printing and type setting industrs standard
              known prin aretok.
            </p>
            <button className="arrow">→</button>
          </div>

          <div className="box white">
            <h3>Environment</h3>
            <p>
              Fummy text of the printing and type setting industrs standard
              known prin aretok.
            </p>
            <button className="arrow">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
