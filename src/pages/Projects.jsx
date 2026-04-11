import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiUsers, FiX, FiCode, FiCpu } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Projects.css';

const devProjects = [
  {
    title: 'Science Club Website',
    desc: 'Official website for the Science Club — showcasing events, activities, registration forms with an admin panel. First club website built in the college.',
    tags: ['React', 'Google Sheet API', 'Firebase'],
    team: 1, role: 'Solo Developer',
    live: 'https://sistscienceclub.web.app',
    code: 'https://github.com/SASIKUMAR-K/Science-Club-Website',
    badge: 'First in College',
    badgeColor: '#7c3aed',
    color: '#7c3aed',
  },
  {
    title: 'Horizon 2024 — Symposium Website',
    desc: 'Official website for Horizon 2024 symposium — event listings, registrations, and team info. Built as Technical Co-Lead of ACM SIST.',
    tags: ['React', 'Firebase'],
    team: 3, role: 'Frontend Developer',
    live: 'https://horizon2024.web.app',
    code: 'https://github.com/SASIKUMAR-K/horizon-24-frontend',
    badge: 'ACM SIST',
    badgeColor: '#06b6d4',
    color: '#06b6d4',
  },
  {
    title: 'Short Link App',
    desc: 'Two-app URL shortener system. App 1 is open source — shorten any link with a custom key. App 2 is specifically for resume sharing.',
    tags: ['React', 'Firebase'],
    team: 1, role: 'Solo Developer',
    live: 'https://linkshort.web.app',
    live2: 'https://showlink.web.app',
    code: 'https://github.com/SASIKUMAR-K/Link-Short-App',
    code2: 'https://github.com/SASIKUMAR-K/Resume-Show-Link',
    badge: '2 Apps',
    badgeColor: '#10b981',
    color: '#10b981',
  },
  {
    title: 'QR Code Generator',
    desc: 'Generate QR codes with custom colors and resolution. Clean, fast, and works entirely in the browser.',
    tags: ['React', 'CSS'],
    team: 1, role: 'Solo Developer',
    live: 'https://buildqr.web.app',
    code: 'https://github.com/SASIKUMAR-K/QR-Code-Generator',
    badge: null,
    color: '#f59e0b',
  },
  {
    title: 'CGPA Calculator',
    desc: 'Two-app CGPA calculator. App 1 is tailored for EEE SIST students, App 2 is for everyone — calculate semester CGPA instantly.',
    tags: ['HTML', 'CSS', 'JS', 'Python', 'Django', 'MySQL'],
    team: 1, role: 'Solo Developer',
    live: 'https://computecgpa.web.app',
    live2: 'https://findcgpa.web.app',
    code: 'https://github.com/SASIKUMAR-K/CGPA-Calci-EEE-SIST',
    code2: 'https://github.com/SASIKUMAR-K/CGPA-Calci-For-All',
    badge: '2 Apps',
    badgeColor: '#a78bfa',
    color: '#a78bfa',
  },
  {
    title: 'Shopping Web App',
    desc: 'Full-featured shopping app with login, signup, favorites, cart, and a complete admin panel to manage all data.',
    tags: ['Python', 'Django', 'MySQL'],
    team: 1, role: 'Solo Developer',
    live: null,
    code: 'https://github.com/SASIKUMAR-K/Shopping-Web-App',
    badge: null,
    color: '#e11d48',
  },
  {
    title: 'Net Banking App',
    desc: 'A banking system similar to net banking — view account statements, perform transactions, withdrawals, and apply for loans.',
    tags: ['Python', 'Flask', 'MySQL'],
    team: 1, role: 'Solo Developer',
    live: null,
    code: 'https://github.com/SASIKUMAR-K/Banking-system',
    badge: null,
    color: '#0ea5e9',
  },
];

const coreProjects = [
  {
    title: 'Traffic Sign Prediction',
    desc: 'ML model that detects and predicts traffic signs in real-time — helping reduce human errors. The vehicle behaves according to the detected sign.',
    tags: ['Python', 'Deep Learning', 'CNN'],
    team: 1, role: 'Solo Developer',
    live: null,
    code: 'https://github.com/SASIKUMAR-K/traffic-sign-pred',
    badge: 'ML / AI',
    badgeColor: '#7c3aed',
    color: '#7c3aed',
  },
  {
    title: 'Voice Controlled Car',
    desc: 'A car controlled by voice commands — an ML model processes speech and sends directions to the Arduino controller.',
    tags: ['Python', 'SVM', 'Arduino'],
    team: 1, role: 'Solo Developer',
    live: null,
    code: 'https://github.com/SASIKUMAR-K/Voice-Controlled-Car',
    badge: 'IoT + ML',
    badgeColor: '#06b6d4',
    color: '#06b6d4',
  },
  {
    title: 'Solar Panel Cleaning Robot',
    desc: 'Automatically cleans large-scale solar panels using Arduino and a motor system. Currently under progress.',
    tags: ['Arduino', 'Python', 'Django', 'MySQL'],
    team: 4, role: 'Programmer',
    live: null,
    doc: 'https://showlink.web.app/j',
    badge: 'In Progress',
    badgeColor: '#f59e0b',
    color: '#f59e0b',
  },
  {
    title: 'Gas Leakage Alarm System',
    desc: 'Detects gas leaks, calls a given number automatically, sounds an alarm, and activates an exhaust fan to expel the gas.',
    tags: ['Arduino', 'Sensors', 'Motor Driver'],
    team: 4, role: 'Programmer',
    demo: 'https://showlink.web.app/m',
    doc: 'https://showlink.web.app/k',
    badge: 'IoT',
    badgeColor: '#ef4444',
    color: '#ef4444',
  },
];

function ProjectCard({ p, i, type }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="proj-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
        whileHover={{ y: -5 }}
        onClick={() => setOpen(true)}
        style={{ '--pc': p.color }}
      >
        <div className="proj-card-top">
          <div className="proj-card-accent" style={{ background: p.color }} />
          <div className="proj-header-row">
            <div className="proj-icon-wrap" style={{ background: p.color + '18', border: `1px solid ${p.color}33` }}>
              {type === 'dev' ? <FiCode style={{ color: p.color }} /> : <FiCpu style={{ color: p.color }} />}
            </div>
            {p.badge && (
              <span className="proj-badge" style={{ background: p.badgeColor + '18', border: `1px solid ${p.badgeColor}44`, color: p.badgeColor }}>
                {p.badge}
              </span>
            )}
          </div>
          <h3>{p.title}</h3>
          <p className="proj-desc">{p.desc}</p>
        </div>
        <div className="proj-card-bottom">
          <div className="proj-tags">
            {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="proj-meta">
            <span className="proj-team mono"><FiUsers /> {p.team === 1 ? 'Solo' : `Team of ${p.team}`}</span>
            <span className="proj-view-btn" style={{ color: p.color }}>View Details →</span>
          </div>
        </div>
        <div className="proj-glow" style={{ background: p.color }} />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div className="proj-modal" initial={{ scale: 0.85, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0 }} onClick={e => e.stopPropagation()} style={{ borderColor: p.color + '44' }}>
              <div className="modal-accent" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              <button className="modal-close" onClick={() => setOpen(false)}><FiX /></button>
              <div className="modal-header">
                <div className="proj-icon-wrap lg" style={{ background: p.color + '18', border: `1px solid ${p.color}44` }}>
                  {type === 'dev' ? <FiCode style={{ color: p.color }} /> : <FiCpu style={{ color: p.color }} />}
                </div>
                <div>
                  {p.badge && <span className="proj-badge" style={{ background: p.badgeColor + '18', border: `1px solid ${p.badgeColor}44`, color: p.badgeColor }}>{p.badge}</span>}
                  <h2>{p.title}</h2>
                  <p className="modal-meta mono">
                    <FiUsers /> {p.team === 1 ? 'Solo Project' : `Team of ${p.team}`}
                    {p.role && <> &nbsp;·&nbsp; Role: {p.role}</>}
                  </p>
                </div>
              </div>
              <p className="modal-desc">{p.desc}</p>
              <div className="modal-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              <div className="modal-links">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="modal-btn primary" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)` }}><FiExternalLink /> Live</a>}
                {p.live2 && <a href={p.live2} target="_blank" rel="noreferrer" className="modal-btn primary" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)` }}><FiExternalLink /> Live 2</a>}
                {p.code && <a href={`https://${p.code.replace('https://', '')}`} target="_blank" rel="noreferrer" className="modal-btn secondary" style={{ borderColor: p.color + '66', color: p.color }}><FiGithub /> Code</a>}
                {p.code2 && <a href={`https://${p.code2.replace('https://', '')}`} target="_blank" rel="noreferrer" className="modal-btn secondary" style={{ borderColor: p.color + '66', color: p.color }}><FiGithub /> Code 2</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="modal-btn secondary" style={{ borderColor: p.color + '66', color: p.color }}><FiExternalLink /> Demo</a>}
                {p.doc && <a href={p.doc} target="_blank" rel="noreferrer" className="modal-btn secondary" style={{ borderColor: p.color + '66', color: p.color }}><FiExternalLink /> Document</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const [tab, setTab] = useState('dev');

  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// my_work()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>

        <motion.p className="proj-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          From web apps to IoT systems — things I've built, shipped, and learned from.
        </motion.p>

        {/* Tab switcher */}
        <div className="proj-tabs">
          <motion.button className={`proj-tab ${tab === 'dev' ? 'active' : ''}`} onClick={() => setTab('dev')} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <FiCode /> Development Projects
            <span className="tab-count">{devProjects.length}</span>
          </motion.button>
          <motion.button className={`proj-tab ${tab === 'core' ? 'active' : ''}`} onClick={() => setTab('core')} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <FiCpu /> Core / Circuit Projects
            <span className="tab-count">{coreProjects.length}</span>
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="proj-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {(tab === 'dev' ? devProjects : coreProjects).map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} type={tab} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
