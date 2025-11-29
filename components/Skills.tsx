import { Badge } from "@/components/ui/badge";

// const skills = [
//   "HTML",
//   "CSS",
//   "Tailwind CSS",
//   "JavaScript",
//   "TypeScript",
//   "Python",
//   "React",
//   "Redux",
//   "Zustand",
//   "Tanstack Query",
//   "Shadcn",
//   "Next.js",
//   "Express.js",
//   "Node.js",
//   "MongoDB",
//   "SQL",
//   "Prisma",
//   "PostgreSQL",
//   "Langchain",
//   "Docker",
//   "AWS",
//   "Redis",
// ];
const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "React",
  "Zustand",
  "Shadcn",
  "Next.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Docker",
];

export default function Skill() {
  return (
    <div className="flex flex-col mt-8 gap-y-2">
      <div className="text-xs text-secondary">SKILLS</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-xs text-secondary border-border rounded-none"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
