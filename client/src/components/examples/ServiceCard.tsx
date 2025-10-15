import ServiceCard from "../ServiceCard";
import { Calculator } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        icon={Calculator}
        title="Finance Advisory"
        description="Strategic financial planning and analysis to drive growth and profitability."
        features={[
          "Financial forecasting & modeling",
          "Cash flow management",
          "Strategic planning & analysis",
          "Investment & funding strategy"
        ]}
      />
    </div>
  );
}
