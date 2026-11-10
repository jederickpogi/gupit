import { useState } from 'react'
import { NavLink, Routes, Route, Link } from 'react-router-dom'
import { Menu, Scissors, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { services, haircutIdeas } from './data.js'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Home', '/'], ['Services', '/services'], ['Haircut Ideas', '/ideas'], ['Book Now', '/booking'], ['About', '/about']]
  return <nav className="navbar navbar-expand-lg navbar-dark site-nav">
    <div className="container">
      <Link className="navbar-brand brand" to="/" onClick={() => setOpen(false)}><Scissors size={22}/> BARBER <span>HUB</span></Link>
      <button className="navbar-toggler" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Menu /></button>
      <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
        <div className="navbar-nav ms-auto align-items-lg-center">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </div>
      </div>
    </div>
  </nav>
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <div><div className="brand"><Scissors size={20}/> BARBER <span>HUB</span></div><p className="muted mb-0">Your style. Your time. Your barber.</p></div>
    <div className="footer-meta"><span><MapPin size={15}/> Lucena City, Quezon</span><span><Clock size={15}/> Demo hours: 9 AM – 6 PM</span></div>
    <small>© 2026 BARBER HUB. Student project concept.</small>
  </div></footer>
}

function PageTitle({ eyebrow, title, description }) {
  return <div className="page-title"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
}

function ServiceCard({ service }) {
  return <article className="service-card"><div className="service-top"><span className="service-number">0{service.id}</span><span className="duration">{service.duration}</span></div><h3>{service.name}</h3><p>{service.description}</p><div className="service-bottom"><strong>₱{service.price}</strong><Link to="/booking" className="text-link">Book service ↗</Link></div></article>
}

function Home() {
  return <><section className="hero"><div className="container hero-content"><span className="eyebrow">LUCENA CITY • YOUR LOCAL BARBER</span><h1>Look sharp.<br/><span>Feel confident.</span></h1><p>Good cuts, good people, and a fresh look made just for you. Reserve your chair at BARBER HUB.</p><div className="hero-actions"><Link to="/booking" className="btn btn-lime">Book an appointment ↗</Link><Link to="/services" className="btn btn-outline-light">Explore services</Link></div><div className="hero-note"><span className="dot"></span> Online appointment concept • No backend required</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">WHAT WE DO</span><h2>Fresh cuts. Fair prices.</h2></div><Link to="/services" className="text-link">View all services ↗</Link></div><div className="row g-4">{services.slice(0,3).map(s => <div className="col-md-4" key={s.id}><ServiceCard service={s}/></div>)}</div></div></section>
    <section className="idea-strip"><div className="container idea-strip-inner"><div><span className="eyebrow">NEED A NEW LOOK?</span><h2>Find your next haircut.</h2><p>Browse styles and bring your favorite reference to your barber.</p><Link to="/ideas" className="btn btn-lime">Explore haircut ideas ↗</Link></div><img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80" alt="Barber shop interior with barber chairs"/></div></section>
  </>
}

function Services() {
  return <main className="section page"><div className="container"><PageTitle eyebrow="THE MENU" title="Services & Prices" description="Choose the service that fits your style. Sample prices are for this student project and should be confirmed with the shop."/><div className="row g-4">{services.map(s => <div className="col-md-6 col-lg-4" key={s.id}><ServiceCard service={s}/></div>)}</div><p className="notice mt-4">Prices shown are sample estimates, not verified prices of a specific Lucena City barber shop.</p></div></main>
}

function Ideas() {
  return <main className="section page"><div className="container"><PageTitle eyebrow="STYLE GUIDE" title="Haircut Ideas" description="Not sure what to ask for? Check out these popular looks and show your barber a reference."/><div className="row g-4">{haircutIdeas.map((idea, i) => <div className="col-sm-6 col-lg-3" key={idea.id}><article className="idea-card"><img src={idea.image} alt={`${idea.name} haircut inspiration`} onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80' }}/><div className="idea-card-body"><span className="eyebrow">{idea.type}</span><h3>{idea.name}</h3><p>{idea.description}</p><Link to="/booking" className="text-link">Try this style ↗</Link></div></article></div>)}</div></div></main>
}

function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', barber: 'Any available barber', date: '', time: '', notes: '' })
  const [confirmation, setConfirmation] = useState(null)
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setConfirmation({ ...form, serviceName: services.find(s => String(s.id) === form.service)?.name }) }
  return <main className="section page"><div className="container"><PageTitle eyebrow="SAVE YOUR SEAT" title="Book an Appointment" description="Pick your service, preferred barber and time. This demo shows a client-side booking confirmation only."/><div className="booking-layout"><form className="booking-form" onSubmit={submit}><div className="row g-3">
    <div className="col-md-6"><label className="form-label" htmlFor="name">Full name</label><input id="name" className="form-control" name="name" value={form.name} onChange={update} required placeholder="Your name"/></div>
    <div className="col-md-6"><label className="form-label" htmlFor="phone">Contact number</label><input id="phone" className="form-control" name="phone" value={form.phone} onChange={update} required pattern="[0-9+ -]{7,}" placeholder="09XX XXX XXXX"/></div>
    <div className="col-md-6"><label className="form-label" htmlFor="service">Service</label><select id="service" className="form-select" name="service" value={form.service} onChange={update} required><option value="">Choose a service</option>{services.map(s => <option value={s.id} key={s.id}>{s.name} — ₱{s.price}</option>)}</select></div>
    <div className="col-md-6"><label className="form-label" htmlFor="barber">Preferred barber</label><select id="barber" className="form-select" name="barber" value={form.barber} onChange={update}>{['Any available barber', 'Ku Jay', 'Miko', 'Andre'].map(b => <option key={b}>{b}</option>)}</select></div>
    <div className="col-md-6"><label className="form-label" htmlFor="date">Appointment date</label><input id="date" className="form-control" type="date" name="date" value={form.date} onChange={update} min={new Date().toISOString().slice(0,10)} required/></div>
    <div className="col-md-6"><label className="form-label" htmlFor="time">Preferred time</label><select id="time" className="form-select" name="time" value={form.time} onChange={update} required><option value="">Choose a time</option>{['9:00 AM','10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'].map(t => <option key={t}>{t}</option>)}</select></div>
    <div className="col-12"><label className="form-label" htmlFor="notes">Style notes (optional)</label><textarea id="notes" className="form-control" rows="3" name="notes" value={form.notes} onChange={update} placeholder="Example: low taper fade, keep the top textured"/></div>
    <div className="col-12"><button className="btn btn-lime w-100" type="submit">Review appointment ↗</button></div>
  </div></form><aside className="booking-aside"><span className="eyebrow">BEFORE YOU BOOK</span><h3>Good to know</h3><ul><li>Arrive 5–10 minutes before your chosen time.</li><li>Bring a photo reference for your preferred haircut.</li><li>Choose “Any available barber” for flexibility.</li><li>This prototype does not check live availability.</li></ul><div className="aside-hours"><Clock size={18}/><div><strong>Sample shop hours</strong><br/><span>Monday – Saturday<br/>9:00 AM – 6:00 PM</span></div></div></aside></div>
  {confirmation && <div className="confirmation mt-4" role="status"><h3>Appointment preview ready!</h3><p><strong>{confirmation.name}</strong>, your demo request is for <strong>{confirmation.serviceName}</strong> on <strong>{confirmation.date}</strong> at <strong>{confirmation.time}</strong> with {confirmation.barber}.</p><p className="mb-0">This is not a real booking. Please contact the shop to confirm availability.</p><button className="btn btn-outline-light mt-3" onClick={() => setConfirmation(null)}>Edit details</button></div>}</div></main>
}

function About() {
  return <main className="section page"><div className="container"><PageTitle eyebrow="ABOUT BARBER HUB" title="A better way to get a fresh cut." description="BARBER HUB is a website concept designed to help people in Lucena City discover barber services, explore haircut inspirations, and request an appointment online."/><div className="row g-4"><div className="col-lg-7"><div className="about-panel"><h2>Our idea</h2><p>Many customers want to know the service price and find a convenient time before visiting a barber shop. BARBER HUB brings those details together in one simple, mobile-friendly website.</p><h3>Made for the community</h3><p>Whether you're looking for a classic cut, a modern fade, or a new style to try, this site helps you prepare for your next visit.</p></div></div><div className="col-lg-5"><div className="contact-panel"><h3>Visit / Contact</h3><p><MapPin size={17}/> Lucena City, Quezon</p><p><Clock size={17}/> Sample hours: Mon–Sat, 9 AM–6 PM</p><p><Facebook size={17}/> Facebook page: to be added</p><p><Instagram size={17}/> Instagram: to be added</p><small>Shop address and contact details are placeholders for the project. Add verified details before launch.</small></div></div></div></div></main>
}

export default function App() {
  return <><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/ideas" element={<Ideas/>}/><Route path="/booking" element={<Booking/>}/><Route path="/about" element={<About/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></>
}
