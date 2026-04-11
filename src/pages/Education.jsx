import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Education.css';

const education = [
  {
    degree: 'B.E. Electrical and Electronics Engineering',
    school: 'Sathyabama Institute of Science and Technology',
    period: '2021 – 2025',
    grade: '8.6 CGPA',
    desc: 'The place where I identified my interest as a Technical Explorer.',
    skills: ['Arduino', 'Machines', 'Coding & Developing'],
    color: '#7c3aed',
    icon: '🎓',
  },
  {
    degree: 'HSC — Physics, Chemistry, Maths',
    school: 'Ramakrishna Boys HSS',
    period: '2020 – 2021',
    grade: '89.36%',
    desc: 'I have very much interest in Maths and Physics.',
    skills: ['Physics', 'Chemistry', 'Mathematics'],
    color: '#06b6d4',
    icon: '📘',
  },
  {
    degree: 'SSLC — Common Subjects',
    school: 'Ramakrishna Boys HSS',
    period: '2018 – 2019',
    grade: '85.6%',
    desc: 'School second mark — a proud milestone that set the foundation.',
    skills: ['Maths', 'Science', 'Social', 'Tamil', 'English'],
    color: '#f59e0b',
    icon: '🏫',
  },
];

const certifications = [
  { name: 'Add your certifications', issuer: 'Issuer / Platform', year: '2024', color: '#7c3aed' },
];

export default function Education() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// academic_journey()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Education & <span className="gradient-text">Certifications</span>
        </motion.h1>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line" />
          {education.map((e, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="timeline-dot" style={{ background: e.color, boxShadow: `0 0 12px ${e.color}88` }}>
                <span>{e.icon}</span>
              </div>
              <motion.div className="timeline-card" whileHover={{ scale: 1.01 }} style={{ borderColor: e.color + '33' }}>
                <div className="timeline-card-header">
                  <div>
                    <h3>{e.degree}</h3>
                    <p className="tl-school"><FiMapPin style={{ color: e.color }} /> {e.school}</p>
                  </div>
                  <div className="tl-right">
                    <span className="tl-period mono"><FiCalendar /> {e.period}</span>
                    {e.grade && <span className="tl-grade" style={{ color: e.color }}><FiAward /> {e.grade}</span>}
                  </div>
                </div>
                <p className="tl-desc">{e.desc}</p>
                <div className="tl-skills">
                  {e.skills.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <h2 className="cert-heading">Certifications</h2>
          <div className="cert-timeline">
            <div className="timeline-line" />
            {certifications.map((c, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
              >
                <div className="timeline-dot cert-dot" style={{ background: c.color, boxShadow: `0 0 12px ${c.color}88` }}>
                  <span>🏆</span>
                </div>
                <motion.div className="timeline-card" whileHover={{ scale: 1.01 }} style={{ borderColor: c.color + '33' }}>
                  <div className="timeline-card-header">
                    <div>
                      <h3>{c.name}</h3>
                      <p className="tl-school">{c.issuer}</p>
                    </div>
                    <span className="tl-period mono" style={{ color: c.color }}>{c.year}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
