import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";

const plans = [
  {
    name: "VAULT",
    price: "$20",
    period: "/mo",
    description: "Fully refundable based on fasting",
    features: [
      "Unlimited fasting tracking",
      "Recover $2 per completed fast",
      "AI coaching (Cortex)",
      "Tribe membership",
      "Monthly auto-refunds",
    ],
    popular: false,
    buttonVariant: "hero" as const,
  },
  {
    name: "VAULT PLUS",
    price: "$30",
    period: "/mo",
    description: "Fully refundable ($3 per fast)",
    features: [
      "Everything in Vault",
      "1:1 coaching (2x/mo)",
      "Blood ketone tracking",
      "Extended fasting protocols",
      "Priority support",
    ],
    popular: true,
    buttonVariant: "hero" as const,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-dark">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Pay to commit. Get it all back if you fast consistently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all duration-300 animate-fade-in-up ${
                  plan.popular
                    ? "bg-gradient-to-br from-accent/20 to-purple/10 border-2 border-accent shadow-purple-glow"
                    : "bg-card border border-border hover:border-secondary/30"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    MOST POPULAR
                  </div>
                )}

                {/* Plan name */}
                <div className="text-sm font-semibold text-muted-foreground tracking-wider mb-2">
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={plan.buttonVariant} size="lg" className="w-full">
                  <Sparkles className="w-4 h-4" />
                  Start Your Vault
                </Button>

                {/* Net cost */}
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Net cost: <span className="text-primary font-semibold">$0</span> if you fast consistently
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
