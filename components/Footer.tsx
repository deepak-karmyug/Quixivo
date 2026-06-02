"use client";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const contacts = [
    {
      icon: Mail,
      text: "karmyugtechzone@gmail.com",
      href: "mailto:karmyugtechzone@gmail.com",
    },
    { icon: Phone, text: "+91 8770924535", href: "tel:+918770924535" },
    { icon: MapPin, text: "Ratlam, India", href: "#" },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
    { icon: MessageCircle, label: "WhatsApp" },
    { icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "44px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 22,
          }}
          className="footer-grid"
        >
          <div style={{ maxWidth: 520 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                maxWidth: 460,
              }}
            >
              All-in-one institute management platform trusted by 3,000+
              coaching institutes across India.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 18,
                flexWrap: "wrap",
              }}
              className="footer-contact-row"
            >
              {contacts.map((c) => (
                <a
                  key={c.text}
                  href={c.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    whiteSpace: "nowrap",
                    color: "var(--muted)",
                    textDecoration: "none",
                  }}
                >
                  <c.icon size={13} color="var(--muted)" />
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>
                    {c.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  width: 38,
                  height: 38,
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
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .footer-contact-row {
            flex-direction: column;
            gap: 10px !important;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
