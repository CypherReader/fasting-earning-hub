import { motion } from "framer-motion";

interface AnimatedSectionBackgroundProps {
  variant?: "default" | "accent" | "subtle";
  showGrid?: boolean;
  showOrbs?: boolean;
  showParticles?: boolean;
}

export const AnimatedSectionBackground = ({
  variant = "default",
  showGrid = true,
  showOrbs = true,
  showParticles = false,
}: AnimatedSectionBackgroundProps) => {
  const orbColors = {
    default: ["primary", "secondary"],
    accent: ["accent", "primary"],
    subtle: ["muted", "primary"],
  };

  const colors = orbColors[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      {showOrbs && (
        <>
          <motion.div
            className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-${colors[0]}/10 blur-[120px]`}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: `radial-gradient(circle, hsl(var(--${colors[0]}) / 0.15), transparent)` }}
          />
          <motion.div
            className={`absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[100px]`}
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ background: `radial-gradient(circle, hsl(var(--${colors[1]}) / 0.1), transparent)` }}
          />
        </>
      )}

      {/* Subtle grid pattern */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      )}

      {/* Floating particles */}
      {showParticles && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              initial={{
                x: `${10 + i * 12}%`,
                y: "100%",
              }}
              animate={{
                y: "-10%",
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            />
          ))}
        </>
      )}

      {/* Subtle scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent h-[200px]"
        animate={{ y: ["-100%", "500%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
