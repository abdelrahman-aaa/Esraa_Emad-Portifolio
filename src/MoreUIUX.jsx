import './MoreUIUX.css'
import ecommerceImg from './assets/uiux/3eefbc244632319.699c3da20bf04.png'
import eveleImg from './assets/uiux/32d91b240970621.694aaf814ece8.png'
import fitnessImg from './assets/uiux/c5c426240549505.69411ed535263.png'
import deliveryImg from './assets/uiux/5c08ff238282829.6911f05129dd8.png'

/* ── Card preview placeholder icon ── */
const CardIcon = ({ dark = false }) => {
  const color = dark ? '#7b78e8' : '#6563d4'
  return (
    <svg
      className="muiux-card-icon"
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="34" height="26" rx="3" stroke={color} strokeWidth="2"/>
      <circle cx="9" cy="9.5" r="3" fill={color}/>
      <path
        d="M1 22l8-8 7 6 6-6 13 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── Individual project card ── */
const ProjectCard = ({
  title,
  label,
  previewBg,
  dark = false,
  href,
  src,
  alt,
}) => (
  <div className="muiux-card">
    {/* Preview area */}
    <div className="muiux-card-preview" style={{ background: previewBg }}>
      {src
        ? <img src={src} alt={alt || title} className="muiux-card-img" />
        : <CardIcon dark={dark} />
      }
    </div>

    {/* Card text */}
    <div className="muiux-card-body">
      <p className="muiux-card-title script">{title}</p>
      {href
        ? <a href={href} target="_blank" rel="noopener noreferrer" className="muiux-card-label">{label}</a>
        : <p className="muiux-card-label">{label}</p>
      }
    </div>
  </div>
)

/* Project data — 4 cards: 3 in row 1, 1 centered in row 2 */
const FIGMA_URL = 'https://www.figma.com/design/RmrJvaBXCiAViebdUnZAHo/Esraa-Emad?node-id=0-1&t=dEIlpnw0X6LC1KrU-1'

const row1Projects = [
  {
    title: 'E-Commerce App & Dashboard',
    label: 'APP + DASHBOARD · OPEN IN FIGMA ↗',
    previewBg: '#dddaf0',
    dark: false,
    href: FIGMA_URL,
    src: ecommerceImg,
  },
  {
    title: 'EVELE Fashion Website',
    label: 'WEBSITE · OPEN IN FIGMA ↗',
    previewBg: '#1e1c38',
    dark: true,
    href: FIGMA_URL,
    src: eveleImg,
  },
  {
    title: 'Fitness App',
    label: 'CASE STUDY · OPEN IN FIGMA ↗',
    previewBg: '#c8d5e8',
    dark: false,
    href: FIGMA_URL,
    src: fitnessImg,
  },
]

const row2Projects = [
  {
    title: 'Delivery App',
    label: 'MOBILE APP · OPEN IN FIGMA ↗',
    previewBg: '#1e1c38',
    dark: true,
    href: FIGMA_URL,
    src: deliveryImg,
  },
]

/* ══════════════════════════════════════════
   MORE UI / UX PROJECTS — SECTION 2
══════════════════════════════════════════ */
export default function MoreUIUX() {
  return (
    <>
      {/* ── Top separator ── */}
      <div className="section-divider" aria-hidden="true" />

      <section id="uiux-more" className="muiux-section">

        {/* ── Heading block ── */}
        <div className="muiux-heading">
          <p className="muiux-case-label">CASE STUDIES ON BEHANCE</p>
          <h2 className="script muiux-title">More UI / UX Projects</h2>
        </div>

        {/* ── Main container ── */}
        <div className="muiux-outer container">

          {/* Row 1 — 3 cards */}
          <div className="muiux-row muiux-row-1">
            {row1Projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>

          {/* Row 2 — 1 card, centered */}
          <div className="muiux-row muiux-row-2">
            {row2Projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>

        </div>

        {/* ── Footer row ── */}
        <footer className="muiux-footer container">
          <div className="muiux-footer-inner">
            <span className="muiux-footer-left">Branding</span>
            <span className="script muiux-footer-monogram">Ee</span>
            <span className="muiux-footer-right">Portfolio 2026</span>
          </div>
          <div className="muiux-footer-divider" aria-hidden="true" />
        </footer>

      </section>

      {/* ── Bottom separator ── */}
      <div className="section-divider" aria-hidden="true" />
    </>
  )
}
