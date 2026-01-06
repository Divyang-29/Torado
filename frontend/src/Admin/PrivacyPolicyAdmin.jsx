import { useEffect, useState } from "react";
import axios from "axios";
import "./PrivacyPolicyAdmin.css";

export default function PrivacyPolicyAdmin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("https://torado.onrender.com/privacy-policy")
      .then((res) => {
        if (res.data) {
          setTitle(res.data.title);
          setContent(res.data.content);
        }
      });
  }, []);

  const savePolicy = async () => {
    await axios.post("https://torado.onrender.com/api/privacy-policy", {
      title,
      content,
    });

    alert("Privacy Policy updated");
  };

  return (
    <div className="admin-privacy">
      <h2>Privacy Policy</h2>

      <input
        className="policy-title"
        placeholder="Policy Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="policy-editor"
        placeholder="Write policy content here (HTML supported)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={savePolicy}>Save Policy</button>
    </div>
  );
}
