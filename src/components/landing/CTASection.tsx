import { ArrowRight, Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="text-gradient-hero">Master Your Fast?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands of bio-hackers who are taking control of their metabolism—and their data.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
                <FileText className="w-5 h-5 mr-2" />
                Read Our Privacy Manifesto
              </Button>
            </div>

            {/* Privacy Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-strong rounded-2xl p-6 max-w-lg mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Privacy Trust Badge</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your data is encrypted, isolated, and never sold. We're GDPR compliant 
                and committed to keeping your biological data yours alone.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">🔒 256-bit SSL</span>
                <span className="text-xs text-muted-foreground">🛡️ SOC 2 Type II</span>
                <span className="text-xs text-muted-foreground">🇪🇺 GDPR Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};