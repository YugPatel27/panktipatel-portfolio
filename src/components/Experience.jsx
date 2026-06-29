import React, { useState, useEffect, useRef } from 'react';
import ArchPanel from './ArchPanel';

const tabs = [
  { id: 'all',    label: 'All' },
  { id: 'ops',    label: 'Operations & Business' },
  { id: 'design', label: 'Architecture & Design' },
];

const experiences = [
  {
    id: 1, cat: 'ops',
    period: 'Jun 2025 — Present',
    type: 'Work',
    role: 'Partnerships & Business Development Intern',
    company: 'Naboo', location: 'Germany',
    summary: 'Managing end-to-end venue and service-provider partnerships across European B2B markets, building the operational systems that power partner acquisition and retention.',
    bullets: [
      'Onboarded and managed 150+ venues and service providers across France, Germany, and wider Europe.',
      'Maintained partner response times under 24 hours — enforcing a strict SLA framework across the team.',
      'Processed 300+ partner quotations per month at high accuracy.',
      'Redesigned onboarding documentation, increasing partner activation speed.',
      'Coordinated tailored B2B offers with Key Account Managers, contributing to significant conversion uplift.',
      'Trained 20+ new interns and produced standardised onboarding playbooks used across the team.',
    ],
  },
  {
    id: 2, cat: 'ops',
    period: 'Aug 2023 — Dec 2024',
    type: 'Work',
    role: 'Social Media Marketing Manager',
    company: 'FrogPubs', location: 'Paris, France',
    summary: 'Planned and executed social media content strategies across Instagram and LinkedIn for a multi-location hospitality brand.',
    bullets: [
      'Grew digital engagement through consistent content scheduling and platform-specific format testing.',
      'Monitored campaign metrics using Meta Insights to inform content and posting cadence.',
      "Designed visuals and copy in Canva, aligned with the brand's voice and tone guidelines.",
    ],
  },
  {
    id: 3, cat: 'ops',
    period: 'Jul 2022 — Dec 2025',
    type: 'Work',
    role: 'Shift Manager',
    company: 'FrogPubs', location: 'Paris, France',
    summary: 'Led daily shift operations and team management in a high-volume hospitality environment over three years.',
    bullets: [
      'Supervised daily operations and scheduling for a team of 10+ employees.',
      'Introduced service process changes that measurably increased team productivity.',
      'Reduced material waste through improved inventory tracking and ordering systems.',
      'Cut new-hire onboarding time by introducing role-specific training documentation.',
    ],
  },
  {
    id: 4, cat: 'design',
    period: 'Feb 2022 — Jul 2022',
    type: 'Work',
    role: 'Architecture Intern',
    company: 'Jignesh Parekh Architects', location: 'Mumbai, India',
    summary: 'Supported design development and client-facing presentations for commercial interior projects in Mumbai.',
    bullets: [
      'Assisted in drafting spatial layouts and design concept boards for 3 commercial interior projects.',
      'Conducted market research and competitor analysis to strengthen design proposals.',
      'Contributed to client pitch materials including mood boards, floor plans, and material palettes.',
    ],
  },
  {
    id: 5, cat: 'ops',
    period: 'May 2023 — Mar 2026',
    type: 'Education',
    role: "Master's in International Business",
    company: 'IESEG School of Management', location: 'Paris, France',
    summary: 'Advanced business curriculum with a focus on data-driven operations, global market strategy, and corporate finance.',
    bullets: [
      'Core modules: Data Analysis, Digital Transformation, Marketing Strategy, Corporate Finance.',
      'Capstone: KPI optimisation project for an international B2B client — improved operational throughput using Power BI and Lean process mapping.',
    ],
  },
  {
    id: 6, cat: 'design',
    period: 'Aug 2019 — Aug 2022',
    type: 'Education',
    role: "Bachelor's in Interior Architecture and Design",
    company: "L'Institut Supérieur des Arts et Appliqués (LISAA)", location: 'Paris, France',
    summary: 'Foundational training in spatial design, interior layout, and commercial concept development.',
    bullets: [
      'Developed skills in spatial planning, 3D modelling, material selection, and architectural drawing.',
      'Completed multiple commercial and residential interior design briefs for real clients.',
    ],
  },
];

function TimelineItem({ exp, isOpen, onToggle }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [dotGlow, setDotGlow] = useState(false);
  const dotColor = exp.cat === 'ops' ? 'var(--navy)' : 'var(--terra)';
  const dotHex   = exp.cat === 'ops' ? '#1B2B4A'    : '#B8724A';

  useEffect(() => {
    const cardObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    const dotObs = new IntersectionObserver(
      ([e]) => { setDotGlow(e.isIntersecting); },
      {
        threshold: 0.1,
        rootMargin: '-30% 0px -30% 0px' // Glows dynamically when scroll centers the item
      }
    );
    if (ref.current) {
      cardObs.observe(ref.current);
      dotObs.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        cardObs.unobserve(ref.current);
        dotObs.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', marginBottom: '2.5rem', display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
      {/* Timeline dot — visibly animates on scroll-in */}
      <div style={{
        position: 'relative',
        flexShrink: 0,
        marginTop: '1.2rem',
        zIndex: 2,
      }}>
        {/* Pulse ring */}
        <span style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: dotGlow ? 32 : 0,
          height: dotGlow ? 32 : 0,
          borderRadius: '50%',
          border: `1.5px solid ${dotHex}`,
          opacity: dotGlow ? 0 : 0,
          transition: 'width 0.5s ease, height 0.5s ease',
          animation: dotGlow ? 'dotPulse 2s 0.4s ease-out infinite' : 'none',
        }} />
        {/* Core dot */}
        <span style={{
          display: 'block',
          width: dotGlow ? 14 : 8,
          height: dotGlow ? 14 : 8,
          borderRadius: '50%',
          background: dotGlow ? dotHex : 'rgba(0,0,0,0.2)',
          border: `2.5px solid ${dotGlow ? dotHex : 'rgba(0,0,0,0.1)'}`,
          boxShadow: dotGlow ? `0 0 0 4px ${dotHex}22, 0 0 16px ${dotHex}44` : 'none',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }} />
      </div>

      {/* Card */}
      <div style={{
        flex: 1,
        background: '#fff',
        borderRadius: 18,
        border: `1px solid ${inView ? dotHex + '25' : 'rgba(0,0,0,0.06)'}`,
        borderTop: `3px solid ${inView ? dotColor : 'rgba(0,0,0,0.08)'}`,
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease, border-color 0.5s ease, transform 0.3s ease',
        transform: inView ? 'translateX(0)' : 'translateX(20px)',
        opacity: inView ? 1 : 0,
      }}
        onMouseOver={e => e.currentTarget.style.boxShadow = `0 16px 48px ${dotHex}18`}
        onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}
      >
        {/* Card header */}
        <div style={{ padding: '1.75rem 2rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{
                display: 'inline-block', padding: '0.22rem 0.75rem', borderRadius: 100,
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                background: dotHex + '12', color: dotHex, border: `1px solid ${dotHex}25`,
              }}>{exp.type}</span>
              <span style={{
                display: 'inline-block', padding: '0.22rem 0.75rem', borderRadius: 100,
                fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-muted)',
                background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)',
              }}>{exp.period}</span>
            </div>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
            fontWeight: 400,
            color: 'var(--text-dark)',
            lineHeight: 1.3,
            marginBottom: '0.3rem',
          }}>{exp.role}</h3>
          <p style={{ fontSize: '0.88rem', fontWeight: 600, color: dotColor, marginBottom: '0.75rem' }}>
            {exp.company}
            <span style={{ fontWeight: 400, color: 'var(--text-muted)', marginLeft: '0.4rem' }}>· {exp.location}</span>
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.75, paddingBottom: '1.25rem' }}>{exp.summary}</p>
        </div>

        {/* Toggle */}
        <button
          onClick={onToggle}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            width: '100%', padding: '0.85rem 2rem',
            background: isOpen ? dotHex + '08' : 'transparent',
            border: 'none', borderTop: '1px solid rgba(0,0,0,0.05)',
            fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: dotColor, cursor: 'pointer', textAlign: 'left',
            transition: 'background 0.2s',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease', flexShrink: 0 }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
          {isOpen ? 'Hide details' : 'See full details'}
        </button>

        {/* Bullets */}
        {isOpen && (
          <div style={{ padding: '1.5rem 2rem 2rem', background: dotHex + '04', animation: 'fadeSlide 0.3s ease', borderTop: `1px solid ${dotHex}15` }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotHex, flexShrink: 0, marginTop: '0.56rem', opacity: 0.7 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filtered = experiences.filter(e =>
    active === 'all' ? true :
    active === 'ops' ? e.cat === 'ops' : e.cat === 'design'
  );

  return (
    <ArchPanel id="experience" style={{ backgroundColor: '#F0EDE8' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>03 — Experience</p>
            <h2 className="heading-lg" style={{ color: 'var(--text-dark)' }}>
              My journey,<br /><em>step by step</em>
            </h2>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.06)', borderRadius: 100, padding: '0.25rem', gap: '0.15rem' }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)} style={{
                padding: '0.55rem 1.2rem', borderRadius: 100, border: 'none',
                fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer',
                transition: 'all 0.2s',
                background: active === t.id ? (t.id === 'design' ? 'var(--terra)' : t.id === 'ops' ? 'var(--navy)' : 'var(--text-dark)') : 'transparent',
                color: active === t.id ? '#fff' : 'var(--text-mid)',
              }}>{t.label}</button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ paddingLeft: '0.5rem' }}>
          {/* Vertical line */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 6, top: 16, bottom: 0,
              width: 1, background: 'linear-gradient(to bottom, var(--terra), var(--navy) 60%, rgba(0,0,0,0.06))',
              opacity: 0.25,
            }} />
            {filtered.map(exp => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                isOpen={expanded === exp.id}
                onToggle={() => setExpanded(expanded === exp.id ? null : exp.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotPulse {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.6; }
          70%  { transform: translate(-50%,-50%) scale(1.8); opacity: 0; }
          100% { transform: translate(-50%,-50%) scale(1.8); opacity: 0; }
        }
      `}</style>
    </ArchPanel>
  );
}
