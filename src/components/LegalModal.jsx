import React from 'react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem', overflowY: 'auto',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#111110', color: '#F0EDE8',
          borderRadius: 24, maxWidth: 680, width: '100%',
          maxHeight: '85vh', overflowY: 'auto',
          border: '1px solid rgba(255,255,255,0.09)',
          padding: '3rem',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff', borderRadius: '50%', width: 36, height: 36,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          fontSize: '1.1rem', fontWeight: 300,
        }}>×</button>

        {/* Header */}
        <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>
          {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: '#fff', marginBottom: '0.5rem' }}>
          {isPrivacy ? 'How your information is handled' : 'Terms & conditions of use'}
        </h2>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem' }}>
          Last updated: June 2025 · Pankti Patel Portfolio
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {isPrivacy ? (
            <>
              <Section title="1. Information Collected">
                This portfolio website does not automatically collect personal data. If you use the contact form, the information you provide — including your name, email address, and message — is used solely to respond to your enquiry. No data is stored on external servers through this form.
              </Section>
              <Section title="2. Cookies & Tracking">
                This site does not use third-party tracking cookies, advertising pixels, or analytics platforms that collect identifiable user data. Basic browser behaviour (such as font loading from Google Fonts) may result in incidental data transfer to Google's servers, subject to Google's own privacy policy.
              </Section>
              <Section title="3. Data Usage">
                Any personal information you voluntarily submit via the contact form is used exclusively to reply to your enquiry. Your data will not be sold, rented, or shared with any third party.
              </Section>
              <Section title="4. Data Retention">
                Contact enquiry data is retained only for the duration necessary to respond and is not stored in a permanent database.
              </Section>
              <Section title="5. Your Rights">
                You have the right to request deletion of any personal data submitted through this site. To exercise this right, contact: panktipatel23@gmail.com.
              </Section>
              <Section title="6. Contact">
                For any privacy-related questions, email panktipatel23@gmail.com.
              </Section>
            </>
          ) : (
            <>
              <Section title="1. Purpose of this Website">
                This website is the personal portfolio of Pankti Patel, created to present her professional experience, skills, and projects. It is intended for informational purposes only.
              </Section>
              <Section title="2. Intellectual Property">
                All content on this site — including text, imagery, and design — is the property of Pankti Patel unless otherwise credited. You may not reproduce, copy, or redistribute any content without express permission.
              </Section>
              <Section title="3. Accuracy of Information">
                While every effort is made to ensure the accuracy of information presented, the content reflects the portfolio owner's personal experience and professional background. No guarantees are made regarding completeness or absolute accuracy.
              </Section>
              <Section title="4. External Links">
                This site may contain links to external websites (e.g., LinkedIn). Pankti Patel is not responsible for the content, privacy practices, or terms of those external sites.
              </Section>
              <Section title="5. Limitation of Liability">
                This portfolio website is provided in good faith. Pankti Patel accepts no liability for any loss or damage arising from use of this site or reliance on its content.
              </Section>
              <Section title="6. Changes to These Terms">
                These terms may be updated without prior notice. Continued use of the site implies acceptance of any updated terms.
              </Section>
              <Section title="7. Contact">
                For any questions regarding these terms, contact: panktipatel23@gmail.com.
              </Section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '0.6rem' }}>{title}</p>
      <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85 }}>{children}</p>
    </div>
  );
}
