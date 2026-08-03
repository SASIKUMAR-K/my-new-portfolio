import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload, FiCode, FiCpu, FiZap } from 'react-icons/fi';
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
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting && text === word) { setTimeout(() => setDeleting(true), 1800); return; }
      if (deleting && text === '') { setDeleting(false); setIndex(i => i + 1); return; }
      setText(prev => deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);
  return <span className="typewriter">{text}<span className="cursor-blink">|</span></span>;
}

function Aurora() {
  return (
    <div className="aurora">
      <div className="aurora-blob a1" />
      <div className="aurora-blob a2" />
      <div className="aurora-blob a3" />
    </div>
  );
}

function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3, alpha: Math.random() * 0.4 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`; ctx.fill();
      });
      particles.forEach((a, i) => particles.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 100) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - d / 100)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
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

function TiltCard({ children }) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(-(e.clientY - cy) / 18);
    rotateY.set((e.clientX - cx) / 18);
  };
  const reset = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <motion.div
      ref={ref}
      className="tilt-wrap"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

const statsData = [
  { icon: <FiCode />, val: '20+', label: 'Projects' },
  { icon: <SiLeetcode />, val: '600+', label: 'LeetCode' },
  { icon: <FiCpu />, val: '3+', label: 'Years' },
  { icon: <FiZap />, val: '25+', label: 'Repos' },
];

export default function Home() {
  return (
    <PageWrapper>
      <div className="home">
        <Aurora />
        <ParticleField />

        {/* Grid lines */}
        <div className="grid-lines">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="grid-line-v" style={{ left: `${(i + 1) * 16.66}%` }} />)}
        </div>

        {/* LEFT */}
        <div className="home-content">
          <motion.div className="home-badge mono" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <span className="badge-dot" />
            <span>Available for opportunities</span>
            <span className="badge-sep">|</span>
            <span className="badge-loc">Chennai, India</span>
          </motion.div>

          <motion.div className="home-greeting mono" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            &lt;hello world /&gt;
          </motion.div>

          <motion.h1 className="home-name" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            I'm <br />
            <span className="name-highlight">Sasikumar</span>
          </motion.h1>

          <motion.div className="home-role" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            <span className="role-prefix mono">$ </span>
            <TypeWriter words={roles} />
          </motion.div>

          <motion.p className="home-desc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            Building elegant digital experiences with clean code. Passionate about solving real problems through technology — from web apps to IoT systems.
          </motion.p>

          <motion.div className="home-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
            <Link to="/projects" className="btn-primary">
              <span className="btn-bg" />
              View Projects <FiArrowRight />
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
              <FiDownload /> Resume
            </a>
          </motion.div>

          <motion.div className="home-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            {[
              { icon: <FiGithub />, href: 'https://github.com/SASIKUMAR-K', label: 'GitHub' },
              { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mr-sasikumar-k/', label: 'LinkedIn' },
              { icon: <SiLeetcode />, href: 'https://leetcode.com/u/SASIKUMAR-K/', label: 'LeetCode' },
            ].map((s, i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-pill"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {s.icon} <span>{s.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div className="home-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            {statsData.map((s, i) => (
              <motion.div key={i} className="home-stat" whileHover={{ scale: 1.08 }}>
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-val">{s.val}</span>
                <span className="stat-lbl mono">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div className="home-visual" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}>
          <TiltCard>
            <div className="avatar-scene">
              {/* Outer orbit rings */}
              <div className="orbit orbit-1">
                <div className="orbit-dot od-1" />
              </div>
              <div className="orbit orbit-2">
                <div className="orbit-dot od-2" />
              </div>

              {/* Hexagon frame */}
              <div className="hex-frame">
                <div className="hex-inner">
                  <img src={profileImg} alt="Sasikumar" className="avatar-img" />
                  <div className="avatar-overlay" />
                </div>
              </div>

              {/* Tech badges orbiting */}
              <motion.div className="tech-badge tb-1" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <FiCode /> React
              </motion.div>
              <motion.div className="tech-badge tb-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
                <FiCpu /> IoT
              </motion.div>
              <motion.div className="tech-badge tb-3" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                ☁️ Cloud
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </PageWrapper>
  );
}
