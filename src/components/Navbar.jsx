import React, { useState, useEffect } from 'react';

export default function Navbar({ onLegal }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '0.85rem 0' : '1.6rem 0',
      background: scrolled ? 'rgba(10,10,8,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--navy), var(--terra))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 700, color: '#fff', letterSpacing: '0.02em', flexShrink: 0,
          }}>PP</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 400, letterSpacing: '0.09em', color: 'var(--white)' }}>
            PANKTI PATEL
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'none' }} className="desk-nav">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} style={{
                  fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
                  transition: 'color 0.2s',
                }}
                  onMouseOver={e => e.target.style.color = '#fff'}
                  onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                >{l}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="mob-btn" style={{ background: 'none', border: 'none', color: '#fff', padding: '0.25rem', display: 'none' }}>
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: '#111110', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', fontWeight: 300, color: 'var(--white)', letterSpacing: '0.04em' }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .desk-nav { display: block !important; } .mob-btn { display: none !important; } }
        @media (max-width: 768px) { .desk-nav { display: none !important; } .mob-btn { display: block !important; } }
      `}</style>
    </header>
  );
}
