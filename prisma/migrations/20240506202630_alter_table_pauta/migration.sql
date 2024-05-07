/*
  Warnings:

  - You are about to drop the column `pautaId` on the `Sessao` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_pautaId_fkey";

-- AlterTable
ALTER TABLE "Pauta" ADD COLUMN     "sessaoId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Sessao" DROP COLUMN "pautaId";

-- AddForeignKey
ALTER TABLE "Pauta" ADD CONSTRAINT "Pauta_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
