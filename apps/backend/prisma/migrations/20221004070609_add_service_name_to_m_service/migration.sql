/*
  Warnings:

  - Added the required column `service_name` to the `m_service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "m_service" ADD COLUMN     "service_name" VARCHAR(200);
UPDATE "m_service" SET 
service_name = m_service_info.service_name
FROM m_service_info
WHERE m_service.service_id = m_service_info.service_id AND m_service_info.lang_code = 'en';
ALTER TABLE "m_service" ALTER COLUMN "service_name" SET NOT NULL;
