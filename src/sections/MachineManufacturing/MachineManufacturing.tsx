import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const eq = [
  { name: "3 kW Fiber Laser", cat: "Laser Cutting", spec: "3 kW Power" },
  { name: "3-Axis VMC", cat: "Precision Milling", spec: "3-Axis CNC" },
  { name: "High-Precision CNC Lathe", cat: "CNC Turning", spec: "High Precision" },
  { name: "Drilling cum Milling", cat: "Drilling", spec: "40 mm Capacity" },
  { name: "Manual Lathe", cat: "Conventional", spec: "1500 mm Bed" },
  { name: "Slotting Machine", cat: "Slotting", spec: "12 inch" },
  { name: "Turret Milling", cat: "Milling", spec: "All-Round" },
  { name: "Radial Drill", cat: "Drilling", spec: "40 mm" },
  { name: "Hydraulic Press Brake", cat: "Sheet Processing", spec: "20-500 Ton" },
  { name: "Surface Grinder", cat: "Grinding", spec: "Hydraulic" },
  { name: "Industrial 3D Printer", cat: "Rapid Prototyping", spec: "High Resolution" },
];

export default function MachineManufacturing() {
  return (
    <section id="machines" style={{ background: "#0d1f3c", padding: "112px 0" }}>
      <div className="tmt-wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <div className="tmt-label">Equipment & Infrastructure</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 900, lineHeight: 0.94, color: "white", margin: 0 }}>
              Built to <br /><span style={{ color: "rgba(255,255,255,0.2)" }}>Manufacture.</span>
            </h2>
            <p style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", alignSelf: "flex-end" }}>
              Eleven categories of precision equipment under one roof — fiber laser to VMC milling, CNC turning and rapid prototyping.
            </p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.08)" }}
          className="machines-grid">
          {eq.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{ background: "#0d1f3c", padding: 32, position: "relative", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#112845")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0d1f3c")}
            >
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(231,169,59,0.7)", marginBottom: 12 }}>{m.cat}</p>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>{m.name}</h3>
              <p style={{ marginTop: 6, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>{m.spec}</p>
              <div style={{ position: "absolute", bottom: 0, left: 0, height: 2, width: 0, background: "#e7a93b", transition: "width 0.5s" }}
                className="card-underline" />
            </motion.div>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.46 }}
            style={{ background: "#e7a93b", padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d4922a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#e7a93b")}
          >
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>Have a drawing?</p>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0d1f3c", margin: 0 }}>Send Your Requirement</h3>
              <ArrowUpRight size={22} style={{ marginTop: 12, color: "#0d1f3c" }} />
            </div>
          </motion.a>
        </div>

        <style>{`
          .machines-grid { grid-template-columns: repeat(4,1fr) !important; }
          @media (max-width: 1280px) { .machines-grid { grid-template-columns: repeat(3,1fr) !important; } }
          @media (max-width: 768px) { .machines-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 480px) { .machines-grid { grid-template-columns: 1fr !important; } }
          .machines-grid > *:hover .card-underline { width: 100% !important; }
        `}</style>
      </div>
    </section>
  );
}
