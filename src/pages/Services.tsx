import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, Palette, Bot, Wrench, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Website & App Development",
    description:
      "We build clean, mobile-friendly websites and apps that load fast and convert visitors into customers.",
    features: [
      "Responsive, mobile-first design",
      "Fast loading & SEO-ready",
      "Business websites & landing pages",
      "E-commerce & online stores",
      "Web & mobile applications",
      "User-friendly interfaces",
    ],
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Attract real customers with targeted marketing campaigns across social media, search engines, and email.",
    features: [
      "Social media strategy & ads",
      "Instagram, TikTok & Facebook campaigns",
      "SEO & Google Ads",
      "Email marketing & newsletters",
      "Content strategy & planning",
      "Analytics & performance tracking",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Design",
    description:
      "Stand out with a professional brand identity that makes you memorable and builds trust with customers.",
    features: [
      "Logo design & brand identity",
      "Brand colors & typography",
      "Marketing materials",
      "Social media graphics",
      "Visual identity guidelines",
      "Cohesive brand presence",
    ],
  },
  {
    id: "automation",
    icon: Bot,
    title: "Automation & Chatbots",
    description:
      "Save time and never miss a customer with 24/7 automated chat support and workflow automation.",
    features: [
      "Website chatbots",
      "WhatsApp & Telegram bots",
      "FAQ auto-response systems",
      "Booking & appointment automation",
      "CRM & workflow automation",
      "Lead capture & follow-up",
    ],
  },
  {
    id: "support",
    icon: Wrench,
    title: "Ongoing Support & Maintenance",
    description:
      "Keep your digital presence running smoothly with continuous support, updates, and optimization.",
    features: [
      "Website updates & improvements",
      "Performance optimization",
      "Security monitoring & updates",
      "Technical support",
      "Chatbot maintenance",
      "Content updates",
    ],
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

const Services = () => {
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Everything you need to grow your business online. From websites to automation, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16 md:space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`animate-on-scroll opacity-0 translate-y-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-secondary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="border-border/50 bg-gradient-to-br from-card to-muted/30 overflow-hidden">
                      <CardContent className="p-8 md:p-12">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                          <service.icon className="h-20 w-20 text-primary/30" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss which services are right for your business. Free consultation, no obligations.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-bg gradient-bg-hover text-primary-foreground font-semibold h-12 px-8">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
