import { DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ClockVideoBackground } from "./ClockVideoBackground";
import { FloatingParticles } from "./FloatingParticles";
import { FastingTimerHero } from "./FastingTimerHero";
import { MagneticButton } from "./MagneticButton";
import { RollingBenefits } from "./RollingBenefits";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic clock video background */}
      <ClockVideoBackground />
      <FloatingParticles />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Rolling benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <RollingBenefits />
          </motion.div>

          {/* Main headline - Large and impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight"
          >
            <span className="text-gradient-hero">The Fasting App</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8"
          >
            <span className="text-foreground">That Pays for Itself</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Deposit $20/month. Fast consistently. Get it all back.
            <br className="hidden md:block" />
            The only fasting app that costs{" "}
            <span className="text-primary font-semibold">$0</span> if you're disciplined.
          </motion.p>

          {/* Animated timer preview card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <div className="inline-block">
              <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl">
                <FastingTimerHero />
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-muted-foreground mt-6"
          >
            Net cost: <span className="text-primary font-semibold">$0</span> if you fast
            consistently
          </motion.p>
        </div>
      </div>
    </section>
  );
};
