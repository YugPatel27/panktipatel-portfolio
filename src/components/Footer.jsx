import React from 'react';

const NAV_LINKS = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

export default function Footer({ onLegal }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--black)', padding: '5.5rem 0 2.5rem' }}>
      <div className="container">

        <div className="footer-grid">

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
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Partnerships · Operations · Architecture<br />
              Germany · Europe
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.45rem 0.9rem',
              border: '1px solid rgba(74,222,128,0.2)',
              borderRadius: 100,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#4ade80', boxShadow: '0 0 6px #4ade80',
                flexShrink: 0,
              }} />
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
                Open to Europe-wide roles
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem',
            }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {NAV_LINKS.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">{l}</a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem',
            }}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <a
                href="https://linkedin.com/in/panktipatel23"
                target="_blank" rel="noreferrer"
                className="footer-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                LinkedIn ↗
              </a>
              <a href="mailto:panktipatel23@gmail.com" className="footer-link">
                Email ↗
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem',
            }}>Legal</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <button onClick={() => onLegal('privacy')} className="footer-link">
                Privacy Policy
              </button>
              <button onClick={() => onLegal('terms')} className="footer-link">
                Terms of Use
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.22)' }}>
            © {year} Pankti Patel. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => onLegal('privacy')} className="footer-bottom-link">Privacy</button>
            <button onClick={() => onLegal('terms')}   className="footer-bottom-link">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
