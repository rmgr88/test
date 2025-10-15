import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

interface CaseStudyCardProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export default function CaseStudyCard({ company, industry, challenge, solution, results }: CaseStudyCardProps) {
  return (
    <Card className="p-8 hover:shadow-xl transition-all" data-testid={`card-case-study-${company.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2" data-testid="text-company">{company}</h3>
          <Badge variant="secondary" data-testid="text-industry">{industry}</Badge>
        </div>
        <TrendingUp className="h-8 w-8 text-primary" />
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Challenge</h4>
          <p className="text-foreground">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Solution</h4>
          <p className="text-foreground">{solution}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
        {results.map((result, index) => (
          <div key={index}>
            <div className="text-2xl font-bold text-primary mb-1" data-testid={`text-result-value-${index}`}>{result.value}</div>
            <div className="text-sm text-muted-foreground" data-testid={`text-result-metric-${index}`}>{result.metric}</div>
          </div>
        ))}
      </div>

      <Button variant="ghost" className="w-full justify-between group" data-testid="button-read-case-study">
        Read Full Case Study
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
}
