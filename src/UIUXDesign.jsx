import './UIUXDesign.css'
import uiuxHero from './assets/uiux/Frame 1.png'

/* ══════════════════════════════════════════
   UI / UX DESIGN — SECTION 1
══════════════════════════════════════════ */
export default function UIUXDesign() {
  return (
    <>
      {/* ── Top separator ── */}
      <div className="section-divider" aria-hidden="true" />

      <section id="uiux" className="uiux-section">

        {/* ── Heading ── */}
        <div className="uiux-heading">
          <h2 className="uiux-title">
            <span className="uiux-title-star" aria-hidden="true">★</span>
            <span className="script uiux-title-text">UI / UX Design</span>
            <span className="uiux-title-star" aria-hidden="true">★</span>
          </h2>
          <p className="uiux-subtitle">MOBILE APPS &amp; WEBSITES</p>
        </div>

        {/* ── Outer container ── */}
        <div className="uiux-outer container">

          {/* Large landscape preview area */}
          <div className="uiux-preview">
            <img src={uiuxHero} alt="Blanco Bakery UI/UX Case Study" />
          </div>

          {/* Figma button centered below preview */}
          <div className="uiux-figma-row">
            <a
              href="https://www.figma.com/design/RmrJvaBXCiAViebdUnZAHo/Esraa-Emad?node-id=0-1&t=dEIlpnw0X6LC1KrU-1"
              className="uiux-btn-figma"
              target="_blank"
              rel="noopener noreferrer"
              id="uiux-figma-btn"
            >
              Open in Figma ↗
            </a>
          </div>

        </div>

      </section>

      {/* ── Bottom separator ── */}
      <div className="section-divider" aria-hidden="true" />
    </>
  )
}
