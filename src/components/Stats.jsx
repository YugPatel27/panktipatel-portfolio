import React from 'react';
import ArchPanel from './ArchPanel';

const skillSets = [
  {
    area: 'Operations & Partnerships',
    color: 'var(--navy)', hex: '#1B2B4A',
    items: ['Partner Onboarding', 'B2B Account Management', 'SLA Monitoring', 'Commercial Negotiation', 'Workflow Documentation', 'CRM Operations', 'Training & Playbooks'],
  },
  {
    area: 'Data & Analytics',
    color: 'var(--gold)', hex: '#C9AA71',
    items: ['Power BI Dashboarding', 'KPI Reporting', 'Lean Process Mapping', 'Meta Insights', 'Performance Tracking', 'Canva & Visual Design'],
  },
  {
    area: 'Architecture & Design',
    color: 'var(--terra)', hex: '#B8724A',
    items: ['Space Planning', 'Interior Layout', 'Material Selection', '3D Modelling', 'Competitor Research', 'Client Presentations', 'Mood Boards'],
  },
];

const languages = [
  { lang: 'English',  level: 'Fluent — Professional',   flag: '🇬🇧', code: 'EN' },
  { lang: 'French',   level: 'Intermediate — B2',        flag: '🇫🇷', code: 'FR' },
  { lang: 'German',   level: 'Beginner — A1',            flag: '🇩🇪', code: 'DE' },
  { lang: 'Hindi',    level: 'Native',                   flag: '🇮🇳', code: 'HI' },
  { lang: 'Gujarati', level: 'Native',                   flag: '🇮🇳', code: 'GU' },
];

export default function Stats() {
  return (
    <ArchPanel id="stats" dark>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>02 — Capabilities</p>
          <h2 className="heading-lg" style={{ color: 'var(--white)' }}>
            Capabilities &<br /><em>Background</em>
          </h2>
        </div>

        {/* Skills — chip display, NO % anywhere */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="skills-chip-grid">
          {skillSets.map((g, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid rgba(255,255,255,0.12)`,
              borderTop: `2px solid ${g.color}`,
              borderRadius: 18, padding: '2rem',
              transition: 'background 0.3s',
            }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.055)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
            >
              <p className="overline" style={{ color: g.color === 'var(--navy)' ? '#9bb3df' : g.color, marginBottom: '1.25rem' }}>{g.area}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {g.items.map(s => (
                  <span key={s} style={{
                    display: 'inline-block',
                    padding: '0.3rem 0.85rem',
                    background: `${g.hex}22`,
                    border: `1px solid ${g.hex}45`,
                    borderRadius: 100,
                    fontSize: '0.76rem', fontWeight: 600,
                    color: '#FFFFFF', 
                    letterSpacing: '0.02em',
                    transition: 'background 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                    onMouseOver={e => { e.target.style.background = g.hex; e.target.style.color = '#fff'; }}
                    onMouseOut={e => { e.target.style.background = `${g.hex}22`; e.target.style.color = '#FFFFFF'; }}
                  >{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages — no % bars */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 18, padding: '2rem 2.5rem',
        }}>
          <p className="overline" style={{ color: 'var(--terra)', marginBottom: '1.5rem' }}>Languages</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }} className="lang-grid">
            {languages.map(l => (
              <div key={l.lang} style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{l.flag}</span>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 700, color: 'var(--terra)',
                    background: 'rgba(184, 114, 74, 0.12)', padding: '0.15rem 0.45rem',
                    borderRadius: 4, letterSpacing: '0.05em'
                  }}>{l.code}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.2rem' }}>
                  {l.lang}
                </p>
                <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{l.level}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) { .skills-chip-grid { grid-template-columns: 1fr 1fr !important; } .lang-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 560px) { .skills-chip-grid { grid-template-columns: 1fr !important; } .lang-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </ArchPanel>
  );
}
