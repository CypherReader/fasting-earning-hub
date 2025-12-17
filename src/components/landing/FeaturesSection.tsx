import { Sparkles, Brain, Activity, Droplet, Crown, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Brain,
    title: "Autophagy Tracker",
    description: "Real-time insights on cellular repair. Track when your body enters deep healing mode with HGH and stem cell activation.",
    badge: "Core",
    gradient: "from-primary to-cyan-400"
  },
  {
    icon: Sparkles,
    title: "Nano Banana AI",
    description: "Turn your 5AM walks into viral 'Hero's Journey' art. Our AI transforms your fasting milestones into shareable masterpieces.",
    badge: "AI-Powered",
    gradient: "from-secondary to-purple-400"
  },
  {
    icon: Activity,
    title: "Elite Metrics",
    description: "Track Ketosis levels and integrate Blood Work results. For those who want the complete metabolic picture.",
    badge: "Premium",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Droplet,
    title: "Hydration Sync",
    description: "Smart water tracking that adapts to your fasting window. Get reminders optimized for metabolic performance.",
    badge: "Core",
    gradient: "from-primary to-cyan-400"
  },
  {
    icon: Zap,
    title: "Fast Streaks",
    description: "Build momentum with streak tracking. Visual progress that keeps you motivated through the tough hours.",
    badge: "Core",
    gradient: "from-primary to-cyan-400"
  },
  {
    icon: Crown,
    title: "Longevity Score",
    description: "A proprietary algorithm combining your fasting consistency, sleep quality, and activity levels into one powerful metric.",
    badge: "Coming Soon",
    gradient: "from-amber-500 to-orange-500"
  }
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Feature Highlights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Turn Your Biology Into{" "}
              <span className="text-gradient-premium">Art</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced tracking meets beautiful visualization. Every fast becomes a journey worth celebrating.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-strong rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      feature.badge === "Premium" 
                        ? "bg-secondary/20 text-secondary" 
                        : feature.badge === "AI-Powered"
                        ? "bg-purple-500/20 text-purple-400"
                        : feature.badge === "Coming Soon"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-primary/20 text-primary"
                    }`}>
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};