interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-bold mb-2" data-testid={`text-stat-value-${label.toLowerCase().replace(/\s+/g, "-")}`}>{value}</div>
      <div className="text-sm lg:text-base text-muted-foreground" data-testid={`text-stat-label-${label.toLowerCase().replace(/\s+/g, "-")}`}>{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "45%", label: "Avg Cost Reduction" },
    { value: "3x", label: "Faster Close Process" },
    { value: "$50M+", label: "Client Revenue Managed" },
  ];

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
