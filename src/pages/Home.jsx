import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import PageWrapper from '../components/PageWrapper';
import './Home.css';

const roles = ['Full Stack Developer', 'Problem Solver', 'Cloud Developer'];

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setIndex(i => i + 1);
        return;
      }
      setText(prev => deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className="typewriter">
      {text}<span className="cursor-blink">|</span>
    </span>
  );
}

function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((a, i) => particles.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function Home() {
  return (
    <PageWrapper>
      <div className="home">
        <ParticleField />
        <div className="home-content">
          <motion.div className="home-badge mono" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="badge-dot" /> Available for opportunities
          </motion.div>

          <motion.h1 className="home-name" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Hi, I'm <span className="gradient-text">Sasi Kumar</span>
          </motion.h1>

          <motion.div className="home-role" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <TypeWriter words={roles} />
          </motion.div>

          <motion.p className="home-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            I craft elegant digital experiences with clean code and creative design.
            Passionate about building products that make a difference.
          </motion.p>

          <motion.div className="home-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Link to="/projects" className="btn-primary">
              View Projects <FiArrowRight />
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
              <FiDownload /> Resume
            </a>
          </motion.div>

          <motion.div className="home-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            {[
              { icon: <FiGithub />, href: 'https://github.com/SASIKUMAR-K' },
              { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mr-sasikumar-k/' },
              { icon: <SiLeetcode />, href: 'https://leetcode.com/u/SASIKUMAR-K/' },
            ].map((s, i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div className="home-visual" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <div className="avatar-ring">
            <div className="avatar-ring-2">
              <img src={profileImg} alt="avatar" className="avatar-img" />
            </div>
          </div>

        </motion.div>


      </div>
    </PageWrapper>
  );
}
