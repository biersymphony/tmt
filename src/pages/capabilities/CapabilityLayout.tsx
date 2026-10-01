import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

interface CapabilityLayoutProps {
  number: string;
  label: string;
  tagline: string;
  heroDescription: string;
  children?: ReactNode;
}

export default function CapabilityLayout({
  number,
  label,
  tagline,
  heroDescription,
  children,
}: CapabilityLayoutProps) {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        style={{
          background: "#0d1f3c",
          padding: "140px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* Big watermark number */}
        <div
          style={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(120px, 20vw, 220px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {number}
        </div>

        <div className="tmt-wrap" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              marginBottom: 40,
              transition: "color 0.2s",
            }}
            className="back-link"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="tmt-label">Capability {number}</div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1,
              color: "#fff",
              margin: "0 0 20px",
              maxWidth: 700,
            }}
          >
            {label}
          </h1>

          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#e7a93b",
              margin: "0 0 20px",
              letterSpacing: "0.04em",
            }}
          >
            {tagline}
          </p>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 580,
              margin: 0,
            }}
          >
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Content Area — injected by each capability page */}
      <main style={{ background: "#fff" }}>
        {children}

        {/* Placeholder zone — shown until real content is uploaded */}
        <section
          style={{
            background: "#f8f7f4",
            padding: "80px 0",
            borderTop: "1px solid #ede9df",
          }}
        >
          <div className="tmt-wrap" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                background: "#fff",
                border: "1.5px dashed #d1c9b8",
                padding: "64px 48px",
                maxWidth: 540,
                width: "100%",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  border: "1.5px solid #e7a93b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <span style={{ fontSize: 22, color: "#e7a93b" }}>✦</span>
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0d1f3c",
                  margin: "0 0 10px",
                }}
              >
                Detailed Content Coming Soon
              </p>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.7,
                  color: "#9ca3af",
                  margin: "0 0 28px",
                }}
              >
                We're preparing in-depth information for this capability. Reach out to us directly
                for any requirements or enquiries.
              </p>
              <a href="/#contact" className="btn-fill">
                Send a Requirement
              </a>
            </div>
          </div>
        </section>

        {/* Quick Contact Strip */}
        <section style={{ background: "#0d1f3c", padding: "60px 0" }}>
          <div
            className="tmt-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 32,
            }}
          >
            <div>
              <div className="tmt-label">Get a Quote</div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(24px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Ready to start your project?
              </h2>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="tel:+919876543210"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#fff",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  padding: "14px 24px",
                }}
              >
                <Phone size={14} /> Call Us
              </a>
              <a
                href="mailto:info@trinethra.in"
                className="btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
              >
                <Mail size={14} /> Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .back-link:hover { color: #e7a93b !important; }
      `}</style>
    </>
  );
}
