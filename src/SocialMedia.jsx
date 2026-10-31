import './SocialMedia.css'
import sm1 from './assets/socailmedia/1.jpeg'
import sm2 from './assets/socailmedia/2.jpeg'
import sm3 from './assets/socailmedia/3.jpeg'
import sm4 from './assets/socailmedia/4.jpeg'
import sm5 from './assets/socailmedia/5.jpeg'
import sm6 from './assets/socailmedia/6.jpeg'
import sm7 from './assets/socailmedia/7.jpeg'
import sm8 from './assets/socailmedia/8.jpeg'
import sm9 from './assets/socailmedia/9.jpeg'
import sm10 from './assets/socailmedia/10.jpeg'

/* ── Placeholder image icon SVG (matches reference lavender cards) ── */
const PlaceholderIcon = () => (
  <svg
    className="sm-placeholder-icon"
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

/* ── Individual image card ── */
const SMCard = ({ rotation = 0, translateY = 0, src, alt, style = {} }) => (
  <div
    className="sm-card"
    style={{
      '--card-rotate': `${rotation}deg`,
      '--card-ty': `${translateY}px`,
      ...style,
    }}
    role={src ? 'img' : 'presentation'}
    aria-label={alt || undefined}
  >
    {src ? (
      <img src={src} alt={alt || ''} className="sm-card-img" />
    ) : (
      <PlaceholderIcon />
    )}
  </div>
)

/* ── Row 1: 6 cards in 3 overlapping pairs ── */
const row1 = [
  { rotation: -5, translateY: 0, src: sm1, alt: 'Social media post 1' },
  { rotation: -1, translateY: 14, src: sm2, alt: 'Social media post 2' },
  { rotation: -5, translateY: 0, src: sm3, alt: 'Social media post 3' },
  { rotation: 2, translateY: 14, src: sm4, alt: 'Social media post 4' },
  { rotation: -4, translateY: 0, src: sm5, alt: 'Social media post 5' },
  { rotation: 2, translateY: 14, src: sm6, alt: 'Social media post 6' },
]

/* ── Row 2: 4 cards in 2 overlapping pairs (placeholder #11 removed) ── */
const row2 = [
  { rotation: -5, translateY: 0, src: sm7, alt: 'Social media post 7' },
  { rotation: -1, translateY: 14, src: sm8, alt: 'Social media post 8' },
  { rotation: -4, translateY: 0, src: sm9, alt: 'Social media post 9' },
  { rotation: 2, translateY: 14, src: sm10, alt: 'Social media post 10' },
]

/* ══════════════════════════════════════════
   SOCIAL MEDIA SECTION
══════════════════════════════════════════ */
export default function SocialMedia() {
  return (
    <>
      {/* ── Top separator ── */}
      <div className="section-divider" aria-hidden="true" />

      <section id="social-media" className="sm-section">
        {/* ── Section heading ── */}
        <h2 className="sm-heading">
          <span className="sm-heading-star" aria-hidden="true">★</span>
          <span className="script sm-heading-text">Social Media</span>
          <span className="sm-heading-star" aria-hidden="true">★</span>
        </h2>

        {/* ── Gallery container ── */}
        <div className="sm-gallery-wrap container">
          <div className="sm-gallery">

            {/* Row 1 — 6 cards */}
            <div className="sm-row sm-row-1">
              {row1.map((card, i) => (
                <SMCard
                  key={`r1-${i}`}
                  rotation={card.rotation}
                  translateY={card.translateY}
                  src={card.src}
                  alt={card.alt}
                />
              ))}
            </div>

            {/* Row 2 — 4 cards */}
            <div className="sm-row sm-row-2">
              {row2.map((card, i) => (
                <SMCard
                  key={`r2-${i}`}
                  rotation={card.rotation}
                  translateY={card.translateY}
                  src={card.src}
                  alt={card.alt}
                />
              ))}
            </div>

          </div>
        </div>

        {/* ── Footer row ── */}
        <footer className="sm-footer container">
          <div className="sm-footer-inner">
            <span className="sm-footer-left">Packaging</span>
            <span className="sm-footer-monogram script">Ee</span>
            <span className="sm-footer-right">Portfolio 2026</span>
          </div>
          <div className="sm-footer-divider" aria-hidden="true" />
        </footer>
      </section>

      {/* ── Bottom separator ── */}
      <div className="section-divider" aria-hidden="true" />
    </>
  )
}
