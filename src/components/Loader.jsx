import { useEffect, useState } from 'react';

const loaderStyle = {
  position: 'fixed',
  inset: 0,
  background: '#F7F3EE',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '24px',
  transition: 'opacity 0.6s ease',
};

const wordmarkStyle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '1.6rem',
  fontWeight: '400',
  letterSpacing: '6px',
  textTransform: 'uppercase',
  color: '#3D2E22',
};

const lineContainerStyle = {
  width: '80px',
  height: '1px',
  background: '#E8DDD0',
  position: 'relative',
  overflow: 'hidden',
};

export default function Loader() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setMounted(false), 2200);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <div style={loaderStyle} aria-label="Loading Premio Homes">
      <span style={wordmarkStyle}>Premio Homes</span>
      <div style={lineContainerStyle}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#C9A96E',
            animation: 'loaderLine 1.8s ease forwards',
          }}
        />
      </div>
      <style>{`
        @keyframes loaderLine {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
