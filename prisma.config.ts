import "dotenv/config";
import { defineConfig, env } from "prisma/config";

const datasourceUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;

if (!datasourceUrl) {
  throw new Error("Set DIRECT_URL or DATABASE_URL (Neon Postgres).");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env(process.env.DIRECT_URL ? "DIRECT_URL" : "DATABASE_URL"),
  },
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
});
