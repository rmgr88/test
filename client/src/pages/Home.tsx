import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import { Calculator, Workflow, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import avatar1 from "@assets/stock_images/professional_busines_fc0e1b0d.jpg";
import avatar2 from "@assets/stock_images/professional_busines_b9e61393.jpg";
import avatar3 from "@assets/stock_images/professional_busines_b0697e31.jpg";

export default function Home() {
  // TODO: Remove mock data
  const services = [
    {
      icon: Calculator,
      title: "Finance Advisory",
      description: "Strategic financial planning and analysis to drive growth and profitability for your business.",
      features: [
        "Financial forecasting & modeling",
        "Cash flow management & optimization",
        "Strategic planning & analysis",
        "Investment & funding strategy",
      ],
    },
    {
      icon: Workflow,
      title: "Accounting Automation",
      description: "Streamline your accounting processes with cutting-edge automation solutions.",
      features: [
        "Automated bookkeeping systems",
        "Real-time financial reporting",
        "Expense management automation",
        "Payroll & compliance automation",
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Data-driven insights and analytics to power smarter business decisions.",
      features: [
        "Custom dashboard development",
        "KPI tracking & monitoring",
        "Predictive analytics",
        "Performance benchmarking",
      ],
    },
  ];

  const testimonials = [
    {
      quote: "FP&A Agency transformed our financial operations. Their automation solutions reduced our monthly close time by 60% and gave us real-time visibility into our metrics.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Digital Marketing Co",
      image: avatar1,
      metric: "60% faster close process",
    },
    {
      quote: "Working with FP&A Agency was a game-changer. They helped us identify $200K in annual savings and implemented systems that scale with our growth.",
      author: "Michael Chen",
      role: "CFO",
      company: "Ecommerce Innovations",
      image: avatar2,
      metric: "$200K annual savings",
    },
  ];

  const caseStudies = [
    {
      company: "Digital Marketing Co",
      industry: "Marketing Agency",
      challenge: "Manual financial processes caused delayed reporting and missed growth opportunities.",
      solution: "Implemented automated accounting systems and real-time dashboard for financial visibility.",
      results: [
        { metric: "Cost Reduction", value: "45%" },
        { metric: "Faster Reporting", value: "3x" },
      ],
    },
    {
      company: "Ecommerce Innovations",
      industry: "Ecommerce",
      challenge: "Complex multi-channel operations with no unified financial view.",
      solution: "Built custom BI dashboard integrating all sales channels and automated reconciliation.",
      results: [
        { metric: "Time Saved", value: "20hrs/week" },
        { metric: "Revenue Growth", value: "+35%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.company} {...study} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted by leading agencies and ecommerce businesses
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Schedule a free consultation with our experts and discover how we can help your business grow.
            </p>
            <Button size="lg" variant="secondary" className="text-lg" data-testid="button-cta-consultation">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
