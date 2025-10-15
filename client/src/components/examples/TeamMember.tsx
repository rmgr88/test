import TeamMember from "../TeamMember";
import avatar from "@assets/stock_images/professional_busines_fc0e1b0d.jpg";

export default function TeamMemberExample() {
  return (
    <div className="max-w-sm">
      <TeamMember
        name="Sarah Chen"
        role="Lead Financial Consultant"
        bio="15+ years experience in finance automation and strategic planning for high-growth agencies."
        image={avatar}
        linkedin="#"
      />
    </div>
  );
}
