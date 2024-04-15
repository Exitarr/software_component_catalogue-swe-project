/*
  Warnings:

  - You are about to drop the column `content` on the `components` table. All the data in the column will be lost.
  - Added the required column `code` to the `components` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `components` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "components" DROP COLUMN "content",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
