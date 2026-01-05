import "./Testimonials.css";

const reviews = [
  {
    name: "Katharine Fordik",
    role: "CEO Founder",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Industry lorem Ipsum has been the industry's standard dummy lorem Ipsum is simply dummy text of the printing and typeset since the dolor when an unknown printer took a galley of type and scrambled make a type specimen book magna do ipsum sem.",
  },
  {
    name: "Darlene Robertson",
    role: "Web Designer",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    text:
      "Industry lorem Ipsum has been the industry's standard dummy lorem Ipsum is simply dummy text of the printing and typeset since the dolor when an unknown printer took a galley of type and scrambled make a type specimen book magna do ipsum sem.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <span className="section-tag">TESTIMONIALS</span>
      <h2>8k+ People Say About <br /> Our Great Work</h2>

      <div className="testimonial-grid">
        {reviews.map((r, i) => (
          <div className="testimonial-card" key={i}>
            <div className="avatar">
              <img src={r.img} alt={r.name} />
            </div>

            <div className="stars">★★★★★</div>

            <p className="review">{r.text}</p>

            <h4>{r.name}</h4>
            <span>{r.role}</span>
          </div>
        ))}
      </div>

      <button className="view-btn">View All Reviews</button>
    </section>
  );
}
