import TestimonialCard from "../TestimonialCard";
import avatar1 from "@assets/stock_images/professional_busines_fc0e1b0d.jpg";

export default function TestimonialCardExample() {
  return (
    <div className="max-w-2xl">
      <TestimonialCard
        quote="FP&A Agency transformed our financial operations. Their automation solutions reduced our monthly close time by 60% and gave us real-time visibility into our metrics."
        author="Sarah Johnson"
        role="CEO"
        company="Digital Marketing Co"
        image={avatar1}
        metric="60% faster close process"
      />
    </div>
  );
}
