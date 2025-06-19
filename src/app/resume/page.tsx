import ResumePage from "@/app/resume/_components/page";
import site from "@/data/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume of ${site.author.name}`,
  description: "This is a page containing my latest resume.",
};

export default function ResumeEnPage() {
  return <ResumePage file="../resume.en.pdf" />;
}
