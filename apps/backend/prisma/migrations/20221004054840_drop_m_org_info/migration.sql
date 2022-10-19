/*
  Warnings:

  - You are about to drop the `m_org_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "m_org_info" DROP CONSTRAINT "m_org_info_org_code_fkey";

-- DropTable
DROP TABLE "m_org_info";
