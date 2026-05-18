import { useEffect, useRef } from "react";
import { MessageCircle, Send, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us instantly",
    action: "Open WhatsApp",
    href: "https://wa.me/1234567890",
    color: "bg-[#25D366] hover:bg-[#20BD5A]",
  },
  {
    icon: Send,
    title: "Telegram",
    description: "Message us on Telegram",
    action: "Open Telegram",
    href: "https://t.me/shoshdigital",
    color: "bg-[#0088cc] hover:bg-[#0077b5]",
  },
  {
    icon: Mail,
    title: "Email",
    description: "hello@shoshdigital.com",
    action: "Send Email",
    href: "mailto:hello@shoshdigital.com",
    color: "gradient-bg gradient-bg-hover",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (234) 567-890",
    action: "Call Us",
    href: "tel:+1234567890",
    color: "bg-accent hover:bg-accent/90",
  },
];

function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

const Contact = () => {
  const containerRef = useIntersectionObserver();

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Ready to grow your business? Reach out through any of these channels — we typically respond within a few hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <Card
                    key={method.title}
                    className="animate-on-scroll opacity-0 translate-y-8 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <method.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg mb-1">{method.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                          <a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className={`${method.color} text-white font-medium`}>
                              {method.action}
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Message Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Prefer a Quick Chat?
              </h2>
              <p className="text-muted-foreground mb-8">
                The fastest way to reach us is through WhatsApp or Telegram. We're usually online and respond within minutes during business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold h-12 px-8 w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
                <a
                  href="https://t.me/shoshdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold h-12 px-8 w-full sm:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Telegram Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center animate-on-scroll opacity-0 translate-y-8">
                Common Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How long does it take to build a website?",
                    a: "Most websites are completed within 7-14 days, depending on complexity. We'll give you a specific timeline during our initial consultation.",
                  },
                  {
                    q: "How much does it cost?",
                    a: "Pricing depends on your specific needs. We offer affordable solutions for small businesses. Contact us for a free quote.",
                  },
                  {
                    q: "Do you offer ongoing support?",
                    a: "Yes! We offer maintenance and support packages to keep your website running smoothly and help your business continue to grow.",
                  },
                ].map((faq, index) => (
                  <div
                    key={faq.q}
                    className="animate-on-scroll opacity-0 translate-y-8 p-6 rounded-2xl bg-card border border-border/50"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h3 className="font-heading font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Let's Grow Your Business Together
              </h2>
              <p className="text-muted-foreground mb-8">
                No pressure, no obligations. Just a friendly conversation about your business goals.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-bg gradient-bg-hover text-primary-foreground font-semibold h-14 px-10 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start a Conversation
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
