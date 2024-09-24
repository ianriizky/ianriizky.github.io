import { inter } from "@/app/font";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import site from "@/data/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import colors from "tailwindcss/colors";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL),
  title: site.title,
  description: site.description,
  applicationName: site.applicationName,
  authors: {
    name: site.author.name,
    url: site.author.url,
  },
  keywords: site.keywords,
};

export const viewport: Viewport = {
  themeColor: "#7d9a9b",
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.language}
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-800 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme={site.theme} enableSystem>
          <NextTopLoader color={colors.emerald[500]} />
          <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </section>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
