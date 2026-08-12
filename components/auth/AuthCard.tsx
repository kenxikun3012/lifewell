"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div
      className="flex min-h-svh flex-col items-center justify-center px-4 py-6 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#EAF7E6" }}
    >
      <div className="flex w-full max-w-[460px] flex-col items-center">
        <div className="mb-4">
          <Image
            src="/lifewell-logo-removebg-preview.png"
            alt="LifeWell"
            width={180}
            height={60}
            priority
          />
        </div>

        <div className="w-full rounded-2xl bg-white px-6 py-6 shadow-lg sm:px-8 sm:py-7">
          {children}
        </div>
      </div>
    </div>
  );
}