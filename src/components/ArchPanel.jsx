import React, { useEffect, useRef, useState } from 'react';

export default function ArchPanel({ id, dark = false, children, style = {} }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.04, rootMargin: '0px 0px -20px 0px' }
    );
    const el = ref.current;
    if (el) obs.observe(el);

    // Also trigger immediately if already in viewport on mount
    const check = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      }
    };
    // Small timeout to let layout settle
    const timer = setTimeout(check, 80);

    return () => {
      if (el) obs.unobserve(el);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${dark ? 'arch-panel-dark' : 'arch-panel'}${inView ? ' in-view' : ''}`}
      style={style}
    >
      {children}
    </section>
  );
}
