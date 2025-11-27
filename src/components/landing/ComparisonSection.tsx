import { Check, X } from "lucide-react";

const features = [
  { name: "Earn money back", fastingHero: "$20/mo", others: false },
  { name: "Financial commitment", fastingHero: true, others: false },
  { name: "Tribe accountability", fastingHero: true, others: "Some" },
  { name: "AI coaching", fastingHero: true, others: "Some" },
  { name: "Success rate*", fastingHero: "87%", others: "42-52%" },
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Why FastingHero wins
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12">
            The only fasting app with real skin in the game
          </p>

          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
              <div className="p-4 text-center font-bold text-primary bg-primary/5 border-x border-primary/20">
                FastingHero
              </div>
              <div className="p-4 text-center text-sm font-medium text-muted-foreground">
                Other Apps
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t border-border hover:bg-muted/30 transition-colors"
              >
                <div className="p-4 text-foreground">{feature.name}</div>
                <div className="p-4 flex justify-center items-center bg-primary/5 border-x border-primary/20">
                  {typeof feature.fastingHero === "boolean" ? (
                    <Check className="w-5 h-5 text-secondary" />
                  ) : (
                    <span className="font-display font-semibold text-primary">
                      {feature.fastingHero}
                    </span>
                  )}
                </div>
                <div className="p-4 flex justify-center items-center">
                  {typeof feature.others === "boolean" ? (
                    <X className="w-5 h-5 text-destructive" />
                  ) : (
                    <span className="text-muted-foreground text-sm">{feature.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            *Based on D30 retention data
          </p>
        </div>
      </div>
    </section>
  );
};
