import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((res) => setEvents(res.data));
  }, []);

  const openEvent = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <>
      <section className="events-hero">
        <h1>Upcoming Events</h1>
        <p>
          Home / <span>Events</span>
        </p>
      </section>

      <section className="events-section">
        <div className="events-grid">
          {events.map((event) => (
            <div
              className="event-card clickable"
              key={event._id}
              onClick={() => openEvent(event._id)}
            >
              <img src={event.image} alt={event.title} />

              <div className="event-content">
                <div className="event-meta">
                  <span>📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                  <span>⏰ {event.time}</span>
                </div>

                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
