import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Calculator, Workflow, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImage from "@assets/stock_images/modern_financial_das_e06bfd9b.jpg";

export default function Services() {
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
        "Risk management",
        "Financial due diligence",
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
        "Invoice processing automation",
        "Multi-entity consolidation",
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
        "Data integration & warehousing",
        "Executive reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  Expert Services for Modern Businesses
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We provide comprehensive finance, accounting, and automation solutions designed to optimize your operations and accelerate growth.
                </p>
              </div>
              <div>
                <img
                  src={dashboardImage}
                  alt="Financial dashboard"
                  className="rounded-xl shadow-xl w-full h-auto"
                  data-testid="img-services-hero"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Discuss Your Needs
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every business is unique. Schedule a consultation to explore how our services can be tailored to your specific goals.
            </p>
            <Button size="lg" data-testid="button-services-contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
