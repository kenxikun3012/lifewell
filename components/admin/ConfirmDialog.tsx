"use client";

import { useRef, useImperativeHandle, forwardRef } from "react";
import { Button } from "@/components/ui/button";

export interface ConfirmDialogHandle {
  open: () => void;
  close: () => void;
}

interface ConfirmDialogProps {
  title: string;
  description: string;
  confirmLabel?: string;
  pending?: boolean;
  onConfirm: () => void;
}

/** Native <dialog>-backed confirmation modal. Call ref.open() to show it. */
const ConfirmDialog = forwardRef<ConfirmDialogHandle, ConfirmDialogProps>(
  ({ title, description, confirmLabel = "Delete", pending, onConfirm }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => dialogRef.current?.showModal(),
      close: () => dialogRef.current?.close(),
    }));

    return (
      <dialog
        ref={dialogRef}
        className="m-auto w-full max-w-sm rounded-xl border border-gray-200 p-0 shadow-lg backdrop:bg-black/40"
      >
        <div className="p-5">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <p className="mt-1.5 text-sm text-secondary-text">{description}</p>
          <div className="mt-5 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => dialogRef.current?.close()}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="green"
              size="sm"
              className="bg-red-600 hover:bg-red-700"
              disabled={pending}
              onClick={onConfirm}
            >
              {pending ? "Deleting..." : confirmLabel}
            </Button>
          </div>
        </div>
      </dialog>
    );
  }
);

ConfirmDialog.displayName = "ConfirmDialog";

export default ConfirmDialog;
