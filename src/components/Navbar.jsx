import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/social', label: 'Social' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <NavLink to="/" className="nav-logo">
          <FiCode className="logo-icon" />
          <span className="logo-text mono">sasikumar<span className="logo-accent">.dev</span></span>
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {label}
                <span className="link-underline" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
          <AnimatePresence mode="wait">
            {open
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><FiX /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><FiMenu /></motion.span>
            }
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="mob-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="mob-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <div className="mob-top">
                <span className="logo-text mono">sasikumar<span className="logo-accent">.dev</span></span>
                <button className="mob-close" onClick={() => setOpen(false)}><FiX /></button>
              </div>

              <nav className="mob-nav">
                {links.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <NavLink to={to} className={({ isActive }) => isActive ? 'mob-link active' : 'mob-link'}>
                      <span className="mob-num mono">0{i + 1}</span>
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mob-resume">
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
