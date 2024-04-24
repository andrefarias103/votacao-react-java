/*
  Warnings:

  - Added the required column `usuarioId` to the `Pauta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pauta" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sessao" ALTER COLUMN "status" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pauta" ADD CONSTRAINT "Pauta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
