import { CourseCard } from "./CourseCard";

const courses = [
  {
    id: "0x7F3a",
    title: "Hardhat & Foundry Internals",
    price: "250",
    creator: "0x7F3a...8B2c",
    students: 2250,
    icon: "box" as const,
    difficulty: "intermediate" as const,
  },
  {
    id: "0x9E2b",
    title: "Zero-Knowledge Proof Engineering",
    price: "500",
    creator: "0x9E2b...4D1f",
    students: 1270,
    icon: "cog" as const,
    difficulty: "advanced" as const,
  },
  {
    id: "0x3C8d",
    title: "Smart Contract Security Patterns",
    price: "350",
    creator: "0x3C8d...9A5e",
    students: 3100,
    icon: "box" as const,
    difficulty: "advanced" as const,
  },
  {
    id: "0x1A4f",
    title: "ERC-20 Token Development",
    price: "150",
    creator: "0x1A4f...2B7c",
    students: 5420,
    icon: "cog" as const,
    difficulty: "beginner" as const,
  },
];

export function CourseCatalog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
