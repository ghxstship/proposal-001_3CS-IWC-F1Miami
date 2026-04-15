import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3CS x IWC Schaffhausen — F1 Miami Grand Prix Programming | Agora Graphics",
  description: "Comprehensive fabrication and production proposal for IWC Schaffhausen's Formula 1 Miami Grand Prix programming. Custom scenic fabrication, large-format graphics, and experiential production by Agora Graphics.",
  keywords: "IWC Schaffhausen, Formula 1, Miami Grand Prix, scenic fabrication, experiential production, Agora Graphics, Mercedes-AMG Petronas, Miami Design District",
  openGraph: {
    title: "3CS x IWC Schaffhausen — F1 Miami Grand Prix Programming",
    description: "Fabrication & Production Proposal by Agora Graphics",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
