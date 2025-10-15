import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export default function TeamMember({ name, role, bio, image, linkedin }: TeamMemberProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="p-6 text-center h-full flex flex-col" data-testid={`card-team-member-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <Avatar className="h-24 w-24 mx-auto mb-4">
        {image && <AvatarImage src={image} alt={name} />}
        <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold mb-1" data-testid="text-name">{name}</h3>
      <p className="text-sm text-primary font-semibold mb-4" data-testid="text-role">{role}</p>
      <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed" data-testid="text-bio">{bio}</p>
      {linkedin && (
        <Button size="sm" variant="outline" className="mx-auto" data-testid="link-linkedin">
          <Linkedin className="h-4 w-4 mr-2" />
          Connect
        </Button>
      )}
    </Card>
  );
}
