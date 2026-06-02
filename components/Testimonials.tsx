"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Pandey",
    role: "Director, Pandey Classes",
    location: "Patna, Bihar",
    initials: "RP",
    color: "#6366f1",
    text: "We manage 1,200 JEE students across 3 branches. Fee collection improved by 40% and we almost eliminated manual attendance follow-ups. The multi-branch dashboard is exactly what we needed.",
  },
  {
    name: "Sunita Agarwal",
    role: "Owner, Bright Future Quixmy",
    location: "Jaipur, Rajasthan",
    initials: "SA",
    color: "#10b981",
    text: "Setup was done in under an hour. Office calls from students reduced by 70% because they now check everything in the portal themselves. Best investment for our institute.",
  },
  {
    name: "Vikram Malhotra",
    role: "Principal, Victory IIT Quixmy",
    location: "Kota, Rajasthan",
    initials: "VM",
    color: "#f59e0b",
    text: "We tried Classplus and other platforms. Quixivo is far more customizable and the live classroom feature meant we cancelled our Zoom subscription entirely. Worth every rupee.",
  },
  {
    name: "Priya Nambiar",
    role: "Co-founder, Nambiar Tutorials",
    location: "Kochi, Kerala",
    initials: "PN",
    color: "#8b5cf6",
    text: "The syllabus builder and task assignment system transformed how our trainers work. Students now know exactly where they stand in every topic. Engagement is up noticeably.",
  },
  {
    name: "Anil Khanna",
    role: "Director, Khanna Study Circle",
    location: "Delhi",
    initials: "AK",
    color: "#ec4899",
    text: "The expense tracker and revenue analytics alone are worth the subscription. I can see exactly where money is going across all branches. The P&L view is a game changer.",
  },
  {
    name: "Meenakshi Rao",
    role: "Founder, MR Quixmy",
    location: "Hyderabad, Telangana",
    initials: "MR",
    color: "#06b6d4",
    text: "Every trainer logs in and sees only their batches, students, and tasks. Zero confusion. Support team responds within 2 hours — genuinely the best customer service we've experienced.",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background:
          "linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">
            <Star size={14} />
            Customer Reviews
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Loved by institutes{" "}
            <span className="text-gradient">across India</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)" }}>
            Real reviews from institute owners and directors.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
          className="test-grid"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: 28,
                position: "relative",
              }}
            >
              <Quote
                size={32}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  color: "rgba(255,255,255,0.04)",
                }}
              />
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    background: t.color,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    {t.role}
                  </div>
                  <div
                    style={{ fontSize: 10, color: t.color, fontWeight: 600 }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) { .test-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 768px) and (max-width: 1023px) { .test-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
