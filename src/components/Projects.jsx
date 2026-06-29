import React, { useState } from 'react';
import ArchPanel from './ArchPanel';

const projects = [
  {
    id: 1,
    year: '2025',
    category: 'SaaS · Operations',
    title: 'Partner Onboarding Optimisation at Naboo',
    client: 'Naboo, Paris',
    image: '/project_saas.png',
    color: 'var(--navy)',
    colorHex: '#1B2B4A',
    desc: 'Restructured the end-to-end venue and service-provider onboarding pipeline at Naboo — eliminating manual bottlenecks, setting team-wide SLA standards, and improving B2B conversion rates across European markets.',
    challenge: 'When I stepped into the partner management role, I noticed that our partner onboarding was handled in a highly fragmented manner. Each regional specialist worked with their own tools and processes, which created structural gaps. This led to delayed response times when working with hotels, workspaces, and service providers, which ultimately caused our prospective B2B clients to lose momentum. The main obstacle was building a system that was robust enough to govern partnerships across several European markets, yet flexible enough to respect local hospitality practices.',
    approach: 'To tackle this, I collaborated directly with our partners and key account managers. I mapped out the entire lifecycle from the first point of contact to final account activation. By analyzing operational data, I was able to locate exact bottlenecks where documents or quotes got stuck. I designed a centralized partner activation tracker and introduced a clear service-level agreement framework. Rather than forcing a rigid system, I worked with the team to co-create user-friendly operational playbooks and conducted training sessions to ensure smooth adoption.',
    impact: [
      'Redesigned onboarding playbooks that accelerated partner activation speeds and simplified communications.',
      'Successfully aligned the team to sustain a response rate under twenty-four hours across all client requests.',
      'Partnered with Key Account Managers to improve our client conversion metrics through faster quotation responses.',
      'Ensured near-perfect precision in commercial quotation processing and pipeline accuracy.',
    ],
    tags: ['Power BI', 'Process Mapping', 'B2B Operations', 'Partner Onboarding', 'SLA Frameworks'],
  },
  {
    id: 2,
    year: '2022',
    category: 'Architecture · Interior Design',
    title: 'Commercial Interior Design — Client Briefs',
    client: 'Jignesh Parekh Architects, Mumbai',
    image: '/project_arch.png',
    color: 'var(--terra)',
    colorHex: '#B8724A',
    desc: 'Developed spatial layouts, competitor analysis reports, and visual material boards for three live commercial interior design projects — from initial research briefing through to client-ready design presentations.',
    challenge: "During my design work at the architectural firm, we faced the complex task of creating commercial spaces that were not only aesthetically appealing but could also withstand high foot traffic and serve operational needs. The challenge was to balance the client's distinct branding and spatial expectations with strict municipal regulations, accessibility standards, and tight material budgets. We had to ensure that the layout accommodated both client comfort and employee workflow efficiency.",
    approach: 'I initiated deep-dive market research and competitor benchmarking to understand contemporary spatial trends in commercial layouts. Working alongside senior designers, I translated these insights into functional space plans. I curated tactile material palettes that matched client budgets while maintaining visual quality. I constructed detailed 3D models in SketchUp and AutoCAD, using these assets to guide clients through interactive walkthroughs so they could experience the environment before construction began.',
    impact: [
      'Co-developed commercial layout pitches that successfully secured client buy-in and project approvals.',
      'Synthesized complex operational flows with high-end aesthetic designs, ensuring optimal staff and customer mobility.',
      'Curated complete, budget-conscious material specifications and created immersive 3D walkthroughs that aligned client expectations with builders.',
    ],
    tags: ['Space Planning', 'Interior Architecture', 'Material Research', 'Client Presentations', '3D Modelling'],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <ArchPanel id="projects" style={{ backgroundColor: '#F0EDE8' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>05 — Projects</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-dark)' }}>
            Selected work,<br /><em>in detail</em>
          </h2>
        </div>

        {/* Project 1 — Big image LEFT, content RIGHT */}
        <div style={{ marginBottom: '3rem', borderRadius: 24, overflow: 'hidden', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }} className="proj-grid-a">
            {/* Image — large, left */}
            <div style={{ position: 'relative', minHeight: 420, overflow: 'hidden' }}>
              <img src={projects[0].image} alt={projects[0].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
                onMouseOver={e => e.target.style.transform = 'scale(1.04)'}
                onMouseOut={e => e.target.style.transform = 'scale(1)'}
              />
              {/* Category badge */}
              <span style={{
                position: 'absolute', top: '1.5rem', left: '1.5rem',
                background: projects[0].colorHex, color: '#fff',
                padding: '0.32rem 0.9rem', borderRadius: 100,
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{projects[0].category}</span>
            </div>

            {/* Content — right */}
            <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{projects[0].year} · {projects[0].client}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '1rem' }}>
                  {projects[0].title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{projects[0].desc}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {projects[0].tags.map(t => (
                  <span key={t} style={{
                    display: 'inline-block', padding: '0.28rem 0.78rem',
                    border: `1px solid ${projects[0].colorHex}30`, borderRadius: 100,
                    fontSize: '0.73rem', fontWeight: 500, color: projects[0].colorHex,
                    background: `${projects[0].colorHex}08`,
                  }}>{t}</span>
                ))}
              </div>

              <button onClick={() => setExpanded(expanded === 1 ? null : 1)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: expanded === 1 ? projects[0].colorHex : 'transparent',
                  border: `1px solid ${projects[0].colorHex}`,
                  borderRadius: 100, padding: '0.65rem 1.4rem',
                  fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: expanded === 1 ? '#fff' : projects[0].colorHex,
                  cursor: 'pointer', transition: 'all 0.2s', width: 'fit-content',
                }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  style={{ transform: expanded === 1 ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
                {expanded === 1 ? 'Close case study' : 'Open case study'}
              </button>
            </div>
          </div>

          {/* Expanded detail */}
          {expanded === 1 && (
            <CaseStudy project={projects[0]} />
          )}
        </div>

        {/* Project 2 — content LEFT, image RIGHT bottom-aligned */}
        <div style={{ borderRadius: 24, overflow: 'hidden', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }} className="proj-grid-b">
            {/* Content — left */}
            <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem', background: `${projects[1].colorHex}07` }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{projects[1].year} · {projects[1].client}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '1rem' }}>
                  {projects[1].title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{projects[1].desc}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {projects[1].tags.map(t => (
                  <span key={t} style={{
                    display: 'inline-block', padding: '0.28rem 0.78rem',
                    border: `1px solid ${projects[1].colorHex}30`, borderRadius: 100,
                    fontSize: '0.73rem', fontWeight: 500, color: projects[1].colorHex,
                    background: `${projects[1].colorHex}08`,
                  }}>{t}</span>
                ))}
              </div>

              <button onClick={() => setExpanded(expanded === 2 ? null : 2)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: expanded === 2 ? projects[1].colorHex : 'transparent',
                  border: `1px solid ${projects[1].colorHex}`,
                  borderRadius: 100, padding: '0.65rem 1.4rem',
                  fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: expanded === 2 ? '#fff' : projects[1].colorHex,
                  cursor: 'pointer', transition: 'all 0.2s', width: 'fit-content',
                }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  style={{ transform: expanded === 2 ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
                {expanded === 2 ? 'Close case study' : 'Open case study'}
              </button>
            </div>

            {/* Image — right, bottom-aligned */}
            <div style={{ position: 'relative', minHeight: 420, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
              <img src={projects[1].image} alt={projects[1].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom', display: 'block', transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
                onMouseOver={e => e.target.style.transform = 'scale(1.04)'}
                onMouseOut={e => e.target.style.transform = 'scale(1)'}
              />
              <span style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: projects[1].colorHex, color: '#fff',
                padding: '0.32rem 0.9rem', borderRadius: 100,
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{projects[1].category}</span>
            </div>
          </div>

          {expanded === 2 && (
            <CaseStudy project={projects[1]} />
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .proj-grid-a, .proj-grid-b { grid-template-columns: 1fr !important; }
        }
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </ArchPanel>
  );
}

function CaseStudy({ project }) {
  return (
    <div style={{
      padding: '2.5rem',
      borderTop: `2px solid ${project.colorHex}`,
      background: '#f7f5f2',
      animation: 'fadeSlide 0.35s ease',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }} className="case-grid">
        <div>
          <p className="overline" style={{ color: project.colorHex, marginBottom: '0.75rem' }}>The Challenge</p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{project.challenge}</p>
        </div>
        <div>
          <p className="overline" style={{ color: project.colorHex, marginBottom: '0.75rem' }}>The Approach</p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{project.approach}</p>
        </div>
        <div>
          <p className="overline" style={{ color: project.colorHex, marginBottom: '0.75rem' }}>Key Outcomes</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.impact.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: project.colorHex, flexShrink: 0, marginTop: '0.52rem' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .case-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
