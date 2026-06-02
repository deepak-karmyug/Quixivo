"use client";
import {
  PhoneCall,
  ArrowRight,
  CreditCard,
  Clock,
  Shield,
  XCircle,
} from "lucide-react";

export default function DemoSection() {
  return (
    <section id="demo" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          className="border-gradient"
          style={{
            borderRadius: 28,
            padding: "60px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 400,
              height: 400,
              background: "rgba(99,102,241,0.1)",
              borderRadius: "50%",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{ position: "absolute", inset: 0, opacity: 0.3 }}
            className="grid-bg"
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="section-tag" style={{ margin: "0 auto 20px" }}>
              <PhoneCall size={14} />
              Free Demo Call
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              See Quixivo running
              <br />
              <span className="text-gradient">your institute.</span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 480,
                margin: "0 auto 36px",
              }}
            >
              30-minute live demo with your real data — no slides, no sales
              pitch. We set up a working version of your institute and show you
              everything live.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 36,
              }}
            >
              <a
                href="tel:+918888000000"
                className="btn-primary"
                style={{ fontSize: 16, padding: "14px 28px" }}
              >
                Book Free Demo Call <ArrowRight size={18} />
              </a>
              <a
                href="#pricing"
                className="btn-secondary"
                style={{ fontSize: 16, padding: "14px 28px" }}
              >
                Start 30-Day Free Trial
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: CreditCard, text: "No credit card needed" },
                { icon: Clock, text: "30-day free trial" },
                { icon: Shield, text: "Setup in under 1 hour" },
                { icon: XCircle, text: "Cancel anytime" },
              ].map((t) => (
                <div
                  key={t.text}
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <t.icon size={14} color="#10b981" />
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>
                    {t.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
