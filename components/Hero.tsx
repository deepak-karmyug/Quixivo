"use client";
"use client";
import {
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Users,
  MessageSquare,
} from "lucide-react";

export default function Hero() {
  const bars = [40, 65, 50, 80, 70, 90, 60, 85, 75, 95, 70, 88];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 90,
        paddingBottom: 60,
      }}
    >
      {/* Background effects */}
      <div style={{ position: "absolute", inset: 0 }} className="grid-bg" />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 500,
          height: 500,
          background: "rgba(99,102,241,0.12)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "5%",
          width: 400,
          height: 400,
          background: "rgba(139,92,246,0.1)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "30%",
          width: 300,
          height: 300,
          background: "rgba(16,185,129,0.08)",
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: 100,
                marginBottom: 28,
                animation: "fadeUp 0.6s 0.1s ease both",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "#10b981",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
                className="animate-pulse2"
              />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#34d399" }}>
                Now with AI-powered insights
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: 20,
                animation: "fadeUp 0.6s 0.2s ease both",
              }}
            >
              Run your institute
              <br />
              <span className="text-gradient">like a pro.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(15px,1.5vw,18px)",
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 480,
                animation: "fadeUp 0.6s 0.3s ease both",
              }}
            >
              All-in-one platform for coaching institutes, schools & Quixmies.
              Manage fees, attendance, live classes, and 3,000+ students — from
              one dashboard.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 44,
                animation: "fadeUp 0.6s 0.4s ease both",
              }}
            >
              <a href="#demo" className="btn-primary">
                Start Free Trial <ArrowRight size={16} />
              </a>
              <a href="#live-classes" className="btn-secondary">
                <Play size={16} /> Watch Demo (2 min)
              </a>
            </div>

            {/* Social proof */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
                animation: "fadeUp 0.6s 0.5s ease both",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"].map(
                  (c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 32,
                        height: 32,
                        background: c,
                        borderRadius: "50%",
                        border: "2px solid var(--bg)",
                        marginLeft: i > 0 ? -10 : 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ),
                )}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>
                  3,000+ happy institutes · 4.9/5 rating
                </span>
              </div>
              <div
                style={{
                  height: 30,
                  width: 1,
                  background: "rgba(255,255,255,0.1)",
                }}
              />
              <span style={{ fontSize: 12, color: "var(--muted)" }}>
                ₹0 setup fee · No hidden charges
              </span>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div
            style={{
              position: "relative",
              animation: "fadeUp 0.6s 0.4s ease both",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
              }}
            >
              {/* Chrome bar */}
              <div
                style={{
                  background: "var(--surface2)",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ff5f57", "#ffbd2e", "#28ca41"].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 12,
                        height: 12,
                        background: c,
                        borderRadius: "50%",
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "var(--surface3)",
                    borderRadius: 6,
                    padding: "5px 12px",
                    fontSize: 11,
                    color: "var(--muted)",
                    textAlign: "center",
                  }}
                >
                  app.Quixivo.in/dashboard
                </div>
              </div>

              {/* Dashboard content */}
              <div style={{ display: "flex", minHeight: 340 }}>
                {/* Sidebar */}
                <div
                  style={{
                    width: 130,
                    background: "var(--surface2)",
                    borderRight: "1px solid rgba(255,255,255,0.05)",
                    padding: "14px 10px",
                    flexShrink: 0,
                  }}
                >
                  {[
                    "Dashboard",
                    "Students",
                    "Fees",
                    "Batches",
                    "Attendance",
                    "Reports",
                    "Settings",
                  ].map((item, i) => (
                    <div
                      key={item}
                      style={{
                        padding: "8px 10px",
                        borderRadius: 7,
                        fontSize: 11,
                        fontWeight: i === 0 ? 700 : 500,
                        color: i === 0 ? "white" : "var(--muted)",
                        background:
                          i === 0 ? "rgba(99,102,241,0.25)" : "transparent",
                        marginBottom: 2,
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main area */}
                <div style={{ flex: 1, padding: 16, overflowX: "hidden" }}>
                  {/* Stat cards */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                      marginBottom: 14,
                    }}
                  >
                    {[
                      {
                        label: "Total Students",
                        value: "1,284",
                        color: "#6366f1",
                        change: "+12%",
                      },
                      {
                        label: "Fee Collected",
                        value: "₹4.2L",
                        color: "#10b981",
                        change: "+34%",
                      },
                      {
                        label: "Attendance",
                        value: "92.4%",
                        color: "#f59e0b",
                        change: "+3%",
                      },
                      {
                        label: "Active Batches",
                        value: "18",
                        color: "#8b5cf6",
                        change: "+2",
                      },
                    ].map((s) => (
                      <div
                        key={s.label}
                        style={{
                          background: "var(--surface3)",
                          borderRadius: 8,
                          padding: "10px 12px",
                          borderLeft: `3px solid ${s.color}`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 9,
                            color: "var(--muted)",
                            marginBottom: 3,
                          }}
                        >
                          {s.label}
                        </div>
                        <div
                          style={{
                            fontSize: 16,
                            fontWeight: 800,
                            color: "var(--text)",
                          }}
                        >
                          {s.value}
                        </div>
                        <div style={{ fontSize: 9, color: s.color }}>
                          {s.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bar chart */}
                  <div
                    style={{
                      background: "var(--surface3)",
                      borderRadius: 8,
                      padding: "10px 12px",
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "var(--muted)",
                        marginBottom: 8,
                      }}
                    >
                      Fee Collection Trend
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: 4,
                        height: 50,
                      }}
                    >
                      {bars.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            background:
                              i === 11
                                ? "#6366f1"
                                : `rgba(99,102,241,${0.2 + h / 200})`,
                            borderRadius: "3px 3px 0 0",
                            transition: "all 0.3s",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity feed */}
                  <div
                    style={{
                      background: "var(--surface3)",
                      borderRadius: 8,
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "var(--muted)",
                        marginBottom: 8,
                      }}
                    >
                      Recent Activity
                    </div>
                    {[
                      {
                        text: "Fee paid — Aryan Sharma",
                        time: "2m ago",
                        dot: "#10b981",
                      },
                      {
                        text: "Batch 'JEE-A' attendance marked",
                        time: "15m ago",
                        dot: "#6366f1",
                      },
                      {
                        text: "New student enrolled",
                        time: "1h ago",
                        dot: "#f59e0b",
                      },
                      {
                        text: "WhatsApp alert sent to 42 parents",
                        time: "2h ago",
                        dot: "#8b5cf6",
                      },
                    ].map((a, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "5px 0",
                          borderBottom:
                            i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
                        }}
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            background: a.dot,
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 10,
                            color: "var(--text)",
                            flex: 1,
                          }}
                        >
                          {a.text}
                        </span>
                        <span style={{ fontSize: 9, color: "var(--muted)" }}>
                          {a.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div
              className="animate-float"
              style={{
                animationDelay: "0s",
                position: "absolute",
                bottom: -20,
                left: -30,
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "12px 16px",
                minWidth: 160,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(16,185,129,0.15)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUp size={16} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    Revenue
                  </div>
                  <div
                    style={{ fontSize: 15, fontWeight: 800, color: "#10b981" }}
                  >
                    ↑ +34%
                  </div>
                </div>
              </div>
            </div>

            <div
              className="animate-float"
              style={{
                animationDelay: "2s",
                position: "absolute",
                top: 30,
                right: -30,
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "12px 16px",
                minWidth: 160,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(99,102,241,0.15)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Users size={16} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    Students
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "var(--text)",
                    }}
                  >
                    1,284 enrolled
                  </div>
                </div>
              </div>
            </div>

            <div
              className="animate-float"
              style={{
                animationDelay: "4s",
                position: "absolute",
                bottom: 60,
                right: -35,
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "12px 16px",
                minWidth: 180,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(16,185,129,0.15)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MessageSquare size={16} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>
                    WhatsApp Alert
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    Sent to 42 parents
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
