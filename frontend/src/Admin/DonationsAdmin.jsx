import { useEffect, useState } from "react";
import axios from "axios";
import "./DonationsAdmin.css";

export default function DonationsAdmin() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const res = await axios.get("https://torado.onrender.com/api/donate");
      setDonations(res.data);
    } catch (err) {
      console.error("FETCH DONATIONS ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-donations">
      <h2>Donations</h2>

      {loading ? (
        <p>Loading donations...</p>
      ) : (
        <div className="donation-table-wrapper">
          <table className="donation-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Donor Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Address</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {donations.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    No donations found
                  </td>
                </tr>
              )}

              {donations.map((d, index) => (
                <tr key={d._id}>
                  <td>{index + 1}</td>
                  <td>
                    {d.firstName} {d.lastName}
                  </td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>₹{d.amount}</td>
                  <td>
                    <span className={`status ${d.paymentMethod}`}>
                      {d.paymentMethod}
                    </span>
                  </td>
                  <td>
                    {d.address1}
                    {d.address2 ? `, ${d.address2}` : ""}
                  </td>
                  <td>
                    {new Date(d.createdAt).toLocaleDateString()}
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
