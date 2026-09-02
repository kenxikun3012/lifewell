import { auth } from "@/lib/auth/server";

export default auth.middleware({
  loginUrl: "/login",
});

export const config = {
  // Authentication only — the /admin role check (single administrator,
  // identified by ADMIN_EMAIL) happens server-side in app/admin/layout.tsx
  // and independently inside every admin server action.
  matcher: ["/account/:path*", "/admin/:path*", "/onboarding/:path*"],
};
