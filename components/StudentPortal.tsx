"use client";
import { Bell, ArrowRight, CreditCard, Calendar, ClipboardList, BookOpen } from "lucide-react";

export default function StudentPortal() {
  return (
    <section id="student-portal" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="sp-grid">
          {/* Left: Portal Mockup */}
          <div style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.4)" }}>
            {/* Header */}
            <div style={{ background: "var(--surface2)", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "white" }}>A</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Aryan Sharma</div>
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", background: "rgba(16,185,129,0.15)", color: "#10b981", borderRadius: 100 }}>JEE 2025 Batch A</span>
                </div>
              </div>
              <Bell size={18} color="var(--muted)" />
            </div>

            <div style={{ padding: 20 }}>
              {/* Quick stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
                {[
                  { label: "Attendance", value: "93%", color: "#10b981" },
                  { label: "Tasks Done", value: "18/22", color: "#6366f1" },
                  { label: "Fee Status", value: "Paid", color: "#10b981" },
                ].map(s => (
                  <div key={s.label} style={{ background: "var(--surface3)", borderRadius: 10, padding: "12px 10px", textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: s.color, marginBottom: 2 }}>{s.value}</div>
                    <div style={{ fontSize: 10, color: "var(--muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Today's classes */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>Today&apos;s Classes</div>
                {[
                  { subject: "Physics", time: "10:00 AM", status: "LIVE" },
                  { subject: "Mathematics", time: "12:30 PM", status: "Upcoming" },
                  { subject: "Chemistry", time: "3:00 PM", status: "Upcoming" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>{c.subject}</span>
                      <span style={{ fontSize: 11, color: "var(--muted)", marginLeft: 8 }}>{c.time}</span>
                    </div>
                    {c.status === "LIVE" ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(16,185,129,0.1)", borderRadius: 100, padding: "2px 8px" }}>
                          <div style={{ width: 6, height: 6, background: "#10b981", borderRadius: "50%" }} className="animate-pulse2" />
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#10b981" }}>LIVE</span>
                        </div>
                        <button style={{ fontSize: 11, fontWeight: 700, padding: "4px 10px", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 6, color: "#10b981", cursor: "pointer" }}>Join</button>
                      </div>
                    ) : (
                      <span style={{ fontSize: 10, color: "var(--muted)" }}>{c.status}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Tasks */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>Pending Tasks</div>
                {[
                  { task: "Thermodynamics PYQ Set", due: "Due today" },
                  { task: "Optics Chapter Notes", due: "2 days" },
                  { task: "Mock Test 14", due: "5 days" },
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0" }}>
                    <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.15)", borderRadius: 4, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "var(--text)", flex: 1 }}>{t.task}</span>
                    <span style={{ fontSize: 10, color: i === 0 ? "#ef4444" : "var(--muted)" }}>{t.due}</span>
                  </div>
                ))}
              </div>

              <button style={{ width: "100%", padding: "10px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 10, color: "var(--brand2)", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                Download Fee Receipt <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="section-tag"><Bell size={14} />Student Portal</div>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 16 }}>
              <span className="text-gradient">Reduce office calls</span><br />by 80%
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 36 }}>
              Students self-serve everything they need — fee receipts, attendance logs, task boards, and study notes — without calling the office.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { icon: CreditCard, title: "Fee & Receipts", desc: "View dues, payment history, PDF receipts", color: "#10b981" },
                { icon: Calendar, title: "Attendance History", desc: "Day-wise log, percentage, streak", color: "#6366f1" },
                { icon: ClipboardList, title: "Task Kanban", desc: "Homework and assignments board", color: "#f59e0b" },
                { icon: BookOpen, title: "Study Notes", desc: "Course material & recorded classes", color: "#8b5cf6" },
              ].map(c => (
                <div key={c.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 18 }}>
                  <div style={{ width: 36, height: 36, background: `${c.color}18`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <c.icon size={18} color={c.color} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{c.title}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .sp-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
