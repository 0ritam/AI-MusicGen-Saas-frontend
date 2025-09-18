import { redirect } from "next/navigation";

export default async function MainPage() {
  // Redirect to dashboard since this is now handled at the root
  redirect("/dashboard");
}
