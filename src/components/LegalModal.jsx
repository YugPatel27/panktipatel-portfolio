import React from 'react';

const legalContent = {
  privacy: {
    badge: 'Privacy Policy',
    title: 'How your information is handled',
    updated: 'Last updated: June 2025 · Pankti Patel Portfolio',
    sections: [
      {
        title: '1. Information Collected',
        body:
          'This portfolio website does not automatically collect personal data. If you use the contact form, the information you provide — your name, email address, and message — is used solely to respond to your enquiry. No data is stored on external servers through this form.',
      },
      {
        title: '2. Cookies & Tracking',
        body:
          'This site does not use third-party tracking cookies, advertising pixels, or analytics platforms that collect identifiable user data. Basic browser behaviour (such as font loading from Google Fonts) may result in incidental data transfer to Google’s servers, subject to Google’s own privacy policy.',
      },
      {
        title: '3. Data Usage',
        body:
          'Any personal information voluntarily submitted via the contact form is used exclusively to reply to your enquiry. Your data will not be sold, rented, or shared with any third party.',
      },
      {
        title: '4. Data Retention',
        body:
          'Contact enquiry data is retained only for the duration necessary to respond and is not stored in a permanent database.',
      },
      {
        title: '5. Your Rights',
        body:
          'You have the right to request deletion of any personal data submitted through this site. To exercise this right, contact: panktipatel23@gmail.com.',
      },
      {
        title: '6. Contact',
        body: 'For any privacy-related questions, email panktipatel23@gmail.com.',
      },
    ],
  },
  terms: {
    badge: 'Terms of Use',
    title: 'Terms & conditions of use',
    updated: 'Last updated: June 2025 · Pankti Patel Portfolio',
    sections: [
      {
        title: '1. Purpose of this Website',
        body:
          'This website is the personal portfolio of Pankti Patel, created to present her professional experience, skills, and projects. It is intended for informational purposes only.',
      },
      {
        title: '2. Intellectual Property',
        body:
          'All content on this site — including text, imagery, and design — is the property of Pankti Patel unless otherwise credited. You may not reproduce, copy, or redistribute any content without express permission.',
      },
      {
        title: '3. Accuracy of Information',
        body:
          'While every effort is made to ensure accuracy, the content reflects the portfolio owner’s personal experience and professional background. No guarantees are made regarding completeness or absolute accuracy.',
      },
      {
        title: '4. External Links',
        body:
          'This site may contain links to external websites (e.g., LinkedIn). Pankti Patel is not responsible for the content, privacy practices, or terms of those external sites.',
      },
      {
        title: '5. Limitation of Liability',
        body:
          'This portfolio is provided in good faith. Pankti Patel accepts no liability for any loss or damage arising from use of this site or reliance on its content.',
      },
      {
        title: '6. Changes to These Terms',
        body:
          'These terms may be updated without prior notice. Continued use of the site implies acceptance of any updated terms.',
      },
      {
        title: '7. Contact',
        body: 'For any questions regarding these terms, contact: panktipatel23@gmail.com.',
      },
    ],
  },
};

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3
        style={{
          fontSize: '0.95rem',
          fontWeight: 600,
          color: '#fff',
          margin: '0 0 0.5rem',
          letterSpacing: '0.01em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.92rem',
          lineHeight: 1.75,
          color: 'rgba(255,255,255,0.75)',
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

export default function LegalModal({ type, onClose }) {
  if (!type || !legalContent[type]) return null;

  const { badge, title, updated, sections } = legalContent[type];
  const modalId = `legal-modal-${type}`;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${modalId}-title`}
        aria-describedby={`${modalId}-description`}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 680,
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: '3rem',
          borderRadius: 24,
          background: '#111110',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.06)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            lineHeight: 1,
          }}
        >
          ×
        </button>

        <p
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--terra)',
            margin: '0 0 0.75rem',
          }}
        >
          {badge}
        </p>

        <h2
          id={`${modalId}-title`}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            fontWeight: 300,
            color: '#fff',
            margin: '0 0 0.5rem',
          }}
        >
          {title}
        </h2>

        <p
          id={`${modalId}-description`}
          style={{
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.35)',
            margin: '0 0 2.5rem',
          }}
        >
          {updated}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {sections.map((section) => (
            <Section key={section.title} title={section.title}>
              {section.body}
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}