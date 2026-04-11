import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiZap, FiCpu } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Hobbies.css';

export default function Hobbies() {
  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// beyond_the_code()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Hobbies & <span className="gradient-text">Passions</span>
        </motion.h1>

        <motion.p className="hobbies-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          Life beyond the terminal — where I recharge, compete, and sharpen my mind.
        </motion.p>

        <div className="hobbies-showcase">

          {/* BADMINTON */}
          <motion.div
            className="hobby-feature-card badminton-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="hfc-bg-text">🏸</div>
            <div className="hfc-content">
              <div className="hfc-top">
                <span className="hfc-emoji">🏸</span>
                <span className="hfc-tag">Sport</span>
              </div>
              <h2>Badminton</h2>
              <p className="hfc-desc">
                More than a sport — it's my reset button. Badminton has shaped my physical endurance
                and mental resilience. The court teaches me focus, quick decision-making, and the
                will to never give up — skills I carry into every line of code I write.
              </p>

              <div className="hfc-stats">
                <motion.div className="hfc-stat" whileHover={{ scale: 1.05 }}>
                  <FiAward />
                  <div>
                    <span className="hfc-stat-val">Local Champion</span>
                    <span className="hfc-stat-label">Tournament Wins</span>
                  </div>
                </motion.div>
                <motion.div className="hfc-stat" whileHover={{ scale: 1.05 }}>
                  <FiZap />
                  <div>
                    <span className="hfc-stat-val">Physical & Mental</span>
                    <span className="hfc-stat-label">Strength Builder</span>
                  </div>
                </motion.div>
              </div>

              <div className="hfc-traits">
                {['Agility', 'Focus', 'Endurance', 'Quick Reflexes', 'Team Spirit'].map((t, i) => (
                  <motion.span
                    key={t}
                    className="hfc-trait"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CHESS */}
          <motion.div
            className="hobby-feature-card chess-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <div className="hfc-bg-text">♟️</div>
            <div className="hfc-content">
              <div className="hfc-top">
                <span className="hfc-emoji">♟️</span>
                <span className="hfc-tag chess-tag">Strategy</span>
              </div>
              <h2>Chess</h2>
              <p className="hfc-desc">
                Chess is the ultimate game of logic and strategy — a perfect parallel to programming.
                Every move is a decision, every game a new problem to solve. It trains me to think
                multiple steps ahead, stay calm under pressure, and find elegant solutions.
              </p>

              <div className="hfc-stats">
                <motion.div className="hfc-stat chess-stat" whileHover={{ scale: 1.05 }}>
                  <FiCpu />
                  <div>
                    <span className="hfc-stat-val">Strategic Thinker</span>
                    <span className="hfc-stat-label">Pattern Recognition</span>
                  </div>
                </motion.div>
                <motion.div className="hfc-stat chess-stat" whileHover={{ scale: 1.05 }}>
                  <span style={{ fontSize: '1.2rem' }}>♟</span>
                  <div>
                    <span className="hfc-stat-val">Active Player</span>
                    <span className="hfc-stat-label">Chess.com</span>
                  </div>
                </motion.div>
              </div>

              <div className="hfc-traits">
                {['Strategy', 'Patience', 'Critical Thinking', 'Problem Solving', 'Foresight'].map((t, i) => (
                  <motion.span
                    key={t}
                    className="hfc-trait chess-trait"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + i * 0.07 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href="https://www.chess.com/member/mr-sasikumar-k"
                target="_blank"
                rel="noreferrer"
                className="chess-profile-btn"
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>♟</span> View Chess.com Profile <FiExternalLink />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Bottom quote */}
        <motion.div
          className="hobby-quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <span className="mono quote-mark">"</span>
          <p>The same mindset that wins on the court and the board — wins in the codebase.</p>
          <span className="mono quote-mark">"</span>
        </motion.div>

      </div>
    </PageWrapper>
  );
}
