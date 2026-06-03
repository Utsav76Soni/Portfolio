import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://utsavsoni.dev";

export const siteConfig = {
  name: "Utsav Soni",
  title: "Utsav Soni | React Native Developer & Full Stack Engineer",
  description:
    "Portfolio of Utsav Soni — React Native Developer and Full Stack Engineer building high-performance mobile apps, scalable backends, and modern digital experiences.",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image`,
  keywords: [
    "Utsav Soni",
    "React Native Developer",
    "Full Stack Engineer",
    "Mobile App Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  author: "Utsav Soni",
  email: "sonikutser02@gmail.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};
