import React, { useState } from 'react';

const EMAIL = 'panktipatel23@gmail.com';

const INPUT_BASE = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 10,
  padding: '0.9rem 1.1rem',
  fontSize: '0.9rem',
  color: '#fff',
  outline: 'none',
  fontFamily: 'var(--font-sans)',
  transition: 'border-color 0.2s ease, background 0.2s ease',
};

const LABEL_STYLE = {
  display: 'block',
  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
  textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
  marginBottom: '0.5rem',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim())                                        errors.name    = 'Name is required';
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errors.email   = 'Valid email required';
  if (!form.message.trim())                                     errors.message = 'Message is required';
  return errors;
}

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', message: '' });
  const [errors,  setErrors]  = useState({});
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const v = validate(form);
    if (Object.keys(v).length) { setErrors(v); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  const focusField  = e => e.target.style.borderColor = 'rgba(255,255,255,0.35)';
  const blurField   = (e, name) => {
    e.target.style.borderColor = errors[name] ? 'var(--terra)' : 'rgba(255,255,255,0.12)';
  };

  return (
    <section id="contact" style={{ padding: '2rem 1.5rem', background: 'var(--black)' }}>
      <div style={{
        background: '#0e0e0c',
        borderRadius: 40,
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
      }}>

        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(to right, var(--terra), var(--navy))',
          borderRadius: '40px 40px 0 0',
        }} />

        {/* Ambient glow orb */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,114,74,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          <div className="contact-grid">

            {/* Left — info */}
            <div>
              <p className="overline" style={{ color: 'var(--terra)', marginBottom: '0.75rem' }}>06 — Contact</p>
              <h2 className="heading-lg" style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
                Let's work<br /><em>together</em>
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: '3rem' }}>
                Whether you have a partnership opportunity, a business development role, or a design project in mind — I'd love to hear from you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <p style={{ ...LABEL_STYLE, marginBottom: '0.4rem' }}>Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    style={{ color: 'var(--white)', fontWeight: 500, fontSize: '0.9rem' }}
                    onMouseOver={e => e.target.style.color = 'var(--terra)'}
                    onMouseOut={e  => e.target.style.color = 'var(--white)'}
                  >
                    {EMAIL}
                  </a>
                </div>

                <div>
                  <p style={{ ...LABEL_STYLE, marginBottom: '0.4rem' }}>LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/panktipatel23"
                    target="_blank" rel="noreferrer"
                    style={{
                      color: 'var(--white)', fontWeight: 500, fontSize: '0.9rem',
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseOver={e => e.currentTarget.style.color = 'var(--terra)'}
                    onMouseOut={e  => e.currentTarget.style.color = 'var(--white)'}
                  >
                    linkedin.com/in/panktipatel23
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                </div>

                <div>
                  <p style={{ ...LABEL_STYLE, marginBottom: '0.4rem' }}>Based in</p>
                  <p style={{ color: 'var(--white)', fontWeight: 500, fontSize: '0.9rem' }}>
                    Germany · Open to Europe-wide roles
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: '2.75rem',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
              }}
            >
              {/* Name */}
              <div>
                <label style={LABEL_STYLE}>Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  style={{ ...INPUT_BASE, borderColor: errors.name ? 'var(--terra)' : 'rgba(255,255,255,0.12)' }}
                  onFocus={focusField}
                  onBlur={e => blurField(e, 'name')}
                />
                {errors.name && <p style={{ color: 'var(--terra)', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label style={LABEL_STYLE}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  style={{ ...INPUT_BASE, borderColor: errors.email ? 'var(--terra)' : 'rgba(255,255,255,0.12)' }}
                  onFocus={focusField}
                  onBlur={e => blurField(e, 'email')}
                />
                {errors.email && <p style={{ color: 'var(--terra)', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label style={LABEL_STYLE}>Your Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Pankti, I'd love to discuss..."
                  style={{ ...INPUT_BASE, borderColor: errors.message ? 'var(--terra)' : 'rgba(255,255,255,0.12)', resize: 'vertical' }}
                  onFocus={focusField}
                  onBlur={e => blurField(e, 'message')}
                />
                {errors.message && <p style={{ color: 'var(--terra)', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  background: 'var(--white)', color: 'var(--text-dark)',
                  border: 'none', borderRadius: 10, padding: '1rem',
                  fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.04em',
                  cursor: sending ? 'not-allowed' : 'pointer',
                  opacity: sending ? 0.7 : 1,
                  transition: 'background 0.2s ease, transform 0.2s ease',
                }}
                onMouseOver={e => !sending && (e.currentTarget.style.background = 'var(--panel-alt)')}
                onMouseOut={e  => e.currentTarget.style.background = 'var(--white)'}
              >
                {sending ? 'Sending…' : 'Send Message'}
                {!sending && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                )}
              </button>

              {/* Success */}
              {sent && (
                <div style={{
                  background: 'rgba(74,222,128,0.08)',
                  border: '1px solid rgba(74,222,128,0.2)',
                  borderRadius: 10, padding: '1rem', textAlign: 'center',
                  color: '#4ade80', fontSize: '0.88rem', fontWeight: 500,
                }}>
                  ✓ Message sent — I'll be in touch shortly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(to right, var(--navy), var(--terra))',
          borderRadius: '0 0 40px 40px',
        }} />
      </div>
    </section>
  );
}
