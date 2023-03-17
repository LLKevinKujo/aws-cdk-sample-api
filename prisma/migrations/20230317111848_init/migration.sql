-- CreateTable
CREATE TABLE "player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "country" TEXT NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);
