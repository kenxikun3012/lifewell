-- CreateTable
CREATE TABLE "pet_states" (
    "id" TEXT NOT NULL,
    "body_size" INTEGER NOT NULL DEFAULT 3,
    "muscle_level" INTEGER NOT NULL DEFAULT 2,
    "puffiness_level" INTEGER NOT NULL DEFAULT 2,
    "glow_level" INTEGER NOT NULL DEFAULT 2,
    "last_evaluated_week_start" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pet_states_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pet_states" ADD CONSTRAINT "pet_states_id_fkey" FOREIGN KEY ("id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

