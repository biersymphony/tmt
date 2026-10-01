import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    label: "Prototype & Design Lab",
    tagline: "From Idea to Engineered Reality.",
    description:
      "Full-cycle concept development — from initial brief and CAD/CAM modelling through FEA simulation, 3D printing and functional metal prototypes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="28" width="18" height="16" rx="1" stroke="#e7a93b" strokeWidth="1.8" />
        <polyline points="4,28 13,12 22,28" stroke="#e7a93b" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="36" cy="18" r="10" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="36" y1="12" x2="36" y2="24" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="30" y1="18" x2="42" y2="18" stroke="#e7a93b" strokeWidth="1.8" />
      </svg>
    ),
    href: "/capabilities/prototype-design-lab",
    accent: "#e7a93b",
    tags: ["CAD / CAM", "FEA Simulation", "3D Printing", "Metal Prototypes"],
  },
  {
    number: "02",
    label: "Machine Manufacturing",
    tagline: "Custom Machines Built Around Your Process.",
    description:
      "We design and build panel saws, spindle moulders, pin routers and fully custom CNC machines — from scratch to commissioning.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="30" width="36" height="12" rx="1" stroke="#e7a93b" strokeWidth="1.8" />
        <rect x="14" y="18" width="20" height="12" rx="1" stroke="#e7a93b" strokeWidth="1.8" />
        <rect x="20" y="8" width="8" height="10" rx="1" stroke="#e7a93b" strokeWidth="1.8" />
        <circle cx="14" cy="42" r="3" stroke="#e7a93b" strokeWidth="1.6" />
        <circle cx="34" cy="42" r="3" stroke="#e7a93b" strokeWidth="1.6" />
      </svg>
    ),
    href: "/capabilities/machine-manufacturing",
    accent: "#e7a93b",
    tags: ["Panel Saws", "Spindle Moulders", "Pin Routers", "Custom CNC"],
  },
  {
    number: "03",
    label: "Precision Tools & Auto Components",
    tagline: "Precision-Machined to Your Specification.",
    description:
      "Jigs, fixtures, shafts, bushings, gears, brake levers and OEM spares — manufactured to tight tolerances using VMC and CNC lathe.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="#e7a93b" strokeWidth="1.8" />
        <circle cx="24" cy="24" r="6" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="24" y1="8" x2="24" y2="16" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="24" y1="32" x2="24" y2="40" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="8" y1="24" x2="16" y2="24" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="32" y1="24" x2="40" y2="24" stroke="#e7a93b" strokeWidth="1.8" />
      </svg>
    ),
    href: "/capabilities/precision-tools-auto-components",
    accent: "#e7a93b",
    tags: ["Jigs & Fixtures", "Shafts & Gears", "OEM Spares", "Close-Tolerance"],
  },
  {
    number: "04",
    label: "Industrial Fabrication",
    tagline: "Structural Steel. Welded to Last.",
    description:
      "Heavy-duty structural fabrication including frames, enclosures, platforms and weldments — built to industrial standards with precision fit.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="10" width="16" height="28" rx="1" stroke="#e7a93b" strokeWidth="1.8" />
        <rect x="28" y="10" width="16" height="28" rx="1" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="20" y1="24" x2="28" y2="24" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="20" y1="18" x2="28" y2="18" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="20" y1="30" x2="28" y2="30" stroke="#e7a93b" strokeWidth="1.8" />
      </svg>
    ),
    href: "/capabilities/industrial-fabrication",
    accent: "#e7a93b",
    tags: ["Steel Frames", "Weldments", "Enclosures", "Platforms"],
  },
  {
    number: "05",
    label: "Roofing Solutions",
    tagline: "Industrial Roofing. Engineered to Endure.",
    description:
      "Supply and installation of industrial and commercial roofing systems — metal sheets, polycarbonate, and structural roofing with weather-tight guarantees.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <polyline points="4,28 24,8 44,28" stroke="#e7a93b" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="10" y="28" width="28" height="14" rx="1" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="18" y1="28" x2="18" y2="42" stroke="#e7a93b" strokeWidth="1.4" />
        <line x1="30" y1="28" x2="30" y2="42" stroke="#e7a93b" strokeWidth="1.4" />
      </svg>
    ),
    href: "/capabilities/roofing-solutions",
    accent: "#e7a93b",
    tags: ["Metal Roofing", "Polycarbonate", "Industrial Sheds", "Installation"],
  },
  {
    number: "06",
    label: "Laser, CNC & VMC Job Work",
    tagline: "Cut. Mill. Turn. Delivered On Time.",
    description:
      "Our 3 kW fiber laser, 3-axis VMC and high-precision CNC lathe handle job work from one-off components to full production batches.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="36" height="36" rx="2" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="16" y1="6" x2="16" y2="42" stroke="#e7a93b" strokeWidth="1.2" strokeDasharray="2 3" />
        <line x1="32" y1="6" x2="32" y2="42" stroke="#e7a93b" strokeWidth="1.2" strokeDasharray="2 3" />
        <polyline points="6,18 42,18" stroke="#e7a93b" strokeWidth="1.2" strokeDasharray="2 3" />
        <polyline points="6,30 42,30" stroke="#e7a93b" strokeWidth="1.2" strokeDasharray="2 3" />
        <circle cx="24" cy="24" r="4" stroke="#e7a93b" strokeWidth="1.8" />
        <line x1="28" y1="20" x2="38" y2="10" stroke="#e7a93b" strokeWidth="1.8" />
        <circle cx="39" cy="9" r="2.5" fill="#e7a93b" />
      </svg>
    ),
    href: "/capabilities/laser-cnc-vmc-job-work",
    accent: "#e7a93b",
    tags: ["Fiber Laser", "VMC Milling", "CNC Turning", "Surface Grinding"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Capabilities() {
  return (
    <section id="capabilities" style={{ background: "#f8f7f4", padding: "100px 0 120px" }}>
      <div className="tmt-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="tmt-label">Engineering Capabilities</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#0d1f3c",
                margin: 0,
              }}
            >
              One Partner.
              <br />
              <span style={{ color: "#c9ccd3" }}>From Concept to Creation.</span>
            </h2>
            <p
              style={{
                maxWidth: 520,
                fontSize: 15,
                lineHeight: 1.8,
                color: "#6b7280",
                margin: 0,
              }}
            >
              Six integrated engineering verticals that take your project from an idea through every
              stage to a finished, precision-engineered result.
            </p>
          </div>
        </motion.div>

        {/* 2×3 Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
          className="cap-grid"
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <Link
                to={cap.href}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <div className="cap-card" style={{ height: "100%" }}>
                  {/* Card top bar */}
                  <div
                    style={{
                      height: 3,
                      background: "linear-gradient(90deg, #e7a93b 0%, transparent 100%)",
                      marginBottom: 32,
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    className="cap-card-bar"
                  />

                  {/* Number + Icon row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 24,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#e7a93b",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {cap.number}
                    </span>
                    <div style={{ opacity: 0.85 }}>{cap.icon}</div>
                  </div>

                  {/* Text content */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(18px, 2vw, 22px)",
                        fontWeight: 800,
                        color: "#0d1f3c",
                        margin: "0 0 10px",
                        lineHeight: 1.2,
                      }}
                    >
                      {cap.label}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#e7a93b",
                        margin: "0 0 14px",
                      }}
                    >
                      {cap.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.75,
                        color: "#6b7280",
                        margin: "0 0 24px",
                      }}
                    >
                      {cap.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#0d1f3c",
                            background: "#ede9df",
                            padding: "5px 10px",
                            borderRadius: 2,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderTop: "1px solid #ede9df",
                      paddingTop: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#0d1f3c",
                      }}
                    >
                      Explore
                    </span>
                    <div
                      className="cap-arrow"
                      style={{
                        width: 36,
                        height: 36,
                        border: "1.5px solid #e7a93b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.25s, transform 0.25s",
                      }}
                    >
                      <ArrowUpRight size={16} color="#e7a93b" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cap-grid {
          border: 1px solid #e5e2da;
        }
        .cap-card {
          background: #fff;
          padding: 36px 36px 32px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border: 1px solid #e5e2da;
          cursor: pointer;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .cap-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(231,169,59,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .cap-card:hover {
          box-shadow: 0 8px 40px rgba(13,31,60,0.10);
          transform: translateY(-3px);
          z-index: 1;
        }
        .cap-card:hover::after {
          opacity: 1;
        }
        .cap-card:hover .cap-card-bar {
          opacity: 1 !important;
        }
        .cap-card:hover .cap-arrow {
          background: #e7a93b !important;
          transform: rotate(45deg);
        }
        .cap-card:hover .cap-arrow svg {
          color: #0d1f3c !important;
          stroke: #0d1f3c !important;
        }
        @media (max-width: 768px) {
          .cap-grid {
            grid-template-columns: 1fr !important;
          }
          .cap-card {
            padding: 28px 24px 24px;
          }
        }
      `}</style>
    </section>
  );
}
