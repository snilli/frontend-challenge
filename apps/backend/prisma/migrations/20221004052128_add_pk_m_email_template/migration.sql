/*
  Warnings:

  - The primary key for the `m_email_template` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `m_email_template` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "pk_m_email_template";

-- AlterTable
ALTER TABLE "m_email_template" DROP CONSTRAINT "m_email_template_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "email_code" SET DATA TYPE TEXT,
ADD CONSTRAINT "m_email_template_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_email_template" ON "m_email_template"("id");