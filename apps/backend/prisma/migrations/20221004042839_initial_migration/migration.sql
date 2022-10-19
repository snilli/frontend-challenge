-- CreateEnum
CREATE TYPE "enum_t_ekyc_service_access_type" AS ENUM ('API_KEY', 'AMAZON_COGNITO');

-- CreateTable
CREATE TABLE "m_email_template" (
    "email_code" VARCHAR(50) NOT NULL,
    "email_subject" VARCHAR(200) NOT NULL,
    "email_body" TEXT NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "m_email_template_pkey" PRIMARY KEY ("email_code")
);

-- CreateTable
CREATE TABLE "m_org" (
    "org_code" VARCHAR(50) NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50) NOT NULL,
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50) NOT NULL,
    "is_allow_exceed_limit" BOOLEAN DEFAULT false,
    "delete_date" TIMESTAMPTZ(6),
    "is_demo" BOOLEAN NOT NULL DEFAULT false,
    "usage_plan_id" VARCHAR(100),

    CONSTRAINT "m_org_pkey" PRIMARY KEY ("org_code")
);

-- CreateTable
CREATE TABLE "m_org_info" (
    "org_code" VARCHAR(50) NOT NULL,
    "lang_code" VARCHAR(3) NOT NULL,
    "org_name" VARCHAR(200) NOT NULL,
    "address" TEXT,
    "email" VARCHAR(100),
    "tel_no" VARCHAR(100),
    "fax_no" VARCHAR(100),
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" TEXT,
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),
    "admin_email" VARCHAR(100),
    "delete_date" TIMESTAMPTZ(6),
    "is_demo" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "m_org_info_pkey" PRIMARY KEY ("org_code","lang_code")
);

-- CreateTable
CREATE TABLE "m_org_key_mapping" (
    "org_code" VARCHAR(50) NOT NULL,
    "ref_key" VARCHAR(100) NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),
    "delete_date" TIMESTAMPTZ(6),
    "key_type" VARCHAR(10) NOT NULL DEFAULT 'username',
    "api_key_name" VARCHAR(50),
    "api_key_value" VARCHAR(50),

    CONSTRAINT "m_org_key_mapping_pkey" PRIMARY KEY ("org_code","ref_key")
);

-- CreateTable
CREATE TABLE "m_org_package" (
    "org_code" VARCHAR(50) NOT NULL,
    "package_id" INTEGER NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),
    "start_date" TIMESTAMPTZ(6),
    "expire_date" TIMESTAMPTZ(6),
    "org_package_id" SERIAL NOT NULL,
    "active_status" BOOLEAN DEFAULT false,
    "credit_remain" DECIMAL(10,2) NOT NULL DEFAULT 0.0,
    "delete_date" TIMESTAMPTZ(6),
    "contract_no" VARCHAR(50),

    CONSTRAINT "m_org_package_pkey" PRIMARY KEY ("org_package_id")
);

-- CreateTable
CREATE TABLE "m_org_service_access" (
    "org_code" VARCHAR(50) NOT NULL,
    "service_id" INTEGER NOT NULL,
    "active_status" CHAR(1) NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "m_org_service_access_pkey" PRIMARY KEY ("org_code")
);

-- CreateTable
CREATE TABLE "m_org_service_element" (
    "service_element_id" SERIAL NOT NULL,
    "org_code" VARCHAR(50) NOT NULL,
    "service_id" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "customer_url" VARCHAR(500),
    "conf_element_json" JSON,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),
    "delete_date" TIMESTAMPTZ(6),

    CONSTRAINT "m_org_service_element_pkey" PRIMARY KEY ("service_element_id")
);

-- CreateTable
CREATE TABLE "m_package" (
    "package_id" SERIAL NOT NULL,
    "package_name" VARCHAR(200) NOT NULL,
    "limit_usage" INTEGER NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),
    "almost_limit" INTEGER,

    CONSTRAINT "m_package_pkey" PRIMARY KEY ("package_id")
);

-- CreateTable
CREATE TABLE "m_package_service" (
    "package_service_id" SERIAL NOT NULL,
    "package_id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "m_package_service_pkey" PRIMARY KEY ("package_service_id")
);

-- CreateTable
CREATE TABLE "m_service" (
    "service_id" INTEGER NOT NULL,
    "service_path" VARCHAR(100) NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "m_service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "m_service_info" (
    "service_id" INTEGER NOT NULL,
    "lang_code" VARCHAR(3) NOT NULL,
    "service_name" VARCHAR(200) NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "m_service_info_pkey" PRIMARY KEY ("service_id","lang_code")
);

-- CreateTable
CREATE TABLE "t_document_identifier" (
    "doc_id" VARCHAR(50) NOT NULL,
    "api_id" VARCHAR(100) NOT NULL,
    "total_page" INTEGER NOT NULL,
    "total_service_usage" INTEGER NOT NULL,
    "total_credit_usage" DECIMAL(10,2) NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_document_identifier_pkey" PRIMARY KEY ("doc_id")
);

-- CreateTable
CREATE TABLE "t_document_identifier_service" (
    "service_id" SERIAL NOT NULL,
    "doc_id" VARCHAR(50) NOT NULL,
    "service_path" VARCHAR(100) NOT NULL,
    "status_code" INTEGER,
    "status_message" VARCHAR(255),
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_document_identifier_service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "t_email" (
    "t_email_id" SERIAL NOT NULL,
    "email_admin" VARCHAR(100) NOT NULL,
    "email_org" VARCHAR(100) NOT NULL,
    "email_code" VARCHAR(50) NOT NULL,
    "org_package_id" INTEGER NOT NULL,
    "sent_status" BOOLEAN NOT NULL DEFAULT false,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "t_email_pkey" PRIMARY KEY ("t_email_id")
);

-- CreateTable
CREATE TABLE "t_integration" (
    "id" VARCHAR(255) NOT NULL,
    "org_code" VARCHAR(50) NOT NULL,
    "module" VARCHAR(30) NOT NULL,
    "module_type" VARCHAR(30),
    "action_at" TIMESTAMPTZ(6) NOT NULL,
    "result" JSONB,
    "create_date" TIMESTAMPTZ(6) NOT NULL,
    "update_date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "t_integration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_ocr_corrected" (
    "transaction_id" UUID NOT NULL,
    "ref_key" VARCHAR(100),
    "transaction_ref" VARCHAR(50),
    "service_path" VARCHAR(100),
    "err_distance_json" JSON NOT NULL,
    "n_total_field" INTEGER NOT NULL,
    "n_error_field" INTEGER NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),
    "credit_usage" DECIMAL(5,2),

    CONSTRAINT "t_ocr_corrected_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "t_usage" (
    "transaction_id" UUID NOT NULL,
    "api_id" VARCHAR(100) NOT NULL,
    "user_id" VARCHAR(100),
    "service_path" VARCHAR(100),
    "transaction_time" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status_code" INTEGER,
    "latency_ms" INTEGER,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "t_usage_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "ekyc" (
    "reference_number" VARCHAR(50) NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "auth_key" VARCHAR(50),

    CONSTRAINT "ekyc_pkey" PRIMARY KEY ("reference_number")
);

-- CreateTable
CREATE TABLE "m_discount" (
    "discount_id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "map_field_start" INTEGER NOT NULL,
    "map_field_end" INTEGER NOT NULL,
    "discount_per_field" DOUBLE PRECISION NOT NULL,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" VARCHAR(50),
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" VARCHAR(50),

    CONSTRAINT "m_discount_pkey" PRIMARY KEY ("discount_id")
);

-- CreateTable
CREATE TABLE "sequelize_data" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "sequelize_data_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "t_ekyc_service" (
    "service_id" SERIAL NOT NULL,
    "reference_number" VARCHAR(50) NOT NULL,
    "service_endpoint" VARCHAR(255) NOT NULL,
    "service_mutation" VARCHAR(50) NOT NULL,
    "access_type" "enum_t_ekyc_service_access_type" NOT NULL,
    "auth_key" VARCHAR(50) NOT NULL,
    "status_code" INTEGER,
    "status_message" VARCHAR(255),
    "latency" INTEGER NOT NULL DEFAULT 0,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "results" JSONB,

    CONSTRAINT "t_ekyc_service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "usagetable" (
    "apikey" VARCHAR,
    "serviceid" UUID,
    "date" VARCHAR
);

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_email_template" ON "m_email_template"("email_code");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_org" ON "m_org"("org_code");

-- CreateIndex
CREATE INDEX "m_org_usage_plan_id" ON "m_org"("usage_plan_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_org_info" ON "m_org_info"("org_code", "lang_code");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_org_key_mapping" ON "m_org_key_mapping"("org_code", "ref_key");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_org_package" ON "m_org_package"("org_package_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_org_service_access" ON "m_org_service_access"("org_code");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_org_service_element" ON "m_org_service_element"("service_element_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_package" ON "m_package"("package_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_package_service" ON "m_package_service"("package_service_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_service" ON "m_service"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_service_info" ON "m_service_info"("service_id", "lang_code");

-- CreateIndex
CREATE UNIQUE INDEX "pk_t_document_identifier" ON "t_document_identifier"("doc_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_t_document_identifier_service" ON "t_document_identifier_service"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_t_email" ON "t_email"("t_email_id");

-- CreateIndex
CREATE INDEX "t_integration_module" ON "t_integration"("module");

-- CreateIndex
CREATE INDEX "t_integration_module_type" ON "t_integration"("module_type");

-- CreateIndex
CREATE UNIQUE INDEX "pk_t_ocr_corrected" ON "t_ocr_corrected"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_t_usage" ON "t_usage"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "pk_m_discount" ON "m_discount"("discount_id");

-- AddForeignKey
ALTER TABLE "m_org_info" ADD CONSTRAINT "m_org_info_org_code_fkey" FOREIGN KEY ("org_code") REFERENCES "m_org"("org_code") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_org_key_mapping" ADD CONSTRAINT "m_org_key_mapping_org_code_fkey" FOREIGN KEY ("org_code") REFERENCES "m_org"("org_code") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_org_package" ADD CONSTRAINT "fk_m_org_package_org_code" FOREIGN KEY ("org_code") REFERENCES "m_org"("org_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_org_package" ADD CONSTRAINT "fk_m_org_package_package_id" FOREIGN KEY ("package_id") REFERENCES "m_package"("package_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_org_service_element" ADD CONSTRAINT "m_org_service_element_org_code_fkey" FOREIGN KEY ("org_code") REFERENCES "m_org"("org_code") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_org_service_element" ADD CONSTRAINT "m_org_service_element_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "m_service"("service_id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_package_service" ADD CONSTRAINT "m_package_service_package_id_fkey" FOREIGN KEY ("package_id") REFERENCES "m_package"("package_id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_package_service" ADD CONSTRAINT "m_package_service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "m_service"("service_id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_service_info" ADD CONSTRAINT "m_service_info_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "m_service"("service_id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_document_identifier_service" ADD CONSTRAINT "t_document_identifier_service_doc_id_fkey" FOREIGN KEY ("doc_id") REFERENCES "t_document_identifier"("doc_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_integration" ADD CONSTRAINT "t_integration_org_code_fkey" FOREIGN KEY ("org_code") REFERENCES "m_org"("org_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "m_discount" ADD CONSTRAINT "m_discount_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "m_service"("service_id") ON DELETE NO ACTION ON UPDATE CASCADE;
