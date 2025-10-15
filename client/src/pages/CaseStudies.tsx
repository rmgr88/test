import Header from "@/components/Header";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";

export default function CaseStudies() {
  // TODO: Remove mock data
  const caseStudies = [
    {
      company: "Digital Marketing Co",
      industry: "Marketing Agency",
      challenge: "Manual financial processes caused delayed reporting and missed growth opportunities. The finance team spent 80+ hours per month on reconciliation.",
      solution: "Implemented automated accounting systems and real-time dashboard for financial visibility. Integrated all platforms into a unified data warehouse.",
      results: [
        { metric: "Cost Reduction", value: "45%" },
        { metric: "Faster Reporting", value: "3x" },
        { metric: "Time Saved", value: "80hrs/mo" },
        { metric: "Revenue Growth", value: "+28%" },
      ],
    },
    {
      company: "Ecommerce Innovations",
      industry: "Ecommerce",
      challenge: "Complex multi-channel operations with no unified financial view. Inventory and revenue data was siloed across platforms.",
      solution: "Built custom BI dashboard integrating all sales channels and automated reconciliation. Implemented predictive analytics for inventory management.",
      results: [
        { metric: "Time Saved", value: "20hrs/wk" },
        { metric: "Revenue Growth", value: "+35%" },
        { metric: "Inventory Accuracy", value: "98%" },
        { metric: "Margin Improvement", value: "+12%" },
      ],
    },
    {
      company: "Creative Studio Pro",
      industry: "Design Agency",
      challenge: "Inefficient project-based accounting led to cash flow issues and difficulty tracking profitability by client.",
      solution: "Designed custom project accounting system with automated time tracking integration and client profitability dashboards.",
      results: [
        { metric: "Cash Flow Improved", value: "60%" },
        { metric: "Profitability Tracking", value: "100%" },
        { metric: "Invoicing Speed", value: "5x" },
        { metric: "Client Retention", value: "+22%" },
      ],
    },
    {
      company: "Tech Solutions LLC",
      industry: "SaaS",
      challenge: "Rapidly scaling subscription business needed sophisticated revenue recognition and churn analysis.",
      solution: "Implemented ASC 606 compliant revenue recognition automation and built predictive churn models with actionable insights.",
      results: [
        { metric: "Audit Ready", value: "100%" },
        { metric: "Churn Reduced", value: "-18%" },
        { metric: "MRR Visibility", value: "Real-time" },
        { metric: "Forecast Accuracy", value: "95%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped businesses transform their financial operations and achieve measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.company} {...study} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
