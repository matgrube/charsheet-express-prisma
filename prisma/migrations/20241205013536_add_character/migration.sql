-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "currentHp" INTEGER NOT NULL,
    "maxHp" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
