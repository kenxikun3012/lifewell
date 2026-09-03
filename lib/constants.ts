/**
 * Small shared constants used across "use server" action files, which — per
 * Next.js's Server Actions rules — may only export async functions (plain
 * value exports break the build). Anything both a server-action file and a
 * plain module (e.g. lib/pet.ts) need to share lives here instead.
 */

/**
 * Default daily water goal. Not user-configurable yet — the target-setting
 * flow (UserTarget) only covers the 4 macro Nutrients; water isn't a
 * Nutrient row in this schema, so it stays a simple constant for now.
 */
export const WATER_GOAL_ML = 2000;
