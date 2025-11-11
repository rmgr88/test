import Header from "@/components/Header";
import TeamMember from "@/components/TeamMember";
import Footer from "@/components/Footer";
import { Target, Users, Award } from "lucide-react";
import avatar1 from "@assets/stock_images/professional_busines_fc0e1b0d.jpg";
import avatar2 from "@assets/stock_images/professional_busines_b9e61393.jpg";
import avatar3 from "@assets/stock_images/professional_busines_b0697e31.jpg";

export default function About() {
  // TODO: Remove mock data
  const team = [
    {
      name: "Sarah Chen",
      role: "Lead Financial Consultant",
      bio: "15+ years experience in finance automation and strategic planning for high-growth agencies.",
      image: avatar1,
      linkedin: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Automation",
      bio: "Former Big 4 consultant specializing in accounting systems implementation and process optimization.",
      image: avatar2,
      linkedin: "#",
    },
    {
      name: "Emily Thompson",
      role: "Business Intelligence Lead",
      bio: "Data scientist and analytics expert helping businesses unlock insights from financial data.",
      image: avatar3,
      linkedin: "#",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your bottom line.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We partner with you every step of the way.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality and professionalism in everything we do.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">About FP&A Agency</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We're a team of financial planning, analysis, and technology experts dedicated to helping agencies and ecommerce businesses optimize their financial operations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2018, FP&A Agency was born from a simple observation: growing businesses were being held back by outdated financial processes. We set out to change that by combining deep FP&A expertise with cutting-edge automation technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center" data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <div>
              <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member) => (
                  <TeamMember key={member.name} {...member} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower growing businesses with the financial systems, insights, and expertise they need to scale confidently. We believe that modern financial operations should be a competitive advantage, not a bottleneck.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
