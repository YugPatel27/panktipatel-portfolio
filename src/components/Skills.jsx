import React from 'react';
import ArchPanel from './ArchPanel';

const GROUPS = [
  {
    area:    'Operations & Partnerships',
    number:  '01',
    color:   'var(--navy)',
    hex:     '#1B2B4A',
    colorDim: 'rgba(27,43,74,0.08)',
    desc:    'End-to-end B2B partner lifecycle: onboarding, relationship management, SLA enforcement, and commercial conversion support.',
    skills:  ['Partner Onboarding', 'B2B Account Management', 'KPI & SLA Monitoring', 'Workflow Documentation', 'Commercial Negotiation', 'CRM Operations', 'Training & Playbooks'],
    tools:   ['Power BI', 'Salesforce', 'Notion', 'HubSpot', 'Excel'],
    toolBg:    '#0b1626',
    toolBorder: 'rgba(27,43,74,0.45)',
    toolColor:  '#9bb3df',
  },
  {
    area:    'Data & Analytics',
    number:  '02',
    color:   'var(--gold)',
    hex:     '#C9AA71',
    colorDim: 'rgba(201,170,113,0.08)',
    desc:    'Turning operational data into structured dashboards, performance reports, and process improvements.',
    skills:  ['Power BI Dashboarding', 'KPI Reporting', 'Meta Insights', 'Lean Process Mapping', 'Performance Tracking', 'Canva & Visual Design'],
    tools:   ['Power BI', 'Meta Insights', 'Google Analytics', 'Excel', 'Canva'],
    toolBg:    '#211c13',
    toolBorder: 'rgba(201,170,113,0.35)',
    toolColor:  '#f3e1c3',
  },
  {
    area:    'Architecture & Design',
    number:  '03',
    color:   'var(--terra)',
    hex:     '#B8724A',
    colorDim: 'rgba(184,114,74,0.08)',
    desc:    'Interior design fundamentals applied to real commercial briefs — spatial planning, material research, and client concept presentations.',
    skills:  ['Space Planning', 'Interior Layout Design', 'Material Selection', '3D Modelling', 'Competitor Research', 'Client Presentations', 'Mood Boards'],
    tools:   ['AutoCAD', 'SketchUp', 'Adobe Suite', 'Figma', 'Miro'],
    toolBg:    '#241913',
    toolBorder: 'rgba(184,114,74,0.35)',
    toolColor:  '#f7c5ab',
  },
];

export default function Skills() {
  return (
    <ArchPanel id="skills" dark>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>04 — Expertise</p>
          <h2 className="heading-lg" style={{ color: 'var(--white)', maxWidth: 620 }}>
            Two disciplines,<br /><em>one perspective</em>
          </h2>
        </div>

        {/* Skill cards */}
        <div className="skills-grid">
          {GROUPS.map((g, i) => (
            <div key={i} style={{
              background: '#121214',
              border: '1px solid rgba(255,255,255,0.06)',
              borderTop: `2.5px solid ${g.color}`,
              borderRadius: 24, padding: '2.5rem',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
              onMouseOver={e => {
                e.currentTarget.style.background    = '#161619';
                e.currentTarget.style.borderColor   = 'rgba(255,255,255,0.12)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background    = '#121214';
                e.currentTarget.style.borderColor   = 'rgba(255,255,255,0.06)';
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', position: 'relative' }}>
                <p className="overline" style={{ color: g.color, margin: 0, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.68rem' }}>
                  {g.area}
                </p>
                <span style={{
                  fontFamily: 'var(--font-serif)', fontSize: '3.5rem', fontWeight: 300,
                  color: g.colorDim,
                  lineHeight: 1, position: 'absolute', right: 0, top: '-1rem', pointerEvents: 'none',
                }}>{g.number}</span>
              </div>

              <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, marginBottom: '2rem' }}>
                {g.desc}
              </p>

              {/* Skill chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {g.skills.map(s => (
                  <span key={s} className="skill-chip"
                    onMouseOver={e => { e.target.style.background = g.color; e.target.style.borderColor = g.color; }}
                    onMouseOut={e  => { e.target.style.background = '#090a0d'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  >{s}</span>
                ))}
              </div>

              {/* Tool tags */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
                <p style={{
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem',
                }}>Tools</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {g.tools.map(t => (
                    <span key={t} className="tool-chip" style={{
                      border: `1px solid ${g.toolBorder}`,
                      color: g.toolColor,
                      background: g.toolBg,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </ArchPanel>
  );
}
