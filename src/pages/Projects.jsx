import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import './Projects.css';

const projects = [
  {
    title: 'DevConnect Platform',
    desc: 'A full-stack social platform for developers with real-time chat, code sharing, and collaboration tools.',
    long: 'Built with React, Node.js, Socket.io, and MongoDB. Features include real-time messaging, code syntax highlighting, project collaboration, and developer profiles.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    img: 'https://placehold.co/600x400/7c3aed/ffffff?text=DevConnect',
    github: '#', live: '#', featured: true,
  },
  {
    title: 'AI Code Reviewer',
    desc: 'An AI-powered tool that reviews code, suggests improvements, and detects bugs automatically.',
    long: 'Integrates with GitHub via webhooks. Uses OpenAI API for intelligent code analysis. Supports 15+ programming languages.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Docker'],
    img: 'https://placehold.co/600x400/06b6d4/ffffff?text=AI+Reviewer',
    github: '#', live: '#', featured: true,
  },
  {
    title: 'CloudDash Analytics',
    desc: 'Real-time analytics dashboard with beautiful visualizations and AWS integration.',
    long: 'Processes millions of events per day. Built with React, D3.js, AWS Lambda, and DynamoDB. Features custom chart components.',
    tags: ['React', 'D3.js', 'AWS', 'DynamoDB'],
    img: 'https://placehold.co/600x400/f59e0b/ffffff?text=CloudDash',
    github: '#', live: '#', featured: true,
  },
  {
    title: 'TaskFlow App',
    desc: 'A Kanban-style project management app with drag-and-drop and team collaboration.',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    img: 'https://placehold.co/600x400/10b981/ffffff?text=TaskFlow',
    github: '#', live: '#',
  },
  {
    title: 'CryptoTracker',
    desc: 'Live cryptocurrency portfolio tracker with price alerts and historical charts.',
    tags: ['Next.js', 'Chart.js', 'WebSocket'],
    img: 'https://placehold.co/600x400/ef4444/ffffff?text=CryptoTracker',
    github: '#', live: '#',
  },
  {
    title: 'DevBlog CMS',
    desc: 'A headless CMS built for developers with markdown support and syntax highlighting.',
    tags: ['Next.js', 'MDX', 'Prisma'],
    img: 'https://placehold.co/600x400/8b5cf6/ffffff?text=DevBlog',
    github: '#', live: '#',
  },
];

const filters = ['All', 'React', 'Node.js', 'Python', 'Next.js'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <PageWrapper>
      <div className="section-wrapper">
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>// my_work()</motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>

        <div className="project-filters">
          {filters.map(f => (
            <motion.button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {f}
            </motion.button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                className={`project-card ${p.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(p)}
              >
                <div className="project-img">
                  <img src={p.img} alt={p.title} />
                  <div className="project-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="project-links" onClick={e => e.stopPropagation()}>
                    <a href={p.github} target="_blank" rel="noreferrer"><FiGithub /> Code</a>
                    <a href={p.live} target="_blank" rel="noreferrer"><FiExternalLink /> Live</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="modal-card" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)}><FiX /></button>
              <img src={selected.img} alt={selected.title} />
              <div className="modal-body">
                <h2>{selected.title}</h2>
                <p>{selected.long || selected.desc}</p>
                <div className="project-tags">{selected.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                <div className="modal-links">
                  <a href={selected.github} className="btn-primary" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
                  <a href={selected.live} className="btn-secondary" target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
