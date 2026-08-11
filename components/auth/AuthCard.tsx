"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div
      className="flex min-h-svh flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#EAF7E6" }}
    >
      <div className="flex w-full max-w-[700px] flex-col items-center">
        <div className="mb-8">
          <Image
            src="/lifewell-logo-removebg-preview.png"
            alt="LifeWell"
            width={250}
            height={85}
            priority
          />
        </div>

        <div className="w-full rounded-[24px] bg-white px-8 py-10 shadow-lg sm:px-12 sm:py-12">
          {children}
        </div>
      </div>
    </div>
  );
}