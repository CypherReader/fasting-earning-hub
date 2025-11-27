import { Star, CheckCircle, Lock, CreditCard, Shield } from "lucide-react";

const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    rating: 5,
    quote: "Lost 22 lbs and got all my money back. Best $20 I ever spent.",
    lost: "22 lbs",
    earned: "$180",
  },
  {
    initials: "MR",
    name: "Mike R.",
    rating: 5,
    quote: "18h fasts were impossible until I had skin in the game.",
    lost: "14 lbs",
    earned: "$96",
  },
  {
    initials: "AK",
    name: "Anna K.",
    rating: 5,
    quote: "30-day streak and a full refund every month. Addictive.",
    lost: "19 lbs",
    earned: "$120",
  },
];

const trustBadges = [
  { icon: Lock, text: "256-bit SSL Encryption" },
  { icon: CreditCard, text: "Stripe Secured Payments" },
  { icon: CheckCircle, text: "30-Day Money-Back Guarantee" },
  { icon: Star, text: "4.8/5 Average Rating" },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-dark">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            Does this actually work?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border hover:border-secondary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                      {testimonial.initials}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold">{testimonial.name}</span>
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

                {/* Stats */}
                <div className="flex justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-muted-foreground text-sm">Lost: </span>
                    <span className="text-secondary font-semibold">{testimonial.lost}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Earned: </span>
                    <span className="text-primary font-semibold font-display">{testimonial.earned}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon className="w-4 h-4 text-secondary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
