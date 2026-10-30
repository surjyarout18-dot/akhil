import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akhil Baiju | Hospitality, Sales & Marketing Professional",
  description:
    "Explore Akhil Baiju's professional portfolio, showcasing hospitality experience, culinary arts, guest relations, sales, marketing and customer experience.",
  keywords: [
    "Akhil Baiju",
    "Hospitality Professional",
    "Sales and Marketing",
    "Culinary Arts",
    "Grand Hyatt Bolgatty",
    "IHM Goa",
    "Guest Relations",
    "Luxury Hospitality",
    "Food and Beverage Management",
  ],
  authors: [{ name: "Akhil Baiju" }],
  creator: "Akhil Baiju",
  publisher: "Akhil Baiju",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: "Akhil Baiju | Hospitality, Sales & Marketing Professional",
    description:
      "Creating meaningful experiences through hospitality, communication and the art of service. Graduate of IHM Goa with luxury immersion at Grand Hyatt Bolgatty.",
    url: "https://akhilbaiju.com",
    siteName: "Akhil Baiju Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Baiju | Hospitality, Sales & Marketing Professional",
    description:
      "Where culinary creativity meets the art of hospitality. Portfolio of Akhil Baiju.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10100F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='85' fill='%23C8AD7C'>AB</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#10100F] text-[#E9E2D5] selection:bg-[#C8AD7C] selection:text-[#10100F] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
