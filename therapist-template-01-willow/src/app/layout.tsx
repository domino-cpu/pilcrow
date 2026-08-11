import type { Metadata } from "next";
import "./globals.css";
import { fraunces, inter } from "@/lib/fonts";
import { brandStyle } from "@/lib/brand";
import { site } from "@content/site";
import { SkipLink } from "@/components/ui/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.practiceName} · Therapy in ${site.city}, ${site.state}`,
    template: `%s · ${site.practiceName}`,
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.practiceName} · Therapy in ${site.city}, ${site.state}`,
    description: site.tagline,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.practiceName}, therapy in ${site.city}, ${site.state}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.practiceName} · Therapy in ${site.city}, ${site.state}`,
    description: site.tagline,
    images: ["/images/og-image.jpg"],
  },
  robots: site.demoMode
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Set the `js` class before first paint so scroll-reveal elements are
          hidden only when JavaScript is actually available. Without JS, all
          content stays visible (see .reveal rules in globals.css).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body style={brandStyle()}>
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
