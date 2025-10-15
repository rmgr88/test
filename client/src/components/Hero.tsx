import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@assets/stock_images/professional_busines_252fc42b.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Agency's Financial Operations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Expert finance, accounting, and automation consulting that helps agencies and ecommerce businesses optimize operations, reduce costs, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg" data-testid="button-hero-consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg" data-testid="button-hero-services">
                View Our Services
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Trusted by 500+ agencies</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Average 45% cost reduction</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <img
              src={heroImage}
              alt="Professional business team"
              className="rounded-xl shadow-xl w-full h-auto"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
