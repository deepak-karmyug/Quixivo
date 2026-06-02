"use client";
import {
  Users,
  CreditCard,
  Fingerprint,
  BookOpen,
  Layers,
  ClipboardList,
  Bell,
  MessageSquare,
  BarChart3,
  Shield,
  FileText,
  Globe,
  Calendar,
  Award,
  Smartphone,
  CheckSquare,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Student Management",
    desc: "Full profiles, admission tracking, document management, education history.",
    tags: ["Aadhaar capture", "Photo ID", "Bulk import"],
    color: "#6366f1",
  },
  {
    icon: CreditCard,
    title: "Fee & Payment Engine",
    desc: "Flexible fee structures, installment plans, auto-reminders. UPI, cash, cheque.",
    tags: ["Installments", "Receipts", "Overdue alerts"],
    color: "#10b981",
  },
  {
    icon: Fingerprint,
    title: "GPS Self-Attendance",
    desc: "Selfie + GPS punch in/out, Wi-Fi campus check, WhatsApp parent alerts.",
    tags: ["Selfie verify", "GPS fence", "WhatsApp alert"],
    color: "#f59e0b",
  },
  {
    icon: BookOpen,
    title: "Course & Batch Management",
    desc: "Unlimited courses, batch schedules, trainer assignment, seat limits.",
    tags: ["Batch scheduler", "Trainers", "Progress"],
    color: "#8b5cf6",
  },
  {
    icon: Layers,
    title: "Syllabus Builder",
    desc: "Modules and topics, completion tracking, resource links, estimated hours.",
    tags: ["Modules & topics", "Completion %", "Resources"],
    color: "#ec4899",
  },
  {
    icon: ClipboardList,
    title: "Student Tasks & Kanban",
    desc: "Homework, projects, PYQs; Kanban board for students; trainer tracking.",
    tags: ["Kanban board", "Priority", "Bulk assign"],
    color: "#06b6d4",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Broadcast to all/batch/course; rich text + attachments; read receipts.",
    tags: ["Broadcast", "Read receipts", "Attachments"],
    color: "#f97316",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    desc: "Gupshup API for punch alerts, birthday wishes, fee reminders.",
    tags: ["Gupshup API", "Auto alerts", "Parent notify"],
    color: "#10b981",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Revenue trends, expense breakdown, attendance heatmaps, PDF export.",
    tags: ["Revenue charts", "Heatmaps", "PDF export"],
    color: "#6366f1",
  },
  {
    icon: Shield,
    title: "Roles & Permissions",
    desc: "Fine-grained custom roles: admin, trainer, accounts, receptionist.",
    tags: ["Custom roles", "Module access", "Multi-admin"],
    color: "#8b5cf6",
  },
  {
    icon: FileText,
    title: "Course Notes & Files",
    desc: "Upload PDFs, images, videos per course; Cloudinary CDN; student access.",
    tags: ["Cloudinary CDN", "Per-course", "Student access"],
    color: "#f59e0b",
  },
  {
    icon: Globe,
    title: "Multi-Branch Support",
    desc: "Multiple branches under one account; separate data & staff; central admin.",
    tags: ["Branch isolation", "Central admin", "Per-branch reports"],
    color: "#ec4899",
  },
  {
    icon: Calendar,
    title: "Quixmic Calendar",
    desc: "Classes, exams, holidays, events; personalized timetable; conflict detection.",
    tags: ["Events", "Holidays", "Timetable"],
    color: "#06b6d4",
  },
  {
    icon: Award,
    title: "Expense Tracker",
    desc: "Categorize expenses, track salaries/rent/utilities, revenue vs expense P&L.",
    tags: ["Categories", "Staff salaries", "Visual P&L"],
    color: "#f97316",
  },
  {
    icon: Smartphone,
    title: "Dedicated Student Portal",
    desc: "Students self-serve: fees, attendance, tasks, syllabus, notes, receipts.",
    tags: ["Self-service", "Fee receipts", "Task board"],
    color: "#10b981",
  },
  {
    icon: CheckSquare,
    title: "Trainer Portal",
    desc: "Trainers see their batches, mark attendance, assign tasks, share notes.",
    tags: ["Batch view", "Mark attendance", "Notes"],
    color: "#6366f1",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "80px 24px",
        background:
          "linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">16 Powerful Features</div>
          <h2
            style={{
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Everything your institute{" "}
            <span className="text-gradient">will ever need</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            From student admissions to fee collection, live classes to analytics
            — every module you need, built in.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
          }}
          className="features-grid"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "24px 20px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${f.color}40`;
                const glow = el.querySelector(".top-glow") as HTMLElement;
                if (glow) glow.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                const glow = el.querySelector(".top-glow") as HTMLElement;
                if (glow) glow.style.opacity = "0";
              }}
            >
              <div
                className="top-glow"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: f.color,
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              />
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: `${f.color}18`,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <f.icon size={20} color={f.color} />
              </div>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  marginBottom: 14,
                }}
              >
                {f.desc}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      padding: "3px 8px",
                      background: `${f.color}15`,
                      color: f.color,
                      borderRadius: 100,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) { .features-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 768px) and (max-width: 1023px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
