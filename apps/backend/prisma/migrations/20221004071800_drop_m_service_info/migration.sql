/*
  Warnings:

  - You are about to drop the `m_service_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "m_service_info" DROP CONSTRAINT "m_service_info_service_id_fkey";

-- DropTable
DROP TABLE "m_service_info";
