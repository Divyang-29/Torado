import { useEffect, useState } from "react";
import axios from "axios";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    axios
      .get("https://torado.onrender.com/api/privacy-policy")
      .then((res) => setPolicy(res.data));
  }, []);

  if (!policy) return <p>Loading...</p>;

  return (
    <>
      <section className="privacy-hero">
        <h1>{policy.title}</h1>
        <p>
          Home / <span>Privacy Policy</span>
        </p>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div
            className="privacy-content"
            dangerouslySetInnerHTML={{ __html: policy.content }}
          />

          {/* SIDEBAR (same as before) */}
          <aside className="privacy-sidebar">
            <div className="search-box">
              <input placeholder="Search" />
              <button>🔍</button>
            </div>

            <div className="sidebar-box">
              <h4>Categories</h4>
              <ul>
                <li>Business</li>
                <li>Privacy</li>
                <li>Technology</li>
                <li>Tips</li>
                <li>Uncategorized</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
