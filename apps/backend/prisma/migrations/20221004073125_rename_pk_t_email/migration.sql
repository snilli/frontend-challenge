/*
  Warnings:

  - The primary key for the `t_email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `t_email_id` on the `t_email` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `t_email` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "pk_t_email";

-- AlterTable
ALTER TABLE "t_email"
RENAME COLUMN "t_email_id" TO "id";

-- CreateIndex
CREATE UNIQUE INDEX "pk_t_email" ON "t_email"("id");
