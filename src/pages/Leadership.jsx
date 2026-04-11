import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiUsers, FiGlobe, FiInstagram, FiDownload, FiChevronDown, FiHeart } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Leadership.css';

const roles = [
  {
    id: 1,
    title: 'Vice President & Technical Lead',
    org: 'Science Club — Sathyabama Institute of Science and Technology',
    period: 'Feb 2023 – Aug 2024',
    subRoles: ['Technical Lead (Feb 2023 – Feb 2024)', 'Vice President (Feb 2024 – Aug 2024)'],
    color: '#7c3aed',
    emoji: '🔬',
    desc: 'Led the technical wing of the Science Club and later served as Vice President. Transformed the club by introducing technical initiatives that no other club had done before.',
    highlights: [
      'Built the official Science Club website — the first club website in the college',
      'Designed a brand new logo for the Science Club',
      'Added technical dimensions to a traditionally science-focused club',
      'Conducted "School on Wheels" — teaching science to school students',
      'Organized multiple tech & science events as Vice President',
    ],
    links: [
      { label: 'Club Instagram', icon: <FiInstagram />, href: 'https://www.instagram.com/science_club_sist/' },
      { label: 'Club Website (Archived)', icon: <FiGlobe />, href: 'https://sistscienceclub.web.app/' },
    ],
    badge: 'First Club Website in College',
  },
  {
    id: 2,
    title: 'EEE Coordinator',
    org: 'CDC Club (Community Development Club) — SIST',
    period: 'June 2023 – May 2024',
    subRoles: ['EEE Department Coordinator'],
    color: '#10b981',
    emoji: '🌱',
    desc: 'Represented the EEE department in the Community Development Club, focused on social impact and student empowerment.',
    highlights: [
      'Conducted "Fearless Echoes" — an event to help students overcome stage fear',
      'Personally overcame stage fear through this initiative',
      'Provided active support across multiple club events',
      'Bridged the gap between technical students and community service',
    ],
    links: [
      { label: 'Club Instagram', icon: <FiInstagram />, href: 'https://www.instagram.com/cdc_sist2025/' },
      { label: 'Position Post', icon: <FiInstagram />, href: 'https://www.instagram.com/p/CuCQld8yNgC/?img_index=8' },
    ],
    badge: 'Community Impact',
  },
  {
    id: 3,
    title: 'Technical Co-Lead',
    org: 'ACM Student Chapter — Sathyabama',
    period: 'Jan 2024 – Dec 2024',
    subRoles: ['Technical Co-Lead'],
    color: '#06b6d4',
    emoji: '💻',
    desc: "ACM (Association for Computing Machinery) is the world's largest computing society. As Technical Co-Lead, I drove the technical vision of the chapter and led major events.",
    highlights: [
      'Built the official website for Horizon 2024 — the annual symposium',
      'Conducted "Code Rush" — a competitive coding event at Horizon 2024',
      'Led the technical team for all chapter activities',
      'Organized Horizon 2024 symposium end-to-end',
    ],
    links: [
      { label: 'ACM Instagram', icon: <FiInstagram />, href: 'https://www.instagram.com/acmsathyabama/' },
      { label: 'Position Post', icon: <FiInstagram />, href: 'https://www.instagram.com/p/C2R3hR2v5fe/?img_index=3' },
      { label: 'Horizon 2024 Website', icon: <FiGlobe />, href: 'https://horizon2024.web.app/' },
    ],
    badge: 'Built Horizon 2024 Website',
  },
];

const volunteering = [
  {
    id: 'v1',
    icon: '🌟',
    title: 'Main SPOC — Sathyabama',
    org: 'Maatram Foundation',
    period: '2022 – 2025',
    color: '#f59e0b',
    desc: 'Served as the Main Student Point of Contact (SPOC) for Sathyabama — the bridge between students and Maatram Foundation, an NGO providing free education to underprivileged students with strong academic records.',
    highlights: [
      'Managed year-wise individual SPOCs for all 4 batches (Year 1–4)',
      'Coordinated communication between the foundation and student beneficiaries',
    ],
    link: null,
  },
  {
    id: 'v2',
    icon: '🏠',
    title: 'Physical Verification Volunteer',
    org: 'Maatram Foundation',
    period: '2023, 2024, 2025',
    color: '#f59e0b',
    desc: 'Visited homes of scholarship applicants to verify their background and living conditions — ensuring the right students receive support.',
    highlights: [
      'Home visits to verify student eligibility for free education',
      'Ensured transparency and authenticity in the admission process',
      'Participated across 3 consecutive years (2023, 2024, 2025)',
    ],
    link: null,
  },
  {
    id: 'v3',
    icon: '🎤',
    title: 'Admission Volunteer',
    org: 'Maatram Foundation',
    period: '2023 – 2025',
    color: '#f59e0b',
    desc: 'Worked in the technical team during the admission process.',
    highlights: [],
    link: null,
  },
  {
    id: 'v4',
    icon: '📚',
    title: 'Karpoom Karpipoom — Core Team',
    org: 'Karpoom Karpipoom — Maatram Foundation',
    period: '2022 – Present',
    color: '#a78bfa',
    desc: 'Karpoom Karpipoom provides free tuition to 12th-grade students from schools lacking qualified teachers. Started as a Physics tutor and grew into the Core Team.',
    highlights: [
      'Taught Physics to underprivileged 12th-grade students (2022–2024)',
      'Promoted to Executive Core Team for outstanding contribution',
      'Now part of the Core Team driving the initiative forward',
      'Automated the entire admission process for Karpoom Karpipoom in 2025',
      'Built a dedicated website for the program (launching soon)',
    ],
    link: { label: 'Website — Check back soon', href: null },
  },
  {
    id: 'v5',
    icon: '🏫',
    title: 'School Visit — Career Guidance',
    org: 'Maatram Foundation',
    period: '2023 – 2025',
    color: '#f59e0b',
    desc: 'Visited schools to deliver career guidance and awareness sessions — helping students understand opportunities in engineering and technology.',
    highlights: [
      'Delivered career awareness sessions at multiple schools',
      'Guided students on engineering streams and future opportunities',
      'Inspired underprivileged students to aim higher',
    ],
    link: null,
  },
  {
    id: 'v6',
    icon: '💡',
    title: 'Technical Tutor',
    org: 'Maatram Foundation',
    period: '2023 – Present',
    color: '#06b6d4',
    desc: 'Mentored students in technical subjects — helping them build a strong foundation in programming and engineering concepts.',
    highlights: [
      'Tutored students in programming fundamentals and technical subjects',
      'Bridged the gap between classroom learning and practical skills',
      'Helped students prepare for technical interviews and placements',
    ],
    link: null,
  },
];

const collegeJourney = [
  { year: '2021', text: 'Joined Sathyabama — started as a participant in department events' },
  { year: '2022', text: 'Actively participated in technical fests, joined Maatram Foundation as SPOC' },
  { year: '2023', text: 'Stepped up as organizer — Science Club, CDC, Maatram volunteering' },
  { year: '2024', text: 'Led as VP (Science Club) & Technical Co-Lead (ACM) simultaneously' },
];

function RoleCard({ role, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="role-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      style={{ '--rc': role.color }}
    >
      <div className="rc-accent" style={{ background: role.color }} />
      <div className="rc-header" onClick={() => setOpen(!open)}>
        <div className="rc-left">
          <div className="rc-emoji-wrap" style={{ background: role.color + '18', border: `1px solid ${role.color}44` }}>
            <span>{role.emoji}</span>
          </div>
          <div>
            <div className="rc-subroles">
              {role.subRoles.map((s, i) => (
                <span key={i} className="rc-subrole mono" style={{ color: role.color }}>{s}</span>
              ))}
            </div>
            <h3>{role.title}</h3>
            <p className="rc-org"><FiUsers style={{ color: role.color }} /> {role.org}</p>
            <p className="rc-period mono"><FiCalendar /> {role.period}</p>
          </div>
        </div>
        <div className="rc-right">
          <span className="rc-badge" style={{ background: role.color + '18', border: `1px solid ${role.color}44`, color: role.color }}>
            {role.badge}
          </span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <FiChevronDown className="rc-chevron" />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="rc-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="rc-desc">{role.desc}</p>
            <h4 className="rc-highlights-title mono">// key_highlights</h4>
            <ul className="rc-highlights">
              {role.highlights.map((h, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                  <span className="rc-bullet" style={{ background: role.color }} />
                  {h}
                </motion.li>
              ))}
            </ul>
            <div className="rc-links">
              {role.links.map((l, i) => (
                <motion.a
                  key={i}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rc-link"
                  style={{ borderColor: role.color + '44', color: role.color }}
                  whileHover={{ scale: 1.04, borderColor: role.color }}
                >
                  {l.icon} {l.label}
                </motion.a>
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
      className="vol-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="vol-accent" style={{ background: v.color }} />
      <div className="vol-header" onClick={() => setOpen(!open)}>
        <div className="vol-left">
          <div className="vol-emoji" style={{ background: v.color + '18', border: `1px solid ${v.color}33` }}>
            {v.icon}
          </div>
          <div>
            <h4>{v.title}</h4>
            <p className="vol-org" style={{ color: v.color }}>{v.org}</p>
            <p className="rc-period mono"><FiCalendar /> {v.period}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FiChevronDown className="rc-chevron" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="vol-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="rc-desc">{v.desc}</p>
            <ul className="rc-highlights">
              {v.highlights.map((h, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <span className="rc-bullet" style={{ background: v.color }} />
                  {h}
                </motion.li>
              ))}
            </ul>
            {v.link && (
              v.link.href
                ? <a href={v.link.href} target="_blank" rel="noreferrer" className="rc-link" style={{ borderColor: v.color + '44', color: v.color }}><FiGlobe /> {v.link.label}</a>
                : <span className="vol-coming-soon"><FiGlobe /> {v.link.label}</span>
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

        {/* Role Cards */}
        <div className="roles-list">
          {roles.map((r, i) => <RoleCard key={r.id} role={r} index={i} />)}
        </div>

        {/* College Journey Timeline */}
        <motion.div className="journey-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <h2 className="journey-title">College Journey <span className="gradient-text">Timeline</span></h2>
          <div className="journey-track">
            {collegeJourney.map((j, i) => (
              <motion.div key={i} className="journey-step" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }}>
                <div className="journey-year mono">{j.year}</div>
                <div className="journey-dot" />
                <p className="journey-text">{j.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering Section */}
        <motion.div className="vol-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <div className="vol-section-header">
            <div className="vol-title-wrap">
              <FiHeart className="vol-heart" />
              <div>
                <h2 className="vol-title">Volunteering</h2>
                <p className="vol-subtitle mono">// giving_back()</p>
              </div>
            </div>
            <div className="maatram-badge">
              <span className="maatram-dot" />
              <span>Maatram Foundation — 2022 to Present</span>
            </div>
          </div>

                  <div className="maatram-intro-card">
            <span className="mi-logo">🤝</span>
            <div>
              <h3>Maatram Foundation</h3>
              <p>Maatram leads transformation in the lives of deserving underprivileged students by providing quality sponsored education, continuous skill development, world class exposure to solving real life challenges, getting them placement ready and by imbibing societal skills — grooming them to become the finest in society.</p>
              <a href="https://www.maatramfoundation.com/" target="_blank" rel="noreferrer" className="maatram-website-link">Visit maatramfoundation.com →</a>
            </div>
          </div>

          <div className="vol-grid">
            {volunteering.map((v, i) => <VolCard key={v.id} v={v} index={i} />)}
          </div>
        </motion.div>

        {/* Certificate */}
        <motion.div className="cert-banner" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
          <div className="cert-banner-left">
            <span className="cert-icon">🏅</span>
            <div>
              <h4>Star of Excellence Certificate</h4>
              <p className="mono">Proof of conducted events & participation across college journey</p>
            </div>
          </div>
          <motion.a
            href="/star-of-excellence.pdf"
            target="_blank"
            rel="noreferrer"
            className="cert-download-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload /> View Certificate
          </motion.a>
        </motion.div>

      </div>
    </PageWrapper>
  );
}
