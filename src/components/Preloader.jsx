import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader${done ? ' fade-out' : ''}`}>
      <div style={{ textAlign: 'center' }}>
        <p className="overline" style={{ color: 'var(--terra)', marginBottom: '1.25rem', letterSpacing: '0.25em' }}>
          Portfolio
        </p>
        <h1 className="preloader-name">Pankti Patel</h1>
        <div className="preloader-line" style={{ margin: '1.5rem auto 0' }} />
      </div>
    </div>
  );
}
