import { useEffect, useState } from "react";
import axios from "axios";
import "./Issues.css";

export default function Issues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/issues")
      .then((res) => setIssues(res.data));
  }, []);

  return (
    <>
      <section className="issues-hero">
        <h1>Political Issues</h1>
        <p>
          Home / <span>Issues</span>
        </p>
      </section>

      <section className="issues-section">
        <div className="issues-grid">
          {issues.map((item) => (
            <div className="issue-card" key={item._id}>
              <div className="issue-image">
                <img src={item.image} alt={item.title} />
                <div className="issue-icon">🏛️</div>
              </div>

              <div className="issue-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
