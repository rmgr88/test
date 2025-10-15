import { Link } from "wouter";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Finance Advisory", href: "/services#finance" },
        { name: "Accounting Automation", href: "/services#accounting" },
        { name: "Business Intelligence", href: "/services#analytics" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "ROI Calculator", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">PulseLedger</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Expert finance, accounting, and automation consulting for agencies and ecommerce businesses.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary-foreground/10" data-testid="link-email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 PulseLedger. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
