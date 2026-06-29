import React from 'react';

export default function Footer({ onLegal }) {
  const year = new Date().getFullYear();

  const linkStyle = {
    fontSize: '0.88rem',
    color: 'rgba(255,255,255,0.6)',
    display: 'block',
    transition: 'color 0.2s',
    lineHeight: 1.5,
  };

  const hover = e => e.currentTarget.style.color = '#fff';
  const hout  = e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)';

  return (
    <footer style={{ background: 'var(--black)', padding: '5rem 0 2.5rem' }}>
      <div className="container">

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '2.5rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '2rem' }} className="footer-grid">

          {/* Brand */}
          <div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem', fontWeight: 300,
              color: 'var(--white)', letterSpacing: '0.04em',
              lineHeight: 1.2, marginBottom: '1rem',
            }}>
              Pankti<br /><em>Patel</em>
            </p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Partnerships · Operations · Architecture<br />
              Germany · Europe
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0.9rem', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 100 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', flexShrink: 0 }} />
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>Open to Europe-wide roles</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} style={linkStyle} onMouseOver={hover} onMouseOut={hout}>{l}</a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <a href="https://linkedin.com/in/panktipatel23" target="_blank" rel="noreferrer"
                style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                onMouseOver={hover} onMouseOut={hout}
              >
                LinkedIn ↗
              </a>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>Germany</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>
              Legal
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <button onClick={() => onLegal('privacy')} style={{
                background: 'none', border: 'none', padding: 0,
                ...linkStyle, textAlign: 'left', cursor: 'pointer',
              }} onMouseOver={hover} onMouseOut={hout}>
                Privacy Policy
              </button>
              <button onClick={() => onLegal('terms')} style={{
                background: 'none', border: 'none', padding: 0,
                ...linkStyle, textAlign: 'left', cursor: 'pointer',
              }} onMouseOver={hover} onMouseOut={hout}>
                Terms of Use
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.25)' }}>
            © {year} Pankti Patel. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => onLegal('privacy')} style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.76rem', color: 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseOver={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
            >Privacy</button>
            <button onClick={() => onLegal('terms')} style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.76rem', color: 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseOver={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
            >Terms</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
