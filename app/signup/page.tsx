import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/server";
import { resolvePostAuthPath } from "@/lib/onboarding";
import SignupForm from "./SignupForm";

// Server components using `auth` methods must be rendered dynamically.
export const dynamic = "force-dynamic";

export default async function SignupPage() {
  const { data: session } = await auth.getSession();
  if (session?.user) {
    redirect(await resolvePostAuthPath());
  }

  return <SignupForm />;
}
