"use client";

import { useRef, useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import ConfirmDialog, { type ConfirmDialogHandle } from "@/components/admin/ConfirmDialog";
import { deleteFood } from "@/app/admin/foods/actions";

export default function DeleteFoodButton({ id, name }: { id: string; name: string }) {
  const dialogRef = useRef<ConfirmDialogHandle>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleConfirm() {
    setError(null);
    startTransition(async () => {
      const result = await deleteFood(id);
      if (result.error) {
        setError(result.error);
      } else {
        dialogRef.current?.close();
      }
    });
  }

  return (
    <>
      <button
        type="button"
        aria-label={`Delete ${name}`}
        onClick={() => dialogRef.current?.open()}
        className="rounded p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 size={15} />
      </button>
      <ConfirmDialog
        ref={dialogRef}
        title={`Delete "${name}"?`}
        description={error ?? "This can't be undone. The food's image will also be removed."}
        pending={isPending}
        onConfirm={handleConfirm}
      />
    </>
  );
}
