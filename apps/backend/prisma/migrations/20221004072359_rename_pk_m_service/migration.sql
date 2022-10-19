/*
  Warnings:

  - The primary key for the `m_service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `service_id` on the `m_service` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `m_service` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `m_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "m_org_service_element" DROP CONSTRAINT "m_org_service_element_service_id_fkey";

-- DropForeignKey
ALTER TABLE "m_package_service" DROP CONSTRAINT "m_package_service_service_id_fkey";

-- DropIndex
DROP INDEX "pk_m_service";

ALTER TABLE "m_service"
RENAME COLUMN "service_id" TO "id";

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_service" ON "m_service"("id");

-- AddForeignKey
ALTER TABLE "m_org_service_element" ADD CONSTRAINT "m_org_service_element_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "m_service"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_package_service" ADD CONSTRAINT "m_package_service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "m_service"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
