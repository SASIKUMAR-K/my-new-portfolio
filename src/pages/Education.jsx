import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Education.css';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    school: 'Your University Name',
    period: '2020 – 2024',
    gpa: '9.2 / 10',
    desc: 'Specialized in Software Engineering and Distributed Systems. Active member of the coding club and tech fest organizer.',
    courses: ['Data Structures', 'Algorithms', 'OS', 'DBMS', 'Computer Networks', 'ML'],
    img: 'https://placehold.co/80x80/7c3aed/ffffff?text=UNI',
  },
  {
    degree: 'Higher Secondary Certificate',
    field: 'Science (PCM + Computer Science)',
    school: 'Your School Name',
    period: '2018 – 2020',
    gpa: '95.4%',
    desc: 'Graduated with distinction. Won state-level science olympiad and represented school in national coding competitions.',
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    img: 'https://placehold.co/80x80/06b6d4/ffffff?text=SCH',
  },
];

const certifications = [
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', year: '2023', img: 'https://placehold.co/60x60/f59e0b/ffffff?text=AWS' },
  { name: 'Meta Frontend Developer', issuer: 'Meta / Coursera', year: '2023', img: 'https://placehold.co/60x60/1877f2/ffffff?text=META' },
  { name: 'Google Data Analytics', issuer: 'Google / Coursera', year: '2022', img: 'https://placehold.co/60x60/4285f4/ffffff?text=GGL' },
  { name: 'Docker & Kubernetes', issuer: 'Udemy', year: '2022', img: 'https://placehold.co/60x60/2496ed/ffffff?text=DKR' },
];

export default function Education() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// academic_journey()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Education & <span className="gradient-text">Certifications</span>
        </motion.h1>

        <div className="edu-timeline">
          {education.map((e, i) => (
            <motion.div
              key={i}
              className="edu-card glow-border"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="edu-header">
                <img src={e.img} alt={e.school} className="edu-logo" />
                <div>
                  <h3>{e.degree}</h3>
                  <p className="edu-field">{e.field}</p>
                  <p className="edu-school"><FiBook /> {e.school}</p>
                </div>
                <div className="edu-meta">
                  <span className="mono"><FiCalendar /> {e.period}</span>
                  <span className="edu-gpa"><FiAward /> {e.gpa}</span>
                </div>
              </div>
              <p className="edu-desc">{e.desc}</p>
              <div className="edu-courses">
                {e.courses.map(c => <span key={c} className="tag">{c}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="cert-heading">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((c, i) => (
              <motion.div
                key={i}
                className="cert-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.5)' }}
              >
                <img src={c.img} alt={c.issuer} />
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.issuer}</p>
                  <span className="mono cert-year">{c.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
