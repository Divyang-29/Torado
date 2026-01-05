import "./BlogSection.css";

const blogs = [
  {
    id: 1,
    img: "https://torado.envytheme.com/election-campaign-political/default/assets/images/blog/b-image-1.jpg",
    day: "10",
    month: "Sep",
    title: "We Can Achieve Anything...",
    date: "January 01, 2025",
  },
  {
    id: 2,
    img: "https://torado.envytheme.com/election-campaign-political/default/assets/images/blog/b-image-2.jpg",
    day: "11",
    month: "Sep",
    title: "How Communication Effects...",
    date: "January 05, 2025",
    active: true,
  },
  {
    id: 3,
    img: "https://torado.envytheme.com/election-campaign-political/default/assets/images/blog/b-image-3.jpg",
    day: "12",
    month: "Sep",
    title: "How To Stand Against Any...",
    date: "January 08, 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <span className="blog-tag">BLOG</span>
      <h2>
        Latest News & Press <br />
        For Everyone
      </h2>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-img">
              <img src={blog.img} alt="" />
              <div className={`date-badge ${blog.active ? "active" : ""}`}>
                <span>{blog.day}</span>
                <small>{blog.month}</small>
              </div>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
                <span>👤 By Admin</span>
                <span>📅 {blog.date}</span>
              </div>

              <h3>{blog.title}</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit elementum
                erat ut aliquet neque pra.
              </p>

              <button className={`read-more ${blog.active ? "active" : ""}`}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
