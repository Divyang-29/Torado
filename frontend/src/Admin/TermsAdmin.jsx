import { useEffect, useState } from "react";
import axios from "axios";
import "./TermsAdmin.css";

export default function TermsAdmin() {
  const [terms, setTerms] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });

  const fetchTerms = () => {
    axios.get("http://localhost:8080/api/terms")
      .then((res) => setTerms(res.data));
  };

  useEffect(() => {
    fetchTerms();
  }, []);

  const submit = async () => {
    if (!form.title || !form.content) return alert("All fields required");
    await axios.post("http://localhost:8080/api/terms", form);
    setForm({ title: "", content: "" });
    fetchTerms();
  };

  const remove = async (id) => {
    await axios.delete(`http://localhost:8080/api/terms/${id}`);
    fetchTerms();
  };

  return (
    <div className="admin-terms">
      <h2>Terms & Conditions</h2>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button onClick={submit}>Add Section</button>

      <div className="terms-list">
        {terms.map((t) => (
          <div key={t._id} className="terms-row">
            <h4>{t.title}</h4>
            <button onClick={() => remove(t._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
