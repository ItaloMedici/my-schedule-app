/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Client_phone_key";

-- DropIndex
DROP INDEX "Client_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Client";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Costumer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Costumer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "observation" TEXT,
    "price" DECIMAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "appointment" DATETIME NOT NULL,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "clientId" TEXT,
    CONSTRAINT "schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "schedules_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Costumer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_schedules" ("appointment", "clientId", "createdAt", "description", "finished", "id", "observation", "price", "updatedAt", "userId") SELECT "appointment", "clientId", "createdAt", "description", "finished", "id", "observation", "price", "updatedAt", "userId" FROM "schedules";
DROP TABLE "schedules";
ALTER TABLE "new_schedules" RENAME TO "schedules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_email_key" ON "Costumer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_phone_key" ON "Costumer"("phone");
