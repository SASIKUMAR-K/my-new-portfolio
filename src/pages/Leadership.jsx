import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiGlobe, FiInstagram, FiDownload, FiChevronDown, FiHeart, FiArrowRight } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Leadership.css';

const roles = [
  {
    id: 1,
    emoji: '🔬',
    title: 'Vice President & Technical Lead',
    org: 'Science Club — SIST',
    period: 'Feb 2023 – Aug 2024',
    color: '#7c3aed',
    tags: ['Technical Lead', 'Vice President'],
    desc: 'Led the technical wing of the Science Club and later served as Vice President. Transformed the club by introducing technical initiatives that no other club had done before.',
    highlights: [
      'Built the first-ever club website in the college',
      'Designed a brand new logo for the Science Club',
      'Conducted "School on Wheels" — teaching science to school students',
      'Organized multiple tech & science events as Vice President',
    ],
    links: [
      { label: 'Instagram', icon: <FiInstagram />, href: 'https://www.instagram.com/science_club_sist/' },
      { label: 'Website', icon: <FiGlobe />, href: 'https://sistscienceclub.web.app/' },
    ],
  },
  {
    id: 2,
    emoji: '🌱',
    title: 'EEE Coordinator',
    org: 'CDC Club — SIST',
    period: 'June 2023 – May 2024',
    color: '#10b981',
    tags: ['EEE Dept. Coordinator'],
    desc: 'Represented the EEE department in the Community Development Club, focused on social impact and student empowerment.',
    highlights: [
      'Conducted "Fearless Echoes" — an event to overcome stage fear',
      'Personally overcame stage fear through this initiative',
      'Supported multiple club events across the year',
    ],
    links: [
      { label: 'Instagram', icon: <FiInstagram />, href: 'https://www.instagram.com/cdc_sist2025/' },
      { label: 'Position Post', icon: <FiInstagram />, href: 'https://www.instagram.com/p/CuCQld8yNgC/?img_index=8' },
    ],
  },
  {
    id: 3,
    emoji: '💻',
    title: 'Technical Co-Lead',
    org: 'ACM Student Chapter — Sathyabama',
    period: 'Jan 2024 – Dec 2024',
    color: '#06b6d4',
    tags: ['Technical Co-Lead'],
    desc: "ACM is the world's largest computing society. As Technical Co-Lead, I drove the technical vision and led major events including the annual symposium.",
    highlights: [
      'Built the official Horizon 2024 symposium website',
      'Conducted "Code Rush" — a competitive coding event',
      'Led the technical team for all chapter activities',
    ],
    links: [
      { label: 'ACM Instagram', icon: <FiInstagram />, href: 'https://www.instagram.com/acmsathyabama/' },
      { label: 'Position Post', icon: <FiInstagram />, href: 'https://www.instagram.com/p/C2R3hR2v5fe/?img_index=3' },
      { label: 'Horizon 2024', icon: <FiGlobe />, href: 'https://horizon2024.web.app/' },
    ],
  },
];

const volunteering = [
  {
    id: 'v1', icon: '🌟', title: 'Main SPOC — Sathyabama', org: 'Maatram Foundation',
    period: '2022 – 2025', color: '#f59e0b',
    desc: 'Served as the Main Student Point of Contact — the bridge between students and Maatram Foundation.',
    highlights: ['Managed SPOCs for all 4 year batches', 'Coordinated communication between foundation and students'],
    link: null,
  },
  {
    id: 'v2', icon: '🏠', title: 'Physical Verification Volunteer', org: 'Maatram Foundation',
    period: '2023, 2024, 2025', color: '#f59e0b',
    desc: 'Visited homes of scholarship applicants to verify background and living conditions.',
    highlights: ['Home visits for student eligibility verification', 'Participated across 3 consecutive years'],
    link: null,
  },
  {
    id: 'v3', icon: '🎤', title: 'Admission Volunteer', org: 'Maatram Foundation',
    period: '2023 – 2025', color: '#f59e0b',
    desc: 'Worked in the technical team during the admission process.',
    highlights: [],
    link: null,
  },
  {
    id: 'v4', icon: '📚', title: 'Karpoom Karpipoom — Core Team', org: 'Maatram Foundation',
    period: '2022 – Present', color: '#a78bfa',
    desc: 'Free tuition initiative for 12th-grade students. Started as a Physics tutor and grew into the Core Team.',
    highlights: [
      'Taught Physics to underprivileged 12th-grade students',
      'Promoted to Executive Core Team',
      'Automated the entire admission process in 2025',
      'Building a dedicated website (launching soon)',
    ],
    link: { label: 'Website coming soon', href: null },
  },
  {
    id: 'v5', icon: '🏫', title: 'School Visit — Career Guidance', org: 'Maatram Foundation',
    period: '2023 – 2025', color: '#f59e0b',
    desc: 'Visited schools to deliver career guidance sessions for students.',
    highlights: ['Career awareness sessions at multiple schools', 'Guided students on engineering opportunities'],
    link: null,
  },
  {
    id: 'v6', icon: '💡', title: 'Technical Tutor', org: 'Maatram Foundation',
    period: '2023 – Present', color: '#06b6d4',
    desc: 'Mentored students in programming and engineering concepts.',
    highlights: ['Tutored in programming fundamentals', 'Helped students prepare for technical interviews'],
    link: null,
  },
];

const journey = [
  { year: '2021', label: 'Joined SIST', text: 'Started as a participant in department events', color: '#7c3aed' },
  { year: '2022', label: 'First Step Up', text: 'Joined Maatram Foundation as SPOC', color: '#06b6d4' },
  { year: '2023', label: 'Organizer', text: 'Science Club, CDC & active Maatram volunteering', color: '#10b981' },
  { year: '2024', label: 'Leader', text: 'VP (Science Club) + Technical Co-Lead (ACM)', color: '#f59e0b' },
];

function RoleCard({ role, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="lc-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12 }}
      style={{ '--lc': role.color }}
    >
      <div className="lc-stripe" style={{ background: role.color }} />

      <div className="lc-top" onClick={() => setOpen(!open)}>
        <div className="lc-icon" style={{ background: role.color + '18', border: `1px solid ${role.color}33` }}>
          {role.emoji}
        </div>

        <div className="lc-main">
          <div className="lc-tags">
            {role.tags.map((t, i) => (
              <span key={i} className="lc-tag mono" style={{ color: role.color, borderColor: role.color + '44', background: role.color + '12' }}>{t}</span>
            ))}
          </div>
          <h3 className="lc-title">{role.title}</h3>
          <p className="lc-org">{role.org}</p>
          <span className="lc-period mono"><FiCalendar /> {role.period}</span>
        </div>

        <motion.div className="lc-chevron" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <FiChevronDown />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lc-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="lc-desc">{role.desc}</p>
            <ul className="lc-list">
              {role.highlights.map((h, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <FiArrowRight style={{ color: role.color, flexShrink: 0, marginTop: 2 }} />
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>
            <div className="lc-links">
              {role.links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noreferrer" className="lc-link" style={{ color: role.color, borderColor: role.color + '44' }}>
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function VolCard({ v, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="vc-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="vc-stripe" style={{ background: v.color }} />
      <div className="vc-top" onClick={() => setOpen(!open)}>
        <div className="vc-icon" style={{ background: v.color + '15', border: `1px solid ${v.color}30` }}>{v.icon}</div>
        <div className="vc-info">
          <h4 className="vc-title">{v.title}</h4>
          <p className="vc-org" style={{ color: v.color }}>{v.org}</p>
          <span className="vc-period mono"><FiCalendar /> {v.period}</span>
        </div>
        <motion.div className="lc-chevron" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <FiChevronDown />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="lc-body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
            {v.desc && <p className="lc-desc">{v.desc}</p>}
            {v.highlights.length > 0 && (
              <ul className="lc-list">
                {v.highlights.map((h, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <FiArrowRight style={{ color: v.color, flexShrink: 0, marginTop: 2 }} />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            )}
            {v.link && !v.link.href && (
              <span className="vc-soon">🔗 {v.link.label}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// leadership_roles()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Leadership & <span className="gradient-text">Activities</span>
        </motion.h1>
        <motion.p className="leadership-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          From participant to leader — my college journey shaped me into someone who builds, organizes, and inspires.
        </motion.p>

        {/* Club Roles */}
        <div className="lc-list-wrap">
          {roles.map((r, i) => <RoleCard key={r.id} role={r} index={i} />)}
        </div>

        {/* Journey */}
        <motion.div className="journey-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="section-sub-title">College Journey <span className="gradient-text">Timeline</span></h2>
          <div className="journey-wrap">
            {journey.map((j, i) => (
              <motion.div key={i} className="journey-item" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
                <div className="journey-left">
                  <div className="journey-dot" style={{ background: j.color, boxShadow: `0 0 8px ${j.color}88` }} />
                  {i < journey.length - 1 && <div className="journey-line" />}
                </div>
                <div className="journey-content">
                  <div className="journey-year-row">
                    <span className="journey-year mono" style={{ color: j.color }}>{j.year}</span>
                    <span className="journey-label">{j.label}</span>
                  </div>
                  <p className="journey-text">{j.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering */}
        <motion.div className="vol-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <div className="vol-header-row">
            <div className="vol-title-wrap">
              <FiHeart className="vol-heart" />
              <div>
                <h2 className="section-sub-title" style={{ marginBottom: 2 }}>Volunteering</h2>
                <p className="vol-subtitle mono">// giving_back()</p>
              </div>
            </div>
            <span className="maatram-badge"><span className="maatram-dot" /> Maatram Foundation · 2022–Present</span>
          </div>

          <div className="maatram-intro-card">
            <span className="mi-logo">🤝</span>
            <div>
              <h3>Maatram Foundation</h3>
              <p>Maatram leads transformation in the lives of deserving underprivileged students by providing quality sponsored education, skill development, and placement readiness — grooming them to become the finest in society.</p>
              <a href="https://www.maatramfoundation.com/" target="_blank" rel="noreferrer" className="maatram-link">Visit maatramfoundation.com →</a>
            </div>
          </div>

          <div className="vol-grid">
            {volunteering.map((v, i) => <VolCard key={v.id} v={v} index={i} />)}
          </div>
        </motion.div>

        {/* Certificate */}
        <motion.div className="cert-banner" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
          <div className="cert-left">
            <span className="cert-icon">🏅</span>
            <div>
              <h4>Star of Excellence Certificate</h4>
              <p className="mono">Proof of conducted events & participation across college journey</p>
            </div>
          </div>
          <motion.a href="/star-of-excellence.pdf" target="_blank" rel="noreferrer" className="cert-btn" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <FiDownload /> View Certificate
          </motion.a>
        </motion.div>

      </div>
    </PageWrapper>
  );
}
