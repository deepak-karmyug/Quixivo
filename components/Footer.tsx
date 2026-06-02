"use client";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";

export default function Footer() {
  const cols = [
    {
      title: "Product",
      links: [
        "Features",
        "Live Classes",
        "Student Portal",
        "Pricing",
        "Changelog",
        "Roadmap",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Blog",
        "Careers",
        "Press Kit",
        "Partners",
        "Contact",
      ],
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Help Center",
        "Video Tutorials",
        "Community",
        "Status Page",
      ],
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "GDPR",
        "Security",
        "Refund Policy",
      ],
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GraduationCap size={20} color="white" />
              </div>
              <span
                style={{ fontSize: 18, fontWeight: 800, color: "var(--text)" }}
              >
                Quix<span style={{ color: "var(--brand2)" }}>ivo</span>
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: 20,
                maxWidth: 240,
              }}
            >
              All-in-one institute management platform trusted by 3,000+
              coaching institutes across India.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 20,
              }}
            >
              {[
                { icon: Mail, text: "karmyugtechzone@gmail.com" },
                { icon: Phone, text: "+91 8770924535" },
                { icon: MapPin, text: "Ratlam, India" },
              ].map((c) => (
                <div
                  key={c.text}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <c.icon size={13} color="var(--muted)" />
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[Twitter, Linkedin, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 34,
                    height: 34,
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--muted)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(99,102,241,0.15)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--brand2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--surface)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--muted)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--text)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--muted)")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "var(--muted)" }}>
            © 2026 Karmyug Techzone Pvt Ltd. Made with ♥ in India.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 7,
                height: 7,
                background: "#10b981",
                borderRadius: "50%",
              }}
              className="animate-pulse2"
            />
            <span style={{ fontSize: 12, color: "#10b981", fontWeight: 600 }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 768px) and (max-width: 1023px) { .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
