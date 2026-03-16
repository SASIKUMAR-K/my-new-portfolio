import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiHeart, FiZap } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './About.css';

const stats = [
  { label: 'Projects Built', value: '50+' },
  { label: 'Years Coding', value: '4+' },
  { label: 'Cups of Coffee', value: '∞' },
  { label: 'GitHub Stars', value: '200+' },
];

const traits = [
  { icon: <FiCode />, title: 'Clean Code', desc: 'I write readable, maintainable code following best practices.' },
  { icon: <FiZap />, title: 'Performance', desc: 'Optimizing for speed and efficiency in every project.' },
  { icon: <FiHeart />, title: 'Passion', desc: 'Genuinely love what I do — it shows in my work.' },
  { icon: <FiCoffee />, title: 'Dedication', desc: 'Always learning, always improving, never settling.' },
];

const container = { animate: { transition: { staggerChildren: 0.1 } } };
const item = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// get_to_know_me()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          About <span className="gradient-text">Me</span>
        </motion.h1>

        <div className="about-grid">
          <motion.div className="about-image-wrap" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="about-img-frame">
              <img src="https://placehold.co/400x500/7c3aed/ffffff?text=About+Me" alt="about" />
              <div className="img-decoration" />
            </div>
            <div className="about-stats">
              {stats.map((s, i) => (
                <motion.div key={i} className="stat-card glow-border" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
                  <span className="stat-value gradient-text">{s.value}</span>
                  <span className="stat-label mono">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-text" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <p>Hey there! I'm <strong>Your Name</strong>, a passionate full-stack developer based in <strong>Your City, Country</strong>. I specialize in building exceptional digital experiences that live on the internet.</p>
            <p>With a strong foundation in computer science and a love for elegant design, I bridge the gap between functionality and aesthetics. I believe great software should be both powerful and beautiful.</p>
            <p>When I'm not pushing pixels or writing code, you'll find me exploring new technologies, contributing to open source, or mentoring aspiring developers.</p>

            <div className="about-tags">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <motion.div className="traits-grid" variants={container} initial="initial" animate="animate">
              {traits.map((t, i) => (
                <motion.div key={i} className="trait-card" variants={item} whileHover={{ scale: 1.03, borderColor: 'rgba(124,58,237,0.5)' }}>
                  <span className="trait-icon">{t.icon}</span>
                  <div>
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
