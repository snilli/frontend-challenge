/*
  Warnings:

  - You are about to drop the `m_package_service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "m_package_service" DROP CONSTRAINT "m_package_service_package_id_fkey";

-- DropForeignKey
ALTER TABLE "m_package_service" DROP CONSTRAINT "m_package_service_service_id_fkey";

-- DropTable
DROP TABLE "m_package_service";
