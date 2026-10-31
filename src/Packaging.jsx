import './Packaging.css'
import pkg1_1 from './assets/packing/1-1.jpeg'
import pkg1 from './assets/packing/1.jpeg'
import pkg2_2 from './assets/packing/2-2.jpeg'
import pkg2 from './assets/packing/2.jpeg'

/* ── Shared placeholder icon ── */
const PlaceholderIcon = () => (
  <svg
    className="pkg-placeholder-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#7b72c4" strokeWidth="1.5"/>
    <circle cx="8.5" cy="9.5" r="1.5" fill="#7b72c4"/>
    <path d="M2 16l5-5 4 4 3-3 5 5" stroke="#7b72c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Lavender image placeholder card ── */
const LavenderCard = ({ rotation = 0, translateY = 0, src, alt }) => (
  <div
    className="pkg-card pkg-card--lavender"
    style={{
      '--card-rotate': `${rotation}deg`,
      '--card-ty': `${translateY}px`,
    }}
  >
    {src
      ? <img src={src} alt={alt || ''} className="pkg-card-img" />
      : <PlaceholderIcon />
    }
  </div>
)

/* ── White packaging dieline / presentation board card ── */
const DielineCard = ({
  rotation = 0,
  translateY = 0,
  specLeft,
  specRight,
  brandName,
  brandSub,
  finishNote,
  src,
  alt,
}) => (
  <div
    className="pkg-card pkg-card--dieline"
    style={{
      '--card-rotate': `${rotation}deg`,
      '--card-ty': `${translateY}px`,
    }}
  >
    {/* Technical header row */}
    <div className="dieline-header">
      <span className="dieline-spec dieline-spec--left">{specLeft}</span>
      <span className="dieline-spec dieline-spec--right">{specRight}</span>
    </div>

    {/* Central artwork box */}
    <div className="dieline-artwork-wrap">
      <div className="dieline-artwork-box">
        {src ? (
          <img src={src} alt={alt || brandName} className="dieline-artwork-img" />
        ) : (
          <div className="dieline-artwork-placeholder">
            <p className="dieline-brand-name script">{brandName}</p>
            {brandSub && <p className="dieline-brand-sub">{brandSub}</p>}
          </div>
        )}
      </div>
    </div>

    {/* Technical footer note */}
    {finishNote && (
      <div className="dieline-footer-note">
        <span>{finishNote}</span>
      </div>
    )}
  </div>
)

/* ══════════════════════════════════════════
   PACKAGING SECTION
══════════════════════════════════════════ */
export default function Packaging() {
  return (
    <>
      {/* ── Top separator ── */}
      <div className="section-divider" aria-hidden="true" />

      <section id="packaging" className="pkg-section">

        {/* ── Section heading ── */}
        <h2 className="pkg-heading">
          <span className="pkg-heading-star" aria-hidden="true">★</span>
          <span className="script pkg-heading-text">Packaging</span>
          <span className="pkg-heading-star" aria-hidden="true">★</span>
        </h2>

        {/* ── Gallery container ── */}
        <div className="pkg-gallery-wrap container">
          <div className="pkg-gallery">

            {/*
              CARD ORDER (left → right):
              1. Lavender placeholder  (behind card 2)
              2. White "Lumière" dieline card  (overlaps card 1)
              3. Lavender placeholder  (behind card 4)
              4. White "Caraberry" dieline card  (overlaps card 3)
            */}

            {/* Card 1 — Lavender left */}
            <LavenderCard
              rotation={-5}
              translateY={0}
              src={pkg1_1}
              alt="Packaging design 1"
            />

            {/* Card 2 — White "Lumière" */}
            <DielineCard
              rotation={-1}
              translateY={18}
              specLeft="DIELINE REV. 04"
              specRight="CMYK"
              brandName="Lumière"
              brandSub="DIE-CUT FOLD LINES"
              finishNote="FINISH: MATTE SOFT TOUCH + EMBOSS"
              src={pkg1}
              alt="Lumière packaging dieline"
            />

            {/* Card 3 — Lavender center-right */}
            <LavenderCard
              rotation={-3}
              translateY={0}
              src={pkg2_2}
              alt="Packaging design 2"
            />

            {/* Card 4 — White "Caraberry" */}
            <DielineCard
              rotation={1}
              translateY={18}
              specLeft="SLEEVE DIE-CUT"
              specRight="PANTONE 7527 C"
              brandName="Caraberry"
              brandSub="CURVED CREASE PATTERN"
              finishNote="HOT FOIL STAMPING #D8B26A"
              src={pkg2}
              alt="Caraberry packaging dieline"
            />

          </div>
        </div>

        {/* ── Footer row ── */}
        <footer className="pkg-footer container">
          <div className="pkg-footer-inner">
            <span className="pkg-footer-left">UI/UX Design</span>
            <span className="pkg-footer-monogram script">Ee</span>
            <span className="pkg-footer-right">Portfolio 2026</span>
          </div>
          <div className="pkg-footer-divider" aria-hidden="true" />
        </footer>

      </section>

      {/* ── Bottom separator ── */}
      <div className="section-divider" aria-hidden="true" />
    </>
  )
}
