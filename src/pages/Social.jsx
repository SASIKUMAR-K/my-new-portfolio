import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend, FiMapPin, FiPhone, FiArrowUpRight } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import PageWrapper from '../components/PageWrapper';
import './Social.css';

const socials = [
  { name: 'GitHub', handle: '@SASIKUMAR-K', icon: <FiGithub />, href: 'https://github.com/SASIKUMAR-K', color: '#e2e8f0', desc: 'Open source projects & contributions' },
  { name: 'LinkedIn', handle: 'mr-sasikumar-k', icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mr-sasikumar-k/', color: '#0a66c2', desc: 'Professional network & career updates' },
  { name: 'LeetCode', handle: 'SASIKUMAR-K', icon: <SiLeetcode />, href: 'https://leetcode.com/u/SASIKUMAR-K/', color: '#ffa116', desc: '600+ problems solved' },
  { name: 'Instagram', handle: '@mr.sasikumar.k', icon: <FiInstagram />, href: 'https://www.instagram.com/mr.sasikumar.k/', color: '#e1306c', desc: 'Life behind the screen' },
];

const contactDetails = [
  { icon: <FiMail />, label: 'Email', value: 'sasikumar05112004@gmail.com', href: 'mailto:sasikumar05112004@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+91 81221 04263', href: 'tel:+918122104263' },
  { icon: <FiMapPin />, label: 'Location', value: 'Chennai, TN, India', href: null },
];

export default function Social() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('https://formspree.io/f/xbdpnord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// connect_with_me()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Let's <span className="gradient-text">Connect</span>
        </motion.h1>

        <motion.p className="social-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          Have a project in mind, a question, or just want to say hi? My inbox is always open.
        </motion.p>

        <div className="social-page-grid">

          {/* LEFT — socials + contact info */}
          <div className="social-left-col">

            {/* Social cards */}
            <div className="social-cards-list">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-row-card"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  style={{ '--sc': s.color }}
                >
                  <div className="src-icon-wrap" style={{ background: s.color + '18', border: `1px solid ${s.color}44` }}>
                    <span style={{ color: s.color }}>{s.icon}</span>
                  </div>
                  <div className="src-info">
                    <h4>{s.name}</h4>
                    <p className="mono">{s.handle}</p>
                    <p className="src-desc">{s.desc}</p>
                  </div>
                  <FiArrowUpRight className="src-arrow" style={{ color: s.color }} />
                </motion.a>
              ))}
            </div>

            {/* Contact details */}
            <motion.div className="contact-details-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              {contactDetails.map((c, i) => (
                <div key={i} className="contact-detail-row">
                  <span className="cd-icon">{c.icon}</span>
                  <div>
                    <p className="cd-label mono">{c.label}</p>
                    {c.href
                      ? <a href={c.href} className="cd-value">{c.value}</a>
                      : <p className="cd-value">{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — contact form */}
          <motion.div className="contact-form-col" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
            <div className="form-header">
              <span className="mono form-tag">// send_message()</span>
              <h3>Drop me a message</h3>
              <p>I'll get back to you within 24 hours.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project or just say hi..." rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${sent ? 'sent' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
              >
                {sent ? (
                  <><span>✓</span> Message Sent!</>
                ) : loading ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}
