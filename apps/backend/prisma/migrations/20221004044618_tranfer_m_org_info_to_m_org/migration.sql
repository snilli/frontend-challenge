/*
  Warnings:

  - Added the required column `org_name` to the `m_org` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "m_org" ADD COLUMN     "address" TEXT,
ADD COLUMN     "admin_email" VARCHAR(100),
ADD COLUMN     "fax_no" VARCHAR(100),
ADD COLUMN     "org_name" VARCHAR(200),
ADD COLUMN     "tel_no" VARCHAR(100);
UPDATE "m_org" SET 
admin_email = m_org_info.admin_email,
fax_no = m_org_info.fax_no,
org_name = m_org_info.org_name,
tel_no = m_org_info.tel_no
FROM m_org_info
WHERE m_org.org_code = m_org_info.org_code AND m_org_info.lang_code = 'en';

DELETE FROM m_org
WHERE m_org.org_name is NULL;
ALTER TABLE "m_org" ALTER COLUMN "org_name" SET NOT NULL;
