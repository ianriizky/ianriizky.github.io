import ResumePage from "@/app/resume/_components/ResumePage";
import site from "@/data/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume dari ${site.author.name}`,
  description: "Halaman ini berisi resume terbaru saya.",
};

export default function ResumeIdPage() {
  return <ResumePage file="../resume.id.pdf" />;
}
