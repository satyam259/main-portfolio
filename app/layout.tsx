import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { FloatingNav, Loader } from "@/components/index";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Satyam Watts | React/Next.js Developer based in Punjab, India",
    description:
      "Explore the portfolio of Satyam Watts based in Punjab, a skilled React/Next.js Developer. Discover expertise in ReactJS, NextJS, Redux, Material UI, and TailwindCSS showcased through innovative web development projects.",
    images: [
      {
        url: "/og-image.webp",
        alt: "Satyam Watts | React/Next.js Developer based in Punjab, India",
      },
    ],
  },
  title:
    "Satyam Watts | React/Next.js Developer based in Punjab, India",
  description:
    "Explore the portfolio of Satyam Watts based in Punjab, a skilled React/Next.js Developer. Discover expertise in ReactJS, NextJS, Redux, Material UI, and TailwindCSS showcased through innovative web development projects.",
  keywords:
    "Satyam Watts, ReactJS Developer, NextJS Developer, ReactJS, NextJS, Redux, Material UI, TailwindCSS, Web Development, Portfolio, React developer, Next js developer, Punjab, India",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const revalidate = Number(process.env.REVALIDATE_INTERVAL) || 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
            <Suspense fallback={<Loader />}>{children}</Suspense>
            <FloatingNav />
          </main>
        </ThemeProvider>
        {/* <Analytics />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} /> */}
        <SpeedInsights />
      </body>
    </html>
  );
}
