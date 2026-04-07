import React, { useState, useEffect } from 'react';

const Timer = () => {
  // Set target date 3 days from first load using localStorage
  const [targetDate] = useState(() => {
    const savedDate = localStorage.getItem('timerTarget');
    if (savedDate) return new Date(savedDate);
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 3);
    localStorage.setItem('timerTarget', newDate.toISOString());
    return newDate;
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  // Basic styling for the timer page
  const timerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: '"Inter", "Roboto", "Segoe UI", sans-serif',
    margin: 0,
    padding: '1rem',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99999
  };

  const brandStyle = {
    fontSize: 'clamp(1.5rem, 8vw, 4rem)',
    marginBottom: '0.5rem',
    fontWeight: '800',
    letterSpacing: '3px',
    color: '#d4af37',
    textTransform: 'uppercase',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    marginBottom: 'clamp(1.5rem, 5vw, 3rem)',
    fontWeight: '400',
    letterSpacing: 'clamp(2px, 1vw, 5px)',
    color: '#aaa',
    textAlign: 'center'
  };

  const countdownStyle = {
    display: 'flex',
    gap: 'clamp(0.5rem, 3vw, 1.5rem)',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const unitStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#1a1a1a',
    padding: 'clamp(0.75rem, 3vw, 1.5rem)',
    borderRadius: '12px',
    minWidth: 'clamp(70px, 20vw, 100px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    border: '1px solid #333'
  };

  const numberStyle = {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: 'bold',
    color: '#d4af37' // gold color used in luxury real estate often
  };

  const labelStyle = {
    fontSize: 'clamp(0.6rem, 2vw, 0.875rem)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#888',
    marginTop: '0.5rem'
  };

  return (
    <div style={timerStyle}>
      <h1 style={brandStyle}>Premiohomes</h1>
      <h2 style={titleStyle}>COMING SOON</h2>
      <div style={countdownStyle}>
        <div style={unitStyle}>
          <span style={numberStyle}>{String(timeLeft.days).padStart(2, '0')}</span>
          <span style={labelStyle}>Days</span>
        </div>
        <div style={unitStyle}>
          <span style={numberStyle}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span style={labelStyle}>Hours</span>
        </div>
        <div style={unitStyle}>
          <span style={numberStyle}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span style={labelStyle}>Minutes</span>
        </div>
        <div style={unitStyle}>
          <span style={numberStyle}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span style={labelStyle}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
