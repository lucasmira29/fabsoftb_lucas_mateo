/*
  Warnings:

  - You are about to drop the column `crm` on the `medicos` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `medicos_crm_key` ON `medicos`;

-- AlterTable
ALTER TABLE `medicos` DROP COLUMN `crm`;
