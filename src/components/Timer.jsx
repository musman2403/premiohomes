import { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 7,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let launchDate = localStorage.getItem('launchDate');
        if (!launchDate) {
            launchDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
            localStorage.setItem('launchDate', launchDate);
        } else {
            launchDate = parseInt(launchDate, 10);
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setIsActive(false);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // If timer expires, we return null to remove the overlay and show the real website
    if (!isActive) return null;

    return (
        <div className="launch-timer-overlay">
            <div className="timer-content container">
                <h1 className="timer-main-title">Premio Homes</h1>
                <h2 className="timer-subtitle">Website Launching In</h2>
                <div className="timer-watch-large">
                    <div className="time-block-large">
                        <span className="time-val-large">{timeLeft.days}</span>
                        <span className="time-label-large">Days</span>
                    </div>
                    <span className="time-sep">:</span>
                    <div className="time-block-large">
                        <span className="time-val-large">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="time-label-large">Hours</span>
                    </div>
                    <span className="time-sep">:</span>
                    <div className="time-block-large">
                        <span className="time-val-large">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="time-label-large">Mins</span>
                    </div>
                    <span className="time-sep">:</span>
                    <div className="time-block-large">
                        <span className="time-val-large">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="time-label-large">Secs</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
