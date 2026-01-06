/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import "./EventsAdmin.css";

export default function EventsAdmin() {
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    image: "",
    date: "",
    location: "",
    time: "",
    description: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await axios.get("https://torado.onrender.com/api/events");
    setEvents(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitEvent = async () => {
    if (!form.title || !form.image) {
      alert("Required fields missing");
      return;
    }

    if (editingId) {
      await axios.put(
        `https://torado.onrender.com/api/events/${editingId}`,
        form
      );
    } else {
      await axios.post("https://torado.onrender.com/api/events", form);
    }

    setForm({
      title: "",
      image: "",
      date: "",
      location: "",
      time: "",
      description: "",
    });

    setEditingId(null);
    fetchEvents();
  };

  const editEvent = (event) => {
    setForm(event);
    setEditingId(event._id);
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    await axios.delete(`https://torado.onrender.com/api/events/${id}`);
    fetchEvents();
  };

  return (
    <div className="admin-event">
      <h2>Event Management</h2>

      <div className="event-form">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <input name="date" placeholder="Date" value={form.date} onChange={handleChange} />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <input name="time" placeholder="Time" value={form.time} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

        <button onClick={submitEvent}>
          {editingId ? "Update Event" : "Add Event"}
        </button>
      </div>

      <div className="event-list">
        {events.map((e) => (
          <div className="event-row" key={e._id}>
            <img src={e.image} alt="" />
            <h4>{e.title}</h4>
            <div className="actions">
              <button onClick={() => editEvent(e)}>Edit</button>
              <button onClick={() => deleteEvent(e._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
