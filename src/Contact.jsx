import './Contact.css'
import cvPdf from './assets/Esraa_Emad_CV.pdf'

const FIGMA_URL = 'https://www.figma.com/design/RmrJvaBXCiAViebdUnZAHo/Esraa-Emad?node-id=0-1&t=dEIlpnw0X6LC1KrU-1'
const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=esraaemad245@gmail.com'

export default function Contact() {
  return (
    <>
      <div className="section-divider" aria-hidden="true" />

      <section id="contact" className="contact-section">
        <div className="contact-content container">
          {/* ── Title: ★ Contacts ★ ── */}
          <h2 className="contact-title">
            <span className="contact-star" aria-hidden="true">★</span>
            <span className="script contact-title-text">Contacts</span>
            <span className="contact-star" aria-hidden="true">★</span>
          </h2>

          {/* ── Subtitle ── */}
          <p className="contact-subtitle">
            Open to freelance projects and design collaborations — based in Egypt, working with clients anywhere.
          </p>

          {/* ── Action Buttons ── */}
          <div className="contact-buttons">
            <a
              href={cvPdf}
              className="contact-btn contact-btn-filled"
              download="Esraa_Emad_CV.pdf"
              aria-label="Download CV"
            >
              Download CV ↓
            </a>

            <a
              href="https://www.behance.net/esraaelsheikh1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-outline"
            >
              Behance ↗
            </a>

            <a
              href="https://www.linkedin.com/in/esraa-design"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-outline"
            >
              LinkedIn ↗
            </a>

            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-outline"
            >
              Figma ↗
            </a>

            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-outline"
              id="send-message-btn"
            >
              Send me message ✉
            </a>
          </div>
        </div>

        {/* ── Full width divider ── */}
        <div className="contact-divider" aria-hidden="true" />

        {/* ── Footer row ── */}
        <footer className="contact-footer container">
          <div className="contact-footer-inner">
            <span className="contact-footer-left">Esraa Emad</span>
            <span className="contact-footer-right">Portfolio 2026</span>
          </div>
        </footer>
      </section>
    </>
  )
}

