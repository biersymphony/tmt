import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "44,000", unit: "sq.ft.", label: "Land Area" },
  { value: "22,000", unit: "sq.ft.", label: "Built-up Space" },
  { value: "11+", unit: "", label: "Machine Types" },
  { value: "4", unit: "", label: "Business Verticals" },
];

export default function Hero() {
  return (
    <section
      style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0d1f3c", overflow: "hidden" }}
    >
      <div className="tmt-grid" style={{ position: "absolute", inset: 0 }} />

      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.35, zIndex: 0
      }} />

      <div style={{
        position: "absolute", left: "30%", top: "35%",
        width: 600, height: 600, borderRadius: "50%",
        background: "rgba(231,169,59,0.07)",
        filter: "blur(130px)", transform: "translate(-50%,-50%)",
        pointerEvents: "none"
      }} />

      <div
        className="tmt-wrap"
        style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingTop: 128, paddingBottom: 48 }}
      >
        <div style={{ maxWidth: 900 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="tmt-label"
            style={{ marginBottom: 28 }}
          >
            Vasanthanarasapura · Tumakuru · Karnataka
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(52px, 9vw, 112px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "white",
              margin: 0,
            }}
          >
            Engineered
            <br />
            <em style={{ fontStyle: "normal", color: "#e7a93b" }}>to Precision.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            style={{
              marginTop: 28, maxWidth: 520,
              fontSize: 17, lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)", fontWeight: 300
            }}
          >
            From concept design and prototyping to precision machining,
            custom machine manufacturing and production — one integrated
            engineering partner in Tumakuru.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 16 }}
          >
            <a href="#contact" className="btn-fill">
              Request a Quote <ArrowUpRight size={15} />
            </a>
            <a href="#capabilities" className="btn-ghost">
              Our Capabilities <ChevronDown size={15} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{
          position: "relative", zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(10px)"
        }}
      >
        <div
          className="tmt-wrap"
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
          data-lg="grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "32px 0", textAlign: "center",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none"
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900, fontSize: "clamp(24px,3.5vw,36px)",
                  color: "#e7a93b", lineHeight: 1
                }}
              >
                {s.value}
                {s.unit && (
                  <span style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.35)", marginLeft: 4 }}>
                    {s.unit}
                  </span>
                )}
              </div>
              <div style={{
                marginTop: 8, fontSize: 10, fontWeight: 600,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)"
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
