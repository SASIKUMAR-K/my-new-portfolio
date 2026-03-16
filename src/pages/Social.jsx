import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube, FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import { SiLeetcode, SiHashnode, SiDevdotto } from 'react-icons/si';
import PageWrapper from '../components/PageWrapper';
import './Social.css';

const socials = [
  { name: 'GitHub', handle: '@yourusername', icon: <FiGithub />, href: '#', color: '#e2e8f0', followers: '500+', desc: 'Open source projects & contributions' },
  { name: 'LinkedIn', handle: 'Your Name', icon: <FiLinkedin />, href: '#', color: '#0a66c2', followers: '1.2K', desc: 'Professional network & career updates' },
  { name: 'Twitter / X', handle: '@yourusername', icon: <FiTwitter />, href: '#', color: '#1d9bf0', followers: '800', desc: 'Tech thoughts & dev tips' },
  { name: 'Instagram', handle: '@yourusername', icon: <FiInstagram />, href: '#', color: '#e1306c', followers: '600', desc: 'Life behind the screen' },
  { name: 'YouTube', handle: 'Your Channel', icon: <FiYoutube />, href: '#', color: '#ff0000', followers: '300', desc: 'Coding tutorials & project walkthroughs' },
  { name: 'LeetCode', handle: 'yourusername', icon: <SiLeetcode />, href: '#', color: '#ffa116', followers: 'Top 1%', desc: '800+ problems solved' },
  { name: 'Hashnode', handle: '@yourusername', icon: <SiHashnode />, href: '#', color: '#2962ff', followers: '400', desc: 'Technical blog & articles' },
  { name: 'Dev.to', handle: '@yourusername', icon: <SiDevdotto />, href: '#', color: '#a78bfa', followers: '250', desc: 'Dev community posts' },
];

export default function Social() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// connect_with_me()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Social & <span className="gradient-text">Contact</span>
        </motion.h1>

        <div className="social-layout">
          <div className="social-left">
            <div className="socials-grid">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4, borderColor: s.color + '66' }}
                  style={{ '--s-color': s.color }}
                >
                  <span className="social-icon" style={{ color: s.color }}>{s.icon}</span>
                  <div className="social-info">
                    <h4>{s.name}</h4>
                    <p className="mono">{s.handle}</p>
                    <p className="social-desc">{s.desc}</p>
                  </div>
                  <span className="social-followers">{s.followers}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div className="contact-form-wrap" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="contact-info">
              <div className="contact-item"><FiMail /><span>hello@yourname.dev</span></div>
              <div className="contact-item"><FiMapPin /><span>Your City, Country</span></div>
              <div className="contact-item"><FiPhone /><span>+91 XXXXX XXXXX</span></div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? '✓ Message Sent!' : <><FiSend /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
