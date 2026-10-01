import { motion } from "framer-motion";

const zones = [
  { label: "Design & R&D", desc: "CAD/CAM workstations, FEA simulation" },
  { label: "CNC & VMC Machining", desc: "High-precision turning and milling" },
  { label: "Laser & Fabrication", desc: "3 kW fiber laser + sheet processing" },
  { label: "Machine Assembly", desc: "Custom machine build and integration" },
  { label: "Prototype Testing", desc: "Functional and material testing" },
  { label: "Quality Control", desc: "Dimensional inspection and QC" },
];

export default function Facility() {
  return (
    <section id="facility" style={{ background: "#f8f7f4", padding: "112px 0" }}>
      <div className="tmt-wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <div className="tmt-label">Our Facility</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 900, lineHeight: 0.94, color: "#0d1f3c", margin: 0 }}>
            Built for Scale.
            <br /><span style={{ color: "#d1d5db" }}>Equipped for Precision.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#e5e7eb", marginBottom: 48 }}
          className="fac-stats">
          {[
            { val: "44,000", unit: " sq.ft.", label: "Total Land Area" },
            { val: "22,000", unit: " sq.ft.", label: "Built-up Space" },
            { val: "Tumakuru", unit: "", label: "Vasanthanarasapura Industrial Area" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#f8f7f4", padding: "40px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "#0d1f3c" }}>
                {s.val}<span style={{ fontSize: 18, color: "#e7a93b" }}>{s.unit}</span>
              </div>
              <div style={{ marginTop: 8, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9ca3af" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Facility Image */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ position: "relative", height: 420, background: "#fff", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 48, overflow: "hidden" }}>
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop')" }} />
          {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h]) => (
            <div key={v+h} style={{
              position: "absolute", zIndex: 10,
              [v]: 12, [h]: 12,
              width: 20, height: 20,
              borderColor: "#e7a93b",
              borderTopWidth: v === "top" ? 2 : 0,
              borderBottomWidth: v === "bottom" ? 2 : 0,
              borderLeftWidth: h === "left" ? 2 : 0,
              borderRightWidth: h === "right" ? 2 : 0,
              borderStyle: "solid"
            }} />
          ))}
        </motion.div>

        {/* Zone grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#e5e7eb" }} className="fac-grid">
          {zones.map((z, i) => (
            <motion.div key={z.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{ background: "#fff", padding: 32 }}>
              <div style={{ height: 2, width: 32, background: "#e7a93b", marginBottom: 16 }} />
              <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0d1f3c", margin: 0 }}>{z.label}</h3>
              <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, color: "#9ca3af" }}>{z.desc}</p>
            </motion.div>
          ))}
        </div>

        <style>{`
          .fac-stats, .fac-grid { grid-template-columns: repeat(3,1fr) !important; }
          @media (max-width: 768px) { .fac-stats, .fac-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}
