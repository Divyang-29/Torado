import { useState } from "react";
import "./FightForNation.css";

export default function FightForNation() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "Reasons To Vote For Us?",
      answer:
        "Collaboratively simplify user friendly networks after principle methods of empowerment distributed niche markets pursue mark after resource sucking applications magna.",
    },
    {
      question: "What You Need To Know Before Caucus?",
      answer:
        "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
    },
    {
      question: "How Do I Know That I’ve Voted?",
      answer:
        "Voting confirmation can be checked through official polling verification systems or local election authorities.",
    },
  ];

  return (
    <section className="fight-section">
      <div className="fight-container">
        {/* LEFT */}
        <div className="fight-left">
          <span className="fight-subtitle">FIGHT FOR NATION</span>

          <h2>
            How We Can Build A Better <br /> Country Together
          </h2>

          <p className="fight-desc">
            There are many variations of passages of lorem Ipsum amet but
            majority have suffered alteration in some form by injected humour.
          </p>

          <div className="faq">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${active === index ? "open" : ""}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                <div className="faq-header">
                  <h4>{item.question}</h4>
                  <span className="icon">{active === index ? "−" : "+"}</span>
                </div>

                {active === index && (
                  <p className="faq-body">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="fight-right">
          <div className="video-box">
            <img
              src="https://torado.envytheme.com/election-campaign-political/default/assets/images/events/e-image-5.jpg"
              alt="campaign"
            />
            <div className="play-btn">▶</div>
          </div>
        </div>
      </div>
    </section>
  );
}
