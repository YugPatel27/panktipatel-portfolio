import React, { useEffect, useRef, useState } from 'react';

export default function SectionPanel({ id, children, style }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Trigger animation once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Animates slightly before entering the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-panel ${inView ? 'in-view' : ''}`}
      style={style}
    >
      {children}
    </section>
  );
}
