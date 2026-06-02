"use client";
export default function Stats() {
  const stats = [
    { value: "3,000+", label: "Institutes Onboarded", sub: "across 18 states" },
    { value: "2.4M+", label: "Students Managed", sub: "active & alumni" },
    { value: "₹180Cr+", label: "Fees Processed", sub: "in last 12 months" },
    { value: "99.9%", label: "Platform Uptime", sub: "enterprise reliability" },
    { value: "40min", label: "Avg Setup Time", sub: "from signup to live" },
    { value: "4.9★", label: "Customer Rating", sub: "across 1,200+ reviews" },
  ];

  return (
    <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "linear-gradient(90deg, rgba(99,102,241,0.04), rgba(139,92,246,0.04), rgba(16,185,129,0.04))" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 24 }} className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="card-hover" style={{ textAlign: "center", padding: "16px 8px" }}>
              <div className="text-gradient" style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "var(--muted)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (min-width: 769px) and (max-width: 1023px) { .stats-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
