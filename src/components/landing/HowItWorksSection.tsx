import { Lock, RefreshCw, DollarSign, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Lock,
    title: "The Deposit",
    description: "Put your money where your goals are",
    detail: "$20 goes into your Vault each month",
    visual: "$20",
    gradient: "from-destructive/20 to-primary/20",
    iconColor: "text-destructive",
  },
  {
    number: "2",
    icon: RefreshCw,
    title: "The Recovery",
    description: "Every completed fast returns $2 of your deposit",
    detail: "10 fasts = full $20 recovered",
    visual: "+$2",
    gradient: "from-background to-secondary/20",
    iconColor: "text-secondary",
  },
  {
    number: "3",
    icon: DollarSign,
    title: "The Refund",
    description: "Get your money back automatically each month",
    detail: "Fast consistently = $0 net cost",
    visual: "$0",
    gradient: "from-primary/20 to-gold-light/20",
    iconColor: "text-primary",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            A simple system that turns your commitment into refunds
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[33%] right-[33%] h-0.5 bg-border -translate-y-1/2 z-0">
              <ArrowRight className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 text-muted-foreground" />
              <ArrowRight className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 text-muted-foreground" />
            </div>

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative z-10 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105`}>
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center font-display font-bold text-primary">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-4 ${step.iconColor}`}>
                    <step.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <p className="text-sm text-muted-foreground/80 mb-4">{step.detail}</p>

                  {/* Visual */}
                  <div className="font-display text-3xl font-bold text-primary">
                    {step.visual}
                  </div>
                </div>

                {/* Arrow for mobile */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-4 md:hidden">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            <span className="text-primary font-semibold font-display">87%</span> of users get their full deposit back every month
          </p>
        </div>
      </div>
    </section>
  );
};
