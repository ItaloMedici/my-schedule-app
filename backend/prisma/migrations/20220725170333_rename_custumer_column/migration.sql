/*
  Warnings:

  - You are about to drop the column `clientId` on the `schedules` table. All the data in the column will be lost.

*/
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
    "customerId" TEXT,
    CONSTRAINT "schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "schedules_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_schedules" ("appointment", "createdAt", "description", "finished", "id", "observation", "price", "updatedAt", "userId") SELECT "appointment", "createdAt", "description", "finished", "id", "observation", "price", "updatedAt", "userId" FROM "schedules";
DROP TABLE "schedules";
ALTER TABLE "new_schedules" RENAME TO "schedules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
