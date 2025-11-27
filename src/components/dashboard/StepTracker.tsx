import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Footprints, Plus, Minus, Target, TrendingUp, Smartphone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface StepTrackerProps {
  dailyGoal?: number;
  onStepsChange?: (steps: number) => void;
}

const StepTracker = ({ dailyGoal = 10000, onStepsChange }: StepTrackerProps) => {
  const [steps, setSteps] = useState(0);
  const [manualInput, setManualInput] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [weeklyData] = useState([
    { day: 'Mon', steps: 8500 },
    { day: 'Tue', steps: 12000 },
    { day: 'Wed', steps: 6800 },
    { day: 'Thu', steps: 9200 },
    { day: 'Fri', steps: 11500 },
    { day: 'Sat', steps: 7300 },
    { day: 'Sun', steps: 0 }, // Today
  ]);

  const progress = Math.min((steps / dailyGoal) * 100, 100);
  const isGoalReached = steps >= dailyGoal;

  const quickAddSteps = (amount: number) => {
    const newSteps = Math.max(0, steps + amount);
    setSteps(newSteps);
    onStepsChange?.(newSteps);
  };

  const handleManualAdd = () => {
    const amount = parseInt(manualInput);
    if (!isNaN(amount) && amount > 0) {
      const newSteps = steps + amount;
      setSteps(newSteps);
      onStepsChange?.(newSteps);
      setManualInput('');
      setShowAddModal(false);
    }
  };

  const getProgressColor = () => {
    if (progress >= 100) return 'text-secondary';
    if (progress >= 75) return 'text-emerald-400';
    if (progress >= 50) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const maxWeeklySteps = Math.max(...weeklyData.map(d => d.steps), dailyGoal);

  return (
    <motion.div
      className="bg-card border border-border rounded-2xl p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/20">
            <Footprints className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Step Tracker</h3>
            <p className="text-xs text-muted-foreground">Daily Goal: {dailyGoal.toLocaleString()}</p>
          </div>
        </div>
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" className="gap-1">
              <Plus className="w-4 h-4" />
              Add
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Steps</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {/* Quick Add Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {[1000, 2500, 5000].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    onClick={() => {
                      quickAddSteps(amount);
                      setShowAddModal(false);
                    }}
                    className="h-16 flex-col"
                  >
                    <span className="text-lg font-bold">+{(amount / 1000).toFixed(amount >= 1000 ? 0 : 1)}k</span>
                    <span className="text-xs text-muted-foreground">{amount.toLocaleString()}</span>
                  </Button>
                ))}
              </div>

              {/* Manual Input */}
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Enter steps..."
                  value={manualInput}
                  onChange={(e) => setManualInput(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleManualAdd} disabled={!manualInput}>
                  Add
                </Button>
              </div>

              {/* Health App Sync Info */}
              <div className="bg-muted/50 rounded-lg p-3 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Sync with Health Apps</p>
                  <p className="text-xs text-muted-foreground">
                    Connect to Apple Health or Google Fit for automatic tracking.
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 mt-1 text-secondary">
                    Set up sync <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Progress Circle */}
      <div className="flex items-center gap-6 mb-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted/30"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              className={getProgressColor()}
              strokeDasharray={251.2}
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (progress / 100) * 251.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={steps}
                className="text-lg font-bold text-foreground"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {steps.toLocaleString()}
              </motion.span>
            </AnimatePresence>
            <span className="text-xs text-muted-foreground">steps</span>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className={cn('text-sm font-medium', getProgressColor())}>
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          
          {isGoalReached ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1 text-secondary"
            >
              <Target className="w-4 h-4" />
              <span className="text-xs font-medium">Goal reached! 🎉</span>
            </motion.div>
          ) : (
            <p className="text-xs text-muted-foreground">
              {(dailyGoal - steps).toLocaleString()} steps to go
            </p>
          )}
        </div>
      </div>

      {/* Quick Adjust Buttons */}
      <div className="flex gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => quickAddSteps(-500)}
          className="flex-1"
          disabled={steps < 500}
        >
          <Minus className="w-4 h-4 mr-1" />
          500
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => quickAddSteps(500)}
          className="flex-1"
        >
          <Plus className="w-4 h-4 mr-1" />
          500
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => quickAddSteps(1000)}
          className="flex-1"
        >
          <Plus className="w-4 h-4 mr-1" />
          1k
        </Button>
      </div>

      {/* Weekly Overview */}
      <div className="border-t border-border pt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">This Week</span>
          </div>
          <span className="text-xs text-muted-foreground">
            Avg: {Math.round(weeklyData.reduce((a, b) => a + b.steps, 0) / 7).toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-end gap-1 h-16">
          {weeklyData.map((data, index) => {
            const height = (data.steps / maxWeeklySteps) * 100;
            const isToday = index === weeklyData.length - 1;
            const reachedGoal = data.steps >= dailyGoal;

            return (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  className={cn(
                    'w-full rounded-t-sm',
                    isToday 
                      ? 'bg-primary' 
                      : reachedGoal 
                        ? 'bg-secondary' 
                        : 'bg-muted-foreground/30'
                  )}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(height, 4)}%` }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                />
                <span className={cn(
                  'text-xs',
                  isToday ? 'text-primary font-medium' : 'text-muted-foreground'
                )}>
                  {data.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default StepTracker;