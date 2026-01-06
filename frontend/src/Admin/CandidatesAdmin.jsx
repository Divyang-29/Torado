/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import "./CandidatesAdmin.css";

export default function CandidatesAdmin() {
  const [candidates, setCandidates] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    image: "",
  });

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    const res = await axios.get("https://torado.onrender.com/api/candidates");
    setCandidates(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitCandidate = async () => {
    if (!form.name || !form.role || !form.image) {
      alert("All fields required");
      return;
    }

    if (editingId) {
      await axios.put(
        `https://torado.onrender.com/api/candidates/${editingId}`,
        form
      );
    } else {
      await axios.post("https://torado.onrender.com/api/candidates", form);
    }

    setForm({ name: "", role: "", image: "" });
    setEditingId(null);
    fetchCandidates();
  };

  const editCandidate = (c) => {
    setForm(c);
    setEditingId(c._id);
  };

  const deleteCandidate = async (id) => {
    if (!window.confirm("Delete this candidate?")) return;
    await axios.delete(`https://torado.onrender.com/api/candidates/${id}`);
    fetchCandidates();
  };

  return (
    <div className="admin-candidate">
      <h2>Candidate Management</h2>

      <div className="candidate-form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button onClick={submitCandidate}>
          {editingId ? "Update Candidate" : "Add Candidate"}
        </button>
      </div>

      <div className="candidate-list">
        {candidates.map((c) => (
          <div className="candidate-row" key={c._id}>
            <img src={c.image} alt={c.name} />
            <h4>{c.name}</h4>
            <p>{c.role}</p>
            <div className="actions">
              <button onClick={() => editCandidate(c)}>Edit</button>
              <button onClick={() => deleteCandidate(c._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
