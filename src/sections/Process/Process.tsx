import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Idea & Brief", desc: "Requirement analysis and feasibility." },
  { n: "02", title: "Design", desc: "CAD/CAM modelling and drawings." },
  { n: "03", title: "Simulation", desc: "FEA and structural validation." },
  { n: "04", title: "Prototype", desc: "3D printing and rapid models." },
  { n: "05", title: "Testing", desc: "Material and functional testing." },
  { n: "06", title: "Machining", desc: "CNC, VMC and laser work." },
  { n: "07", title: "Manufacturing", desc: "Full-scale fabrication." },
  { n: "08", title: "Delivery", desc: "QC inspection and dispatch." },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#f8f7f4", padding: "112px 0" }}>
      <div className="tmt-wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <div className="tmt-label">Our Process</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 900, lineHeight: 0.94, color: "#0d1f3c", margin: 0 }}>
              Concept to Creation
              <br />
              <span style={{ color: "#d1d5db" }}>in 8 Steps.</span>
            </h2>
            <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.75, color: "#6b7280" }}>
              Every project follows a disciplined engineering process — nothing leaves our facility without going through every stage.
            </p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "#e5e7eb" }}
          className="sm-grid-2 lg-grid-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group"
              style={{ background: "#f8f7f4", padding: 32, transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f8f7f4")}
            >
              <div style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 48, fontWeight: 900, lineHeight: 1,
                color: "rgba(231,169,59,0.25)", marginBottom: 16
              }}>{s.n}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0d1f3c", margin: 0 }}>{s.title}</h3>
              <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, color: "#9ca3af" }}>{s.desc}</p>
              <div style={{ marginTop: 20, height: 2, width: 0, background: "#e7a93b", transition: "width 0.5s" }}
                onMouseEnter={(e) => (e.currentTarget.style.width = "40px")}
                onMouseLeave={(e) => (e.currentTarget.style.width = "0")}
              />
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #process [style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
          }
          @media (max-width: 640px) {
            #process [style*="grid-template-columns: repeat(4"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
