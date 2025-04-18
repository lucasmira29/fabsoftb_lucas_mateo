/*
  Warnings:

  - The primary key for the `consultas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `historicos_consultas` DROP FOREIGN KEY `historicos_consultas_consulta_id_fkey`;

-- DropForeignKey
ALTER TABLE `registros_medicos` DROP FOREIGN KEY `registros_medicos_consulta_id_fkey`;

-- DropIndex
DROP INDEX `historicos_consultas_consulta_id_fkey` ON `historicos_consultas`;

-- DropIndex
DROP INDEX `registros_medicos_consulta_id_fkey` ON `registros_medicos`;

-- AlterTable
ALTER TABLE `consultas` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `historicos_consultas` MODIFY `consulta_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `registros_medicos` MODIFY `consulta_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `historicos_consultas` ADD CONSTRAINT `historicos_consultas_consulta_id_fkey` FOREIGN KEY (`consulta_id`) REFERENCES `consultas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registros_medicos` ADD CONSTRAINT `registros_medicos_consulta_id_fkey` FOREIGN KEY (`consulta_id`) REFERENCES `consultas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
