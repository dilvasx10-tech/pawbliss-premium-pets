import { useState, useEffect } from 'react';

const getEndOfDay = () => {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return end.getTime();
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, getEndOfDay() - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 my-3">
      <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#C8714A' }}>
        OFFER ENDS IN:
      </span>
      <div className="flex gap-1">
        {[
          { val: timeLeft.hours, label: 'HRS' },
          { val: timeLeft.minutes, label: 'MIN' },
          { val: timeLeft.seconds, label: 'SEC' },
        ].map((t, i) => (
          <div key={t.label} className="flex items-center gap-1">
            <div className="rounded-md px-2 py-1 text-center min-w-[36px]" style={{ backgroundColor: '#2D4A3E' }}>
              <span className="text-sm font-bold font-mono" style={{ color: '#FAFAF7' }}>{pad(t.val)}</span>
            </div>
            {i < 2 && <span className="text-sm font-bold" style={{ color: '#2D4A3E' }}>:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
