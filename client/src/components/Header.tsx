import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/generated_images/FP&A_Agency_professional_logo_9f72670c.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2">
            <img src={logoImage} alt="FP&A Agency" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold">FP&A Agency</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={location === item.href ? "bg-accent" : ""}
                  data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button data-testid="button-book-consultation">Book Consultation</Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === item.href ? "bg-accent" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-book">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
