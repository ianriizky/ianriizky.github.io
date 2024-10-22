import Certificate from "@/components/Certificate";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
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

      <div className="pb-8 pt-6">
        <Project max={4} />
      </div>

      <div className="pb-8 pt-6">
        <Certificate max={4} />
      </div>
    </div>
  );
}
