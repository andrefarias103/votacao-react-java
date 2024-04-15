/*
  Warnings:

  - A unique constraint covering the columns `[sessaoId]` on the table `Pauta` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Pauta" ADD COLUMN     "sessaoId" INTEGER;

-- CreateTable
CREATE TABLE "Sessao" (
    "id" SERIAL NOT NULL,
    "pautaId" INTEGER NOT NULL,
    "dataHoraInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataHoraFim" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sessao_pautaId_key" ON "Sessao"("pautaId");

-- CreateIndex
CREATE UNIQUE INDEX "Pauta_sessaoId_key" ON "Pauta"("sessaoId");

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_pautaId_fkey" FOREIGN KEY ("pautaId") REFERENCES "Pauta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
