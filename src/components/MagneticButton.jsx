import React, { useRef } from 'react';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  strength = 0.25,
  ...props
}) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    btnRef.current.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = 'translate3d(0px, 0px, 0)';
    btnRef.current.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleMouseEnter = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transition = 'none';
  };

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        target={target}
        rel={rel}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type="button"
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </button>
  );
}
