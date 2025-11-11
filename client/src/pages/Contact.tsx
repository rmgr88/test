import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@fpa.agency",
      link: "mailto:hello@fpa.agency",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri 9am-6pm PST",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your financial operations? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.link}
                          className="flex items-start gap-4 hover-elevate active-elevate-2 rounded-lg p-3 -ml-3"
                          data-testid={`link-${item.title.toLowerCase()}`}
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold mb-1">{item.title}</div>
                            <div className="text-muted-foreground">{item.value}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-secondary/30 rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Response Time</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-card rounded-xl p-8 border">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
