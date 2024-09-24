import Hero from "@/components/Hero";
import Skill from "@/components/Skill";

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <Hero />
      </div>

      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <Skill />
      </div>
    </div>
  );
}
