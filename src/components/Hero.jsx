import React from 'react';

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>

      {/* Full-bleed background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero_bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.38)',
        zIndex: 0,
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,8,0.05) 0%, rgba(10,10,8,0.45) 55%, var(--black) 100%)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '10rem', paddingTop: '14rem' }}>
        <div style={{ maxWidth: 920 }}>
          <p className="overline" style={{ color: 'var(--terra)', marginBottom: '1.5rem' }}>
            Partnerships · Operations · Architecture — Paris &amp; Europe
          </p>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4rem, 10vw, 8.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            marginBottom: '2.5rem',
          }}>
            <em style={{ fontStyle: 'italic', display: 'block' }}>Pankti</em>
            <span style={{ display: 'block' }}>Patel</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', maxWidth: 480, lineHeight: 1.85 }}>
              International Business candidate at IESEG Paris. Dual background in
              B2B partner operations and Interior Architecture. Building structured,
              data-driven systems that create measurable commercial impact.
            </p>
            {/* Two domain tags */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingTop: '0.25rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--navy)', flexShrink: 0 }} />
                SaaS &amp; Operations
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--terra)', flexShrink: 0 }} />
                Interior Architecture
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn-arch btn-arch-light">
              View Experience
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className="btn-arch btn-arch-outline-light">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Floating year label */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', right: '2.5rem', zIndex: 2,
      }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', fontWeight: 300, color: 'rgba(255,255,255,0.06)', lineHeight: 1, userSelect: 'none' }}>
          2025
        </p>
      </div>
    </section>
  );
}
