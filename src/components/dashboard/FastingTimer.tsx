import { motion } from 'framer-motion';
import { Flame, Zap, Sparkles, Utensils, Pause, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FastingPhase {
  id: string;
  name: string;
  icon: React.ElementType;
  startHour: number;
  endHour: number;
  color: string;
  bgColor: string;
  description: string;
}

const fastingPhases: FastingPhase[] = [
  {
    id: 'fed',
    name: 'Fed',
    icon: Utensils,
    startHour: 0,
    endHour: 4,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    description: 'Digesting food, insulin elevated',
  },
  {
    id: 'fat-burning',
    name: 'Fat Burning',
    icon: Flame,
    startHour: 4,
    endHour: 12,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    description: 'Glycogen depleting, fat burning begins',
  },
  {
    id: 'ketosis',
    name: 'Ketosis',
    icon: Zap,
    startHour: 12,
    endHour: 18,
    color: 'text-secondary',
    bgColor: 'bg-secondary/20',
    description: 'Full ketone production, mental clarity',
  },
  {
    id: 'autophagy',
    name: 'Autophagy',
    icon: Sparkles,
    startHour: 18,
    endHour: 24,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    description: 'Cellular cleanup and regeneration',
  },
];

interface FastingTimerProps {
  isActive: boolean;
  elapsedSeconds: number;
  targetHours: number;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

const FastingTimer = ({
  isActive,
  elapsedSeconds,
  targetHours,
  onStart,
  onPause,
  onStop,
}: FastingTimerProps) => {
  const elapsedHours = elapsedSeconds / 3600;
  const progress = Math.min((elapsedHours / targetHours) * 100, 100);
  
  // Find current phase
  const currentPhase = fastingPhases.find(
    (phase) => elapsedHours >= phase.startHour && elapsedHours < phase.endHour
  ) || fastingPhases[fastingPhases.length - 1];

  // Calculate time to next phase
  const nextPhase = fastingPhases.find((phase) => phase.startHour > elapsedHours);
  const hoursToNextPhase = nextPhase ? nextPhase.startHour - elapsedHours : 0;

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatHoursMinutes = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    if (h === 0) return `${m}m`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
  };

  // SVG circle calculations
  const size = 200;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Circular Timer */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              className="text-muted/30"
            />
            {/* Progress circle */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="url(#timerGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              className={cn('p-2 rounded-full mb-2', currentPhase.bgColor)}
              animate={{ scale: isActive ? [1, 1.1, 1] : 1 }}
              transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
            >
              <currentPhase.icon className={cn('w-6 h-6', currentPhase.color)} />
            </motion.div>
            <div className="text-3xl font-bold font-mono text-foreground">
              {formatTime(elapsedSeconds)}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {isActive ? 'Fasting' : 'Paused'} • Goal: {targetHours}h
            </div>
          </div>
        </div>

        {/* Current Phase Badge */}
        <motion.div
          className={cn(
            'mt-4 px-4 py-2 rounded-full border flex items-center gap-2',
            currentPhase.bgColor,
            `border-${currentPhase.color.replace('text-', '')}/30`
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <currentPhase.icon className={cn('w-4 h-4', currentPhase.color)} />
          <span className={cn('font-medium text-sm', currentPhase.color)}>
            {currentPhase.name}
          </span>
        </motion.div>

        <p className="text-sm text-muted-foreground mt-2 text-center max-w-xs">
          {currentPhase.description}
        </p>

        {nextPhase && isActive && (
          <p className="text-xs text-muted-foreground mt-2">
            {formatHoursMinutes(hoursToNextPhase)} until {nextPhase.name}
          </p>
        )}
      </div>

      {/* Phase Progress Indicator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Fasting Phases</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        
        <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted/30">
          {fastingPhases.map((phase) => {
            const phaseWidth = ((phase.endHour - phase.startHour) / targetHours) * 100;
            const isComplete = elapsedHours >= phase.endHour;
            const isCurrent = elapsedHours >= phase.startHour && elapsedHours < phase.endHour;
            const phaseProgress = isCurrent
              ? ((elapsedHours - phase.startHour) / (phase.endHour - phase.startHour)) * 100
              : isComplete
              ? 100
              : 0;

            return (
              <div
                key={phase.id}
                className="relative h-full"
                style={{ width: `${phaseWidth}%` }}
              >
                <div
                  className={cn(
                    'absolute inset-0 transition-all duration-500',
                    phase.bgColor.replace('/20', '/40')
                  )}
                  style={{ width: `${phaseProgress}%` }}
                />
              </div>
            );
          })}
        </div>

        {/* Phase Labels */}
        <div className="flex justify-between">
          {fastingPhases.map((phase) => {
            const isActive = elapsedHours >= phase.startHour && elapsedHours < phase.endHour;
            const isComplete = elapsedHours >= phase.endHour;

            return (
              <div
                key={phase.id}
                className={cn(
                  'flex flex-col items-center gap-1 text-center',
                  isActive ? phase.color : isComplete ? 'text-muted-foreground' : 'text-muted-foreground/50'
                )}
              >
                <phase.icon className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:block">{phase.name}</span>
                <span className="text-xs">{phase.startHour}h</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-3 justify-center">
        {!isActive && elapsedSeconds === 0 ? (
          <Button
            className="bg-gradient-gold hover:scale-105 transition-transform shadow-gold-glow px-8"
            onClick={onStart}
          >
            <Flame className="w-4 h-4 mr-2" />
            Start Fast
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              onClick={isActive ? onPause : onStart}
              className="flex-1 max-w-32"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Flame className="w-4 h-4 mr-2" />
                  Resume
                </>
              )}
            </Button>
            <Button
              variant="destructive"
              onClick={onStop}
              className="flex-1 max-w-32"
            >
              <Square className="w-4 h-4 mr-2" />
              End Fast
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FastingTimer;