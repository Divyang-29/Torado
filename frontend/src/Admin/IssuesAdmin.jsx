/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import "./IssuesAdmin.css";

export default function IssuesAdmin() {
  const [issues, setIssues] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const res = await axios.get("https://torado.onrender.com/api/issues");
    setIssues(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitIssue = async () => {
    if (!form.title || !form.image) {
      alert("All fields required");
      return;
    }

    if (editingId) {
      await axios.put(
        `https://torado.onrender.com/api/issues/${editingId}`,
        form
      );
    } else {
      await axios.post("https://torado.onrender.com/api/issues", form);
    }

    setForm({ title: "", image: "", description: "" });
    setEditingId(null);
    fetchIssues();
  };

  const editIssue = (issue) => {
    setForm(issue);
    setEditingId(issue._id);
  };

  const deleteIssue = async (id) => {
    if (!window.confirm("Delete this issue?")) return;
    await axios.delete(`https://torado.onrender.com/api/issues/${id}`);
    fetchIssues();
  };

  return (
    <div className="admin-issue">
      <h2>Issue Management</h2>

      <div className="issue-form">
        <input
          name="title"
          placeholder="Issue Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <button onClick={submitIssue}>
          {editingId ? "Update Issue" : "Add Issue"}
        </button>
      </div>

      <div className="issue-list">
        {issues.map((i) => (
          <div className="issue-row" key={i._id}>
            <img src={i.image} alt="" />
            <h4>{i.title}</h4>
            <div className="actions">
              <button onClick={() => editIssue(i)}>Edit</button>
              <button onClick={() => deleteIssue(i._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
