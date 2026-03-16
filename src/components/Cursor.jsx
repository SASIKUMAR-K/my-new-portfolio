import { useEffect, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  useEffect(() => {
    let raf;
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y, transform: `translate(-50%,-50%) scale(${clicking ? 0.5 : 1})` }} />
      <div className="cursor-ring" style={{ left: trail.x, top: trail.y, transform: `translate(-50%,-50%) scale(${clicking ? 1.5 : 1})` }} />
    </>
  );
}
