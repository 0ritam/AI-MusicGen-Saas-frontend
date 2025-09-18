import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - MusicSaaS",
  description: "Sign in to AI Powered Music Generation SaaS",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-svh flex-col">
      {children}
    </div>
  );
}
