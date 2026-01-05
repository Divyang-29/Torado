import { useEffect, useState } from "react";
import axios from "axios";
import "./VolunteersAdmin.css";

export default function VolunteersAdmin() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/volunteer")
      .then((res) => setVolunteers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="admin-volunteer">
      <h2>Volunteers</h2>

      {loading ? (
        <p>Loading volunteers...</p>
      ) : (
        <div className="volunteer-table-wrapper">
          <table className="volunteer-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>About</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {volunteers.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No volunteers found
                  </td>
                </tr>
              )}

              {volunteers.map((v, index) => (
                <tr key={v._id}>
                  <td>{index + 1}</td>
                  <td>
                    {v.firstName} {v.lastName}
                  </td>
                  <td>{v.email}</td>
                  <td>{v.phone}</td>
                  <td>
                    {v.address1}
                    {v.address2 ? `, ${v.address2}` : ""}
                  </td>
                  <td className="about-cell">{v.about || "-"}</td>
                  <td>
                    {new Date(v.createdAt).toLocaleDateString()}
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
