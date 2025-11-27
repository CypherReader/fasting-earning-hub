import { useEffect, useState } from "react";

export const FastingTimerVisual = () => {
  const targetHours = 18;
  const totalSeconds = targetHours * 60 * 60;
  
  // Simulate a fast in progress (start at ~16 hours in)
  const [elapsed, setElapsed] = useState(16 * 60 * 60 + 42 * 60 + 15);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => (prev + 1) % totalSeconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(elapsed / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const secs = elapsed % 60;
  
  const progress = (elapsed / totalSeconds) * 100;
  const circumference = 2 * Math.PI * 180;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Outer glow ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-[120px]" />
      
      {/* Timer circle - large, centered behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="500" height="500" className="transform -rotate-90 opacity-25">
          {/* Background circle track */}
          <circle
            cx="250"
            cy="250"
            r="180"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="4"
            opacity="0.4"
          />
          {/* Progress circle */}
          <circle
            cx="250"
            cy="250"
            r="180"
            fill="none"
            stroke="url(#timerGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
            style={{ filter: "drop-shadow(0 0 15px hsl(var(--primary)))" }}
          />
          <defs>
            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Timer display inside circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
          <div className="font-display text-7xl font-bold text-foreground tabular-nums tracking-tight">
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
              Fasting in Progress
            </span>
          </div>
        </div>
      </div>

      {/* Floating time labels */}
      <div className="absolute top-[12%] left-[15%] text-6xl font-display font-bold text-primary/8 animate-float">
        16h
      </div>
      <div className="absolute bottom-[20%] right-[12%] text-5xl font-display font-bold text-secondary/10 animate-float" style={{ animationDelay: "2s" }}>
        18h
      </div>
      <div className="absolute top-[20%] right-[18%] text-4xl font-display font-bold text-primary/6 animate-float" style={{ animationDelay: "4s" }}>
        24h
      </div>
      <div className="absolute bottom-[30%] left-[10%] text-3xl font-display font-bold text-secondary/8 animate-float" style={{ animationDelay: "3s" }}>
        12h
      </div>
    </div>
  );
};
