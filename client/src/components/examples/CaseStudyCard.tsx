import CaseStudyCard from "../CaseStudyCard";

export default function CaseStudyCardExample() {
  return (
    <div className="max-w-2xl">
      <CaseStudyCard
        company="Digital Marketing Co"
        industry="Marketing Agency"
        challenge="Manual financial processes caused delayed reporting and missed growth opportunities."
        solution="Implemented automated accounting systems and real-time dashboard for financial visibility."
        results={[
          { metric: "Cost Reduction", value: "45%" },
          { metric: "Faster Reporting", value: "3x" }
        ]}
      />
    </div>
  );
}
