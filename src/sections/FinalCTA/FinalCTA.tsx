import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Upload, CheckCircle, MessageCircle } from "lucide-react";

const services = ["CNC Machining", "VMC Milling", "Laser Cutting", "Prototype & Design", "Machine Manufacturing", "Precision Component", "Other"];
const PHONE = "919999999999";
const MSG = encodeURIComponent("Hello Trinethra Machine Tools, I have a requirement and would like to discuss it.");

export default function FinalCTA() {
  const [sel, setSel] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const toggle = (s: string) => setSel((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  return (
    <section id="contact" style={{ background: "#0d1f3c", padding: "112px 0" }}>
      <div className="tmt-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }} className="cta-grid">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="tmt-label">Start a Project</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 900, lineHeight: 0.94, color: "white", margin: 0 }}>
              Have a<br />Requirement?<br />
              <span style={{ color: "rgba(255,255,255,0.22)" }}>Let's Engineer It.</span>
            </h2>
            <p style={{ marginTop: 24, maxWidth: 360, fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.45)" }}>
              Share your drawing, concept or component requirement. Our engineering team responds within 24 hours.
            </p>
            <a
              href={`https://wa.me/${PHONE}?text=${MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{ marginTop: 36, display: "inline-flex", alignItems: "center", gap: 14, border: "1px solid rgba(255,255,255,0.15)", padding: "20px 24px", textDecoration: "none", transition: "border-color 0.2s, background 0.2s", width: "100%", maxWidth: 360 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#25d366"; e.currentTarget.style.background = "rgba(37,211,102,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent"; }}
            >
              <MessageCircle size={20} style={{ color: "#25d366", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "white" }}>WhatsApp Our Team</div>
                <div style={{ marginTop: 2, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Instant response during working hours</div>
              </div>
              <ArrowUpRight size={16} style={{ marginLeft: "auto", color: "rgba(255,255,255,0.25)" }} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {done ? (
              <div style={{ display: "flex", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, textAlign: "center" }}>
                <CheckCircle size={56} style={{ color: "#e7a93b" }} />
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 900, color: "white", margin: 0 }}>Requirement Received</h3>
                <p style={{ maxWidth: 280, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>Our engineering team will review your requirement and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", marginBottom: 12, fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                    What do you need?
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {services.map((s) => (
                      <button key={s} type="button" onClick={() => toggle(s)} style={{
                        border: `1px solid ${sel.includes(s) ? "#e7a93b" : "rgba(255,255,255,0.15)"}`,
                        background: sel.includes(s) ? "rgba(231,169,59,0.1)" : "transparent",
                        color: sel.includes(s) ? "#e7a93b" : "rgba(255,255,255,0.4)",
                        padding: "8px 12px", fontSize: 10, fontWeight: 600,
                        letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer",
                        transition: "all 0.2s"
                      }}>{s}</button>
                    ))}
                  </div>
                </div>
                {[
                  { ph: "Your Name", type: "text", req: true },
                  { ph: "Company / Organisation", type: "text", req: false },
                  { ph: "Email Address", type: "email", req: true },
                  { ph: "Phone / WhatsApp", type: "tel", req: false },
                ].map((f) => (
                  <input key={f.ph} type={f.type} placeholder={f.ph} required={f.req} style={{
                    background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.15)",
                    padding: "12px 0", fontSize: 14, color: "white", outline: "none",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#e7a93b")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                  />
                ))}
                <textarea placeholder="Describe your requirement — material, quantity, tolerance, delivery..." rows={3} style={{
                  resize: "none", background: "transparent", border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  padding: "12px 0", fontSize: 14, color: "white", outline: "none",
                  transition: "border-color 0.2s", fontFamily: "Inter,sans-serif"
                }}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#e7a93b")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                />
                <label style={{ display: "flex", alignItems: "center", gap: 12, border: "1px dashed rgba(255,255,255,0.15)", padding: 16, cursor: "pointer", fontSize: 12, color: "rgba(255,255,255,0.3)", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}>
                  <Upload size={15} />
                  Attach Drawing / CAD / PDF (optional)
                  <input type="file" accept=".pdf,.dxf,.dwg,.step,.iges,.stl" style={{ display: "none" }} />
                </label>
                <button type="submit" className="btn-fill" style={{ justifyContent: "center", padding: "16px 28px", marginTop: 4 }}>
                  Submit Requirement <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <style>{`
          .cta-grid { grid-template-columns: 1fr 1fr !important; }
          @media (max-width: 768px) { .cta-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </div>
    </section>
  );
}
