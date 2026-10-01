import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="location" style={{ background: "#f8f7f4" }}>
      {/* Section Header */}
      <div style={{ borderBottom: "1px solid #e5e2da" }}>
        <div className="tmt-wrap" style={{ padding: "72px 0 56px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="tmt-label">Find Us</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 900,
                lineHeight: 1,
                color: "#0d1f3c",
                margin: 0,
              }}
            >
              Our Facility &amp;
              <br />
              <span style={{ color: "#c9ccd3" }}>Location.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Map + Info Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 400px",
          minHeight: 480,
        }}
        className="location-grid"
      >
        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", minHeight: 420 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.1949366496356!2d77.03761947508612!3d13.52362538684485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb037397c1fe16b%3A0x86b087a6b01673b1!2sTrinethra%20Machine%20Tools!5e0!3m2!1sen!2sin!4v1790869008697!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              display: "block",
              position: "absolute",
              inset: 0,
              filter: "grayscale(15%) contrast(1.05)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Trinethra Machine Tools Location"
          />
        </motion.div>

        {/* Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#0d1f3c",
            padding: "52px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 36,
          }}
        >
          {/* Address */}
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 36,
                height: 36,
                border: "1px solid rgba(231,169,59,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <MapPin size={16} color="#e7a93b" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 8,
                }}
              >
                Address
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.7)",
                  margin: 0,
                }}
              >
                Vasanthanarasapura Industrial Area,
                <br />
                Tumakuru, Karnataka – 572 128
                <br />
                India
              </p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

          {/* Phone */}
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 36,
                height: 36,
                border: "1px solid rgba(231,169,59,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={16} color="#e7a93b" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 8,
                }}
              >
                Phone
              </div>
              <a
                href="tel:+919999999999"
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e7a93b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                +91 99999 99999
              </a>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 36,
                height: 36,
                border: "1px solid rgba(231,169,59,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Mail size={16} color="#e7a93b" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 8,
                }}
              >
                Email
              </div>
              <a
                href="mailto:info@trinethra.in"
                style={{
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e7a93b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                info@trinethra.in
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 36,
                height: 36,
                border: "1px solid rgba(231,169,59,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Clock size={16} color="#e7a93b" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 8,
                }}
              >
                Working Hours
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.7 }}>
                Mon – Sat: 9:00 AM – 6:30 PM
                <br />
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Sunday: Closed</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

          {/* Directions CTA */}
          <a
            href="https://maps.google.com/?q=Trinethra+Machine+Tools+Tumakuru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <MapPin size={14} />
            Get Directions
          </a>
        </motion.div>
      </div>

      <style>{`
        .location-grid {
          grid-template-columns: 1fr 400px;
        }
        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
          .location-grid iframe {
            min-height: 340px;
          }
        }
      `}</style>
    </section>
  );
}
