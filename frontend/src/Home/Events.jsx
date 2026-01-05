import "./Events.css";

export default function Events() {
  return (
    <section className="events">
      {/* HEADER */}
      <div className="events-header">
        <span className="events-subtitle">UPCOMING EVENTS</span>
        <h2>
          Join With Us To Build <br />
          Your Future
        </h2>
      </div>

      {/* EVENTS GRID */}
      <div className="events-grid">
        {/* LEFT BIG CARD */}
        <div className="event-big">
          <img
            src="https://torado.envytheme.com/election-campaign-political/default/assets/images/events/e-image-1.jpg"
            alt="Event"
          />

          <div className="event-meta">
            <span>📅 06 Jan 2025</span>
            <span>📍 London UK</span>
            <span>⏰ 08:00 AM</span>
          </div>

          <h3>Love Pursues Or Desires To Obtain Pain</h3>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum tum sed sit amet
            dui praesent sapien pellen tesqu.
          </p>
        </div>

        {/* RIGHT SMALL CARDS */}
        <div className="event-list">
          <div className="event-small">
            <img
              src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=1024x1024&w=is&k=20&c=VihinJxkbGyR0liDPwqCTyRKQQODV7t8D9BLtvNOL1M="
              alt="Meeting"
            />
            <div>
              <div className="event-meta">
                <span>📅 07 Jan 2025</span>
                <span>📍 London UK</span>
                <span>⏰ 08:00 AM</span>
              </div>
              <h4>New Meeting For Next Election</h4>
              <p>
                Fummy text of the printing and type setting industrs standard
                known prin aretok.
              </p>
            </div>
          </div>

          <div className="event-small">
            <img
              src="https://media.istockphoto.com/id/1187643614/photo/the-whole-truth-and-nothing-but-the-truth-tv-reporter-presenting-the-news-outdoors-journalism.jpg?s=1024x1024&w=is&k=20&c=u6cBgUbBYShicVJLFY3DMRIZhel_iRPUi_lCR33TB80="
              alt="Debate"
            />
            <div>
              <div className="event-meta">
                <span>📅 08 Jan 2025</span>
                <span>📍 London UK</span>
                <span>⏰ 08:00 AM</span>
              </div>
              <h4>Elections Mayoral Debate</h4>
              <p>
                Fummy text of the printing and type setting industrs standard
                known prin aretok.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="event-stats">
        <div className="stat">
          <h3>180+</h3>
          <p>Total Donors</p>
        </div>
        <div className="stat">
          <h3>241+</h3>
          <p>Elections Won</p>
        </div>
        <div className="stat">
          <h3>231+</h3>
          <p>Issue Solved</p>
        </div>
        <div className="stat">
          <h3>3M+</h3>
          <p>Fund Raised</p>
        </div>
      </div>
    </section>
  );
}
