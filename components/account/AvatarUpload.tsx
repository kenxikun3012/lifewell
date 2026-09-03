"use client";

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  updateAvatar,
  removeAvatar,
  type AvatarActionState,
} from "@/app/account/actions";
import { useAuth } from "@/lib/auth-context";

interface AvatarUploadProps {
  currentUrl: string | null;
  name: string;
}

const initialState: AvatarActionState = {};

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function AvatarUpload({ currentUrl, name }: AvatarUploadProps) {
  const [state, formAction, pending] = useActionState(updateAvatar, initialState);
  const [removing, startRemoveTransition] = useTransition();
  const [removeError, setRemoveError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { refreshSession } = useAuth();

  const busy = pending || removing;

  // The account page's server-fetched `currentUrl` prop and the Navbar's
  // client-side session store both need to learn about a successful change
  // — neither updates on its own from inside this action.
  useEffect(() => {
    if (state.success) {
      router.refresh();
      refreshSession();
    }
  }, [state.success, router, refreshSession]);

  return (
    <div className="mb-8 flex items-center gap-5">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-200">
        {currentUrl ? (
          <Image src={currentUrl} alt={name || "Profile photo"} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-gray-500">
            {initials(name)}
          </div>
        )}
      </div>

      <div>
        <form ref={formRef} action={formAction} className="flex flex-wrap items-center gap-3">
          <input
            ref={inputRef}
            type="file"
            name="image"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            className="hidden"
            onChange={() => formRef.current?.requestSubmit()}
          />
          <button
            type="button"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
          >
            {pending ? "Uploading..." : currentUrl ? "Change photo" : "Upload photo"}
          </button>
          {currentUrl && (
            <button
              type="button"
              disabled={busy}
              onClick={() => {
                setRemoveError(null);
                startRemoveTransition(async () => {
                  const result = await removeAvatar();
                  if (result.error) {
                    setRemoveError(result.error);
                  } else {
                    router.refresh();
                    refreshSession();
                  }
                });
              }}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 disabled:opacity-50"
            >
              {removing ? "Removing..." : "Remove"}
            </button>
          )}
        </form>
        <p className="mt-2 text-xs text-gray-400">JPG, PNG, or WebP. Max 5MB.</p>
        {state.error && <p className="mt-1 text-xs text-red-500">{state.error}</p>}
        {removeError && <p className="mt-1 text-xs text-red-500">{removeError}</p>}
      </div>
    </div>
  );
}
