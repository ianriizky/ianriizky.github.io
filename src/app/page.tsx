import Hero from "@/components/Hero";
import Skill from "@/components/Skill";

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <Hero />
      <Skill />
    </div>
  );
}
