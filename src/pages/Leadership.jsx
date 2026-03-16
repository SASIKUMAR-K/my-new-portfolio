import { motion } from 'framer-motion';
import { FiUsers, FiCalendar } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Leadership.css';

const roles = [
  {
    title: 'Technical Lead',
    org: 'Google Developer Student Club',
    period: '2022 – 2023',
    team: '25 members',
    desc: 'Led a team of 25 developers, organized 15+ workshops, and mentored 100+ students in web development and cloud technologies.',
    impact: ['15+ workshops organized', '100+ students mentored', '3 hackathons hosted'],
    img: 'https://placehold.co/60x60/4285f4/ffffff?text=GDSC',
  },
  {
    title: 'President',
    org: 'Coding Club, University',
    period: '2021 – 2022',
    team: '50 members',
    desc: 'Grew the club from 20 to 50 active members. Established weekly coding contests and industry speaker sessions.',
    impact: ['50+ active members', '30+ events conducted', '5 industry partnerships'],
    img: 'https://placehold.co/60x60/7c3aed/ffffff?text=CC',
  },
  {
    title: 'Open Source Maintainer',
    org: 'GitHub Community',
    period: '2022 – Present',
    team: '10 contributors',
    desc: 'Maintaining 3 open-source projects with 500+ combined GitHub stars. Reviewing PRs and guiding new contributors.',
    impact: ['500+ GitHub stars', '50+ contributors', '3 active projects'],
    img: 'https://placehold.co/60x60/1a1a2e/ffffff?text=OS',
  },
  {
    title: 'Hackathon Mentor',
    org: 'Various Events',
    period: '2022 – Present',
    team: 'Multiple teams',
    desc: 'Mentored 20+ teams at national and international hackathons, helping them build MVPs and pitch to judges.',
    impact: ['20+ teams mentored', '5 winning teams', '10+ events'],
    img: 'https://placehold.co/60x60/f59e0b/ffffff?text=HM',
  },
];

export default function Leadership() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// leadership_roles()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Leadership & <span className="gradient-text">Activities</span>
        </motion.h1>

        <div className="leadership-list">
          {roles.map((r, i) => (
            <motion.div
              key={i}
              className="leadership-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="leadership-left">
                <img src={r.img} alt={r.org} className="leadership-logo" />
                <div className="leadership-line" />
              </div>
              <div className="leadership-content">
                <div className="leadership-header">
                  <div>
                    <h3>{r.title}</h3>
                    <p className="leadership-org">{r.org}</p>
                  </div>
                  <div className="leadership-meta">
                    <span className="mono"><FiCalendar /> {r.period}</span>
                    <span className="mono"><FiUsers /> {r.team}</span>
                  </div>
                </div>
                <p className="leadership-desc">{r.desc}</p>
                <div className="impact-chips">
                  {r.impact.map((imp, j) => (
                    <motion.span
                      key={j}
                      className="impact-chip"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                    >
                      ✦ {imp}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
