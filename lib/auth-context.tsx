"use client";

import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { authClient } from "@/lib/auth/client";

interface User {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  isLoggedIn: boolean;
  isHydrated: boolean;
  login: (user: User) => void;
  signup: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, isPending, refetch } = authClient.useSession();
  const router = useRouter();
  const pathname = usePathname();

  // Server actions (login/signup/logout) set the session cookie server-side
  // and redirect — but that's a client-side route transition, so this
  // client-only session store (initialized before the login happened) never
  // learns the cookie changed on its own. Without this, the navbar shows
  // "logged out" until a hard refresh. Refetch whenever the route changes.
  const lastPathname = useRef(pathname);
  useEffect(() => {
    if (lastPathname.current !== pathname) {
      lastPathname.current = pathname;
      refetch();
    }
  }, [pathname, refetch]);

  const user: User | null = session?.user?.email
    ? {
        name: session.user.name || session.user.email.split("@")[0] || "User",
        email: session.user.email,
      }
    : null;

  const logout = useCallback(() => {
    void authClient.signOut().then(() => {
      router.push("/login");
    });
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: user !== null,
        isHydrated: !isPending,
        login: () => {},
        signup: () => {},
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
