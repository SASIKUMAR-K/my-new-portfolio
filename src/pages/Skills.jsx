import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import './Skills.css';

const categories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'React', level: 70 },
      { name: 'Bootstrap', level: 70 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'FastAPI', level: 80 },
      { name: 'Spring Boot', level: 50 },
      { name: 'Node.js', level: 25 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 50 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', level: 50 },
      { name: 'Docker', level: 20 },
      { name: 'CI/CD', level: 20 },
      { name: 'Firebase', level: 60 },
    ],
  },
];

const tools = ['Git', 'GitHub', 'VS Code', 'Postman'];

function SkillBar({ name, level, delay }) {
  return (
    <div className="skill-bar-wrap">
      <div className="skill-bar-header">
        <span>{name}</span>
        <span className="mono skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, #7c3aed ${100 - level}%, #06b6d4)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// my_tech_stack()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Skills & <span className="gradient-text">Expertise</span>
        </motion.h1>

        <div className="skills-tabs">
          {categories.map((c, i) => (
            <motion.button
              key={i}
              className={`skill-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {c.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={active}
          className="skills-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {categories[active].skills.map((s, i) => (
            <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
          ))}
        </motion.div>

        <motion.div className="tools-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h3 className="mono tools-title">// tools_i_use</h3>
          <div className="tools-grid">
            {tools.map((t, i) => (
              <motion.div
                key={t}
                className="tool-chip"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: '#7c3aed' }}
              >
                {t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
