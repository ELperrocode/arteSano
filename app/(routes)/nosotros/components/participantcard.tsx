import * as React from "react";
import { cn } from "@/lib/utils";

interface ParticipantCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, role, description, imageUrl }) => {
  return (
    <div className={cn("flex flex-col items-center p-6 pt-9 border rounded-md shadow-md hover:shadow-lg transition-shadow duration-300")}>
      <div className="relative group">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
      <p className="text-sm text-center mt-2">{description}</p>
    </div>
  );
};

export default ParticipantCard;