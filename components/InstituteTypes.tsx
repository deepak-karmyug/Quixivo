"use client";
import {
  Calculator,
  Building2,
  BookOpen,
  FlaskConical,
  Music,
  Dumbbell,
} from "lucide-react";

export default function InstituteTypes() {
  const types = [
    {
      icon: Calculator,
      label: "JEE / NEET Coaching",
      desc: "Competitive exam preparation institutes",
      color: "#6366f1",
    },
    {
      icon: Building2,
      label: "Schools & Colleges",
      desc: "K-12 schools and degree colleges",
      color: "#10b981",
    },
    {
      icon: BookOpen,
      label: "Skill & Vocational",
      desc: "Professional and vocational training",
      color: "#f59e0b",
    },
    {
      icon: FlaskConical,
      label: "Science & Tuition",
      desc: "Subject-specific tuition centers",
      color: "#8b5cf6",
    },
    {
      icon: Music,
      label: "Art, Music & Dance",
      desc: "Creative arts Quixmies",
      color: "#ec4899",
    },
    {
      icon: Dumbbell,
      label: "Sports Quixmies",
      desc: "Athletics and sports training",
      color: "#06b6d4",
    },
  ];

  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-tag">For Every Institute Type</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Built for <span className="text-gradient">every kind</span> of
            institute
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6,1fr)",
            gap: 16,
          }}
          className="types-grid"
        >
          {types.map((t) => (
            <div
              key={t.label}
              className="card-hover"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "24px 16px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: `${t.color}18`,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    "scale(1)")
                }
              >
                <t.icon size={24} color={t.color} />
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 6,
                  lineHeight: 1.3,
                }}
              >
                {t.label}
              </div>
              <div
                style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.4 }}
                className="type-desc"
              >
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) { .types-grid { grid-template-columns: repeat(2,1fr) !important; } .type-desc { display: none; } }
        @media (min-width: 768px) and (max-width: 1023px) { .types-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
