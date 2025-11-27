import { Button } from "@/components/ui/button";
import { DollarSign, Lock, CheckCircle, Shield, Quote } from "lucide-react";

const stats = [
  { value: "$127.50", label: "Avg Monthly Earnings" },
  { value: "18 lbs", label: "Avg Weight Loss" },
  { value: "87%", label: "Success Rate" },
];

export const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-hero">Start Earning</span>
            <br />
            <span className="text-foreground">Today</span>
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="hero" size="hero" className="w-full md:w-auto mb-6 animate-pulse-gold">
            <DollarSign className="w-5 h-5" />
            Join 12,847 Members Earning Today
          </Button>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-secondary" />
              Secure Payment
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-secondary" />
              Cancel Anytime
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-secondary" />
              30-Day Guarantee
            </div>
          </div>

          {/* Final testimonial */}
          <div className="bg-card rounded-xl p-6 border border-border max-w-lg mx-auto">
            <Quote className="w-8 h-8 text-primary/30 mb-3" />
            <p className="text-foreground italic mb-4">
              "I've tried every fasting app. This is the only one that worked because I had skin in the game."
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                MR
              </div>
              <span className="font-semibold">Michael R.</span>
              <CheckCircle className="w-4 h-4 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
