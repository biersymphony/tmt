import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    label: "Prototype & Design Lab",
    href: "/capabilities/prototype-design-lab",
    short: "CAD · FEA · 3D Printing · Metal Prototypes",
  },
  {
    number: "02",
    label: "Machine Manufacturing",
    href: "/capabilities/machine-manufacturing",
    short: "Panel Saws · Spindle Moulders · Custom CNC",
  },
  {
    number: "03",
    label: "Precision Tools & Auto Components",
    href: "/capabilities/precision-tools-auto-components",
    short: "Jigs · Shafts · Gears · OEM Spares",
  },
  {
    number: "04",
    label: "Industrial Fabrication",
    href: "/capabilities/industrial-fabrication",
    short: "Steel Frames · Weldments · Enclosures",
  },
  {
    number: "05",
    label: "Roofing Solutions",
    href: "/capabilities/roofing-solutions",
    short: "Metal Roofing · Polycarbonate · Sheds",
  },
  {
    number: "06",
    label: "Laser, CNC & VMC Job Work",
    href: "/capabilities/laser-cnc-vmc-job-work",
    short: "Fiber Laser · VMC Milling · CNC Turning",
  },
];

const otherNavItems = [
  { label: "Machines", href: "/#machines" },
  { label: "Industries", href: "/#industries" },
  { label: "Facility", href: "/#facility" },
  { label: "Process", href: "/#process" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCapOpen, setMobileCapOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavLink = (href: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    if (href.startsWith("/#")) {
      // Same-page anchor — navigate home then scroll
      navigate("/");
      setTimeout(() => {
        const id = href.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      navigate(href);
    }
  };

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, zIndex: 100, width: "100%" }}
      className={
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.07)] border-b border-gray-100 transition-all duration-300"
          : "bg-white/95 border-b border-gray-100/80 transition-all duration-300"
      }
    >
      <div className="tmt-wrap flex items-center justify-between" style={{ height: 72 }}>

        {/* Logo — actual brand logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/images/logo.png"
            alt="Trinethra Machine Tools"
            style={{
              height: 52,
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">

          {/* Capabilities with Dropdown */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              style={{
                display: "flex", alignItems: "center", gap: 5,
                fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: dropdownOpen ? "#0d1f3c" : "#4b5563",
                background: "none", border: "none", cursor: "pointer",
                padding: 0, transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d1f3c")}
              onMouseLeave={(e) => {
                if (!dropdownOpen) e.currentTarget.style.color = "#4b5563";
              }}
            >
              Capabilities
              <motion.span
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <ChevronDown size={13} />
              </motion.span>
            </button>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 20px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 520,
                    background: "#fff",
                    border: "1px solid #e5e2da",
                    boxShadow: "0 16px 48px rgba(13,31,60,0.12)",
                    zIndex: 200,
                  }}
                >
                  {/* Dropdown header */}
                  <div
                    style={{
                      padding: "16px 24px 12px",
                      borderBottom: "1px solid #f3f0ea",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "#9ca3af",
                      }}
                    >
                      Engineering Capabilities
                    </span>
                    <div style={{ width: 24, height: 2, background: "#e7a93b" }} />
                  </div>

                  {/* 2-column grid of items */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 1,
                      background: "#f0ede6",
                    }}
                  >
                    {capabilities.map((cap) => (
                      <Link
                        key={cap.number}
                        to={cap.href}
                        onClick={() => setDropdownOpen(false)}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="dd-item">
                          <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                            <span
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 11,
                                fontWeight: 700,
                                color: "#e7a93b",
                                flexShrink: 0,
                                paddingTop: 1,
                              }}
                            >
                              {cap.number}
                            </span>
                            <div>
                              <div
                                style={{
                                  fontSize: 12,
                                  fontWeight: 700,
                                  color: "#0d1f3c",
                                  lineHeight: 1.3,
                                  marginBottom: 4,
                                }}
                              >
                                {cap.label}
                              </div>
                              <div
                                style={{
                                  fontSize: 10,
                                  color: "#9ca3af",
                                  lineHeight: 1.5,
                                }}
                              >
                                {cap.short}
                              </div>
                            </div>
                          </div>
                          <ArrowUpRight size={13} className="dd-arrow" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Dropdown footer */}
                  <div
                    style={{
                      padding: "12px 24px",
                      borderTop: "1px solid #f3f0ea",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 10, color: "#c4bfb6", letterSpacing: "0.1em" }}>
                      Click any capability to explore
                    </span>
                    <button
                      onClick={() => { setDropdownOpen(false); navigate("/"); setTimeout(() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" }), 80); }}
                      style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                        textTransform: "uppercase", color: "#e7a93b",
                        background: "none", border: "none", cursor: "pointer", padding: 0,
                      }}
                    >
                      View All →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Nav Items */}
          {otherNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavLink(item.href)}
              style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#4b5563",
                background: "none", border: "none", cursor: "pointer",
                padding: 0, transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d1f3c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="/#contact" className="btn-fill hidden lg:inline-flex">
          Get a Quote <ArrowUpRight size={14} />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
          style={{ color: "#0d1f3c", background: "none", border: "none", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <nav className="tmt-wrap flex flex-col py-4">

              {/* Capabilities accordion */}
              <button
                onClick={() => setMobileCapOpen((v) => !v)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "16px 0",
                  borderBottom: mobileCapOpen ? "none" : "1px solid #f3f4f6",
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "#0d1f3c",
                  background: "none", border: "none",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: mobileCapOpen ? "transparent" : "#f3f4f6",
                  cursor: "pointer", width: "100%",
                }}
              >
                Capabilities
                <motion.span
                  animate={{ rotate: mobileCapOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", color: "#e7a93b" }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              {/* Mobile sub-items */}
              <AnimatePresence>
                {mobileCapOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      overflow: "hidden",
                      background: "#f8f7f4",
                      borderBottom: "1px solid #f3f4f6",
                      marginBottom: 0,
                    }}
                  >
                    {capabilities.map((cap) => (
                      <Link
                        key={cap.number}
                        to={cap.href}
                        onClick={() => { setMobileOpen(false); setMobileCapOpen(false); }}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "13px 16px",
                          borderBottom: "1px solid #ede9df",
                          textDecoration: "none",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: 10, fontWeight: 700, color: "#e7a93b",
                            }}
                          >
                            {cap.number}
                          </span>
                          <span style={{ fontSize: 12, fontWeight: 600, color: "#0d1f3c", letterSpacing: "0.05em" }}>
                            {cap.label}
                          </span>
                        </div>
                        <ArrowUpRight size={13} color="#e7a93b" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Other mobile nav items */}
              {otherNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavLink(item.href)}
                  style={{
                    display: "flex", padding: "16px 0",
                    borderBottom: "1px solid #f3f4f6",
                    fontSize: 12, fontWeight: 600, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#4b5563",
                    background: "none", border: "none",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#f3f4f6",
                    cursor: "pointer", width: "100%", textAlign: "left",
                  }}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-fill mt-5 justify-center"
              >
                Get a Quote <ArrowUpRight size={14} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .dd-item {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
          padding: 16px 20px;
          background: #fff;
          transition: background 0.18s;
          cursor: pointer;
        }
        .dd-item:hover {
          background: #fdf8f0;
        }
        .dd-arrow {
          color: #d1c9b8;
          flex-shrink: 0;
          margin-top: 2px;
          transition: color 0.18s, transform 0.18s;
        }
        .dd-item:hover .dd-arrow {
          color: #e7a93b;
          transform: translate(2px, -2px);
        }
      `}</style>
    </header>
  );
}
