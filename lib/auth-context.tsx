"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { logout as logoutAction } from "@/app/auth/actions";

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

interface SupabaseUser {
  id: string;
  email?: string | null;
  user_metadata?: Record<string, unknown> | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const clientRef = useRef<ReturnType<typeof createClient> | null>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    clientRef.current = supabase;

    let active = true;

    function updateFromSession(supabaseUser: SupabaseUser | null) {
      if (!active) return;
      if (!supabaseUser?.email) {
        setUser(null);
        return;
      }
      setUser({
        name:
          (supabaseUser.user_metadata?.full_name as string) ||
          supabaseUser.email.split("@")[0] ||
          "User",
        email: supabaseUser.email,
      });
    }

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      updateFromSession(data.session?.user ?? null);
      setIsHydrated(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      updateFromSession(session?.user ?? null);
      setIsHydrated(true);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const logout = useCallback(() => {
    void logoutAction().then(() => {
      router.push("/login");
    });
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: user !== null,
        isHydrated,
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