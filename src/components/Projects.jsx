import React, { useState } from 'react';
import ArchPanel from './ArchPanel';

const PROJECTS = [
  {
    id: 1,
    year: '2025',
    category: 'SaaS · Operations',
    title: 'Partner Onboarding Optimisation at Naboo',
    client: 'Naboo, Germany',
    image: '/project_saas.png',
    color: 'var(--navy)',
    hex: '#1B2B4A',
    desc: 'Restructured the end-to-end venue and service-provider onboarding pipeline at Naboo — eliminating manual bottlenecks, establishing team-wide SLA standards, and improving B2B conversion rates across European markets.',
    challenge: 'When I stepped into the partner management role, onboarding was handled in a fragmented way — each regional specialist using their own tools and processes. This created structural gaps: delayed response times with hotels, workspaces, and service providers, which caused prospective B2B clients to lose momentum. The core challenge was building a system robust enough to govern partnerships across several European markets, yet flexible enough to respect local hospitality practices.',
    approach: 'I collaborated directly with partners and Key Account Managers to map the entire lifecycle from first contact to account activation. By analysing operational data, I located the exact points where documents and quotes stalled. I designed a centralised partner activation tracker, introduced a clear SLA framework, and co-created user-friendly operational playbooks with the team. Training sessions ensured smooth adoption without disrupting ongoing operations.',
    impact: [
      'Redesigned onboarding playbooks that accelerated partner activation and simplified cross-regional communication.',
      'Aligned the team to sustain sub-24-hour response rates across all incoming client requests.',
      'Partnered with Key Account Managers to improve client conversion metrics through faster quotation turnaround.',
      'Ensured near-perfect accuracy in commercial quotation processing and pipeline tracking.',
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
    hex: '#B8724A',
    desc: 'Developed spatial layouts, competitor analysis reports, and visual material boards for three live commercial interior design projects — from initial research briefing through to client-ready design presentations.',
    challenge: `Commercial spaces must balance aesthetic appeal with operational demands: high foot traffic, strict accessibility standards, tight material budgets, and the client's distinct brand identity. Translating those competing constraints into a coherent, workable spatial concept — while keeping client expectations aligned throughout — was the central design challenge.`,
    approach: 'I initiated deep-dive market research and competitor benchmarking to understand contemporary spatial trends. Working alongside senior designers, I translated those insights into functional space plans. I curated material palettes that matched client budgets while maintaining visual quality, and built detailed 3D models in SketchUp and AutoCAD — giving clients an immersive walkthrough before construction began.',
    impact: [
      'Co-developed commercial layout pitches that successfully secured client buy-in and project approvals.',
      'Synthesised complex operational flows with high-end aesthetic design, ensuring optimal mobility for both staff and customers.',
      'Produced complete, budget-conscious material specifications and immersive 3D walkthroughs that aligned client expectations with builders.',
    ],
    tags: ['Space Planning', 'Interior Architecture', 'Material Research', 'Client Presentations', '3D Modelling'],
  },
];

/* ---- Project card ---- */
function ProjectCard({ project, flip, expanded, onToggle }) {
  const isOpen = expanded === project.id;
  const gridCls = flip ? 'proj-grid-b' : 'proj-grid-a';

  const contentPanel = (
    <div style={{
      padding: '3rem 2.75rem',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem',
      background: flip ? `${project.hex}07` : 'transparent',
    }}>
      <div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          {project.year} · {project.client}
        </p>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
          fontWeight: 400, color: 'var(--text-dark)',
          lineHeight: 1.3, marginBottom: '1rem',
        }}>{project.title}</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.85 }}>{project.desc}</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {project.tags.map(t => (
          <span key={t} style={{
            display: 'inline-block', padding: '0.28rem 0.78rem',
            border: `1px solid ${project.hex}30`, borderRadius: 100,
            fontSize: '0.73rem', fontWeight: 500, color: project.hex,
            background: `${project.hex}08`,
          }}>{t}</span>
        ))}
      </div>

      <button onClick={onToggle} style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        background: isOpen ? project.hex : 'transparent',
        border: `1.5px solid ${project.hex}`,
        borderRadius: 100, padding: '0.65rem 1.4rem',
        fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
        color: isOpen ? '#fff' : project.hex,
        cursor: 'pointer', transition: 'all 0.2s ease', width: 'fit-content',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        {isOpen ? 'Close case study' : 'Open case study'}
      </button>
    </div>
  );

  const imagePanel = (
    <div style={{ position: 'relative', minHeight: 420, overflow: 'hidden' }}>
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: flip ? 'bottom' : 'center',
          display: 'block',
          transition: 'transform 0.8s var(--ease-out-expo)',
        }}
        onMouseOver={e => e.target.style.transform = 'scale(1.04)'}
        onMouseOut={e  => e.target.style.transform = 'scale(1)'}
      />
      <span style={{
        position: 'absolute',
        top: '1.5rem', [flip ? 'right' : 'left']: '1.5rem',
        background: project.hex, color: '#fff',
        padding: '0.32rem 0.9rem', borderRadius: 100,
        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>{project.category}</span>
    </div>
  );

  return (
    <div style={{ borderRadius: 24, overflow: 'hidden', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
      <div className={gridCls}>
        {flip ? contentPanel : imagePanel}
        {flip ? imagePanel   : contentPanel}
      </div>
      {isOpen && <CaseStudy project={project} />}
    </div>
  );
}

/* ---- Case study expansion ---- */
function CaseStudy({ project }) {
  return (
    <div style={{
      padding: '3rem 2.75rem',
      borderTop: `2px solid ${project.hex}`,
      background: '#f7f5f2',
      animation: 'fadeSlide 0.35s ease',
    }}>
      <div className="case-grid">
        <div>
          <p className="overline" style={{ color: project.hex, marginBottom: '0.75rem' }}>The Challenge</p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.85 }}>{project.challenge}</p>
        </div>
        <div>
          <p className="overline" style={{ color: project.hex, marginBottom: '0.75rem' }}>The Approach</p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.85 }}>{project.approach}</p>
        </div>
        <div>
          <p className="overline" style={{ color: project.hex, marginBottom: '0.75rem' }}>Key Outcomes</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.impact.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: project.hex, flexShrink: 0, marginTop: '0.52rem' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---- Section ---- */
export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  return (
    <ArchPanel id="projects">
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>05 — Projects</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-dark)' }}>
            Selected work,<br /><em>in detail</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <ProjectCard project={PROJECTS[0]} flip={false} expanded={expanded} onToggle={() => toggle(1)} />
          <ProjectCard project={PROJECTS[1]} flip={true}  expanded={expanded} onToggle={() => toggle(2)} />
        </div>

      </div>
    </ArchPanel>
  );
}
