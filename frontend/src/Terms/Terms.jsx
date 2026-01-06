import { useEffect, useState } from "react";
import axios from "axios";
import "./Terms.css";

export default function Terms() {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/terms")
      .then((res) => setTerms(res.data));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="terms-hero">
        <h1>Terms & Conditions</h1>
        <p>Home / <span>Terms & Conditions</span></p>
      </section>

      {/* CONTENT */}
      <section className="terms-section">
        <div className="terms-container">
          {terms.map((item, index) => (
            <div key={item._id} className="terms-block">
              <h3>{index + 1}. {item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
