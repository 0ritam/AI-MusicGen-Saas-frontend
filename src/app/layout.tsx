import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "~/styles/globals.css";
import { Providers } from "~/components/providers";
import { Toaster } from "~/components/ui/sonner";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "MusicSaaS - AI-Powered Music Generation",
  description: "Create amazing music in seconds with AI. Transform your ideas into professional-quality music using advanced AI technology.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className={geist.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}