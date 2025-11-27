import { X } from "lucide-react";

const problems = [
  "No accountability",
  "No skin in the game",
  "Free = no commitment",
  "Just another tracker",
];

export const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-dark">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            The Problem With Fasting Apps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="relative bg-card rounded-xl p-5 border border-border hover:border-destructive/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-destructive rounded-l-xl" />
                <div className="flex items-center gap-3 pl-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground font-medium">{problem}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg">
            <span className="text-primary font-bold">FastingHero</span>
            <span className="text-foreground"> is different.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
