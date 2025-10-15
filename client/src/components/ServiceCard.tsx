import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, href = "#" }: ServiceCardProps) {
  return (
    <Card className="p-8 hover:shadow-xl transition-all h-full flex flex-col" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="ghost" className="w-full justify-between group" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, "-")}`}>
        Learn More
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
}
