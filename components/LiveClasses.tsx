"use client";
import {
  Video,
  PenTool,
  UserCheck,
  MessageCircle,
  PlayCircle,
  Brain,
  Mic,
  VideoIcon,
  Monitor,
  MessageSquare,
  Upload,
} from "lucide-react";

export default function LiveClasses() {
  const features = [
    {
      icon: Video,
      title: "HD Video + Audio",
      desc: "Up to 500 students simultaneously, adaptive bitrate streaming.",
      color: "#6366f1",
    },
    {
      icon: PenTool,
      title: "Interactive Whiteboard",
      desc: "Draw, annotate, screen share, solve problems together in real time.",
      color: "#10b981",
    },
    {
      icon: UserCheck,
      title: "Auto Attendance",
      desc: "Joining the session automatically marks the student present.",
      color: "#f59e0b",
    },
    {
      icon: MessageCircle,
      title: "Live Q&A & Polls",
      desc: "Raise hand, polls, quizzes, public and private chat.",
      color: "#8b5cf6",
    },
    {
      icon: PlayCircle,
      title: "Session Recording",
      desc: "Auto-recorded and published to the student portal post-class.",
      color: "#ec4899",
    },
    {
      icon: Brain,
      title: "AI Session Summary",
      desc: "Post-class key topics, action items, and engagement score.",
      color: "#06b6d4",
    },
  ];

  const controls = [
    { icon: Mic, label: "Mic", active: true, color: "#10b981" },
    { icon: VideoIcon, label: "Video", active: true, color: "#6366f1" },
    { icon: Monitor, label: "Screen", active: false, color: "#8b5cf6" },
    { icon: MessageSquare, label: "Chat", active: false, color: "#f59e0b" },
    { icon: Upload, label: "Files", active: false, color: "#ec4899" },
  ];

  return (
    <section id="live-classes" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="lc-grid"
        >
          {/* Left */}
          <div>
            <div className="section-tag">
              <Video size={14} />
              Live Classroom
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem,3vw,2.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              Built-in live classes,
              <br />
              <span className="text-gradient">zero extra cost</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              No Zoom, no Google Meet subscription needed. Run HD live classes
              directly inside Quixivo with auto-attendance and AI summaries.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: `${f.color}18`,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <f.icon size={18} color={f.color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 2,
                      }}
                    >
                      {f.title}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Class Mockup */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "var(--surface2)",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: 100,
                    padding: "3px 10px",
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      background: "#ef4444",
                      borderRadius: "50%",
                    }}
                    className="animate-pulse2"
                  />
                  <span
                    style={{ fontSize: 11, fontWeight: 700, color: "#f87171" }}
                  >
                    LIVE
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    JEE Physics: Thermodynamics
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    67 students · HD
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#10b981",
                }}
              >
                01:24:35
              </div>
            </div>

            {/* Video area */}
            <div
              style={{
                position: "relative",
                height: 200,
                background: "linear-gradient(135deg, #1a1a3e, #0d1b2a)",
              }}
            >
              {/* Teacher */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                    color: "white",
                    border: "2px solid #10b981",
                  }}
                >
                  T
                </div>
                <div
                  style={{
                    background: "rgba(16,185,129,0.2)",
                    border: "1px solid rgba(16,185,129,0.4)",
                    borderRadius: 100,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#34d399",
                  }}
                >
                  Speaking…
                </div>
              </div>
              {/* Equation */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "serif",
                }}
              >
                ΔQ = ΔU + W
              </div>
              {/* Student thumbnails */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 4,
                }}
              >
                {[
                  "#6366f1",
                  "#10b981",
                  "#f59e0b",
                  "#ec4899",
                  "#8b5cf6",
                  "#06b6d4",
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 36,
                      height: 28,
                      background: c,
                      borderRadius: 4,
                      opacity: 0.7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div
              style={{
                padding: "12px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                {controls.map((c) => (
                  <button
                    key={c.label}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      background: c.active
                        ? `${c.color}25`
                        : "rgba(255,255,255,0.06)",
                      color: c.active ? c.color : "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    <c.icon size={16} />
                  </button>
                ))}
              </div>
              <button
                style={{
                  padding: "8px 16px",
                  background: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: 8,
                  color: "#f87171",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                End Class
              </button>
            </div>

            {/* Chat */}
            <div style={{ padding: "12px 18px" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--muted)",
                  marginBottom: 10,
                }}
              >
                Live Chat
              </div>
              {[
                {
                  name: "Aryan S.",
                  msg: "Sir please explain enthalpy again",
                  color: "#6366f1",
                },
                {
                  name: "Riya M.",
                  msg: "Can you show the PV diagram?",
                  color: "#10b981",
                },
                {
                  name: "Karan P.",
                  msg: "Thank you sir! Very clear 🙏",
                  color: "#f59e0b",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    marginBottom: 8,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      background: m.color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      fontWeight: 800,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {m.name[0]}
                  </div>
                  <div>
                    <span
                      style={{ fontSize: 11, fontWeight: 700, color: m.color }}
                    >
                      {m.name}{" "}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--muted)" }}>
                      {m.msg}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .lc-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
