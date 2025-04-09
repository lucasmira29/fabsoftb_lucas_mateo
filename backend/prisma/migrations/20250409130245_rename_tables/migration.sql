/*
  Warnings:

  - You are about to drop the `consulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historicoconsulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `horariomedico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recepcionista` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `registromedico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_medico_id_fkey`;

-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_paciente_id_fkey`;

-- DropForeignKey
ALTER TABLE `historicoconsulta` DROP FOREIGN KEY `HistoricoConsulta_consulta_id_fkey`;

-- DropForeignKey
ALTER TABLE `historicoconsulta` DROP FOREIGN KEY `HistoricoConsulta_realizado_por_fkey`;

-- DropForeignKey
ALTER TABLE `horariomedico` DROP FOREIGN KEY `HorarioMedico_medico_id_fkey`;

-- DropForeignKey
ALTER TABLE `medico` DROP FOREIGN KEY `Medico_id_fkey`;

-- DropForeignKey
ALTER TABLE `paciente` DROP FOREIGN KEY `Paciente_id_fkey`;

-- DropForeignKey
ALTER TABLE `recepcionista` DROP FOREIGN KEY `Recepcionista_id_fkey`;

-- DropForeignKey
ALTER TABLE `registromedico` DROP FOREIGN KEY `RegistroMedico_consulta_id_fkey`;

-- DropForeignKey
ALTER TABLE `registromedico` DROP FOREIGN KEY `RegistroMedico_medico_id_fkey`;

-- DropForeignKey
ALTER TABLE `registromedico` DROP FOREIGN KEY `RegistroMedico_paciente_id_fkey`;

-- DropTable
DROP TABLE `consulta`;

-- DropTable
DROP TABLE `historicoconsulta`;

-- DropTable
DROP TABLE `horariomedico`;

-- DropTable
DROP TABLE `medico`;

-- DropTable
DROP TABLE `paciente`;

-- DropTable
DROP TABLE `recepcionista`;

-- DropTable
DROP TABLE `registromedico`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `document` VARCHAR(11) NOT NULL,
    `birthdate` DATE NOT NULL,
    `phone` VARCHAR(15) NULL,
    `postal_code` VARCHAR(8) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('admin', 'medico', 'recepcionista', 'paciente') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `users_document_key`(`document`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicos` (
    `id` INTEGER NOT NULL,
    `crm` VARCHAR(20) NOT NULL,
    `specialty` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `medicos_crm_key`(`crm`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pacientes` (
    `id` INTEGER NOT NULL,
    `history` VARCHAR(191) NULL,
    `allergies` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recepcionistas` (
    `id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consultas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_id` INTEGER NOT NULL,
    `medico_id` INTEGER NOT NULL,
    `date_time` DATETIME(3) NOT NULL,
    `status` ENUM('agendado', 'cancelado', 'realizado') NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historicos_consultas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `consulta_id` INTEGER NOT NULL,
    `acao` ENUM('agendado', 'cancelado', 'reagendado') NOT NULL,
    `realizado_por` INTEGER NOT NULL,
    `data_acao` DATETIME(3) NOT NULL,
    `observacao` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registros_medicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `consulta_id` INTEGER NOT NULL,
    `medico_id` INTEGER NOT NULL,
    `paciente_id` INTEGER NOT NULL,
    `observacoes` VARCHAR(191) NULL,
    `diagnostico` VARCHAR(191) NULL,
    `tratamento` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horarios_medicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `medico_id` INTEGER NOT NULL,
    `day_of_week` ENUM('domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado') NOT NULL,
    `start_time` TIME(0) NOT NULL,
    `end_time` TIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `medicos` ADD CONSTRAINT `medicos_id_fkey` FOREIGN KEY (`id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pacientes` ADD CONSTRAINT `pacientes_id_fkey` FOREIGN KEY (`id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recepcionistas` ADD CONSTRAINT `recepcionistas_id_fkey` FOREIGN KEY (`id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consultas` ADD CONSTRAINT `consultas_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consultas` ADD CONSTRAINT `consultas_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `medicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historicos_consultas` ADD CONSTRAINT `historicos_consultas_consulta_id_fkey` FOREIGN KEY (`consulta_id`) REFERENCES `consultas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historicos_consultas` ADD CONSTRAINT `historicos_consultas_realizado_por_fkey` FOREIGN KEY (`realizado_por`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registros_medicos` ADD CONSTRAINT `registros_medicos_consulta_id_fkey` FOREIGN KEY (`consulta_id`) REFERENCES `consultas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registros_medicos` ADD CONSTRAINT `registros_medicos_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `medicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registros_medicos` ADD CONSTRAINT `registros_medicos_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `horarios_medicos` ADD CONSTRAINT `horarios_medicos_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `medicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
