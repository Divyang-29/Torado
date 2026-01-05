import { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/blogs")
      .then(res => setBlogs(res.data));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="blog-hero">
        <h1>Latest From Blog</h1>
        <p>
          Home / <span>Latest Blog</span>
        </p>
      </section>

      {/* BLOG SECTION */}
      <section className="blog-section">
        <div className="blog-header">
          <span>BLOG</span>
          <h2>
            Latest News & Press <br /> For Everyone
          </h2>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <div className="blog-meta">
                  <span>👤 {blog.author}</span>
                  <span>🗓 {new Date(blog.createdAt).toDateString()}</span>
                </div>

                <h3>{blog.title}</h3>
                <p>{blog.description}</p>

                <a href="#">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
