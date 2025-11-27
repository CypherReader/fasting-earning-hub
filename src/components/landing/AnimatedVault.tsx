import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

export const AnimatedVault = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCoin, setShowCoin] = useState(false);

  useEffect(() => {
    // Periodically open vault and drop coin
    const interval = setInterval(() => {
      setIsOpen(true);
      setTimeout(() => setShowCoin(true), 300);
      setTimeout(() => {
        setShowCoin(false);
        setIsOpen(false);
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-20 h-20">
      {/* Vault body */}
      <motion.div
        className="relative w-full h-full rounded-lg bg-gradient-to-br from-muted to-card border-2 border-border overflow-hidden"
        animate={{
          boxShadow: showCoin
            ? "0 0 30px hsl(var(--primary) / 0.5)"
            : "0 0 10px hsl(var(--primary) / 0.2)",
        }}
      >
        {/* Vault door */}
        <motion.div
          className="absolute inset-1 rounded bg-card border border-border flex items-center justify-center"
          animate={{
            rotateY: isOpen ? -120 : 0,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
        >
          <Lock className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Inside vault (coins) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">💰</span>
        </div>
      </motion.div>

      {/* Falling coin animation */}
      <AnimatePresence>
        {showCoin && (
          <motion.div
            initial={{ y: -40, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
          >
            🪙
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
