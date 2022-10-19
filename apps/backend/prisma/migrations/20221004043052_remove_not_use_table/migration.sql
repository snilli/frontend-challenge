/*
  Warnings:

  - You are about to drop the `ekyc` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `m_discount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sequelize_data` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `t_ekyc_service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `t_ocr_corrected` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usagetable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "m_discount" DROP CONSTRAINT "m_discount_service_id_fkey";

-- DropTable
DROP TABLE "ekyc";

-- DropTable
DROP TABLE "m_discount";

-- DropTable
DROP TABLE "sequelize_data";

-- DropTable
DROP TABLE "t_ekyc_service";

-- DropTable
DROP TABLE "t_ocr_corrected";

-- DropTable
DROP TABLE "usagetable";

-- DropEnum
DROP TYPE "enum_t_ekyc_service_access_type";
