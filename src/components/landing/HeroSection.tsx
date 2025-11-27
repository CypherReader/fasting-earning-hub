import { Button } from "@/components/ui/button";
import { DollarSign, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { FastingTimerVisual } from "./FastingTimerVisual";

const MoneyParticle = ({ delay, left }: { delay: number; left: number }) => (
  <div
    className="absolute text-2xl opacity-20 money-particle"
    style={{
      left: `${left}%`,
      animationDelay: `${delay}s`,
      bottom: "-50px",
    }}
  >
    💰
  </div>
);

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
      {/* Fasting timer background visual */}
      <FastingTimerVisual />
      
      {/* Money particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <MoneyParticle key={i} delay={i * 1.2} left={10 + i * 12} />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-card/50" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up">
            <div className="flex -space-x-2">
              {["SM", "MR", "AK", "JD", "LB"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-semibold text-muted-foreground"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>
                <span className="font-display font-semibold text-foreground">{memberCount.toLocaleString()}</span> paying $0/month
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient-hero">The Fasting App</span>
            <br />
            <span className="text-foreground">That Pays for Itself</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Deposit $20/month. Fast consistently. Get it all back.
            <br className="hidden md:block" />
            The only fasting app that costs $0 if you're disciplined.
          </p>

          {/* App mockup showing recovery */}
          <div className="relative mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="mx-auto max-w-xs">
              <div className="bg-card rounded-3xl p-6 border border-border shadow-2xl">
                <div className="text-sm text-muted-foreground mb-2">Deposit Recovered</div>
                <div className="font-display text-5xl font-bold text-primary mb-4">$18 / $20</div>
                <div className="bg-muted rounded-full h-3 mb-3 overflow-hidden">
                  <div className="bg-gradient-gold h-full rounded-full" style={{ width: "90%" }} />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    9 Fasts Complete
                  </span>
                  <span className="text-muted-foreground">Net cost: $2</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="hero" className="w-full sm:w-auto">
              <DollarSign className="w-5 h-5" />
              Start Your Vault - $20 Refundable
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              <Users className="w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Net cost: <span className="text-primary font-semibold">$0</span> if you fast consistently
          </p>
        </div>
      </div>
    </section>
  );
};
