import { useEffect, useState } from "react";
import axios from "axios";
import "./BlogAdmin.css";

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
  });

  /* 🔄 LOAD BLOGS (SAFE EFFECT) */
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Fetch blogs error:", err);
      }
    };

    loadBlogs();
  }, []);

  /* ✍️ INPUT HANDLER */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* 🔁 REFETCH BLOGS (NO EFFECT) */
  const refreshBlogs = async () => {
    const res = await axios.get("http://localhost:8080/api/blogs");
    setBlogs(res.data);
  };

  /* ➕ ADD / ✏️ UPDATE */
  const submitBlog = async () => {
    try {
      if (!form.title || !form.image || !form.description) {
        alert("All fields are required");
        return;
      }

      if (editingId) {
        await axios.put(
          `http://localhost:8080/api/blogs/${editingId}`,
          form
        );
      } else {
        await axios.post("http://localhost:8080/api/blogs", form);
      }

      setForm({ title: "", image: "", description: "" });
      setEditingId(null);
      refreshBlogs();
    } catch (err) {
      console.error("Submit blog error:", err);
    }
  };

  /* ✏️ EDIT */
  const editBlog = (blog) => {
    setForm({
      title: blog.title,
      image: blog.image,
      description: blog.description,
    });
    setEditingId(blog._id);
  };

  /* ❌ DELETE */
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:8080/api/blogs/${id}`);
      refreshBlogs();
    } catch (err) {
      console.error("Delete blog error:", err);
    }
  };

  return (
    <div className="admin-blog">
      <h2>Admin Blog Management</h2>

      {/* FORM */}
      <div className="blog-form">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Blog Description"
          value={form.description}
          onChange={handleChange}
        />

        <button onClick={submitBlog}>
          {editingId ? "Update Blog" : "Add Blog"}
        </button>
      </div>

      {/* BLOG LIST */}
      <div className="blog-table">
        {blogs.length === 0 && <p>No blogs found</p>}

        {blogs.map((blog) => (
          <div className="blog-row" key={blog._id}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-info">
              <h4>{blog.title}</h4>
              <p>{blog.description.slice(0, 100)}...</p>
            </div>

            <div className="actions">
              <button className="edit" onClick={() => editBlog(blog)}>
                Edit
              </button>
              <button
                className="delete"
                onClick={() => deleteBlog(blog._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
