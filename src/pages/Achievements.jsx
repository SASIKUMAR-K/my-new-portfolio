import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Achievements.css';

const achievements = [
  {
    title: 'LeetCode 600+ Problems Solved',
    org: 'LeetCode',
    desc: 'Solved 600+ problems across various difficulty levels — consistently sharpening problem-solving and DSA skills.',
    icon: '💻',
    color: '#ffa116',
    year: 'Ongoing',
    link: 'https://leetcode.com/u/SASIKUMAR-K/',
    linkLabel: 'View Profile',
  },
  {
    title: 'Smt. Manonmani & Shri Rajagopan Memorial Award',
    org: 'Maatram Foundation',
    desc: 'Awarded for outstanding contribution and volunteering service to Maatram Foundation.',
    icon: '🏅',
    color: '#f59e0b',
    year: '16 Jan 2024',
    link: null,
    linkLabel: 'Certificate coming soon',
  },
  {
    title: 'ILAM Thalir Award',
    org: 'Maatram Alumni Association',
    desc: 'Recognized by the Maatram Alumni Association for dedicated volunteering and social impact.',
    icon: '🌟',
    color: '#a78bfa',
    year: '19 Jan 2025',
    link: null,
    linkLabel: 'Certificate coming soon',
  },
  {
    title: 'NPTEL Domain Scholar',
    org: 'NPTEL',
    desc: 'Earned the NPTEL Domain Scholar title by successfully completing 7 NPTEL courses in a focused domain.',
    icon: '🎓',
    color: '#06b6d4',
    year: '01 Nov 2024',
    link: null,
    linkLabel: 'Certificate coming soon',
  },
  {
    title: 'NPTEL Star',
    org: 'NPTEL',
    desc: 'Awarded the NPTEL Star recognition for consistent performance and completion of multiple NPTEL courses.',
    icon: '⭐',
    color: '#10b981',
    year: '01 Nov 2024',
    link: null,
    linkLabel: 'Certificate coming soon',
  },
];

export default function Achievements() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// milestones()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Achievements & <span className="gradient-text">Awards</span>
        </motion.h1>

        <div className="achievements-list">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 6 }}
              style={{ '--card-color': a.color }}
            >
              <div className="ach-accent" style={{ background: a.color }} />
              <div className="ach-icon-wrap" style={{ background: a.color + '18', border: `1px solid ${a.color}44` }}>
                <span>{a.icon}</span>
              </div>
              <div className="ach-content">
                <div className="ach-top">
                  <h3>{a.title}</h3>
                  <span className="ach-year mono">{a.year}</span>
                </div>
                <p className="achievement-org"><FiAward style={{ color: a.color }} /> {a.org}</p>
                <p className="achievement-desc">{a.desc}</p>
                {a.link ? (
                  <a href={a.link} target="_blank" rel="noreferrer" className="ach-link" style={{ color: a.color, borderColor: a.color + '44' }}>
                    <FiExternalLink /> {a.linkLabel}
                  </a>
                ) : (
                  <span className="ach-soon">🔗 {a.linkLabel}</span>
                )}
              </div>
              <div className="achievement-glow" style={{ background: a.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
