import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  metric?: string;
}

export default function TestimonialCard({ quote, author, role, company, image, metric }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="p-8 h-full flex flex-col" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, "-")}`}>
      <Quote className="h-8 w-8 text-primary mb-6" />
      <blockquote className="text-lg leading-relaxed mb-8 flex-grow">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          {image && <AvatarImage src={image} alt={author} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold" data-testid={`text-testimonial-author-${author.toLowerCase().replace(/\s+/g, "-")}`}>{author}</div>
          <div className="text-sm text-muted-foreground">
            {role} at {company}
          </div>
          {metric && (
            <div className="text-sm font-semibold text-primary mt-1" data-testid="text-metric">
              {metric}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
