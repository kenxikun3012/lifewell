"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Copy, Mail, Phone } from "lucide-react";

const CONTACT_EMAIL = "support@lifewell.com";
const CONTACT_PHONE = "+95 9 123 456 789";

type IconType = (props: { className?: string }) => React.ReactNode;

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function TelegramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function TiktokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const SOCIAL_LINKS: { name: string; href: string; Icon: IconType }[] = [
  { name: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  { name: "Telegram", href: "https://t.me/", Icon: TelegramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/", Icon: TiktokIcon },
];

export default function Footer() {
  const [copied, setCopied] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyToClipboard = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCopied(key);
    timeoutRef.current = setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="shrink-0">
              <Image
                src="/lifewell-logo-removebg-preview.png"
                alt="LifeWell Logo"
                width={160}
                height={80}
              />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
              Track your nutrition, reach your goals, and live well every day.
            </p>
          </div>

          {/* Social media */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-green-100 hover:text-green-600"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Contact Us
            </h3>

            <button
              type="button"
              onClick={() => copyToClipboard("email", CONTACT_EMAIL)}
              className="group flex items-center gap-2 text-sm text-gray-600 transition hover:text-green-600"
              title="Click to copy email"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span>{CONTACT_EMAIL}</span>
              {copied === "email" ? (
                <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                  <Check className="h-3.5 w-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:opacity-100" />
              )}
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard("phone", CONTACT_PHONE)}
              className="group flex items-center gap-2 text-sm text-gray-600 transition hover:text-green-600"
              title="Click to copy phone number"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>{CONTACT_PHONE}</span>
              {copied === "phone" ? (
                <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                  <Check className="h-3.5 w-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:opacity-100" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LifeWell. All rights reserved.</p>
          <p>Made with 💚 for healthier living</p>
        </div>
      </div>
    </footer>
  );
}