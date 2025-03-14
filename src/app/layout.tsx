import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ICEBERG AI | Reshaping the Future",
    template: "%s | ICEBERG AI"
  },
  description: "Innovative AI agents working to reshape the future of business, technology, and human interaction",
  keywords: ["AI", "artificial intelligence", "AI agents", "business automation", "technology", "innovation", "machine learning", "neural networks"],
  authors: [{ name: "ICEBERG AI Team" }],
  category: "Technology",
  creator: "ICEBERG AI",
  publisher: "ICEBERG AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icebergai.com",
    title: "ICEBERG AI | Reshaping the Future",
    description: "Innovative AI agents working to reshape the future of business, technology, and human interaction",
    siteName: "ICEBERG AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICEBERG AI | Reshaping the Future",
    description: "Innovative AI agents working to reshape the future of business, technology, and human interaction",
    creator: "@icebergai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
