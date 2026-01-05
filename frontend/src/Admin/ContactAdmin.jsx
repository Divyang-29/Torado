import { useEffect, useState } from "react";
import axios from "axios";
import "./ContactAdmin.css";

export default function ContactAdmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/contact")
      .then((res) => setContacts(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="admin-contact">
      <h2>Contact Messages</h2>

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div className="contact-table-wrapper">
          <table className="contact-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {contacts.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No messages found
                  </td>
                </tr>
              )}

              {contacts.map((c, index) => (
                <tr key={c._id}>
                  <td>{index + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone || "-"}</td>
                  <td>{c.subject || "-"}</td>
                  <td className="message-cell">{c.message}</td>
                  <td>
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
