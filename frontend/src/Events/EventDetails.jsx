import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    // Fetch event
    axios
      .get(`http://localhost:8080/api/events/${id}`)
      .then((res) => setEvent(res.data));

    // Fetch candidates as speakers
    axios
      .get("http://localhost:8080/api/candidates")
      .then((res) => setSpeakers(res.data));
  }, [id]);

  if (!event) return <p className="loading">Loading event...</p>;

  return (
    <>
      {/* HERO */}
      <section className="event-hero">
        <h1>Event Details</h1>
        <p>
          Home / <span>Event Details</span>
        </p>
      </section>

      {/* MAIN */}
      <section className="event-wrapper">
        <div className="event-layout">
          {/* LEFT */}
          <div className="event-main">
            <div className="event-images">
              <img src={event.image} alt={event.title} />
              <img src={event.image} alt={event.title} />
            </div>

            <h3>Event Description</h3>
            <p>{event.description}</p>

            <h3>Event Location</h3>
            <iframe
              title="map"
              src="https://www.openstreetmap.org/export/embed.html"
              className="event-map"
            />

            {/* 🔥 DYNAMIC SPEAKERS */}
            <h3>Our Speakers</h3>
            <div className="speakers-grid">
              {speakers.map((speaker) => (
                <div className="speaker-card" key={speaker._id}>
                  <img src={speaker.image} alt={speaker.name} />
                  <h4>{speaker.name}</h4>
                  <p>{speaker.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="event-sidebar">
            <h4>Event Details</h4>
            <ul>
              <li>
                <span>Location:</span> {event.location}
              </li>
              <li>
                <span>Date:</span> {event.date}
              </li>
              <li>
                <span>Time:</span> {event.time}
              </li>
              <li>
                <span>Venue:</span> Main Hall, City Center
              </li>
              <li>
                <span>Website:</span> torado.org
              </li>
              <li>
                <span>Organizer:</span> Torado Group
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
