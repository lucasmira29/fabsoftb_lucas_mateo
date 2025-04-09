-- CreateTable
CREATE TABLE `User` (
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

    UNIQUE INDEX `User_document_key`(`document`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medico` (
    `id` INTEGER NOT NULL,
    `crm` VARCHAR(20) NOT NULL,
    `specialty` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Medico_crm_key`(`crm`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paciente` (
    `id` INTEGER NOT NULL,
    `history` VARCHAR(191) NULL,
    `allergies` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recepcionista` (
    `id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Consulta` (
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
CREATE TABLE `HistoricoConsulta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `consulta_id` INTEGER NOT NULL,
    `acao` ENUM('agendado', 'cancelado', 'reagendado') NOT NULL,
    `realizado_por` INTEGER NOT NULL,
    `data_acao` DATETIME(3) NOT NULL,
    `observacao` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegistroMedico` (
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
CREATE TABLE `HorarioMedico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `medico_id` INTEGER NOT NULL,
    `day_of_week` ENUM('domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado') NOT NULL,
    `start_time` TIME(0) NOT NULL,
    `end_time` TIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Medico` ADD CONSTRAINT `Medico_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paciente` ADD CONSTRAINT `Paciente_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recepcionista` ADD CONSTRAINT `Recepcionista_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoConsulta` ADD CONSTRAINT `HistoricoConsulta_consulta_id_fkey` FOREIGN KEY (`consulta_id`) REFERENCES `Consulta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoConsulta` ADD CONSTRAINT `HistoricoConsulta_realizado_por_fkey` FOREIGN KEY (`realizado_por`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroMedico` ADD CONSTRAINT `RegistroMedico_consulta_id_fkey` FOREIGN KEY (`consulta_id`) REFERENCES `Consulta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroMedico` ADD CONSTRAINT `RegistroMedico_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroMedico` ADD CONSTRAINT `RegistroMedico_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HorarioMedico` ADD CONSTRAINT `HorarioMedico_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
