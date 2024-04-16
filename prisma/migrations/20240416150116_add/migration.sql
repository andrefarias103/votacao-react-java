/*
  Warnings:

  - Added the required column `votacaoId` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "votacaoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Votacao" (
    "id" SERIAL NOT NULL,
    "opcaoVotada" TEXT NOT NULL DEFAULT 'Não',
    "dataHoraVoto" TEXT NOT NULL,
    "pautaId" INTEGER NOT NULL,

    CONSTRAINT "Votacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_votacaoId_fkey" FOREIGN KEY ("votacaoId") REFERENCES "Votacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votacao" ADD CONSTRAINT "Votacao_pautaId_fkey" FOREIGN KEY ("pautaId") REFERENCES "Pauta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
