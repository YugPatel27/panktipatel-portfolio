import React from 'react';

const DOMAIN_TAGS = [
  { label: 'SaaS · Operations',        color: 'var(--navy)' },
  { label: 'Interior Architecture',    color: 'var(--terra)' },
];

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      overflow: 'hidden',
    }}>

      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero_bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.35)',
        zIndex: 0,
      }} />

      {/* Gradient fade-to-black */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,8,0.04) 0%, rgba(10,10,8,0.45) 55%, var(--black) 100%)',
        zIndex: 1,
      }} />

      {/* Main content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '9rem', paddingTop: '14rem' }}>
        <div style={{ maxWidth: 940 }}>

          <p className="overline" style={{ color: 'var(--terra)', marginBottom: '1.5rem' }}>
            Partnerships · Operations · Architecture — Germany &amp; Europe
          </p>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4rem, 10vw, 8.5rem)',
            fontWeight: 300, lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            marginBottom: '2.5rem',
          }}>
            <em style={{ fontStyle: 'italic', display: 'block' }}>Pankti</em>
            <span style={{ display: 'block' }}>Patel</span>
          </h1>

          <div style={{
            display: 'flex', alignItems: 'flex-start',
            gap: '4rem', flexWrap: 'wrap', marginBottom: '3.5rem',
          }}>
            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.68)',
              maxWidth: 480, lineHeight: 1.9,
            }}>
              International Business candidate at IESEG Paris — with a foundation in
              Interior Architecture. I build structured, data-driven systems that
              create measurable commercial impact across European B2B markets.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.25rem' }}>
              {DOMAIN_TAGS.map(({ label, color }) => (
                <span key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.06em',
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: color, flexShrink: 0,
                  }} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn-arch btn-arch-light">
              View Experience
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#contact" className="btn-arch btn-arch-outline-light">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Floating year watermark */}
      <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', zIndex: 2 }}>
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: '5rem',
          fontWeight: 300, color: 'rgba(255,255,255,0.05)',
          lineHeight: 1, userSelect: 'none',
        }}>2025</p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" style={{
        position: 'absolute', bottom: '3rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 2,
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
