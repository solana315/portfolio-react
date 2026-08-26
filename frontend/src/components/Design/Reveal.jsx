// components/Design/Reveal.jsx
import React from 'react';
import useInView from '../../hooks/useInView';

/**
 * Envolve qualquer elemento do scrapbook e anima-o quando entra no ecrã.
 * variant controla o estilo de entrada: 'rotate-in', 'fade-up', 'pop'
 * delay (ms) permite desfasar vários elementos da mesma secção
 */
function Reveal({ children, variant = 'rotate-in', delay = 0, className = '' }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${isInView ? 'is-in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;