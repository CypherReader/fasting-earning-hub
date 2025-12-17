import { Shield, Lock, Eye, Database, MapPin, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const privacyFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your health metrics are encrypted at rest and in transit. Not even we can read your raw data."
  },
  {
    icon: MapPin,
    title: "GPS Masking",
    description: "Your workout locations are automatically fuzzed. We see that you moved—not where you live."
  },
  {
    icon: Database,
    title: "Data Isolation",
    description: "Your data is stored in isolated containers. No cross-user analytics, no data selling—ever."
  },
  {
    icon: Fingerprint,
    title: "Zero-Knowledge Auth",
    description: "We use cryptographic proofs so you can verify your progress without exposing sensitive data."
  }
];

export const PrivacyPromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Accent glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Privacy by Design</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Biological Data is{" "}
              <span className="text-gradient-hero">Yours Alone</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on a fully GDPR-compliant architecture with strict data isolation. 
              We mask your GPS locations and encrypt your health metrics by default.
            </p>
          </motion.div>

          {/* Privacy features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-strong rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center shadow-cyan-glow group-hover:shadow-purple-glow transition-shadow">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="w-4 h-4 text-primary" />
              <span>No third-party tracking</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Database className="w-4 h-4 text-primary" />
              <span>SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>GDPR & CCPA Ready</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};