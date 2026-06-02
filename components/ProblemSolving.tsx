"use client";
import {
  Target,
  Radar,
  TrendingUp,
  HelpCircle,
  FileQuestion,
  Clock,
  Bell,
} from "lucide-react";

export default function ProblemSolving() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background:
          "linear-gradient(180deg, transparent, rgba(139,92,246,0.03), transparent)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">
            <Target size={14} />
            Quixmic Tools
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Built for <span className="text-gradient">competitive exam</span>{" "}
            coaching
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Specialised Quixmic tools for JEE, NEET, and competitive exam
            institutes.
          </p>
        </div>

        {/* 3 main tool cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            marginBottom: 20,
          }}
          className="ps-main-grid"
        >
          {/* Practice Assigner */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(99,102,241,0.15)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Target size={18} color="#6366f1" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  Practice Problem Assigner
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>
                  Assign topic-wise PYQs & chapter tests
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { topic: "Thermodynamics PYQs", pct: 78, color: "#10b981" },
                { topic: "Optics Refraction", pct: 45, color: "#f59e0b" },
                { topic: "Organic Chemistry", pct: 62, color: "#6366f1" },
              ].map((t) => (
                <div
                  key={t.topic}
                  style={{
                    background: "var(--surface3)",
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {t.topic}
                    </span>
                    <span
                      style={{ fontSize: 11, color: t.color, fontWeight: 700 }}
                    >
                      {t.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 5,
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: 3,
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${t.pct}%`,
                        background: t.color,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weak Topic Radar */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(239,68,68,0.15)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Radar size={18} color="#ef4444" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  Weak Topic Radar
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>
                  AI-powered risk analysis
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { topic: "Electrochemistry", risk: "High", color: "#ef4444" },
                { topic: "Probability", risk: "Medium", color: "#f59e0b" },
                {
                  topic: "Coordination Compounds",
                  risk: "High",
                  color: "#ef4444",
                },
                { topic: "EM Waves", risk: "Low", color: "#10b981" },
              ].map((t) => (
                <div
                  key={t.topic}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "var(--surface3)",
                    borderRadius: 8,
                    padding: "10px 12px",
                  }}
                >
                  <span style={{ fontSize: 12, color: "var(--text)" }}>
                    {t.topic}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "2px 8px",
                      background: `${t.color}20`,
                      color: t.color,
                      borderRadius: 100,
                    }}
                  >
                    {t.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Tracker */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(16,185,129,0.15)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrendingUp size={18} color="#10b981" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  Student Progress Tracker
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>
                  Real-time progress dashboard
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Syllabus", pct: 68 },
                { label: "Tasks", pct: 82 },
                { label: "Attendance", pct: 91 },
                { label: "Score", pct: 74 },
              ].map((p) => (
                <div key={p.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <span style={{ fontSize: 12, color: "var(--muted)" }}>
                      {p.label}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--text)",
                      }}
                    >
                      {p.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: 3,
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${p.pct}%`,
                        background: "linear-gradient(90deg,#6366f1,#10b981)",
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 extra cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
          }}
          className="ps-extra-grid"
        >
          {[
            {
              icon: HelpCircle,
              title: "Doubt Tracker",
              desc: "Students post doubts; trainers resolve with image/text responses.",
              color: "#8b5cf6",
            },
            {
              icon: FileQuestion,
              title: "Chapter-wise Mocks",
              desc: "Schedule topic or full-length mocks, auto score capture.",
              color: "#ec4899",
            },
            {
              icon: Clock,
              title: "Timed Practice",
              desc: "Timed problem sets to simulate real exam pressure conditions.",
              color: "#06b6d4",
            },
            {
              icon: Bell,
              title: "Revision Reminders",
              desc: "Auto-remind students who haven't touched a topic in 7+ days.",
              color: "#f97316",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="card-hover"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: `${c.color}18`,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                <c.icon size={18} color={c.color} />
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 6,
                }}
              >
                {c.title}
              </div>
              <div
                style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}
              >
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) { .ps-main-grid { grid-template-columns: 1fr !important; } .ps-extra-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (min-width: 768px) and (max-width: 1023px) { .ps-main-grid { grid-template-columns: 1fr !important; } .ps-extra-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
