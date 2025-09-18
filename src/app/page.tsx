import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LandingPage } from "~/components/landing/landing-page";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Show landing page for non-authenticated users
  if (!session) {
    return <LandingPage isAuthenticated={false} />;
  }

  // Redirect authenticated users to the dashboard
  redirect("/dashboard");
}