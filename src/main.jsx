import { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import heroImage1 from '../assets/hero-cnc-machining.jpg';
import heroImage2 from '../assets/hero-laser-cutting.jpg';
import heroImage3 from '../assets/hero-precision-parts.jpg';
import brandLogo from '../assets/logo.png';
import './styles.css';

/* ── Hero carousel images ─────────────────────────────
   To add more slides, import the image above and append it here.
   ───────────────────────────────────────────────────── */
const heroImages = [heroImage1, heroImage2, heroImage3];

const services = [
  { number: '01 / 06', icon: '⌁', title: <>Prototype &amp;<br />Design Lab</>, name: 'Prototype & Design Lab', description: 'Turn an idea into a working, validated product.', points: ['CAD/CAM/CAE design and analysis', '3D printing & plastic prototypes', 'Reverse engineering & optimisation'] },
  { number: '02 / 06', icon: '◫', title: <>Machine<br />Manufacturing</>, name: 'Machine Manufacturing', description: 'Special-purpose machines made for your production floor.', points: ['Panel saws, spindle moulders & pin routers', 'CNC laser machines & CNC systems', 'Custom automation & fixtures'] },
  { number: '03 / 06', icon: '⊙', title: <>Precision Tools &amp;<br />Auto Components</>, name: 'Precision Tools & Auto Components', description: 'High-accuracy components built for demanding use.', points: ['Brake levers, clutch brackets & toolkits', 'EV component tooling & machining', 'Custom jigs, dies & assembly parts'] },
  { number: '04 / 06', icon: '⌗', title: <>Industrial<br />Fabrication</>, name: 'Industrial Fabrication', description: 'Strong, reliable structures for operational environments.', points: ['Electrical boxes, storage racks & frames', 'EV vehicle bodies & polyhouse structures', 'Sheet metal fabrication & welding'] },
  { number: '05 / 06', icon: '△', title: <>Roofing<br />Solutions</>, name: 'Roofing Solutions', description: 'Materials and execution for industrial roofing projects.', points: ['PPGI roofing sheets & purlins', 'Aluminium ceiling support systems', 'Turnkey industrial roofing projects'] },
  { number: '06 / 06', icon: '✧', title: <>Laser, CNC &amp;<br />VMC Job Work</>, name: 'Laser, CNC & VMC Job Work', description: 'Trusted capacity for critical jobs and ongoing supply.', points: ['Precision machining for external clients', 'Tool, die & model manufacturing support', 'Long-term OEM supply contracts'] },
];

const steps = [
  ['01', 'Understand', 'We begin with your specification, challenges, budget and performance goals.'],
  ['02', 'Engineer', 'Our team turns the requirement into a viable design, process and production plan.'],
  ['03', 'Build & verify', 'We manufacture, test and refine every detail before your solution reaches the floor.'],
  ['04', 'Deliver & support', 'Clear handover, dependable supply and an engineering partner for what comes next.'],
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Counter({ target, suffix = '' }) {
  const ref = useRef(null); const [value, setValue] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const update = (now) => { const p = Math.min((now - started) / 1100, 1); setValue(Math.round(target * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(update); };
      requestAnimationFrame(update); observer.disconnect();
    }, { threshold: 0.55 });
    observer.observe(ref.current); return () => observer.disconnect();
  }, [target]);
  return <p ref={ref} aria-label={`${target}${suffix}`}>{value}{suffix}</p>;
}

function Logo() { return <img src={brandLogo} alt="Trinethra Machine Tools" className="brand-logo" />; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false); const [chosenService, setChosenService] = useState(''); const [activeSection, setActiveSection] = useState('top'); const [isScrolled, setIsScrolled] = useState(false); const [formComplete, setFormComplete] = useState(false); const [heroSlide, setHeroSlide] = useState(0); const formRef = useRef(null); const modalRef = useRef(null);
  useReveal();
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const interval = setInterval(() => { if (!document.hidden) setHeroSlide((prev) => (prev + 1) % heroImages.length); }, 6000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const onScroll = () => { const marker = window.scrollY + window.innerHeight * .38; let current = 'top'; ['top','expertise','services','process','enquiry'].forEach((id) => { const section = document.getElementById(id); if (section && section.offsetTop <= marker) current = id; }); setActiveSection(current); setIsScrolled(window.scrollY > 24); const max = document.documentElement.scrollHeight - window.innerHeight; document.documentElement.style.setProperty('--scroll-progress', `${Math.max(0, window.scrollY / max) * 100}%`); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!chosenService) return;
    const panel = modalRef.current;
    if (panel) panel.focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab' && panel) {
        const focusable = panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
        else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [chosenService]);
  const closeMenu = () => setMenuOpen(false);
  const chooseService = (service) => { setChosenService(service); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setChosenService(''); document.body.style.overflow = ''; };
  const focusEnquiry = () => { formRef.current.elements.service.value = chosenService; closeModal(); document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' }); window.setTimeout(() => formRef.current.elements.name.focus(), 500); };
  const submitLead = async (event) => { event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) { form.reportValidity(); return; } const data = new FormData(form); const lead = Object.fromEntries(data.entries()); const endpoint = import.meta.env.VITE_LEAD_ENDPOINT; if (endpoint) { try { const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) }); if (!response.ok) throw new Error('Lead endpoint unavailable'); setFormComplete(true); return; } catch (error) { console.warn('Lead capture endpoint failed; using email fallback.', error); } } const subject = encodeURIComponent(`Project enquiry: ${data.get('service')} — ${data.get('company')}`); const body = encodeURIComponent(['New enquiry from the Trinetra Machine Tools website','',`Name: ${data.get('name')}`,`Company: ${data.get('company')}`,`Email: ${data.get('email')}`,`Phone: ${data.get('phone')}`,`Service: ${data.get('service')}`,`Timeline: ${data.get('timeline')}`,'','Requirement:',data.get('requirement')].join('\n')); window.location.href = `mailto:hello@trinetratools.com?subject=${subject}&body=${body}`; setFormComplete(true); };
  const nav = [['top','Home'],['expertise','Expertise'],['services','Services'],['process','Process'],['enquiry','Contact']];

  return <><a className="skip-link" href="#main-content">Skip to main content</a><div className="page-progress" aria-hidden="true"><span /></div><div className="noise" aria-hidden="true" />
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="top"><a href="#top" aria-label="Trinetra Machine Tools home" onClick={closeMenu}><Logo /></a><button className={`menu-toggle ${menuOpen ? 'open' : ''}`} type="button" aria-expanded={menuOpen} aria-controls="site-nav" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /><em>Menu</em></button><nav className={`site-nav ${menuOpen ? 'open' : ''}`} id="site-nav" aria-label="Main navigation">{nav.map(([id,label]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={closeMenu}>{label}</a>)}</nav><a className="header-cta" href="#enquiry"><span>Start a project</span><b>↗</b></a></header>
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">{heroImages.map((img, i) => <div key={i} className={`hero-background ${i === heroSlide ? 'active' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(5,16,28,.78) 0%, rgba(5,16,28,.49) 42%, rgba(5,16,28,.08) 77%), url(${img})` }} aria-hidden="true" />)}<div className="hero-grid" aria-hidden="true" /><div className="hero-content"><p className="eyebrow"><span /> Design. Build. Deliver.</p><h1 id="hero-title">Engineered with<br /><i>precision.</i><br />Built with<br /><i>purpose.</i></h1><p className="hero-copy">From a first prototype to a fully commissioned production line, Trinetra turns complex engineering ambitions into precise, durable reality.</p><div className="hero-actions"><a className="button button-primary" href="#enquiry">Discuss your requirement <span>↗</span></a><a className="button button-quiet" href="#services"><span className="play">↓</span> Explore capabilities</a></div></div><div className="hero-specs" aria-hidden="true"><span><i /> TMT / INDUSTRIAL PRECISION</span><span>01 — ENGINEERED IN INDIA</span></div><div className="hero-lower"><p><span className="pulse" /> Built for startups, manufacturers &amp; OEMs</p><a href="#expertise">Scroll to discover <span>↓</span></a></div><div className="hero-dots" aria-label="Hero image slides">{heroImages.map((_, i) => <button key={i} className={`hero-dot ${i === heroSlide ? 'active' : ''}`} type="button" aria-label={`Slide ${i + 1}`} onClick={() => setHeroSlide(i)} />)}</div><div className="hero-orb orb-one" /><div className="hero-orb orb-two" /></section>
      <section className="ticker" aria-label="Capabilities"><div className="ticker-track">{[...['PROTOTYPING','CNC MACHINING','INDUSTRIAL FABRICATION','CUSTOM AUTOMATION','ROOFING SOLUTIONS'],...['PROTOTYPING','CNC MACHINING','INDUSTRIAL FABRICATION','CUSTOM AUTOMATION','ROOFING SOLUTIONS']].map((item,index) => <span key={`${item}-${index}`}>{item} <b>✦</b></span>)}</div></section>
      <section className="intro section-pad" id="expertise"><div className="section-label reveal"><span>01</span> The Trinetra advantage</div><div className="intro-layout"><div className="intro-head reveal"><p className="eyebrow amber"><span /> One engineering partner</p><h2>Bold ideas,<br /><i>built precisely.</i></h2></div><div className="intro-copy reveal"><p>We combine design intelligence, capable manufacturing and rigorous quality control under one roof. That means fewer hand-offs, faster problem solving and better outcomes for every job.</p><a className="text-link" href="#enquiry">Talk to our engineering team <span>→</span></a></div></div><div className="stat-grid"><article className="stat reveal"><Counter target={6} /><span>Specialist divisions</span></article><article className="stat reveal"><Counter target={100} suffix="%" /><span>Commitment to precision</span></article><article className="stat reveal"><Counter target={360} suffix="°" /><span>From concept to completion</span></article><article className="stat reveal"><p>∞</p><span>Possibilities to engineer</span></article></div></section>
      <section className="services section-pad" id="services"><div className="section-heading reveal"><div><p className="eyebrow amber"><span /> What we do</p><h2>Capability without<br /><i>compromise.</i></h2></div><p>Purpose-built expertise for every stage of the industrial product lifecycle.</p></div><div className="service-grid">{services.map((service,index) => <article className={`service-card reveal ${index === 0 ? 'service-featured' : ''}`} key={service.name}><div className="card-bg" style={{ backgroundImage: `url(${heroImages[index % heroImages.length]})` }} aria-hidden="true" /><div className="card-content"><div className="card-top"><span>{service.number}</span><span className="card-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul><button className="card-link" type="button" onClick={() => chooseService(service.name)}>View gallery & info <span>↗</span></button></div></article>)}</div></section>
      <section className="signature section-pad"><div className="signature-aura" aria-hidden="true" /><div className="signature-heading reveal"><p className="eyebrow"><span /> Designed for the moment of truth</p><h2>Precision is not<br />a step. <i>It’s the system.</i></h2><p>Every Trinetra project is designed around the details that define real-world performance: manufacturability, repeatability and readiness for the work ahead.</p></div><div className="principle-grid"><article className="principle-card reveal"><h3>Think in<br /><i>tolerances.</i></h3><p>Sharper decisions at the drawing board make for more dependable results on the factory floor.</p><b>↘</b></article><article className="principle-card reveal"><h3>Make every<br /><i>detail count.</i></h3><p>We bring ideas, components and production systems together with practical manufacturing know-how.</p><b>↘</b></article><article className="principle-card reveal"><h3>Prove it<br /><i>before it ships.</i></h3><p>Validation is built into the process, so your next move begins with confidence.</p><b>↘</b></article></div><div className="sector-rail reveal"><span>BUILT FOR AMBITIOUS TEAMS IN</span><div><b>STARTUPS &amp; R&amp;D</b><b>EV &amp; MOBILITY</b><b>MANUFACTURING</b><b>INFRASTRUCTURE</b></div></div></section>
      <section className="process section-pad" id="process"><div className="process-grid"><div className="process-sticky reveal"><p className="eyebrow amber"><span /> How we work</p><h2>Complexity,<br /><i>made clear.</i></h2><p className="process-intro">A collaborative, transparent route from the first brief to reliable delivery.</p><a className="button button-outline" href="#enquiry">Start the conversation <span>↗</span></a></div><div className="steps">{steps.map(([number,title,text]) => <article className="step reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
      <section className="enquiry section-pad" id="enquiry"><div className="enquiry-shell"><div className="enquiry-intro reveal"><p className="eyebrow"><span /> Let’s make it happen</p><h2>Your next<br /><i>breakthrough</i><br />starts here.</h2><p>Tell us what you’re building. The right Trinetra specialist will be in touch to understand your requirement.</p><div className="contact-quick"><span>Prefer a direct conversation?</span><a href="tel:+910000000000">Call our team <b>→</b></a><a href="mailto:hello@trinetratools.com">hello@trinetratools.com <b>↗</b></a></div><div className="contact-map" style={{ marginTop: '45px' }}><p style={{ color: '#84929b', font: '12px DM Mono, monospace', marginBottom: '15px' }}>Our Location</p><iframe src="https://maps.google.com/maps?q=13.5236254,77.0401944&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="240" style={{ border: 0, borderRadius: '8px', filter: 'grayscale(0.75) contrast(1.1) opacity(0.85)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Trinethra Machine Tools Location Map" /></div></div><form className="lead-form reveal" ref={formRef} onSubmit={submitLead}><div className="form-head"><span>Project enquiry</span><span>Fields marked * are required</span></div><div className="form-row two-col"><label>Full name *<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Company name *<input required name="company" autoComplete="organization" placeholder="Your company" /></label></div><div className="form-row two-col"><label>Email address *<input required name="email" type="email" autoComplete="email" placeholder="you@company.com" /></label><label>Phone number *<input required name="phone" type="tel" autoComplete="tel" placeholder="+91" /></label></div><div className="form-row two-col"><label>I’m interested in *<select required name="service" defaultValue=""><option value="" disabled>Select a capability</option>{services.map((service) => <option key={service.name}>{service.name}</option>)}<option>Not sure yet</option></select></label><label>Project timeline<select name="timeline" defaultValue="Just exploring"><option>Just exploring</option><option>Within 1 month</option><option>1–3 months</option><option>3+ months</option></select></label></div><label className="message-field">Tell us about your requirement *<textarea required name="requirement" rows="4" placeholder="Product, dimensions, materials, quantity, or the challenge you need solved..." /></label><div className="form-footer"><label className="consent"><input required type="checkbox" name="consent" /> <span>I agree to be contacted about this enquiry.</span></label><button className="button button-primary" type="submit">{formComplete ? 'Enquiry prepared ✓' : <>Send project enquiry <span>↗</span></>}</button></div><p className="form-note">Your details are used only to respond to your enquiry.</p>{formComplete && <div className="form-success" role="status" aria-live="polite"><span>✓</span><div><strong>Thank you — your enquiry is ready to send.</strong><p>We've opened your email client with the project details. Our team will get back to you shortly.</p></div></div>}</form></div></section>
    </main>
    <footer className="footer"><div className="footer-grid"><div className="footer-brand"><a href="#top" aria-label="Back to top"><Logo /></a><p>Engineering India's next industrial chapter with precision, reliability, and manufacturing excellence.</p><div className="footer-socials"><a href="#" aria-label="LinkedIn">LinkedIn</a><a href="#" aria-label="Twitter">Twitter</a><a href="#" aria-label="Instagram">Instagram</a></div></div><div className="footer-links"><h4>Capabilities</h4>{services.map(s => <a key={s.name} href="#services" onClick={(e) => { e.preventDefault(); chooseService(s.name); }}>{s.name}</a>)}</div><div className="footer-links"><h4>Company</h4><a href="#expertise">Our Advantage</a><a href="#process">How We Work</a><a href="#services">All Services</a><a href="#enquiry">Contact Us</a></div><div className="footer-contact"><h4>Contact Info</h4><p>Plot 42, Industrial Area,<br />Phase II, Peenya,<br />Bengaluru, Karnataka 560058</p><p><a href="tel:+910000000000">+91 00000 00000</a></p><p><a href="mailto:hello@trinetratools.com">hello@trinetratools.com</a></p></div></div><div className="footer-bottom"><small>© {new Date().getFullYear()} Trinetra Machine Tools. All rights reserved.</small><div className="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div><a href="#top" className="back-top">Back to top ↑</a></div></footer>
    {chosenService && <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-backdrop" aria-label="Close dialog" onClick={closeModal} /><div className="modal-panel" ref={modalRef} tabIndex={-1}><button className="modal-close" type="button" onClick={closeModal} aria-label="Close">×</button><p className="eyebrow amber"><span /> Capability selected</p><h2 id="modal-title">{chosenService}</h2><p>Tell us what you need from {chosenService.toLowerCase()}, and we'll connect you with the right Trinetra specialist.</p><button className="button button-primary" type="button" onClick={focusEnquiry}>Enquire about this <span>↗</span></button></div></div>}
  </>;
}
createRoot(document.getElementById('root')).render(<App />);
