import "server-only";
import { ImageKit } from "@imagekit/nodejs";

// Constructed lazily (not at module load) — the ImageKit client throws
// immediately if IMAGEKIT_PRIVATE_KEY is unset, which would otherwise crash
// every page that imports this module rather than just the upload action.
let imagekit: ImageKit | null = null;
function getClient(): ImageKit {
  if (!imagekit) {
    imagekit = new ImageKit({ privateKey: process.env.IMAGEKIT_PRIVATE_KEY });
  }
  return imagekit;
}

const FOLDER = "/lifewell/foods";

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

export const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5MB

export function validateFoodImage(file: File): string | null {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type as (typeof ALLOWED_IMAGE_TYPES)[number])) {
    return "Image must be JPG, JPEG, PNG, or WebP.";
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return "Image must be 5MB or smaller.";
  }
  return null;
}

export interface UploadedFoodImage {
  url: string;
  fileId: string;
}

/** Uploads a food image to ImageKit and returns its URL + fileId. */
export async function uploadFoodImage(file: File): Promise<UploadedFoodImage> {
  const ext = file.type.split("/")[1] ?? "jpg";
  const fileName = `${crypto.randomUUID()}.${ext}`;

  const result = await getClient().files.upload({
    file,
    fileName,
    folder: FOLDER,
    useUniqueFileName: false,
  });

  if (!result.url || !result.fileId) {
    throw new Error("ImageKit upload did not return a url/fileId.");
  }

  return { url: result.url, fileId: result.fileId };
}

/**
 * Best-effort deletion of a food image from ImageKit, given the fileId we
 * stored on the Food row at upload time. Never throws — a failed cleanup
 * shouldn't block a food delete/replace.
 */
export async function deleteFoodImage(fileId: string | null): Promise<void> {
  if (!fileId) return;

  try {
    await getClient().files.delete(fileId);
  } catch (error) {
    console.error("Failed to delete ImageKit image", fileId, error);
  }
}
