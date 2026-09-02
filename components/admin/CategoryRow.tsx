"use client";

import { useActionState, useRef, useState } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";
import ConfirmDialog, { type ConfirmDialogHandle } from "@/components/admin/ConfirmDialog";
import {
  renameCategory,
  deleteCategory,
  type CategoryActionState,
} from "@/app/admin/categories/actions";

interface CategoryRowProps {
  id: string;
  name: string;
  foodCount: number;
}

const initialState: CategoryActionState = {};

export default function CategoryRow({ id, name, foodCount }: CategoryRowProps) {
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(name);

  const [renameState, renameAction, renamePending] = useActionState(
    renameCategory,
    initialState
  );
  const [deleteState, deleteAction, deletePending] = useActionState(
    deleteCategory,
    initialState
  );

  const deleteFormRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<ConfirmDialogHandle>(null);

  // Close edit mode after a successful rename. Adjusting state during render
  // (rather than in an effect) avoids an extra cascading render pass; per
  // React's "adjusting state" pattern this must use useState, not a ref.
  const [lastRenameSuccess, setLastRenameSuccess] = useState(renameState.success);
  if (renameState.success !== lastRenameSuccess) {
    setLastRenameSuccess(renameState.success);
    if (renameState.success && editing) setEditing(false);
  }

  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-3 pl-4 pr-2">
        {editing ? (
          <form
            action={renameAction}
            className="flex items-center gap-2"
            onSubmit={(e) => {
              if (!draftName.trim()) e.preventDefault();
            }}
          >
            <input type="hidden" name="id" value={id} />
            <input
              name="name"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              autoFocus
              className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green/30"
            />
            <button
              type="submit"
              disabled={renamePending}
              aria-label="Save"
              className="rounded p-1 text-primary-green hover:bg-gray-100 disabled:opacity-50"
            >
              <Check size={16} />
            </button>
            <button
              type="button"
              aria-label="Cancel"
              onClick={() => {
                setDraftName(name);
                setEditing(false);
              }}
              className="rounded p-1 text-gray-400 hover:bg-gray-100"
            >
              <X size={16} />
            </button>
          </form>
        ) : (
          <span className="text-sm font-medium text-gray-900">{name}</span>
        )}
        {renameState.error && editing && (
          <p className="mt-1 text-xs text-red-600">{renameState.error}</p>
        )}
      </td>
      <td className="py-3 px-2 text-sm text-secondary-text">{foodCount}</td>
      <td className="py-3 pl-2 pr-4 text-right">
        {!editing && (
          <div className="inline-flex items-center gap-1">
            <button
              type="button"
              aria-label="Rename"
              onClick={() => setEditing(true)}
              className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <Pencil size={15} />
            </button>
            <button
              type="button"
              aria-label="Delete"
              onClick={() => dialogRef.current?.open()}
              className="rounded p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={15} />
            </button>
          </div>
        )}
        {deleteState.error && (
          <p className="mt-1 text-xs text-red-600">{deleteState.error}</p>
        )}

        <form ref={deleteFormRef} action={deleteAction} className="hidden">
          <input type="hidden" name="id" value={id} />
        </form>
        <ConfirmDialog
          ref={dialogRef}
          title={`Delete "${name}"?`}
          description={
            foodCount > 0
              ? `This category is used by ${foodCount} food${foodCount === 1 ? "" : "s"} and can't be deleted until they're recategorized or removed.`
              : "This can't be undone."
          }
          pending={deletePending}
          onConfirm={() => deleteFormRef.current?.requestSubmit()}
        />
      </td>
    </tr>
  );
}
