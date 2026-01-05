import "./Volunteers.css";

const volunteers = [
  {
    name: "Fisher Knight",
    role: "Campaign Influencer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Craton Ronald",
    role: "Donation Collector",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Kelesha Brawon",
    role: "Donation Distributor",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Barrow Gertrude",
    role: "Donation Collector",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

export default function Volunteers() {
  return (
    <section className="volunteer-section">
      <span className="section-tag">BECOME A VOLUNTEER</span>
      <h2>Every Person Important <br /> To Leader</h2>

      <div className="volunteer-grid">
        {volunteers.map((v, i) => (
          <div className="volunteer-card" key={i}>
            <img src={v.img} alt={v.name} />
            <h4>{v.name}</h4>
            <p>{v.role}</p>

            <div className="socials">
              <span>in</span>
              <span>x</span>
              <span>o</span>
              <span>f</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
