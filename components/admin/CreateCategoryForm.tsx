"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  createCategory,
  type CategoryActionState,
} from "@/app/admin/categories/actions";

const initialState: CategoryActionState = {};

export default function CreateCategoryForm() {
  const [state, formAction, pending] = useActionState(createCategory, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="flex items-start gap-2">
      <div className="flex-1">
        <input
          name="name"
          placeholder="New category name"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20"
        />
        {state.error && <p className="mt-1 text-xs text-red-600">{state.error}</p>}
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Adding..." : "Add Category"}
      </Button>
    </form>
  );
}
