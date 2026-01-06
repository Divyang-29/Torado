import { useEffect, useState } from "react";
import axios from "axios";
import "./Testimonials.css";

export default function Testimonials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://torado.onrender.com/api/testimonials")
      .then(res => setData(res.data));
  }, []);

  return (
    <section className="testimonials">
      <span className="tag">TESTIMONIALS</span>
      <h2>8k+ People Say About<br />Our Great Work</h2>

      <div className="testimonial-grid">
        {data.map(t => (
          <div className="testimonial-card" key={t._id}>
            <div className="stars">★★★★★</div>
            <p>{t.message}</p>

            <div className="author">
              <img src={t.image} alt="" />
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>

            <div className="quote">❝</div>
          </div>
        ))}
      </div>
    </section>
  );
}
