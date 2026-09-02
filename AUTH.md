# Auth

LifeWell uses **Neon Auth**, which is currently **Managed Better Auth**: Neon hosts
and manages a Better Auth backend for you, reached via the `@neondatabase/auth`
SDK. It replaced a prior self-hosted Better Auth setup, then briefly a Stack-Auth-based
attempt before landing here — the SDK exposes the same API shape as self-hosted
Better Auth (`signIn.email`, `signUp.email`, `signOut`, `getSession`, `updateUser`),
just proxied through Neon's managed backend instead of a local Prisma-backed instance.

## How it fits together

- **Identity & credentials** live in Neon's managed auth backend, not in our own
  database — reached via `NEON_AUTH_BASE_URL`, not `DATABASE_URL`.
- **App-specific profile data** (age, gender, weight, height) lives in our own
  `Profile` table (`prisma/schema.prisma`), keyed by the auth user's id
  (`session.user.id`). It's created lazily on first access via `requireUser()` in
  [lib/session.ts](lib/session.ts).
- `MealEntry`, `UserTarget`, and `WaterLog` all FK to `Profile.id`.

## Env vars

Set these in `.env` (see `.env.example`):

```
NEON_AUTH_BASE_URL=""      # Neon console → Auth → Configuration
NEON_AUTH_COOKIE_SECRET="" # openssl rand -base64 32
```

## Key files

| File | Purpose |
|---|---|
| [lib/auth/server.ts](lib/auth/server.ts) | `createNeonAuth()` — the single server-side auth instance: all Better Auth server methods plus `.handler()` and `.middleware()`. |
| [lib/auth/client.ts](lib/auth/client.ts) | `createAuthClient()` for browser-side use (`authClient.useSession()`, etc). |
| [app/api/auth/[...path]/route.ts](app/api/auth/%5B...path%5D/route.ts) | Proxies all auth API calls to Neon's managed backend. |
| [proxy.ts](proxy.ts) | This fork's middleware convention (see `AGENTS.md`). Protects `/account/:path*`, redirecting to `/login` if signed out. |
| [app/login](app/login/page.tsx) / [app/signup](app/signup/page.tsx) | Server components that redirect to `/dashboard` if already signed in (`export const dynamic = "force-dynamic"` — required whenever a Server Component calls `auth` methods), then render the client form. |
| [app/login/LoginForm.tsx](app/login/LoginForm.tsx) / [app/signup/SignupForm.tsx](app/signup/SignupForm.tsx) | Our custom-styled forms, using `useActionState` + server actions — same pattern as before. |
| [app/auth/actions.ts](app/auth/actions.ts) | `login`/`signup`/`logout` server actions calling `auth.signIn.email()` / `auth.signUp.email()` / `auth.signOut()`. |
| [lib/auth-context.tsx](lib/auth-context.tsx) | Wraps `authClient.useSession()`, exposing the same `useAuth()` interface [components/Navbar.tsx](components/Navbar.tsx) already used. |
| [lib/session.ts](lib/session.ts) | Server-side helpers: `getSession()`, `requireSession()` (redirects to `/login`), `requireUser()` (returns/creates the `Profile` row). |

## Route protection

Unlike the earlier Stack Auth attempt, this SDK ships an actual edge-safe
`auth.middleware()` — so `/account/*` is protected centrally in `proxy.ts` rather
than per-page. Add more paths to `config.matcher` there as more routes need it.
`/login` and `/signup` additionally redirect *away* from themselves when already
signed in, which middleware's matcher doesn't cover — that's done in each page.

## Social login

Not wired up. The "Continue with Google" buttons in the UI are currently decorative
— the API-methods guide this integration follows only documents
`signIn.email` / `signUp.email` / `signOut` / `getSession` / `updateUser`, no OAuth
method. Check the [Next.js Server SDK reference](https://neon.com/docs/auth/reference/nextjs-server)
before wiring it up.
