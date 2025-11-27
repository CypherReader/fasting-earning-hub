import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if I don't earn all my money back?",
    answer:
      "You'll still earn based on your discipline. Complete 5 fasts → Earn $10 back. Complete 10 fasts → Earn $20 back. Average user earns $18.73/month. It's progressive, not all-or-nothing.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use Stripe for payments (the same platform used by Amazon, Google, and Shopify). Your card details are never stored on our servers. All transactions are protected with 256-bit SSL encryption.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with immediate effect. You'll keep any money you've already earned for that billing period.",
  },
  {
    question: "What if I miss a few days?",
    answer:
      "No problem! Our earning system is progressive. Missing a day or two won't wipe out your progress. You earn for every fast you complete, regardless of streaks.",
  },
  {
    question: "Do other fasting apps do this?",
    answer:
      "No. FastingHero is the only fasting app with a commitment-based earning system. Other apps are free (no commitment) or charge you without giving anything back. We're the only app where your money motivates you AND returns to you.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Questions?
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Everything you need to know about FastingHero
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-secondary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5 [&[data-state=open]>svg]:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
