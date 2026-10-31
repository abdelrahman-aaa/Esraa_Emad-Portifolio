import { useState } from 'react'
import profileImg from './assets/esraa_profile.jpg'
import cvPdf from './assets/Esraa_Emad_CV.pdf'
import './App.css'
import SocialMedia from './SocialMedia'
import Packaging from './Packaging'
import UIUXDesign from './UIUXDesign'
import MoreUIUX from './MoreUIUX'
import Branding from './Branding'
import Contact from './Contact'

/* ── Software icon SVGs (inline, matches reference colours) ── */
const Icons = {
  Ps: () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#001e36"/>
      <text x="50%" y="67%" dominantBaseline="middle" textAnchor="middle"
        fill="#31a8ff" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="17">Ps</text>
    </svg>
  ),
  Ai: () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#310000"/>
      <text x="50%" y="67%" dominantBaseline="middle" textAnchor="middle"
        fill="#ff9a00" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="17">Ai</text>
    </svg>
  ),
  Ae: () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#00005b"/>
      <text x="50%" y="67%" dominantBaseline="middle" textAnchor="middle"
        fill="#9999ff" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="17">Ae</text>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#191919"/>
      <g transform="translate(14, 9)">
        <path d="M5 0h5v10H5a5 5 0 0 1 0-10z" fill="#f24e1e"/>
        <path d="M10 0h5a5 5 0 0 1 0 10h-5V0z" fill="#ff7262"/>
        <path d="M5 10h5v10H5a5 5 0 0 1 0-10z" fill="#a259ff"/>
        <circle cx="15" cy="15" r="5" fill="#1abcfe"/>
        <path d="M5 20h5v5a5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" fill="#0acf83"/>
      </g>
    </svg>
  ),
  Framer: () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#000000"/>
      <g transform="translate(10, 9) scale(1.18)">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#ffffff"/>
      </g>
    </svg>
  ),
  Shopify: () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#132c1c"/>
      <g transform="translate(10.5, 8.5) scale(0.106)">
        <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95bf47"/>
        <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5e8e3e"/>
        <path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s11.068 14.022 30.772 14.022c10.493 0 16.536-5.462 16.536-13.407 0-16.198-39.2-20.942-39.2-56.168 0-24.878 18.016-43.903 43.197-43.903 21.3 0 37.008 9.202 37.008 9.202z" fill="#ffffff"/>
      </g>
    </svg>
  ),
}

/* ── Star separator ── */
const Star = ({ className = '' }) => (
  <span className={`gold-star ${className}`} aria-hidden="true">★</span>
)

/* ── Section heading with star ── */
const ScriptHeading = ({ children }) => (
  <h3 className="section-script-heading">
    <Star /> <span className="script">{children}</span>
  </h3>
)

/* ── Experience entry ── */
const ExpEntry = ({ years, role, company }) => (
  <div className="exp-entry">
    <p className="exp-years">{years}</p>
    <p className="exp-role">{role}</p>
    <p className="exp-company">{company}</p>
  </div>
)

/* ── Marquee ticker ── */
const items = [
  'Branding', 'UI / UX', 'Packaging', 'Social Media',
  'Brand Guidelines', 'Menu Design', 'Print', 'Branding',
]

function Marquee() {
  const content = items.map((item, i) => (
    <span key={i} className="marquee-item">
      <span className="marquee-text script">{item}</span>
      <Star className="marquee-star" />
    </span>
  ))

  return (
    <div className="marquee-outer" aria-label="Services ticker" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-inner">{content}</div>
        <div className="marquee-inner" aria-hidden="true">{content}</div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════ */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <div className="portfolio">
      {/* ── NAVBAR ── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#about" className="nav-logo script" aria-label="Esraa — home" onClick={closeMenu}>
            Esraa
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links" role="list">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#social-media" className="nav-link">Social Media</a></li>
            <li><a href="#packaging" className="nav-link">Packaging</a></li>
            <li><a href="#uiux" className="nav-link">UI / UX</a></li>
            <li><a href="#branding" className="nav-link">Branding</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <a
            href={cvPdf}
            className="btn-cv"
            download="Esraa_Emad_CV.pdf"
            aria-label="Download CV"
          >
            Download CV
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`nav-hamburger ${mobileMenuOpen ? 'nav-hamburger--open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Dropdown / Slide-Down Menu */}
        <div
          id="mobile-nav-menu"
          className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav--open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <ul className="mobile-nav-links" role="list">
            <li><a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#social-media" className="mobile-nav-link" onClick={closeMenu}>Social Media</a></li>
            <li><a href="#packaging" className="mobile-nav-link" onClick={closeMenu}>Packaging</a></li>
            <li><a href="#uiux" className="mobile-nav-link" onClick={closeMenu}>UI / UX</a></li>
            <li><a href="#branding" className="mobile-nav-link" onClick={closeMenu}>Branding</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="mobile-nav-actions">
            <a
              href={cvPdf}
              className="mobile-btn-cv"
              download="Esraa_Emad_CV.pdf"
              onClick={closeMenu}
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </nav>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="about-section">
        {/* ── Heading ── */}
        <div className="about-heading">
          <h1 className="about-title script">About me</h1>
          <p className="about-subtitle">GRAPHIC &amp; UI / UX DESIGNER · EGYPT</p>
        </div>

        {/* ── Three-column grid ── */}
        <div className="about-grid container">

          {/* LEFT — Profile */}
          <div className="col-profile">
            <div className="profile-img-wrap">
              <img
                src={profileImg}
                alt="Esraa Emad — Graphic & UI/UX Designer"
                className="profile-img"
              />
            </div>

            <p className="hi-label">
              HI! I'M <span className="script hi-name">Esraa</span>
            </p>

            <p className="profile-bio">
              Designer with experience in branding, social media, packaging and
              print, and in UI/UX for mobile apps and websites. I turn ideas
              into clear, consistent visuals that are ready for production.
            </p>

            <div className="profile-btns">
              <a
                href={cvPdf}
                className="btn-pill btn-filled"
                download="Esraa_Emad_CV.pdf"
                id="download-cv-btn"
              >
                Download CV ↓
              </a>
              <a
                href="https://www.behance.net/esraaelsheikh1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline"
                id="behance-btn"
              >
                Behance ↗
              </a>
            </div>
            <div className="profile-btns-row2">
              <a
                href="https://www.figma.com/design/RmrJvaBXCiAViebdUnZAHo/Esraa-Emad?node-id=0-1&t=dEIlpnw0X6LC1KrU-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline"
                id="figma-btn"
              >
                Figma ↗
              </a>
            </div>
          </div>

          {/* CENTER — Education & Experience */}
          <div className="col-center">
            {/* Education */}
            <div className="center-block">
              <ScriptHeading>Education</ScriptHeading>
              <div className="edu-card">
                <p className="entry-year">2025</p>
                <p className="entry-title">Bachelor of Graphic Design</p>
                <p className="entry-sub pink">Higher Institute of Applied Arts</p>
              </div>
            </div>

            {/* Experience */}
            <div className="center-block">
              <ScriptHeading>Experience</ScriptHeading>
              <div className="exp-list">
                <ExpEntry years="2026 – Now"  role="Graphic Designer"  company="Star Trans" />
                <ExpEntry years="2024 – 2025" role="Graphic Designer"  company="Sela · Remote" />
                <ExpEntry years="2024 – Now"  role="UI / UX Designer"    company="Freelance" />
                <ExpEntry years="2023 – Now"  role="Graphic Designer"  company="Freelance" />
              </div>
            </div>
          </div>

          {/* RIGHT — Personal Info */}
          <div className="col-right">
            {/* Language */}
            <div className="right-block">
              <ScriptHeading>Language</ScriptHeading>
              <div className="lang-list">
                <div className="lang-item">
                  <p className="lang-name">Arabic</p>
                  <p className="lang-level pink">Native</p>
                </div>
                <div className="lang-item">
                  <p className="lang-name">English</p>
                  <p className="lang-level pink">Fluent</p>
                </div>
                <div className="lang-item">
                  <p className="lang-name">German</p>
                  <p className="lang-level pink">Intermediate</p>
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div className="right-block">
              <ScriptHeading>Contacts</ScriptHeading>
              <div className="contact-list">
                <div className="contact-item">
                  <p className="contact-label">phone</p>
                  <a href="tel:+201080882017" className="contact-value">+20 108 088 2017</a>
                </div>
                <div className="contact-item">
                  <p className="contact-label">behance</p>
                  <a
                    href="https://www.behance.net/esraaelsheikh1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    behance.net/esraaelsheikh1
                  </a>
                </div>
                <div className="contact-item">
                  <p className="contact-label">linkedin</p>
                  <a
                    href="https://www.linkedin.com/in/esraa-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    linkedin.com/in/esraa-design
                  </a>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="right-block">
              <ScriptHeading>Hard skills</ScriptHeading>
              <div className="skills-grid">
                <div className="skill-icon" title="Adobe Photoshop"><Icons.Ps /></div>
                <div className="skill-icon" title="Adobe Illustrator"><Icons.Ai /></div>
                <div className="skill-icon" title="Adobe After Effects"><Icons.Ae /></div>
                <div className="skill-icon" title="Figma"><Icons.Figma /></div>
                <div className="skill-icon" title="Framer"><Icons.Framer /></div>
                <div className="skill-icon" title="Shopify"><Icons.Shopify /></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Animated Marquee ── */}
        <Marquee />
      </section>

      {/* ── SOCIAL MEDIA SECTION ── */}
      <SocialMedia />

      {/* ── PACKAGING SECTION ── */}
      <Packaging />

      {/* ── UI/UX DESIGN SECTION ── */}
      <UIUXDesign />

      {/* ── MORE UI/UX PROJECTS SECTION ── */}
      <MoreUIUX />

      {/* ── BRANDING SECTION ── */}
      <Branding />

      {/* ── CONTACT SECTION ── */}
      <Contact />
    </div>
  )
}
