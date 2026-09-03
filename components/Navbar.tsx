"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getUnreadNotificationCount } from "@/app/notifications/actions";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Meal Tracker", href: "/meal-tracker" },
  { label: "BMI", href: "/bmi" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const { user, isLoggedIn, isHydrated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const showLoggedIn = isHydrated && isLoggedIn;
  const pathname = usePathname();

  // Refetching the unread count from the server on login state / route
  // change is the "subscribe to an external system" case React's effect
  // docs call legitimate — there's no way to know the server-side count
  // without asking it.
  useEffect(() => {
    if (!showLoggedIn) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnreadCount(0);
      return;
    }
    getUnreadNotificationCount()
      .then(setUnreadCount)
      .catch(() => setUnreadCount(0));
  }, [showLoggedIn, pathname]);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/lifewell-logo-removebg-preview.png"
              alt="LifeWell Logo"
              width={160}
              height={80}
            />
          </Link>

          {/* Desktop Navigation */}
          {showLoggedIn && (
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary-text text-sm font-medium hover:text-primary-green transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!isHydrated ? (
              /* Placeholder while the stored auth state is being restored */
              <div className="flex items-center gap-3" aria-hidden="true">
                <span className="h-9 w-24 rounded-lg bg-gray-100 animate-pulse" />
                <span className="h-9 w-24 rounded-lg bg-gray-100 animate-pulse" />
              </div>
            ) : showLoggedIn ? (
              <>
                {/* Notification Icon */}
                <Link
                  href="/notifications"
                  className="relative p-2 text-secondary-text hover:text-primary-green transition-colors rounded-full hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  {unreadCount > 0 && (
                    <span className="absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                  )}
                </Link>

                {/* Profile photo/icon + user name -> Account page */}
                <Link
                  href="/account"
                  className="flex items-center gap-2 text-secondary-text hover:text-primary-green transition-colors"
                >
                  {user?.image ? (
                    <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
                      <Image src={user.image} alt="" fill className="object-cover" />
                    </span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                  <span className="text-sm font-medium">{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-semibold text-secondary-text border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-primary-green transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-semibold text-primary-green border-2 border-primary-green rounded-lg hover:bg-primary-green hover:text-white transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm font-semibold text-white bg-primary-green rounded-lg hover:bg-[#52a045] transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-secondary-text hover:text-primary-green transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && isHydrated && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {isLoggedIn ? (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-secondary-text text-sm font-medium hover:text-primary-green transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/notifications"
                  className="flex items-center justify-between py-2 text-secondary-text text-sm font-medium hover:text-primary-green transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Notifications</span>
                  {unreadCount > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                  )}
                </Link>
                <Link
                  href="/account"
                  className="flex items-center gap-2 py-2 text-secondary-text text-sm font-medium hover:text-primary-green transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {user?.image ? (
                    <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full">
                      <Image src={user.image} alt="" fill className="object-cover" />
                    </span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                  <span>Account</span>
                </Link>
                <hr className="border-gray-100" />
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-secondary-text">
                    {user?.name}
                  </span>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                    }}
                    className="px-4 py-2 text-sm font-semibold text-secondary-text border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-primary-green transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-sm font-semibold text-primary-green border-2 border-primary-green rounded-lg hover:bg-primary-green hover:text-white transition-all duration-200 text-center"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-sm font-semibold text-white bg-primary-green rounded-lg hover:bg-[#52a045] transition-all duration-200 text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}