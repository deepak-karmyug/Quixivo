"use client";
import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Live Classes", href: "#live-classes" },
  { label: "Students", href: "#student-portal" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            {/* <div
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
            </div> */}
            <span
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              Quix<span style={{ color: "var(--brand2)" }}>ivo</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 4 }}
            className="hidden-mobile"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  padding: "8px 14px",
                  color: "var(--muted)",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background =
                    "rgba(255,255,255,0.06)";
                  (e.target as HTMLElement).style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.color = "var(--muted)";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 12 }}
            className="hidden-mobile"
          >
            <a
              href="#"
              style={{
                color: "var(--muted)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Sign in
            </a>
            <a
              href="#demo"
              className="btn-primary"
              style={{ padding: "9px 20px", fontSize: 14 }}
            >
              Get Free Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text)",
              cursor: "pointer",
              padding: 8,
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 20,
              marginBottom: 16,
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  color: "var(--text)",
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: 8,
                }}
              >
                {l.label}
              </a>
            ))}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                marginTop: 12,
                paddingTop: 12,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <a
                href="#"
                style={{
                  color: "var(--muted)",
                  textAlign: "center",
                  padding: "10px",
                  textDecoration: "none",
                }}
              >
                Sign in
              </a>
              <a
                href="#demo"
                className="btn-primary"
                style={{ justifyContent: "center" }}
              >
                Get Free Demo
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </nav>
  );
}
