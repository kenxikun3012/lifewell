"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  signup: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "lifewell_user";

function readStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(readStoredUser);
  const router = useRouter();

  const persist = useCallback((nextUser: User | null) => {
    setUser(nextUser);
    if (nextUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const login = useCallback(
    (nextUser: User) => {
      persist(nextUser);
      router.push("/");
    },
    [persist, router]
  );

  const signup = useCallback(
    (nextUser: User) => {
      persist(nextUser);
      router.push("/");
    },
    [persist, router]
  );

  const logout = useCallback(() => {
    persist(null);
    router.push("/login");
  }, [persist, router]);

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: user !== null, login, signup, logout }}
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