import { Shield, Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">GDPR Compliant • Privacy-First Architecture</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            <span className="text-gradient-hero">Master Your Metabolism.</span>
            <br />
            <span className="text-foreground">Own Your Data.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            The AI-assisted fasting ecosystem that turns your biology into art. 
            Syncs with Garmin & Apple Health—without compromising your privacy.
          </motion.p>

          {/* Device integration badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm">Apple Health</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <span className="text-sm">Garmin Connect</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/onboarding/welcome">
              <Button 
                size="lg" 
                className="bg-gradient-neon hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-neon-glow transition-all hover:shadow-cyan-glow"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Fast (Free)
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-lg"
            >
              Read Our Privacy Manifesto
            </Button>
          </motion.div>

          {/* Hero visual - Glassmorphism card preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="glass-strong rounded-3xl p-8 max-w-3xl mx-auto shadow-neon-glow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Timer preview */}
                <div className="flex-1">
                  <div className="relative w-48 h-48 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-muted/30"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#neonGradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={553}
                        strokeDashoffset={553 * 0.35}
                        className="drop-shadow-[0_0_10px_hsl(var(--cyan))]"
                      />
                      <defs>
                        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(187, 100%, 50%)" />
                          <stop offset="100%" stopColor="hsl(271, 81%, 56%)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-4xl font-bold text-gradient-hero">14:26</span>
                      <span className="text-xs text-muted-foreground mt-1">HOURS FASTED</span>
                    </div>
                  </div>
                </div>

                {/* Stats preview */}
                <div className="flex-1 space-y-4">
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Autophagy Status</span>
                      <span className="text-primary font-semibold">Active</span>
                    </div>
                    <div className="w-full h-2 bg-muted/30 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-neon rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">HGH Boost</span>
                      <span className="text-secondary font-semibold">+2000%</span>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ketosis Level</span>
                      <span className="text-primary font-semibold">Optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 glass rounded-xl p-3"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 glass rounded-xl p-3"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Sparkles className="w-6 h-6 text-secondary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};