"use client";
import { useState } from "react";
import { Check, Minus, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    color: "#6366f1",
    monthlyPrice: 2999,
    yearlyPrice: 1999,
    for: "Up to 200 students, 5 staff, 2 branches",
    features: [
      { text: "Fee management & payment engine", included: true },
      { text: "GPS self-attendance", included: true },
      { text: "Course & batch management", included: true },
      { text: "Dedicated student portal", included: true },
      { text: "WhatsApp alerts (500/mo)", included: true },
      { text: "Email support", included: true },
      { text: "Live classes", included: false },
      { text: "AI analytics", included: false },
      { text: "Custom roles", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    color: "#10b981",
    monthlyPrice: 5999,
    yearlyPrice: 3999,
    for: "Up to 1,000 students, 20 staff, 5 branches",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Live classes (500 students)", included: true },
      { text: "Syllabus builder & task board", included: true },
      { text: "Expense tracker & analytics", included: true },
      { text: "Custom roles & permissions", included: true },
      { text: "WhatsApp alerts (2,000/mo)", included: true },
      { text: "Priority support", included: true },
      { text: "Weak topic AI radar", included: true },
      { text: "White-label app", included: false },
      { text: "API & webhooks", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    color: "#8b5cf6",
    monthlyPrice: null,
    yearlyPrice: null,
    for: "Unlimited students, staff & branches",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "White-label mobile app", included: true },
      { text: "API & webhooks", included: true },
      { text: "AI weak-topic radar", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SLA 99.9% uptime", included: true },
      { text: "On-premise option", included: true },
      { text: "24/7 phone support", included: true },
      { text: "Custom onboarding", included: true },
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-tag">
            <Zap size={14} />
            Pricing
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 28 }}>
            No setup fees. Cancel anytime. 30-day free trial on all plans.
          </p>

          {/* Toggle */}
          <div
            style={{
              display: "inline-flex",
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: 4,
              gap: 4,
            }}
          >
            <button
              onClick={() => setYearly(false)}
              style={{
                padding: "8px 20px",
                borderRadius: 9,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.2s",
                background: !yearly ? "rgba(99,102,241,0.2)" : "transparent",
                color: !yearly ? "var(--text)" : "var(--muted)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              style={{
                padding: "8px 20px",
                borderRadius: 9,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.2s",
                background: yearly ? "rgba(99,102,241,0.2)" : "transparent",
                color: yearly ? "var(--text)" : "var(--muted)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Yearly
              {yearly && (
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "2px 6px",
                    background: "rgba(16,185,129,0.2)",
                    color: "#10b981",
                    borderRadius: 100,
                  }}
                >
                  Save 33%
                </span>
              )}
            </button>
          </div>
          {yearly && (
            <div
              style={{
                marginTop: 8,
                fontSize: 12,
                color: "#10b981",
                fontWeight: 600,
              }}
            >
              🎉 Save 33% with yearly billing
            </div>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {plans.map((p) => (
            <div
              key={p.name}
              style={{
                background: "var(--surface)",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                border: p.popular
                  ? `2px solid ${p.color}`
                  : "1px solid rgba(255,255,255,0.08)",
                transform: p.popular ? "scale(1.03)" : "none",
                boxShadow: p.popular ? `0 0 60px ${p.color}20` : "none",
              }}
            >
              {p.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: p.color,
                  }}
                />
              )}
              {p.popular && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    background: `${p.color}15`,
                    borderBottom: `1px solid ${p.color}30`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: p.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <div style={{ padding: 28 }}>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "var(--text)",
                    marginBottom: 4,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    marginBottom: 24,
                  }}
                >
                  {p.for}
                </div>
                <div style={{ marginBottom: 28 }}>
                  {p.monthlyPrice ? (
                    <>
                      <span
                        style={{
                          fontSize: 36,
                          fontWeight: 900,
                          color: "var(--text)",
                        }}
                      >
                        ₹
                        {(yearly
                          ? p.yearlyPrice
                          : p.monthlyPrice
                        )?.toLocaleString()}
                      </span>
                      <span style={{ fontSize: 14, color: "var(--muted)" }}>
                        /mo
                      </span>
                      {yearly && (
                        <div
                          style={{
                            fontSize: 11,
                            color: "#10b981",
                            fontWeight: 600,
                            marginTop: 2,
                          }}
                        >
                          billed yearly (save ₹
                          {(
                            (p.monthlyPrice - (p.yearlyPrice || 0)) *
                            12
                          ).toLocaleString()}
                          /yr)
                        </div>
                      )}
                    </>
                  ) : (
                    <span
                      style={{
                        fontSize: 30,
                        fontWeight: 900,
                        color: "var(--text)",
                      }}
                    >
                      Custom
                    </span>
                  )}
                </div>
                <a
                  href={
                    p.name === "Enterprise"
                      ? "mailto:sales@Quixivo.in"
                      : "#demo"
                  }
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "12px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    cursor: "pointer",
                    marginBottom: 24,
                    background: p.popular ? p.color : `${p.color}18`,
                    color: p.popular ? "white" : p.color,
                    border: p.popular ? "none" : `1px solid ${p.color}40`,
                    transition: "all 0.2s",
                  }}
                >
                  {p.cta}
                </a>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {p.features.map((f) => (
                    <div
                      key={f.text}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        opacity: f.included ? 1 : 0.35,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: f.included
                            ? `${p.color}25`
                            : "rgba(255,255,255,0.05)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {f.included ? (
                          <Check size={11} color={p.color} strokeWidth={3} />
                        ) : (
                          <Minus size={11} color="var(--muted)" />
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: 13,
                          color: f.included ? "var(--text)" : "var(--muted)",
                        }}
                      >
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "var(--muted)",
            marginTop: 28,
          }}
        >
          All plans include 30-day free trial · No credit card required · Cancel
          anytime
        </p>
      </div>
      <style>{`
        @media (max-width: 767px) { .pricing-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 768px) and (max-width: 1023px) { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
