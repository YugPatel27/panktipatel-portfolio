import React, { useRef, useEffect, useState } from 'react';
import ArchPanel from './ArchPanel';

// About text split into colour-highlighted segments.
// highlight: 'navy' | 'terra' | null
const SEGMENTS = [
  { text: 'My work sits at the intersection of ', highlight: null },
  { text: 'business operations', highlight: 'navy' },
  { text: ' and ', highlight: null },
  { text: 'architectural design', highlight: 'terra' },
  { text: ' — two disciplines that together shape how I think about spatial flow, team coordination, and operational structure. I hold a Bachelor\'s in ', highlight: null },
  { text: 'Interior Architecture from LISAA Paris', highlight: 'terra' },
  { text: ', which trained me to map environments, research materials, and communicate complex ideas visually. Building on that creative foundation, I pursued a ', highlight: null },
  { text: "Master's in International Business at IESEG", highlight: 'navy' },
  { text: ', deepening my skills in global strategy, operational analysis, and financial planning. Currently at ', highlight: null },
  { text: 'Naboo', highlight: 'navy' },
  { text: ' in Germany, I manage our ', highlight: null },
  { text: 'partner relations and hospitality network', highlight: 'navy' },
  { text: ' across European markets — refining service standards, overseeing partner quotation cycles, and authoring the operational playbooks that keep our B2B pipelines running smoothly. Earlier, at ', highlight: null },
  { text: 'FrogPubs', highlight: 'terra' },
  { text: ', I led shift operations, restructured team onboarding to shorten training time, and ran social media campaigns that strengthened local community engagement. I believe thoughtful design and operational rigour are not opposing disciplines — they are two sides of the same coin.', highlight: null },
];

const FULL_TEXT = SEGMENTS.reduce((acc, s) => acc + s.text, '');

const DETAILS = [
  { label: 'Location',     value: 'Germany' },
  { label: 'Education',    value: 'IESEG + LISAA Paris' },
  { label: 'Languages',    value: 'English · German · French · Hindi · Gujarati' },
  { label: 'Availability', value: 'Open to Europe-wide roles' },
];

const EXPERTISE_CARDS = [
  {
    label:  'Operations & Business Development',
    color:  'var(--navy)',
    hex:    '#1B2B4A',
    role:   'Partnerships Intern · Naboo',
    period: '2025 — Present',
    desc:   'Directing partner relationships and hospitality networks across European markets, structuring quotation workflows, establishing quality standards, and coordinating with key accounts to improve conversion rates.',
    tags:   ['Power BI', 'KPI Dashboarding', 'B2B CRM', 'Partner Onboarding', 'Lean Ops'],
  },
  {
    label:  'Interior Architecture & Design',
    color:  'var(--terra)',
    hex:    '#B8724A',
    role:   'Architecture Intern · Jignesh Parekh Architects',
    period: '2022 · Mumbai',
    desc:   'Developed spatial layouts, material specifications, and comparative market analysis for commercial interior spaces. Assisted in designing client presentations and architectural visualisations for project approvals.',
    tags:   ['Space Planning', 'Material Research', '3D Modelling', 'Client Presentations'],
  },
];

export default function About() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const wh   = window.innerHeight;
      const start = wh * 0.85;
      const end   = -rect.height * 0.3;
      const raw   = (start - rect.top) / (start - end);
      setProgress(Math.min(Math.max(raw, 0), 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const revealedChars = Math.floor(FULL_TEXT.length * progress);

  return (
    <ArchPanel id="about">
      <div className="container">

        {/* Section header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap',
          gap: '2rem', marginBottom: '5.5rem',
        }}>
          <div>
            <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>01 — About</p>
            <h2 className="heading-lg" style={{ color: 'var(--text-dark)' }}>
              Where business<br />meets design
            </h2>
          </div>

          {/* Quick facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem 3rem' }}>
            {DETAILS.map(d => (
              <div key={d.label}>
                <p className="overline" style={{ color: 'var(--text-muted)', marginBottom: '0.25rem', fontSize: '0.62rem' }}>{d.label}</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-dark)' }}>{d.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll-reveal paragraph */}
        <div ref={containerRef} style={{ maxWidth: 900, marginBottom: '5.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
            fontWeight: 300, lineHeight: 1.75,
            letterSpacing: '-0.01em',
          }}>
            {(() => {
              let charIdx = 0;
              return SEGMENTS.map((seg, si) =>
                seg.text.split('').map((ch, ci) => {
                  const idx       = charIdx++;
                  const visible   = idx <= revealedChars;
                  const color     = visible
                    ? seg.highlight === 'navy'  ? 'var(--navy)'
                    : seg.highlight === 'terra' ? 'var(--terra)'
                    : 'var(--text-dark)'
                    : 'rgba(26,25,23,0.13)';
                  return (
                    <span
                      key={`${si}-${ci}`}
                      style={{
                        color,
                        fontStyle: seg.highlight && visible ? 'italic' : 'normal',
                        transition: 'color 0.3s ease',
                      }}
                    >{ch}</span>
                  );
                })
              );
            })()}
          </p>
        </div>

        {/* Dual expertise cards */}
        <div className="about-cards">
          {EXPERTISE_CARDS.map((c, i) => (
            <div key={i} className="about-card" style={{ borderTop: `3px solid ${c.color}` }}>
              <p className="overline" style={{ color: c.color, marginBottom: '0.45rem' }}>{c.label}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
                {c.role} · {c.period}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {c.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {c.tags.map(t => (
                  <span key={t} style={{
                    display: 'inline-block', padding: '0.28rem 0.8rem',
                    border: `1px solid ${c.hex}30`, borderRadius: 100,
                    fontSize: '0.76rem', fontWeight: 500, color: c.color,
                    background: `${c.hex}08`, letterSpacing: '0.03em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </ArchPanel>
  );
}
