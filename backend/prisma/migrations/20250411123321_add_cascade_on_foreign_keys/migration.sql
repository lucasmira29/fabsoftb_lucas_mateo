-- DropForeignKey
ALTER TABLE `consultas` DROP FOREIGN KEY `consultas_medico_id_fkey`;

-- DropForeignKey
ALTER TABLE `consultas` DROP FOREIGN KEY `consultas_paciente_id_fkey`;

-- DropForeignKey
ALTER TABLE `horarios_medicos` DROP FOREIGN KEY `horarios_medicos_medico_id_fkey`;

-- DropForeignKey
ALTER TABLE `medicos` DROP FOREIGN KEY `medicos_id_fkey`;

-- DropForeignKey
ALTER TABLE `pacientes` DROP FOREIGN KEY `pacientes_id_fkey`;

-- DropForeignKey
ALTER TABLE `recepcionistas` DROP FOREIGN KEY `recepcionistas_id_fkey`;

-- DropForeignKey
ALTER TABLE `registros_medicos` DROP FOREIGN KEY `registros_medicos_consulta_id_fkey`;

-- DropForeignKey
ALTER TABLE `registros_medicos` DROP FOREIGN KEY `registros_medicos_medico_id_fkey`;

-- DropForeignKey
ALTER TABLE `registros_medicos` DROP FOREIGN KEY `registros_medicos_paciente_id_fkey`;

-- DropIndex
DROP INDEX `consultas_medico_id_fkey` ON `consultas`;

-- DropIndex
DROP INDEX `consultas_paciente_id_fkey` ON `consultas`;

-- DropIndex
DROP INDEX `horarios_medicos_medico_id_fkey` ON `horarios_medicos`;

-- DropIndex
DROP INDEX `registros_medicos_consulta_id_fkey` ON `registros_medicos`;

-- DropIndex
DROP INDEX `registros_medicos_medico_id_fkey` ON `registros_medicos`;

-- DropIndex
DROP INDEX `registros_medicos_paciente_id_fkey` ON `registros_medicos`;

-- AddForeignKey
ALTER TABLE `medicos` ADD CONSTRAINT `medicos_id_fkey` FOREIGN KEY (`id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pacientes` ADD CONSTRAINT `pacientes_id_fkey` FOREIGN KEY (`id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recepcionistas` ADD CONSTRAINT `recepcionistas_id_fkey` FOREIGN KEY (`id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consultas` ADD CONSTRAINT `consultas_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consultas` ADD CONSTRAINT `consultas_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `medicos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registros_medicos` ADD CONSTRAINT `registros_medicos_consulta_id_fkey` FOREIGN KEY (`consulta_id`) REFERENCES `consultas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registros_medicos` ADD CONSTRAINT `registros_medicos_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `medicos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registros_medicos` ADD CONSTRAINT `registros_medicos_paciente_id_fkey` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `horarios_medicos` ADD CONSTRAINT `horarios_medicos_medico_id_fkey` FOREIGN KEY (`medico_id`) REFERENCES `medicos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
