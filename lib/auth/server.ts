import "server-only";
import { createNeonAuth } from "@neondatabase/auth/next/server";

// Neon Auth (Managed Better Auth). Reads NEON_AUTH_BASE_URL and
// NEON_AUTH_COOKIE_SECRET from the environment — see .env.example.
export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET!,
  },
});
