import { useEffect, useState } from "react";
import axios from "axios";
import "./Candidates.css";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/candidates")
      .then((res) => setCandidates(res.data));
  }, []);

  return (
    <>
      <section className="candidates-hero">
        <h1>Our Candidates</h1>
        <p>
          Home / <span>Candidates</span>
        </p>
      </section>

      <section className="candidates-section">
        <div className="candidates-header">
          <span>OUR CANDIDATE</span>
          <h2>
            Every Person Important
            <br />
            To Leader
          </h2>
        </div>

        <div className="candidates-grid">
          {candidates.map((item) => (
            <div className="candidate-card" key={item._id}>
              <div className="candidate-image">
                <img src={item.image} alt={item.name} />

                <div className="socials">
                  <span>in</span>
                  <span>x</span>
                  <span>f</span>
                </div>
              </div>

              <div className="candidate-info">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
