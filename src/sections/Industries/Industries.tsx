import { motion } from "framer-motion";

const list = [
  { icon: "🚗", title: "Automotive", desc: "Precision components, jigs, fixtures and OEM spares for automotive and EV manufacturers. Close-tolerance batch production.", tags: ["Jigs & Fixtures", "OEM Spares", "Batch Work"] },
  { icon: "✈️", title: "Aerospace", desc: "High-precision machined parts and functional prototypes meeting aerospace-grade tolerances via VMC milling and CNC turning.", tags: ["CNC Precision", "VMC Milling", "Prototypes"] },
  { icon: "🪑", title: "Furniture", desc: "Advanced woodworking machinery — panel saws, spindle moulders, pin routers and custom CNC machines for furniture OEMs.", tags: ["Panel Saw", "Spindle Moulder", "Custom CNC"] },
  { icon: "⚙️", title: "Industrial Equipment", desc: "Custom special-purpose machines, laser-cut structures and precision components for industrial OEMs and plant engineers.", tags: ["SPM", "Fabrication", "Assembly"] },
  { icon: "🔬", title: "Startups & R&D", desc: "From concept validation to functional metal prototypes — rapid iteration for product developers, research labs and engineering startups.", tags: ["Prototyping", "3D Printing", "Validation"] },
  { icon: "🏗️", title: "General Engineering", desc: "Job work for general engineering — CNC turning, VMC milling, laser cutting, press brake and surface grinding on demand.", tags: ["Job Work", "CNC", "Laser"] },
];

export default function Industries() {
  return (
    <section id="industries" style={{ background: "#fff", padding: "112px 0" }}>
      <div className="tmt-wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <div className="tmt-label">Industries We Serve</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 900, lineHeight: 0.94, color: "#0d1f3c", margin: 0 }}>
              Precision for
              <br /><span style={{ color: "#d1d5db" }}>Every Industry.</span>
            </h2>
            <p style={{ maxWidth: 320, fontSize: 15, lineHeight: 1.75, color: "#6b7280", alignSelf: "flex-end" }}>
              Any sector that demands tight tolerances, reliable output and engineering accountability.
            </p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#e5e7eb" }} className="ind-grid">
          {list.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ background: "#fff", padding: 40, display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "inset 0 0 0 2px #e7a93b")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ fontSize: 32, marginBottom: 20 }}>{ind.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 900, color: "#0d1f3c", margin: 0, marginBottom: 12 }}>{ind.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6b7280", flex: 1 }}>{ind.desc}</p>
              <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {ind.tags.map((t) => (
                  <span key={t} style={{ border: "1px solid #e5e7eb", padding: "4px 12px", fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9ca3af" }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          .ind-grid { grid-template-columns: repeat(3,1fr) !important; }
          @media (max-width: 1024px) { .ind-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 640px) { .ind-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}
