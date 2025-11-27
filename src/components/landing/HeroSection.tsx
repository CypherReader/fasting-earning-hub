import { DollarSign, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FastingTimerVisual } from "./FastingTimerVisual";
import { FloatingParticles } from "./FloatingParticles";
import { FastingTimerHero } from "./FastingTimerHero";
import { MagneticButton } from "./MagneticButton";
import { AnimatedVault } from "./AnimatedVault";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [memberCount, setMemberCount] = useState(12847);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background visual effects */}
      <FastingTimerVisual />
      <FloatingParticles />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-card/50" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <div className="flex -space-x-2">
                {["SM", "MR", "AK", "JD", "LB"].map((initials, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-semibold text-muted-foreground"
                  >
                    {initials}
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-secondary"
                />
                <span>
                  <span className="font-display font-semibold text-foreground">
                    {memberCount.toLocaleString()}
                  </span>{" "}
                  paying $0/month
                </span>
              </div>
            </motion.div>

            {/* Vault icon + Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-4"
            >
              <AnimatedVault />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
                <span className="text-gradient-hero">The Fasting App</span>
              </h1>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            >
              <span className="text-foreground">That Pays for Itself</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl"
            >
              Deposit $20/month. Fast consistently. Get it all back.
              <br className="hidden md:block" />
              The only fasting app that costs{" "}
              <span className="text-primary font-semibold">$0</span> if you're disciplined.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <MagneticButton className="text-lg">
                <DollarSign className="w-5 h-5" />
                Start Your Vault - $20 Refundable
              </MagneticButton>
              <Button variant="heroOutline" size="lg">
                <Users className="w-5 h-5" />
                See How It Works
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-muted-foreground mt-6"
            >
              Net cost: <span className="text-primary font-semibold">$0</span> if you fast
              consistently
            </motion.p>
          </div>

          {/* Right side - Interactive Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <FastingTimerHero />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
