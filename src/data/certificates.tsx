import AlibabaCloudCertifiedDevelopers1 from "@/app/certificate/alibaba-cloud-certified-developers-1.png";
import BelajarBackEndPemulaDenganJavascript from "@/app/certificate/belajar-back-end-pemula-dengan-javascript.png";
import BelajarDasarPemrogramanJavascript from "@/app/certificate/belajar-dasar-pemrograman-javascript.png";
import BelajarJavaScript from "@/app/certificate/belajar-javascript.png";
import MemulaiPemrogramanDenganJava from "@/app/certificate/memulai-pemrograman-dengan-java.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export type Certificate = {
  title: string;
  issuedBy: string;
  issuedAt: {
    start: string;
    end: string;
  };
  description: JSX.Element;
  imgSrc: Parameters<typeof ExportedImage>[0]["src"];
  href?: Parameters<typeof Link>[0]["href"];
  skills?: Array<{
    url: string;
    text: string;
  }>;
};

const certificates: Array<Certificate> = [
  {
    title: "Learn the Basics of JavaScript Programming",
    issuedBy: "Dicoding Indonesia",
    issuedAt: {
      start: "Dec 2022",
      end: "Dec 2025",
    },
    description: (
      <>
        This class is intended for individuals who want to step into becoming a
        Web Developer/Back-end developer using Node.js technology using industry
        competency standards validated by AWS. By the end of the class, students
        will be able to master the basics of JavaScript for web application
        development using Node.Js.
      </>
    ),
    imgSrc: BelajarDasarPemrogramanJavascript,
    href: "https://www.dicoding.com/certificates/NVP79QWW4ZR0",
    skills: [
      { url: "https://nodejs.org", text: "Node.js" },
      { url: "https://expressjs.com", text: "Express" },
    ],
  },
  {
    title: "Learn the Basics of JavaScript Programming",
    issuedBy: "Dicoding Indonesia",
    issuedAt: {
      start: "Dec 2022",
      end: "Dec 2025",
    },
    description: (
      <>
        This class is intended for individuals who want to step into becoming a
        Back-End Developer with AWS&apos;s international competency standards.
        At the end of the class, students will be able to create a simple
        RESTful API independently to support the functionality of an
        application.
      </>
    ),
    imgSrc: BelajarBackEndPemulaDenganJavascript,
    href: "https://www.dicoding.com/certificates/1OP85431LPQK",
    skills: [
      { url: "https://nodejs.org", text: "Node.js" },
      { url: "https://hapi.dev", text: "hapi" },
    ],
  },
  {
    title: "Learn to Program with Java",
    issuedBy: "Dicoding Indonesia",
    issuedAt: {
      start: "Jan 2023",
      end: "Jan 2026",
    },
    description: (
      <>
        This class is intended for beginners who want to learn the basics of
        Java programming with reference to industry standards. At the end of the
        class, students will be able to create Java programs using the Intellij
        Idea IDE or Online IDEs such as Glot.io or Replit.
      </>
    ),
    imgSrc: MemulaiPemrogramanDenganJava,
    href: "https://www.dicoding.com/certificates/MRZM4NEY0XYQ",
    skills: [{ url: "https://www.java.com", text: "Java" }],
  },
  {
    title: "Alibaba Cloud Certified Developers - 1",
    issuedBy: "Alibaba Cloud",
    issuedAt: {
      start: "Jul 2024",
      end: "Jul 2026",
    },
    description: (
      <>
        This class introduces how to install MySQL on an ECS instance configured
        with CentOS, and perform common MySQL operations, and use basic SQL
        statements.
      </>
    ),
    imgSrc: AlibabaCloudCertifiedDevelopers1,
    href: "https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_16aebbddcf433d4247ef9f4b6066d8ac.png",
    skills: [
      { url: "https://www.alibabacloud.com", text: "Alibaba Cloud" },
      { url: "https://www.mysql.com", text: "MySQL" },
    ],
  },
  {
    title: "Learn JavaScript Programming",
    issuedBy: "CODEPOLITAN",
    issuedAt: {
      start: "Aug 2024",
      end: "Aug 2027",
    },
    description: (
      <>
        This class is a guide to learning the basics of JavaScript programming
        in web programming.
      </>
    ),
    imgSrc: BelajarJavaScript,
    href: "https://www.codepolitan.com/c/LPTCIOJ",
    skills: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        text: "JavaScript",
      },
    ],
  },
];

export default certificates;
