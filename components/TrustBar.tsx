"use client";
export default function TrustBar() {
  const brands = [
    "Resonance",
    "FIITJEE",
    "Byju's",
    "UnQuixmy",
    "PW Vidyapeeth",
    "Narayana",
    "Allen",
    "Aakash",
    "Vedantu",
    "Motion IIT",
  ];
  const doubled = [...brands, ...brands];

  return (
    <section
      style={{
        padding: "32px 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Trusted by institutes similar to
        </span>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(90deg, var(--bg), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(270deg, var(--bg), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 48,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          <div
            className="animate-marquee"
            style={{ display: "flex", gap: 48, flexShrink: 0 }}
          >
            {doubled.map((b, i) => (
              <span
                key={i}
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgba(136,136,168,0.5)",
                  cursor: "default",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(136,136,168,0.5)")
                }
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
