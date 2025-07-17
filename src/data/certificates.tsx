import AlibabaCloudCertifiedDevelopers1 from "@/app/certificate/alibaba-cloud-certified-developers-1.png";
import BelajarBackEndPemulaDenganJavascript from "@/app/certificate/belajar-back-end-pemula-dengan-javascript.png";
import BelajarDasarPemrogramanJavascript from "@/app/certificate/belajar-dasar-pemrograman-javascript.png";
import BelajarJavaScript from "@/app/certificate/belajar-javascript.png";
import MemulaiPemrogramanDenganJava from "@/app/certificate/memulai-pemrograman-dengan-java.png";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { FaJava } from "react-icons/fa6";
import { SiAlibabacloud, SiExpress } from "react-icons/si";
import { TbBrandJavascript, TbBrandMysql, TbBrandNodejs } from "react-icons/tb";

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
    icon?: JSX.Element;
    color: string;
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
        Completed a foundational JavaScript course validated by AWS standards,
        gaining hands-on experience in building dynamic web applications and
        REST APIs using Node.js.
      </>
    ),
    imgSrc: BelajarDasarPemrogramanJavascript,
    href: "https://www.dicoding.com/certificates/NVP79QWW4ZR0",
    skills: [
      {
        url: "https://nodejs.org",
        text: "Node.js",
        icon: <TbBrandNodejs />,
        color: "#8CC84B",
      },
      {
        url: "https://expressjs.com",
        text: "Express",
        icon: <SiExpress />,
        color: "#000000",
      },
    ],
  },
  {
    title: "Beginner Back-End Learning with JavaScript",
    issuedBy: "Dicoding Indonesia",
    issuedAt: {
      start: "Dec 2022",
      end: "Dec 2025",
    },
    description: (
      <>
        Mastered backend fundamentals with Node.js and Express, including API
        development, server-side logic, and integrating databases into scalable
        backend services.
      </>
    ),
    imgSrc: BelajarBackEndPemulaDenganJavascript,
    href: "https://www.dicoding.com/certificates/1OP85431LPQK",
    skills: [
      {
        url: "https://nodejs.org",
        text: "Node.js",
        icon: <TbBrandNodejs />,
        color: "#8CC84B",
      },
      { url: "https://hapi.dev", text: "hapi", color: "#000000" },
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
        Gained a solid foundation in Java programming with an emphasis on OOP
        concepts, enabling the creation of console and GUI-based applications
        aligned with industry standards.
      </>
    ),
    imgSrc: MemulaiPemrogramanDenganJava,
    href: "https://www.dicoding.com/certificates/MRZM4NEY0XYQ",
    skills: [
      {
        url: "https://www.java.com",
        text: "Java",
        icon: <FaJava />,
        color: "#3A75B0",
      },
    ],
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
        Certified in deploying and managing MySQL databases on Alibaba Cloud ECS
        instances, with practical knowledge of CentOS configuration and SQL
        operations for production environments.
      </>
    ),
    imgSrc: AlibabaCloudCertifiedDevelopers1,
    href: "https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_16aebbddcf433d4247ef9f4b6066d8ac.png",
    skills: [
      {
        url: "https://www.alibabacloud.com",
        text: "Alibaba Cloud",
        icon: <SiAlibabacloud />,
        color: "#FF6A10",
      },
      {
        url: "https://www.mysql.com",
        text: "MySQL",
        icon: <TbBrandMysql />,
        color: "#00758F",
      },
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
        Built a strong understanding of JavaScript fundamentals for web
        development, including DOM manipulation and event handling to create
        interactive user experiences.
      </>
    ),
    imgSrc: BelajarJavaScript,
    href: "https://www.codepolitan.com/c/LPTCIOJ",
    skills: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        text: "JavaScript",
        icon: <TbBrandJavascript />,
        color: "#F7DF1E",
      },
    ],
  },
];

export default certificates;
