import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTrendingUp } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Achievements.css';

const achievements = [
  {
    title: 'National Hackathon Winner',
    org: 'HackIndia 2023',
    desc: 'Won 1st place among 500+ teams for building an AI-powered accessibility tool for visually impaired users.',
    icon: '🏆', color: '#f59e0b', year: '2023',
  },
  {
    title: 'Google Summer of Code',
    org: 'Google / Open Source',
    desc: 'Selected as a GSoC contributor to work on a major open-source project with 10k+ GitHub stars.',
    icon: '🌟', color: '#4285f4', year: '2023',
  },
  {
    title: 'Best Paper Award',
    org: 'IEEE Conference 2022',
    desc: 'Research paper on "Optimizing Microservices Communication" recognized as best paper in the systems track.',
    icon: '📄', color: '#7c3aed', year: '2022',
  },
  {
    title: 'Top 1% on LeetCode',
    org: 'LeetCode',
    desc: 'Solved 800+ problems, ranked in top 1% globally with a contest rating of 2100+.',
    icon: '💻', color: '#ffa116', year: '2022',
  },
  {
    title: 'Startup Incubation Grant',
    org: 'University Innovation Cell',
    desc: 'Received ₹5L seed funding for a SaaS product idea that reached 200+ beta users.',
    icon: '🚀', color: '#10b981', year: '2023',
  },
  {
    title: 'Open Source Contributor',
    org: 'GitHub',
    desc: '200+ contributions to popular open-source projects including React ecosystem libraries.',
    icon: '🐙', color: '#e2e8f0', year: '2021–Present',
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

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: a.color + '66' }}
              style={{ '--card-color': a.color }}
            >
              <div className="achievement-icon">{a.icon}</div>
              <div className="achievement-year mono">{a.year}</div>
              <h3>{a.title}</h3>
              <p className="achievement-org"><FiAward style={{ color: a.color }} /> {a.org}</p>
              <p className="achievement-desc">{a.desc}</p>
              <div className="achievement-glow" style={{ background: a.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
