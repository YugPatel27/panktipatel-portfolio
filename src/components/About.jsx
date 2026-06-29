import React, { useRef, useEffect, useState } from 'react';
import ArchPanel from './ArchPanel';

// The about text split into highlighted segments
const segments = [
  { text: "My work sits at the intersection of ", highlight: null },
  { text: "business operations", highlight: 'navy' },
  { text: " and ", highlight: null },
  { text: "architectural design", highlight: 'terra' },
  { text: " — two fields that together shape my perspective on how spatial flow, team coordination, and business processes connect. I hold a Bachelor's in ", highlight: null },
  { text: "Interior Architecture from LISAA Paris", highlight: 'terra' },
  { text: ", which trained me to map environments, research materials, and present complex ideas to clients. To build on this creative foundation, I decided to pursue a ", highlight: null },
  { text: "Master's in International Business at IESEG", highlight: 'navy' },
  { text: ", strengthening my skills in global strategies, operational analysis, and financial planning. Currently at ", highlight: null },
  { text: "Naboo", highlight: 'navy' },
  { text: " based in Germany, I direct our ", highlight: null },
  { text: "partner relations and hospitality network", highlight: 'navy' },
  { text: " across European markets, refining service-level guidelines, managing partner quotation cycles, and authoring the playbooks that make our business-to-business pipelines run smoothly. Earlier, at ", highlight: null },
  { text: "FrogPubs", highlight: 'terra' },
  { text: ", I directed shift operations, restructured team onboarding to shorten training curves, and led social media campaigns that expanded our local community outreach. I believe that thoughtful design and operational structure are not separate disciplines — they are two sides of the same coin, each making the other stronger.", highlight: null },
];

export default function About() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      // Start revealing when top hits 80% of screen height
      const start = wh * 0.85;
      const end = -rect.height * 0.3;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(Math.max(raw, 0), 1));
    };
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // How many characters are "revealed" based on scroll progress
  const fullText = segments.reduce((acc, s) => acc + s.text, '');
  const revealedChars = Math.floor(fullText.length * progress);

  let charCounter = 0;

  const details = [
    { label: 'Location', value: 'Germany' },
    { label: 'Education', value: 'IESEG + LISAA Paris' },
    { label: 'Languages', value: 'English · German · French · Hindi · Gujarati' },
    { label: 'Availability', value: 'Open to Europe-based roles' },
  ];

  return (
    <ArchPanel id="about" style={{ backgroundColor: '#F0EDE8' }}>
      <div className="container">

        {/* Section header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '5rem' }}>
          <div>
            <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>01 — About</p>
            <h2 className="heading-lg" style={{ color: 'var(--text-dark)' }}>
              Where business<br />meets design
            </h2>
          </div>
          {/* Quick facts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem 2.5rem' }}>
            {details.map(d => (
              <div key={d.label}>
                <p className="overline" style={{ color: 'var(--text-muted)', marginBottom: '0.2rem', fontSize: '0.65rem' }}>{d.label}</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-dark)' }}>{d.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll-reveal paragraph */}
        <div ref={containerRef} style={{ maxWidth: 900, marginBottom: '5rem' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 300, lineHeight: 1.7, letterSpacing: '-0.01em' }}>
            {segments.map((seg, si) =>
              seg.text.split('').map((ch, ci) => {
                const globalIdx = charCounter++;
                const isVisible = globalIdx <= revealedChars;
                const color = isVisible
                  ? seg.highlight === 'navy' ? 'var(--navy)'
                    : seg.highlight === 'terra' ? 'var(--terra)'
                    : 'var(--text-dark)'
                  : 'rgba(26,25,23,0.14)';
                return (
                  <span key={`${si}-${ci}`} style={{
                    color,
                    fontStyle: seg.highlight && isVisible ? 'italic' : 'normal',
                    transition: 'color 0.3s ease',
                  }}>{ch}</span>
                );
              })
            )}
          </p>
        </div>

        {/* Dual expertise cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="about-cards">
          {[
            {
              label: 'Operations & Business Development',
              color: 'var(--navy)',
              role: 'Partnerships Intern · Naboo',
              period: '2025 — Present',
              desc: 'Directing partner relationships and hospitality networks across European markets, structuring quotation workflows, establishing quality standards, and coordinating with accounts to improve conversion rates.',
              tags: ['Power BI', 'KPI Dashboarding', 'B2B CRM', 'Partner Onboarding', 'Lean Ops'],
            },
            {
              label: 'Interior Architecture & Design',
              color: 'var(--terra)',
              role: 'Architecture Intern · Jignesh Parekh Architects',
              period: '2022 · Mumbai',
              desc: 'Developed spatial layouts, material specifications, and comparative market analysis for commercial interior spaces. Assisted in designing pitch presentations and architectural visualisations for client approvals.',
              tags: ['Space Planning', 'Material Research', '3D Modelling', 'Client Presentations'],
            },
          ].map((c, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              padding: '2.25rem',
              borderTop: `3px solid ${c.color}`,
              transition: 'box-shadow 0.3s ease',
            }}
              onMouseOver={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.07)'}
              onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <p className="overline" style={{ color: c.color, marginBottom: '0.4rem' }}>{c.label}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{c.role} · {c.period}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{c.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {c.tags.map(t => (
                  <span key={t} style={{
                    display: 'inline-block', padding: '0.28rem 0.8rem',
                    border: `1px solid ${c.color}30`, borderRadius: 100,
                    fontSize: '0.76rem', fontWeight: 500, color: c.color,
                    background: `${c.color}08`,
                    letterSpacing: '0.03em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) { .about-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </ArchPanel>
  );
}
