import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abrar Mahmud Hasan — Software Engineer",
  description:
    "Portfolio of Abrar Mahmud Hasan — backend-focused AI engineer specialising in distributed systems and machine learning.",
  keywords: [
    "Abrar Mahmud Hasan",
    "software engineer",
    "backend developer",
    "AI engineer",
    "Next.js portfolio",
  ],
  authors: [{ name: "Abrar Mahmud Hasan" }],
  openGraph: {
    title: "Abrar Mahmud Hasan — Software Engineer",
    description:
      "Portfolio of Abrar Mahmud Hasan — backend-focused AI engineer specialising in distributed systems and machine learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
