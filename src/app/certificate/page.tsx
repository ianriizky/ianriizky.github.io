"use client";

import CertificateCard from "@/components/ui/CertificateCard";
import certificates from "@/data/certificates";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 md:mb-24">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Certificate
        </h1>
      </div>

      <div className="py-5">
        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="card flex max-w-2xl flex-col items-center gap-8 rounded-lg border border-gray-300 bg-opacity-20 p-5 transition-all dark:border-gray-500 sm:mt-8 sm:p-10"
            >
              <CertificateCard
                {...certificate}
                resolvedTheme={resolvedTheme}
                imageClassName="w-full rounded-xl shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
