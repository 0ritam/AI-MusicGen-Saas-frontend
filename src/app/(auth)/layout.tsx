import "~/styles/globals.css";
import { Providers } from "~/components/providers";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Music SaaS",
  description: "AI Powered Music Generation SaaS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
        <body className="flex min-h-svh flex-col">
            <Providers>
                {children}
                <Toaster />
            </Providers>
            
        </body>
       
    </html>
  );
}
