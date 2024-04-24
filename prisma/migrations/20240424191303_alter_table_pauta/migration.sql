/*
  Warnings:

  - Made the column `usuarioId` on table `Pauta` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Pauta" DROP CONSTRAINT "Pauta_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Pauta" ALTER COLUMN "usuarioId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Pauta" ADD CONSTRAINT "Pauta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
