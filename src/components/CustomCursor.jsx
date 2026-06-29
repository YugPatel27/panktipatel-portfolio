import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    // Direct tracking for both — no lag
    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      // Dot: instant snap (no lag)
      if (dot.current) {
        dot.current.style.left = mx + 'px';
        dot.current.style.top = my + 'px';
      }
      // Ring: gentle lerp only (reduced from 0.1 to 0.18 for faster catch-up)
      rx = lerp(rx, mx, 0.18);
      ry = lerp(ry, my, 0.18);
      if (ring.current) {
        ring.current.style.left = rx + 'px';
        ring.current.style.top = ry + 'px';
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      isHovered.current = true;
      if (ring.current) {
        ring.current.style.width = '52px';
        ring.current.style.height = '52px';
        ring.current.style.borderColor = 'rgba(184,114,74,0.8)';
      }
      if (dot.current) dot.current.style.opacity = '0';
    };

    const onLeave = () => {
      isHovered.current = false;
      if (ring.current) {
        ring.current.style.width = '34px';
        ring.current.style.height = '34px';
        ring.current.style.borderColor = 'rgba(184,114,74,0.45)';
      }
      if (dot.current) dot.current.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove, { passive: true });

    // Apply hover to all interactive elements
    const applyHovers = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    applyHovers();

    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot — pinpoint, no lag */}
      <div ref={dot} style={{
        position: 'fixed',
        width: 7, height: 7,
        background: 'var(--terra)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        willChange: 'left, top',
        transition: 'opacity 0.15s ease',
      }} />
      {/* Ring — smooth lag */}
      <div ref={ring} style={{
        position: 'fixed',
        width: 34, height: 34,
        border: '1.5px solid rgba(184,114,74,0.45)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99998,
        transform: 'translate(-50%, -50%)',
        willChange: 'left, top, width, height',
        transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease',
      }} />
    </>
  );
}
