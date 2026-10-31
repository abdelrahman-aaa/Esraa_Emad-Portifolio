import './Branding.css'
import elevatePdf from './assets/guiedlines/Elevate-Guidelines.pdf'
import daamPdf from './assets/guiedlines/DAAM-Guidelines.pdf'
import startransPdf from './assets/guiedlines/StarTrans-Guidelines.pdf'
import elevatePreview from './assets/guiedlines/elevate_preview.jpg'
import daamPreview from './assets/guiedlines/daam_preview.jpg'
import startransPreview from './assets/guiedlines/startrans_preview.jpg'

/* ── Project Guidelines Data (Exactly 3 Projects) ── */
const guidelines = [
  {
    id: 'elevate',
    title: 'Elevate',
    description: 'Brand Guidelines · PDF',
    previewImg: elevatePreview,
    pdfUrl: elevatePdf,
    badge: '19 Pages',
  },
  {
    id: 'daam',
    title: 'D.A.A.M',
    description: 'Brand Guidelines · PDF',
    previewImg: daamPreview,
    pdfUrl: daamPdf,
    badge: '18 Pages',
  },
  {
    id: 'startrans',
    title: 'Star Trans',
    description: 'Brand Guidelines · PDF',
    previewImg: startransPreview,
    pdfUrl: startransPdf,
    badge: '27 Pages',
  },
]

/* ── Individual Guideline Card ── */
function GuidelineCard({ project }) {
  const { title, description, previewImg, pdfUrl, badge } = project

  return (
    <article className="br-guideline-card" id={`guideline-${project.id}`}>
      {/* ── PDF Cover / Preview Area ── */}
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="br-card-preview-wrap"
        aria-label={`${title} Brand Guidelines (opens PDF in new tab)`}
      >
        <div className="br-format-badge">{badge}</div>

        <img
          src={previewImg}
          alt={`${title} Brand Guidelines Preview`}
          className="br-preview-img"
          loading="lazy"
        />
      </a>

      {/* ── Card Content ── */}
      <div className="br-card-info">
        <h3 className="script br-card-project-title">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="br-card-title-link"
          >
            {title}
          </a>
        </h3>

        <p className="br-card-meta">{description}</p>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="br-btn-view"
          aria-label={`View ${title} Brand Guidelines PDF`}
        >
          <span>View Guidelines</span>
          <span className="br-btn-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

/* ═══════════════════════════════════════════
   UNIFIED BRANDING SECTION
   Contains exactly three Brand Guidelines PDF cards:
   1. Elevate
   2. D.A.A.M
   3. Star Trans
═══════════════════════════════════════════ */
export default function Branding() {
  return (
    <>
      {/* ── Top separator line ── */}
      <div className="section-divider" aria-hidden="true" />

      <section id="branding" className="br-section">

        {/* ── Main heading: ★ Branding ★ ── */}
        <h2 className="br-main-heading">
          <span className="br-main-star" aria-hidden="true">★</span>
          <span className="script br-main-title">Branding</span>
          <span className="br-main-star" aria-hidden="true">★</span>
        </h2>

        {/* ── Unified Gallery Container ── */}
        <div className="br-gallery-container container">
          <div className="br-gallery-grid">
            {guidelines.map((project) => (
              <GuidelineCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* ── Footer row ── */}
        <footer className="br-footer container">
          <div className="br-footer-inner">
            <span className="br-footer-left">Contact</span>
            <span className="script br-footer-monogram">Ee</span>
            <span className="br-footer-right">Portfolio 2026</span>
          </div>
          <div className="br-footer-divider" aria-hidden="true" />
        </footer>

      </section>

      {/* ── Bottom separator line ── */}
      <div className="section-divider" aria-hidden="true" />
    </>
  )
}
