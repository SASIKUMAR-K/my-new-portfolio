import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import './Hobbies.css';

const hobbies = [
  {
    emoji: '🎸',
    title: 'Playing Guitar',
    desc: 'Self-taught guitarist for 5 years. Love playing fingerstyle and composing original pieces.',
    img: 'https://placehold.co/400x250/1a1a2e/7c3aed?text=Guitar',
    tags: ['Fingerstyle', 'Acoustic', 'Composition'],
  },
  {
    emoji: '📸',
    title: 'Photography',
    desc: 'Street and landscape photography enthusiast. Capturing moments that tell stories.',
    img: 'https://placehold.co/400x250/0f1a1a/06b6d4?text=Photography',
    tags: ['Street', 'Landscape', 'Portrait'],
  },
  {
    emoji: '🏃',
    title: 'Running',
    desc: 'Completed 3 half-marathons. Running clears my mind and fuels my creativity.',
    img: 'https://placehold.co/400x250/1a1500/f59e0b?text=Running',
    tags: ['Marathon', 'Trail', 'Fitness'],
  },
  {
    emoji: '📚',
    title: 'Reading',
    desc: 'Avid reader of tech books, sci-fi novels, and philosophy. 30+ books per year.',
    img: 'https://placehold.co/400x250/1a0f1a/a78bfa?text=Reading',
    tags: ['Sci-Fi', 'Tech', 'Philosophy'],
  },
  {
    emoji: '🎮',
    title: 'Gaming',
    desc: 'Strategy and indie game enthusiast. Also enjoy game jams and building small games.',
    img: 'https://placehold.co/400x250/0f1a0f/10b981?text=Gaming',
    tags: ['Strategy', 'Indie', 'Game Jams'],
  },
  {
    emoji: '✈️',
    title: 'Traveling',
    desc: 'Explored 12 countries. Travel broadens perspective and inspires creative thinking.',
    img: 'https://placehold.co/400x250/1a0f0f/ef4444?text=Travel',
    tags: ['Backpacking', 'Culture', 'Adventure'],
  },
];

export default function Hobbies() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// beyond_the_code()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Hobbies & <span className="gradient-text">Interests</span>
        </motion.h1>

        <div className="hobbies-grid">
          {hobbies.map((h, i) => (
            <motion.div
              key={i}
              className="hobby-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="hobby-img-wrap">
                <img src={h.img} alt={h.title} />
                <div className="hobby-emoji">{h.emoji}</div>
              </div>
              <div className="hobby-body">
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
                <div className="hobby-tags">
                  {h.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
