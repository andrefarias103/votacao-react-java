/*
  Warnings:

  - You are about to drop the column `sessaoId` on the `Pauta` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Pauta_sessaoId_key";

-- DropIndex
DROP INDEX "Sessao_pautaId_key";

-- AlterTable
ALTER TABLE "Pauta" DROP COLUMN "sessaoId";
