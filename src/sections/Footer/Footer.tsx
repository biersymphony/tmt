export default function Footer() {
  const caps = ["Prototype & Design", "CNC Machining", "VMC Milling", "Laser Cutting", "Machine Manufacturing"];
  const inds = ["Automotive", "Aerospace", "Furniture", "Industrial Equipment", "Startups & R&D"];
  return (
    <footer style={{ background: "#080f1e", paddingTop: 80, paddingBottom: 40 }}>
      <div className="tmt-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 48, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="footer-grid">
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ marginBottom: 20 }}>
              <img
                src="/images/logo.png"
                alt="Trinethra Machine Tools"
                style={{ height: 56, width: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.35)", maxWidth: 240 }}>
              Precision engineering and manufacturing solutions. Vasanthanarasapura Industrial Area, Tumakuru, Karnataka.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Capabilities</h4>
            <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {caps.map((c) => (
                <li key={c}><a href="#capabilities" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e7a93b")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>{c}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Industries</h4>
            <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {inds.map((ind) => (
                <li key={ind}><a href="#industries" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e7a93b")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>{ind}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Contact</h4>
            <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              <li>Vasanthanarasapura Industrial Area</li>
              <li>Tumakuru, Karnataka – 572 128</li>
              <li style={{ paddingTop: 8 }}>
                <a href="#contact" style={{ color: "#e7a93b", textDecoration: "none" }}>Send an Enquiry</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ paddingTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", margin: 0 }}>2025 Trinethra Machine Tools. All rights reserved.</p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", margin: 0, fontStyle: "italic" }}>Engineered to Precision.</p>
        </div>
      </div>
      <style>{`
        .footer-grid { grid-template-columns: repeat(4,1fr) !important; }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
