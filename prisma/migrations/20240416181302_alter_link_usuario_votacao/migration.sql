/*
  Warnings:

  - You are about to drop the column `votacaoId` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Votacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_votacaoId_fkey";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "votacaoId";

-- AlterTable
ALTER TABLE "Votacao" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Votacao" ADD CONSTRAINT "Votacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
